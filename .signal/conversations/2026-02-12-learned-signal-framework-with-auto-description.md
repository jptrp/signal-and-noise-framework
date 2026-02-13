# Learned Signal & Noise Framework with auto-description feature

**Date**: 2026-02-12  
**Time**: 19:30  
**Participant**: Dustin Braun  
**AI Assistant**: GitHub Copilot  
**Project**: signal-and-noise-framework  
**Status**: resolved

---

## Context

**What were you working on?**
- Learning how to use the Signal & Noise Framework
- Testing the new auto-description feature (v0.2.0)
- Understanding how to capture AI conversations for future reference

**Why this conversation?**
- Need to preserve decision context across multiple AI sessions
- Want to remember why choices were made weeks/months later
- Client work requires clear decision history

---

## Summary

**Key Points Discussed:**
1. How Signal captures conversation → paths → decisions
2. Auto-description analyzes git commits and changed files for smart suggestions
3. Signal works with or without code changes (planning/learning sessions count too)
4. VS Code integration via `EDITOR="code --wait"`

**Key Insights:**
- Context is currency in AI-assisted development
- Decisions matter more than just code - capture the "why"
- Framework dogfoods itself (uses `.signal/` to track its own development)
- Template-based approach keeps capture consistent

---

## Paths Revealed

### Path 1: Manual description always
- **Description**: Require typing description every time
- **Status**: `explored`
- **Pros**: Full control, explicit intent
- **Cons**: Friction, easy to skip, slower workflow
- **Effort**: Low
- **Risk**: Low

### Path 2: Auto-description from git ✓
- **Description**: Analyze recent commits and file changes, offer smart suggestions
- **Status**: `taken`
- **Pros**: Fast, context-aware, reduces friction, fallback to manual
- **Cons**: Needs git repo, suggestions might not be perfect
- **Effort**: Medium (bash scripting)
- **Risk**: Low

### Path 3: AI-powered description generation
- **Description**: Use LLM to analyze diff and generate description
- **Status**: `deferred-no-time`
- **Pros**: Most accurate, understands semantic changes
- **Cons**: Requires API calls, slower, costs money, overkill for v0.2
- **Effort**: High
- **Risk**: Medium

---

## Decision Made

**Chosen Path**: Auto-description from git (Path 2)

**Reasoning**:
- Analyzes last 3 hours of git commits for recent work
- Examines changed files to infer activity
- Presents 3 smart options + custom fallback
- No external dependencies, works offline
- Fast and frictionless for daily use

**Implementation**:
- Added `generate_description_suggestions()` function in signal CLI
- Parses `git log --since="3 hours ago"` for commit messages
- Checks `git status --short` for file changes
- Interactive selection with 1-4 options

**Next Actions**:
- [x] Updated CLI to v0.2.0
- [x] Updated package.json version
- [x] Updated README with auto-description example
- [x] Committed changes to framework repo
- [x] Tested in signal-and-noise-api project
- [x] Configured VS Code as default editor

---

## Deferred Paths

**Path 3: AI-powered description** (deferred-no-time)
- Could revisit for v0.3+ if git-based isn't sufficient
- Would integrate with OpenAI/Anthropic API
- Cost/benefit analysis needed first

---

## Links & References

**Related Conversations**:
- [Extracted API from monorepo](../../../signal-and-noise-api/.signal/conversations/2026-02-12-extracted-api-from-monorepo.md)

**Files Modified**:
- `bin/signal` - Added auto-description function and interactive selection
- `README.md` - Documented new feature with examples
- `package.json` - Version bump 0.1.0 → 0.2.0

**Commits**:
- `b047bd5` - feat: add auto-description for signal capture

---

## Outcome

✅ **Success**: Signal & Noise Framework v0.2.0 working with auto-description  
✅ **Learned**: How to use signal commands (list, status, paths, capture, open)  
✅ **Configured**: VS Code as default editor for seamless workflow  
✅ **Ready**: Can now capture all future AI conversations with minimal friction

**Key Takeaway**: Framework now makes it easier to capture decisions by analyzing your work automatically. The lower the friction, the more likely you'll actually use it.

---

## Tags

`#learning` `#framework` `#v0.2.0` `#auto-description` `#context-tracking`
