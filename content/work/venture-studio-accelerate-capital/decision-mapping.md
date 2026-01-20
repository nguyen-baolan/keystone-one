---
title: "Decision mapping process"
meta_title: "Decision mapping process"
description: "How we mapped and optimized decision frameworks for investment workflows."

aliases:
  # Preserve the previously-published deep-dive URL
  - /work/case-decision-mapping/

# Used by /work/ card grid (if you want this to show up in work listing)
parent_case: "venture-studio-accelerate-capital"
challenge: "Complex investment decisions needed clear frameworks and systematic approaches."
solution: "Structured decision mapping methodology to optimize investment workflows."

# Optional media
image: "/images/decision-map-1.jpg"
card_image: "/images/decision-map-1.jpg"

# Optional rich sections (homepage-style alternating image/text blocks)
sections:
  - title: "Decision Framework Analysis"
    image: "/images/service-4.png"
    content: "We analyzed existing decision patterns to identify optimization opportunities."

  - title: "Process Mapping"
    image: "/images/service-5.png"
    content: "Mapped current workflows and designed improved decision structures."

  - title: "Implementation"
    image: "/images/service-6.png"
    content: "Implemented systematic approaches that improved decision quality and speed."

draft: false

---
This deep dive shows how we helped a venture studio bring structure to investment diligence*before* any tools, models, or automation.

The goal wasnt to add more process. It was to make decisions:

- **Repeatable** (the same question gets answered the same way)
- **Auditable** (why a decision was made is clear weeks later)
- **Time-boxed** (progress without endless rework)
- **Aligned** (executives and operators share the same definition of good enough)

If you want the full case context, see the parent case study: **[Enabling a Venture Studio to Accelerate Capital Allocations](/work/venture-studio-accelerate-capital/)**.

---

## What we mapped (and why)

In high-velocity venture environments, the failure mode is rarely bad analysis. Its **unclear decision rights, inconsistent evidence standards, and shifting goals** mid-stream.

Decision mapping gave the client a shared operating system for diligence:

- A single end-to-end view of the investment process
- Clear **gates** (what gets decided, by whom, using what evidence)
- Explicit **loops** for revision vs. stop decisions
- Cross-cutting controls (assumptions, evidence, risk, and decision logs)

This is the work that makes later implementation possiblebecause you cannot automate ambiguity.

---

## How we ran the mapping work (methodical, not theoretical)

We ran a structured sequence with the client team:

1. **Decision inventory**: what decisions recur, what triggers them, and what good looks like.
2. **Artifact review**: memos, spreadsheets, IC notes, email threadswhat actually drives a decision in practice.
3. **Stakeholder walkthroughs**: step-by-step replay of recent deals to surface hidden steps and informal criteria.
4. **Gate definition**: convert opinions into **explicit criteria** (minimum evidence, owner, and outputs).
5. **Exception handling**: identify where reality breaks the happy path and define how to respond.
6. **Sign-off and adoption**: align leadership on the map, then translate it into templates and routines.

### Difficulties we had to overcome (and how we handled them)

- **Different meanings of fit.** Teams used the same word to mean different things (strategic fit, founder fit, timeline fit). We introduced a shared vocabulary and broke fit into explicit gates.
- **Inconsistent evidence quality.** Some deals had strong data; others relied on narrative momentum. We defined a minimum evidence pack and an assumptions register to separate facts from beliefs.
- **Decision rights drift.** In fast cycles, decisions were sometimes made by whoever was in the room. We clarified owners per gate and created a decision log so choices had continuity.
- **Time pressure vs. diligence depth.** We designed revision loops and stop rules to prevent sunk-cost escalation while keeping velocity.

---

## Phase 1  Market and problem framing

Phase 1 ensures the team is answering the *right* investment questionbefore diligence expands.

```mermaid
flowchart TD
 A["Trigger: new opportunity for DD"] --> B["Intake and qualification"]
 B --> C{"Fit and priority gate"}
 C -- "No or defer" --> C1["Backlog or parked"]
 C -- "Yes" --> D["Frame the investment question"]


 subgraph P1["Phase 1 - Market and problem framing"]
   direction LR
   D --> D1["Thesis hypothesis: why now / why us / why this"]
   D1 --> D2["ICP and personas: roles / pains / willingness to pay"]
   D2 --> D3["Competitors and alternatives market scan"]
   D3 --> D4["Market sizing (ranges): boundaries / sensitivities"]
   D4 --> D5["Evidence pack: sources log / assumptions register"]
 end


 D5 --> E{"Thesis gate"}
 E -- "Revise" --> D1
 E -- "Proceed" --> F["Venture team setup and workplan"]
```

**What this phase changed for leadership:** fewer interesting ideas entering diligence, and more clarity on what needs to be true for a deal to earn time.

---

## Phase 2  Commercial diligence

Phase 2 tests whether the opportunity can become a real businesswithout overbuilding a narrative.

