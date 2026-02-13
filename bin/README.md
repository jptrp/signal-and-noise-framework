# sn-contract (v0)

A conversational CLI that generates Delegation Contracts (YAML) for AgentOps-style human↔AI delegation.

## What it does
- Runs a guided interview (Create Mode) and writes a contract to `contracts/<agent_id>.yaml`
- Keeps YAML key ordering stable for clean diffs
- Treats lineage as append-only (never overwrites history)

## What it does NOT do (v0)
- No runtime enforcement or monitoring
- No network calls
- No schema expansion beyond the v0 contract shape

## Usage

Create a new contract:
```bash
sn-contract new
```

Output:
- Writes: `contracts/<agent_id>.yaml`

## Lineage

`lineage` is an array of entries. New entries are appended over time as contracts evolve.

## Roadmap
- `sn-contract adjust <agent_id>` (planned): reopen only selected sections and append a lineage entry
- `sn-contract post-incident <agent_id>` (planned): reopen only incident-implicated sections and append a lineage entry
