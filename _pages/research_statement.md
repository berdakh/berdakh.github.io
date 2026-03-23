---
title: "Research Vision"
permalink: /research_statement/
author_profile: true
layout: single
---

> How can we learn invariant and generalizable representations that remain stable
> across domains, subjects, sensors, and time?

Neural signals (EEG and intracranial EEG) serve as a particularly demanding testbed
for this problem — if models can generalize under the extreme heterogeneity of brain
data, they can generalize in medical, industrial, and cyber-physical systems more
broadly. This work sits at the intersection of representation learning, robust and
generalizable AI, signal processing and systems theory, and human-machine systems.

---

## Core Research Thrusts

### 1. Invariant Representation Learning Under Heterogeneity

Models trained on one population or environment often fail when deployed in another
because learned representations become entangled with nuisance factors — subject
differences, sensor variability, acquisition protocols — rather than task-relevant
structure. The approach embeds invariance-enforcing objectives directly into
representation learning, encouraging extraction of stable latent structure while
suppressing domain-specific variation, and promoting cross-subject and cross-site
generalization. These methods are architecture-agnostic and have been validated across
CNNs, recurrent models, and transformers.

A core finding is that robust generalization requires explicitly modeling heterogeneity
— naïve scaling often amplifies artifacts rather than improving invariance. These ideas
extend naturally to wearable sensing, medical time-series, multimodal systems, and
industrial monitoring.

---

### 2. Scalable Deep Learning for Clinical Neural Data

Clinical iEEG datasets present extreme variability: non-standard electrode layouts,
limited labeled samples, site-specific acquisition differences, and strict data-sharing
constraints. This line of work develops frameworks that carefully distinguish
within-site performance from true cross-site generalization, and artifact-driven
improvements from biologically meaningful learning.

The emphasis is on heterogeneity-aware pretraining, principled regularization, and
evaluation protocols that reflect real deployment constraints rather than idealized
benchmarks. The goal is AI systems that are clinically meaningful, not merely
statistically impressive.

---

### 3. Robust Machine Learning for Closed-Loop Systems

Human-in-the-loop systems such as brain-computer interfaces create dynamic feedback
loops between model predictions and user adaptation. Offline accuracy alone does not
guarantee stability, safety, or reliable long-term interaction. This work integrates
representation learning with control-theoretic concepts to analyze stability under
distribution shift, robustness to artifacts, and error amplification in closed-loop
settings — bridging machine learning, control systems, and human factors engineering
for safety-critical real-time applications.

---

## Future Directions

**Theory-grounded invariant representation learning** — formalizing generalization
under heterogeneity and non-stationarity, moving beyond empirical validation toward
principled guarantees.

**Foundation-style models for temporal biomedical data** — large-scale pretraining
strategies tailored to the constraints of clinical and sensor data, where labels are
scarce and acquisition protocols vary.

**Robust evaluation paradigms** — benchmarks that measure real-world deployment
performance under domain shift, replacing leaderboard metrics that reward
in-distribution fitting.

**Safe and responsible neurotechnology** — ethical, interpretable, and clinically
validated AI systems for deployment in high-stakes environments.

The long-term goal is a research program centered on robust, deployable AI for
heterogeneous real-world environments — grounded in neural systems, extending to
broader cyber-physical and industrial domains.