```mermaid
flowchart TD

 D5["Evidence pack: sources log / assumptions register"] --> E{"Thesis gate"}
 E -- "Revise" --> D1["Thesis hypothesis: why now / why us / why this"]
 E -- "Proceed" --> F["Venture team setup and workplan"]


 subgraph P2["Phase 2 - Commercial diligence"]
   direction LR
   F --> F1["Stakeholder outreach: stakeholder calls"]
   F1 --> F2["Problem-solution validation: use cases / switching costs / value drivers"]
   F2 --> F3["Business model hypotheses: pricing logic / packaging / channels"]
   F3 --> F4["GTM stress test: pipeline math / sales cycle / CAC drivers"]
   F4 --> F5["Commercial headwinds / tailwinds register: mitigations / leading indicators"]
 end


 F5 --> G{"Commercial gate"}
 G -- "Stop" --> G1["Stop or learnings captured"]
 G -- "Iterate" --> F2
 G -- "Proceed" --> H["Technical and operational diligence"]
```

**Where we were strict:** the iterate loop had to result in *new evidence*, not stronger opinions. This prevented the team from re-litigating the same debate.

---

## Phase 3  Technical and operational diligence

This phase turns a promising commercial case into an executable plan, without drifting into premature architecture.

```mermaid
flowchart TD

 G{"Commercial gate"}
 G -- "Stop" --> G1["Stop or learnings captured"]
 G -- "Iterate" --> F2["Problem-solution validation: use cases / switching costs / value drivers"]
 G -- "Proceed" --> H["Technical and operational diligence"]


 subgraph P3["Phase 3 - Technical and operational diligence"]
   direction LR
   H --> H1["Solution review: selling prop / pitch to validate"]
   H1 --> H2["GTM readiness: profiles to hire / GTM motions"]
   H2 --> H3["Delivery feasibility: roadmap / resourcing / dependencies"]
   H3 --> H4["Prototype: success criteria / MVP milestones"]
   H4 --> H5["Ops and scalability: hypothesis to validate / progress monitoring"]
 end


 H5 --> I{"Feasibility gate"}
 I -- "Revise scope" --> H3
 I -- "Proceed" --> J["Financial model and value creation plan"]
```

**Exception case we handled explicitly:** when feasibility risk was high but strategic upside was real, we created a scoped learn-fast path (revise scope) instead of forcing an approve/reject decision too early.

---

## Phase 4  Investment case and structuring (with controls that persist post-investment)

Phase 4 is where leadership needs confidence: the case is coherent, the risks are visible, and the execution path is owned.

```mermaid
flowchart TD

 H5["Ops and scalability: hypothesis to validate / progress monitoring"] --> I{"Feasibility gate"}
 I -- "Revise scope" --> H3["Delivery feasibility: roadmap / resourcing / dependencies"]
 I -- "Proceed" --> J["Financial model and value creation plan"]


 subgraph P4["Phase 4 - Investment case and structuring"]
   direction LR
   J --> J1["Unit economics model: scenarios / sensitivities"]
   J1 --> J2["Value creation plan: day 100 / month 12 / month 24"]
   J2 --> J3["Governance and cadence: KPIs / decision rights"]
   J3 --> J4["MVP kill switches: protections / levers"]
   J4 --> J5["IC memo: narrative / top risks / mitigations / kill criteria"]
 end


 J5 --> K{"Approval gate"}
 K -- "Reject" --> K1["Reject and rationale archived"]
 K -- "Defer" --> C1["Backlog or parked"]
 K -- "Approve" --> L["Execute: close / onboard / activate plan"]


 subgraph P5["Phase 5 - Post-investment execution"]
   direction LR
   L --> L1["Follow up: results vs KPI"]
   L1 --> L2["Value creation delivery: initiatives / owners / timelines"]
   L2 --> L3["Pivot scale or exit gate"]
   L3 -- "Pivot" --> L2
   L3 -- "Scale" --> L2
   L3 -- "Exit readiness" --> M["Exit prep and outcomes narrative"]
 end


 subgraph X["Cross-cutting controls"]
   direction TB
   X1["Evidence log and citations"]
   X2["Assumptions register"]
   X3["Decision log and audit trail"]
   X4["Stakeholder comms tracker"]
   X5["Risk register and mitigations"]
 end


 D5["Evidence pack: sources log / assumptions register"] -.-> X1
 D1["Thesis hypothesis: why now / why us / why this"] -.-> X2
 F1["Stakeholder outreach: stakeholder calls"] -.-> X4
 F5["Commercial headwinds / tailwinds register: mitigations / leading indicators"] -.-> X5
 J5 -.-> X3
 L3 -.-> X3


 M --> N["Lessons learned to playbook updates"]
 N -.-> B["Intake and qualification"]
```

**Why the controls matter:** the client didnt just need a better decision in the momentthey needed a way to explain decisions internally, learn from them, and improve the system over time.

---

## What leadership got out of this

- **Clarity:** what the process is, where it loops, and what done means at each gate
- **Confidence:** decisions are grounded in an explicit evidence standard and captured rationale
- **Speed without chaos:** time-boxed phases, revision loops, and clear stop criteria
- **A foundation for execution:** the map becomes the reference for templates, routines, and any future tooling

If youd like to see how this mapping work supported the broader engagement, return to the parent case: **[Enabling a Venture Studio to Accelerate Capital Allocations](/work/venture-studio-accelerate-capital/)**.

---

### Note on scope

This page intentionally focuses on **process and decision design**. We avoided detailed technical architecture until the decision criteria and evidence standards were stable.