# Conversation: Built Signal & Noise Framework v0.1.0

**Date**: 2026-02-12  
**Time**: 15:00  
**Participant**: Dustin Braun  
**AI Assistant**: GitHub Copilot  
**Project**: signal-and-noise-framework  
**Status**: complete

---

## Context

**What were you working on?**
- Had just finished organizing multi-project workspace
- Realized need for better conversation/context tracking with AI assistants
- Every chat reveals paths and decisions, but that knowledge disappears

**Why this conversation?**
- Vision emerged: conversation-driven knowledge graph system
- Wanted to capture decision context across projects
- Needed something simple that scales from 1 user to teams

---

## Summary

**Key Points Discussed:**
1. Core vision: Every conversation becomes a knowledge node
2. Capture paths revealed, decisions made, and deferred options
3. Two user modes: hesitant (maximum control) vs comfortable (guided)
4. Start with markdown-only, `.signal/` directory per project
5. Git-friendly, auditable, simple to start

**Key Insights:**
- Don't need backend initially - files are enough
- Template system makes capture fast and consistent
- Path states (taken/deferred/explored) are powerful primitives
- Dogfooding from day 1 (use it to build itself)

---

## Paths Revealed

### Path 1: Markdown-Based System with CLI
- **Description**: Pure markdown files in `.signal/` directory, bash CLI for navigation
- **Status**: `taken`
- **Pros**: 
  - Simple to understand and use
  - Git-friendly
  - No dependencies
  - Works anywhere bash runs
  - Clear upgrade path
- **Cons**:
  - Limited search/visualization initially
  - Manual process
- **Effort**: Low (day 1 MVP)
- **Risk**: Low

### Path 2: Web App with Database
- **Description**: Full web application with database backend and UI
- **Status**: `deferred-no-time`
- **Pros**: 
  - Rich features from start
  - Beautiful UI
  - Real-time collaboration
- **Cons**:
  - Much more complex
  - Requires hosting
  - Overkill for MVP
  - Longer time to value
- **Effort**: High (weeks)
- **Risk**: Medium

### Path 3: VS Code Extension Only
- **Description**: Build as VS Code extension with local storage
- **Status**: `explored`
- **Pros**: 
  - Deep IDE integration
  - Native UI
- **Cons**:
  - Locks into VS Code
  - Harder to inspect files
  - Not git-friendly
  - Limits portability
- **Effort**: Medium
- **Risk**: Medium

---

## Decision Made

**Chosen Path**: Markdown + CLI (Path 1)

**Reasoning**:
- Get to working system fastest
- Users can read/edit files directly (maximum control)
- Git-friendly fits developer workflows
- Clear foundation for future features
- Proven pattern (like `.git/` directory)
- Can always add web UI or extensions later

**Next Actions**:
- [x] Create project structure
- [x] Design conversation node template
- [x] Build CLI with init, capture, status, list commands
- [x] Create example project
- [x] Write getting started docs
- [x] Initialize git repo
- [x] Dogfood on itself

---

## Deferred Paths

### Web App - `deferred-no-time`
**Why not now?**
- MVP doesn't need it
- Want to validate markdown approach first
- Can build once we know what features matter

**When to revisit?**
- After 10+ users adopt markdown version
- When pattern recognition becomes critical
- If team collaboration becomes priority

### VS Code Extension - `explored`
**Why not pursued?**
- Too limiting as sole implementation
- Good as *addition* to markdown system, not replacement
- Could build later for convenience

---

## Links & References

**Related Context**:
- Workspace organization system created earlier today
- Personal experience with lost context in AI chats
- Inspired by how `.git/` works

**External References**:
- Decision trees / knowledge graphs concepts
- Context management in software development
- [Evergreen notes](https://notes.andymatuschak.org/Evergreen_notes)

**Files Created**:
- `README.md` - Vision and overview
- `bin/signal` - CLI tool
- `templates/conversation.md` - Conversation node template
- `templates/path.md` - Path tracking template
- `docs/getting-started.md` - Onboarding guide
- `docs/quick-reference.md` - Command reference
- `examples/sample-project/` - Working example
- `CONTRIBUTING.md` - Contribution guide
- `LICENSE` - MIT license
- `package.json` - Project metadata

---

## Follow-Up Questions

1. How to handle pattern recognition across conversations?
2. Should we build aggregation views for multi-project insights?
3. What's the right balance of structure vs flexibility in templates?
4. How do teams want to share signal data (git, export, sync)?

---

## Tags

`#framework` `#mvp` `#conversation-tracking` `#knowledge-graph` `#cli` `#markdown`

---

## Notes

This felt right. Started with vision, clarified with questions, then built immediately. The framework is already useful - using it to document its own  creation.

The "hesitant vs comfortable user" framing is powerful - accommodates different working styles.

Dogfooding from minute 1 is perfect validation. If *we* won't use it, why would anyone else?

---

## Retrospective (Optional - fill in later)

**Did the decision work out?**
- (TBD - fill in after a week of use)

**What would you do differently?**
- (TBD)

**Patterns noticed?**
- (TBD)

---

*Template Version: 1.0*
