const drawings = {
  hero(ctx, width, height) {
    ctx.strokeStyle = "#779e9028";
    ctx.lineWidth = 1;
    for (let row = 0; row < 8; row += 1) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 3) {
        const t = x / width;
        const amplitude = (Math.sin(t * Math.PI) ** 2) * 10;
        const y = height * .69 + row * 15 + amplitude * Math.sin(x * .035 + row * .32)
          + amplitude * .42 * Math.sin(x * .105);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  },
  eeg(ctx, width, height) {
    for (let row = 0; row < 4; row += 1) {
      ctx.strokeStyle = ["#dcf3d2", "#93c7b4", "#75b9a9", "#508c85"][row];
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const t = x / width;
        const burst = Math.exp(-((t - .59) ** 2) / .012);
        const noise = Math.sin(x * .17 + row) * 1.8 + Math.sin(x * .83 + row * 1.7) * .6;
        const y = (row + 1) * height / 5 + noise + burst * Math.sin(x * .31 + row * .53) * 11;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  },
  robot(ctx, width, height) {
    const scale = Math.min(width / 270, height / 105);
    ctx.translate(width / 2, height / 2);
    ctx.scale(scale, scale);
    ctx.strokeStyle = "#427168";
    ctx.lineWidth = 1;
    for (let cx = -110; cx <= 110; cx += 22) {
      for (let cy = -33; cy <= 33; cy += 22) {
        ctx.fillStyle = "#729e8aaa";
        ctx.fillRect(cx, cy, 1.8, 1.8);
      }
    }
    const points = [[-79, 33], [-58, 15], [-27, -21], [13, 10], [47, -19], [73, -9]];
    ctx.strokeStyle = "#386b6099";
    ctx.setLineDash([4, 5]);
    ctx.beginPath();
    ctx.ellipse(0, 0, 105, 40, -.14, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    points.forEach(([x, y], index) => index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.stroke();
    for (const [x, y] of points.slice(1, -1)) {
      ctx.fillStyle = "#e2ebd8";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  onset(ctx, width, height) {
    const left = width * .1, top = height * .17;
    const gridWidth = width * .8, rowHeight = height * .13;
    ctx.fillStyle = "#bad2b3";
    ctx.fillRect(left + gridWidth * .48, top, gridWidth * .22, rowHeight * 5);
    ctx.strokeStyle = "#a0b2a0";
    for (let i = 0; i <= 12; i += 1) {
      const x = left + gridWidth * i / 12;
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, top + rowHeight * 5);
      ctx.stroke();
    }
    ctx.strokeStyle = "#345d53";
    for (let row = 0; row < 5; row += 1) {
      ctx.beginPath();
      for (let x = 0; x <= gridWidth; x += 2) {
        const burst = Math.exp(-((x / gridWidth - .58) ** 2) / .008);
        const y = top + (row + .55) * rowHeight
          + Math.sin(x * .12 + row * 2) * 2 + burst * Math.sin(x * .62 + row) * 4;
        if (x === 0) ctx.moveTo(left + x, y);
        else ctx.lineTo(left + x, y);
      }
      ctx.stroke();
    }
  },
};

for (const canvas of document.querySelectorAll("canvas[data-illustration]")) {
  const context = canvas.getContext("2d");
  if (!context) continue;
  new ResizeObserver(() => {
    const { width, height } = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawings[canvas.dataset.illustration](context, width, height);
  }).observe(canvas);
}
