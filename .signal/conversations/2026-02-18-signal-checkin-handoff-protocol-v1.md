# Signal Check-In -> Handoff Protocol v1 (Decision Capture)

**Date**: 2026-02-18  
**Time**:  
**Participant**: Dustin Braun  
**AI Assistant**: GitHub Copilot  
**Project**: signal-and-noise-framework  
**Status**: locked

---

## Context

**What was being tested?**
- Signal Check-In -> Handoff protocol, live design test
- Audience includes internal use and Alex (external collaborator)
- Channel is Signal CLI with plain text; Markdown + YAML allowed

**What was the objective?**
- Reduce cognitive load via compression-first handoffs
- Establish a minimal, stable protocol without theatrics

---

## Decision

**Decision**: Lock v1 protocol

**Key parameters**:
- Audience: internal + Alex
- Channel: Signal CLI, plain text; Markdown + YAML allowed
- Metric: 7-day binary cognitive load result (Reduced / Neutral / Increased)
- Agent intro: skipped
- Structure: minimal, no theatrics
- Handoff constraints:
  - Max 3 actions
  - Always 1 priority
  - Guardrail required
- Intent: compression over expansion

---

## Why It Worked

- User reported the protocol was clarifying
- Background noise reduced during the live simulation
- Interaction did not feel bureaucratic

---

## Guardrails

- Keep structure minimal
- Enforce maximum of 3 actions per handoff
- Require exactly 1 priority per handoff
- Require at least 1 guardrail per handoff
- Avoid agent introductions and theatrics
- Maintain compression-first responses

---

## 7-Day Proof Loop Definition

**Metric**: Cognitive load outcome (Reduced / Neutral / Increased)

**Procedure**:
- Run daily check-in + handoff for 7 days
- At end of each day, record the binary outcome
- Aggregate results at day 7

**Success criteria**:
- Majority of days marked as Reduced
- If not met, revise protocol scope or constraints
