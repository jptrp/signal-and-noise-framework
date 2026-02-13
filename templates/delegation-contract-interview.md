# Delegation Contract Interview (v0)

**Purpose**: Guided conversation to produce a minimal v0 Delegation Contract.
**Tone**: Governance conversation, not a configuration wizard.

---

## Phase 1 — Identity & Intent

**Goal**: Define purpose before authority.

Questions:
1. What is the name of this AI system?
2. What primary function does it serve?
3. Who owns this AI feature?
4. What user-facing risk exists if it behaves incorrectly? (Recorded as the contract's creation rationale.)

**Mapped fields**:
- agent_id
- authority.role
- human_ratification.return_to
- lineage.created_reason (partial)

---

## Phase 2 — Authority Definition

**Goal**: Clarify what it can and cannot decide.

Questions:
5. What decisions is this AI allowed to make autonomously?
6. What actions must it never perform?
7. Are there irreversible actions in this domain?

**Mapped fields**:
- authority.decision_rights
- authority.prohibited_actions
- intervention.triggers.irreversible_action

---

## Phase 3 — Scope Boundaries

**Goal**: Define domain containment.

Questions:
8. What domains is this AI allowed to operate within?
9. What domains are explicitly out of scope?
10. Are there data boundaries (platforms, event types, user segments)?

**Mapped fields**:
- scope.allowed_domains
- scope.disallowed_domains
- scope.data_boundaries (optional extension)

---

## Phase 4 — Intervention Rules

**Goal**: Define return-to-human conditions.

Questions:
11. What is the minimum acceptable confidence level?
12. After how many uncertain outputs should escalation occur?
13. What patterns would indicate drift?
14. Are there quantitative thresholds (rates, time windows)?

**Mapped fields**:
- intervention.confidence_floor
- intervention.triggers.*

---

## Phase 5 — Human Ratification

**Goal**: Explicit authority return.

Questions:
15. Which actions require explicit human approval?
16. Who regains control when escalation occurs?
17. Should escalation notify a team or a single owner? (Context only; not stored in v0 contract.)

**Mapped fields**:
- human_ratification.required_for
- human_ratification.return_to

---

## Phase 6 — Strategic Memory

**Goal**: Capture reasoning.

Questions:
18. Why are these boundaries necessary?
19. What incidents or risks influenced these thresholds?
20. Who approved this delegation?

**Mapped fields**:
- lineage.created_reason
- lineage.approved_by

---

## Mode Notes (v0)

This interview operates in three modes:

**Create Mode**
- Complete all phases.
- Generates a new delegation contract.
- Sets `lineage.created_reason` and `created_on`.

**Adjust Mode**
- Revisit only affected sections (authority, scope, intervention, or ratification).
- Appends a new lineage entry explaining the change.
- Does not reset unrelated contract fields.

**Post-Incident Mode**
- Triggered after an intervention event.
- Reopen only the sections implicated by the incident.
- Capture incident context in lineage.
- Preserve original contract history.

Contracts evolve. They are not rewritten.

---

## Output Summary

Use this interview to populate:
- contracts/<agent_id>.yaml

Keep the v0 contract minimal and enforceable:
- Answer the five questions
- Avoid telemetry, UI metadata, or versioning
