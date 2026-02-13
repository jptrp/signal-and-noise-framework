# Delegation Contracts

Delegation Contracts are hybrid human-readable and machine-enforceable agreements that define how authority is delegated to AI and when control must return to humans.

## The Five Questions (Contract Must Answer)
1. What is this AI allowed to do?
2. What is it not allowed to do?
3. When must it stop (intervene/escalate)?
4. Who regains control?
5. Why were these rules defined (lineage)?

## Required Sections (v0)
- agent_id
- authority
- scope
- intervention
- human_ratification
- lineage

## Interpretation Notes (v0)
- authority must be operational (decision_rights / prohibited_actions), not vague labels.
- scope defines domain boundaries used to detect scope violations.
- intervention defines explicit return-to-human conditions (confidence floors + trigger rules).
- human_ratification defines irreversible or high-risk actions requiring approval, and who the contract returns to.
- lineage is strategic memory: rationale + approvers. It is not compliance logging.

## Non-Goals (v0)
- No UI metadata
- No telemetry metrics schema
- No versioning or release management
- No tool integration specifics (handled by enforcement layer later)
