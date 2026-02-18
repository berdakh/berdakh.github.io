---
title: "Research Statement"
permalink: /research_statement/
author_profile: true
layout: single
---

## Research Vision

My research develops **robust machine learning methods for heterogeneous temporal and sequential data**, where classical assumptions of stationarity, independence, and uniform data distributions fail.

Modern AI systems are often trained under idealized conditions but deployed in environments characterized by:
- distribution shift,
- non-stationary dynamics,
- limited and imbalanced labels,
- domain-specific nuisance variation.

My central research question is:

> How can we learn invariant and generalizable representations that remain stable across domains, subjects, sensors, and time?

Neural signals (EEG and intracranial EEG) serve as a particularly demanding testbed for this question. If models can generalize under the extreme heterogeneity of brain data, they can generalize in medical, industrial, and cyber-physical systems more broadly.

My work sits at the intersection of:
- Representation Learning  
- Robust and Generalizable AI  
- Signal Processing and Systems Theory  
- Human–Machine Systems  

---

## Core Research Thrusts

### 1. Invariant Representation Learning Under Heterogeneity

**Problem.**  
Models trained on one population or environment often fail when deployed in another due to entangled nuisance factors (subject differences, sensor variability, acquisition protocols).

**Approach.**  
I develop invariance-enforcing objectives embedded directly into representation learning. Rather than correcting for domain shift post hoc, these methods:

- Encourage extraction of task-relevant latent structure  
- Suppress domain-specific nuisance variation  
- Promote cross-subject and cross-site generalization  

These methods are architecture-agnostic and have been validated across CNNs, recurrent models, and transformers.

**Intellectual Contribution.**  
My work demonstrates that robust generalization requires explicitly modeling heterogeneity, not simply scaling model size. Naïve scaling often amplifies artifacts rather than improving invariance.

**Broader Impact.**  
These ideas extend beyond neural signals to wearable sensing, medical time-series, multimodal systems, and industrial monitoring.

---

### 2. Scalable Deep Learning for Clinical Neural Data

Clinical iEEG datasets present extreme variability:
- non-standard electrode layouts  
- limited labeled samples  
- site-specific acquisition differences  
- strict data-sharing constraints  

I develop frameworks that distinguish:
- within-site performance from true cross-site generalization  
- artifact-driven improvements from biologically meaningful learning  

My work emphasizes:
- heterogeneity-aware pretraining  
- principled regularization  
- evaluation protocols that reflect real deployment constraints  

This research contributes to building AI systems that are clinically meaningful, not merely statistically impressive.

---

### 3. Robust Machine Learning for Closed-Loop Systems

Human-in-the-loop systems (e.g., brain-computer interfaces) create dynamic feedback loops between model predictions and user adaptation.

Offline accuracy alone does not guarantee:
- stability,
- safety,
- or reliable long-term interaction.

I integrate representation learning with control-theoretic concepts to analyze:

- stability under distribution shift  
- robustness to artifacts  
- error amplification in closed-loop settings  

This work bridges machine learning, control systems, and human factors engineering, advancing AI for safety-critical real-time systems.

---

## Future Research Directions

Over the next decade, I aim to advance:

1. **Theory-grounded invariant representation learning**  
   Formalizing generalization under heterogeneity and non-stationarity.

2. **Foundation-style models for temporal biomedical data**  
   Large-scale pretraining strategies tailored to clinical and sensor data.

3. **Robust evaluation paradigms**  
   Benchmarks that measure real-world deployment performance under domain shift.

4. **Safe and Responsible Neurotechnology**  
   Ethical, interpretable, and clinically validated AI systems.

My long-term goal is to establish a research program centered on robust, deployable AI systems for heterogeneous real-world environments — beginning with neural systems, and extending to broader cyber-physical domains.
