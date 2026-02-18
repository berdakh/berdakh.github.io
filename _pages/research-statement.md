# Research Statement

**Berdakh Abibullaev, Ph.D.**

## Research Vision

My research develops machine learning methods for complex, heterogeneous temporal/sequential data where standard ML assumptions fail. I focus on **representation learning**, **robust AI**, and **signal processing** at the intersection of neural engineering, biomedical signals, and human-machine systems.

Core question: How can models discover invariant, generalizable representations amid high heterogeneity, limited labels, distribution shift, and non-stationary dynamics?

Neural signals (EEG/iEEG) serve as the ultimate testbed for robust AI; successes here generalize to medical imaging, sensor networks, autonomous systems, and industrial monitoring.

## Core Research Thrusts

### A. Invariant Representation Learning for Cross-Domain Generalization

**Challenge** — Models trained on one dataset/population often fail in new settings due to entangled nuisance variation (e.g., subject differences, sensors, protocols).

**Approach** — Develop invariance-enforcing objectives during representation learning to:
- Capture task-relevant features (motor intent, seizure patterns)
- Suppress domain-specific noise
- Enable reliable cross-subject/site generalization

**Contributions** — Architecture-agnostic methods (CNNs, transformers, RNNs); integrated objectives (not post-hoc); strong gains on multi-site datasets.

**Impact** — Applies to any heterogeneous temporal data (wearables, medical time-series, industrial sensors).

### B. Deep Learning for Clinical Neural Signals Under Real Constraints

**Challenge** — iEEG in epilepsy shows extreme variability (electrode layouts, small/imbalanced data, limited sharing).

**Approach** — Heterogeneity-aware pretraining; separate within- vs. across-site evaluation; principled scaling with inductive biases over raw capacity.

**Contributions** — Showed naïve scaling amplifies artifacts; regularization/sampling for clinical data; frameworks distinguishing true generalization from overfitting.

**Impact** — Informs large-scale AI for multi-site temporal medical data (cardiac, respiratory, biomarkers).

### C. Robust ML for Real-Time Closed-Loop Systems

**Challenge** — Human-in-the-loop BCIs create feedback loops that amplify errors/instability.

**Approach** — Extend invariant representations to system-level properties (stability, error recovery, safety under shift/artifacts); closed-loop evaluation + control theory integration.

**Contributions** — Robust reps improve stability and interaction; protocols reveal offline misleading results; bridged ML, control, and human factors.

**Impact** — Relevant to safety-critical real-time AI (autonomous vehicles, medical support, industrial systems).

## Summary of Impact

- 80+ publications (h-index 21, 1,500+ citations)
- $1.14M funding as PI/Co-PI
- 2 patents; open-source tools (github.com/berdakh)
- Mentored 20+ students with publications/outcomes

Future: Advance theory-grounded robust representation learning, scalable methods for heterogeneous data, validated closed-loop systems, and responsible neurotech innovation.