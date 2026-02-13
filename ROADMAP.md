# Signal & Noise Framework Roadmap

## Vision
Make conversation tracking fully AI-assisted while maintaining transparency and user control.

---

## v0.1.0 ✅ (Released 2026-02-12)
- [x] Core CLI with init, capture, status, list, paths, open
- [x] Markdown-based conversation nodes
- [x] Manual template filling
- [x] Path tracking (active/deferred)
- [x] Git-friendly structure

---

## v0.2.0 ✅ (Released 2026-02-12)
- [x] Auto-description from git commits and file changes
- [x] Interactive selection (1-4 options)
- [x] Fallback to manual entry
- [x] VS Code editor integration

---

## v0.3.0 🎯 (Next - AI-Assisted Capture)

### Primary Feature: Full AI Generation
**Command**: `signal assist` or `signal capture --assist`

**What it does:**
When user says to their chat assistant:
> "Capture this conversation with Signal"

The assistant (GitHub Copilot, ChatGPT, Claude, etc.) generates a complete conversation node including:
- Context (what you were working on)
- Summary (key points and insights)
- Paths Revealed (3+ options discussed)
- Decision Made (which path was chosen and why)
- Deferred Paths (what was postponed)
- Outcome (results and next actions)

**Implementation approaches:**

### Option A: Assistant-Generated (Current Workaround)
```bash
# User asks in chat: "Capture this conversation with Signal"
# Assistant creates file directly, pre-filled
# User reviews and commits
```
**Pros**: Works now, no API needed, assistant has full context  
**Cons**: Manual request, not automated, assistant-dependent

### Option B: Chat History Export + LLM
```bash
signal assist
# → Exports recent chat from IDE
# → Calls OpenAI/Anthropic/local LLM
# → Generates conversation node
# → Opens in editor for review
```
**Pros**: Automated, works offline (local LLM), privacy control  
**Cons**: Requires API setup, costs $, IDE integration needed

### Option C: IDE Extension
```bash
# VS Code extension with "Capture Conversation" command
# → Extracts active Copilot chat
# → Calls Signal CLI with content
# → Generates node automatically
```
**Pros**: Seamless UX, one-click capture, native integration  
**Cons**: IDE-specific, extension maintenance, privacy concerns

**Recommended**: Start with **Option A** (document the pattern), build toward **Option B** (CLI tool), eventually **Option C** (extension)

---

## v0.4.0 🔮 (Future - Pattern Recognition)

### Smart Suggestions
- Identify recurring deferred paths across projects
- Detect common blockers
- Surface related conversations automatically
- Theme clustering (career, learning, architecture, etc.)

### Commands:
```bash
signal patterns              # Show recurring themes
signal suggest              # "You've deferred testing 12 times - schedule it?"
signal related <query>      # Find similar conversations
```

---

## v0.5.0 🔮 (Future - Multi-Project & Team)

### Cross-Project Intelligence
```bash
signal patterns --workspace ~/Career
signal paths --global --deferred
signal search "authentication" --all-projects
```

### Team Collaboration
- Shared `.signal/` directories in team repos
- Decision visibility across team members
- Conflict detection (overlapping decisions)
- Attribution (who made which decision)

---

## v0.6.0 🔮 (Future - Integrations)

### External Tool Connections
- **GitHub Issues**: Export deferred paths to issues
- **Linear/Jira**: Sync decisions with project management
- **Notion/Obsidian**: Export as knowledge base
- **Slack**: Share decision summaries with team

### API
```bash
signal export --format json   # Machine-readable format
signal import --from notion   # Import existing docs
```

---

## v1.0.0 🏆 (Stable Release)

**Criteria for 1.0:**
- [ ] AI-assisted capture works reliably (Option B or C)
- [ ] Pattern recognition identifies value
- [ ] Multi-project support tested at scale
- [ ] Documentation complete
- [ ] Test suite coverage >80%
- [ ] Used by 100+ developers
- [ ] Community feedback incorporated

---

## Community Feature Requests

**Vote or suggest at**: https://github.com/jptrp/signal-and-noise-framework/discussions

### Requested Features:
1. ⭐⭐⭐ AI-assisted full generation (v0.3.0)
2. Export to PDF/documentation site
3. Search across all conversations
4. Visual decision tree graph
5. Time tracking per conversation
6. Tag-based filtering
7. Archive old conversations
8. Template customization
9. Keyboard shortcuts in CLI
10. Mobile app for review (read-only)

---

## Principles

**As we build:**
- ✅ Transparency over magic
- ✅ User control over automation
- ✅ Git-friendly over database
- ✅ Markdown over proprietary formats
- ✅ Local-first over cloud-dependent
- ✅ Privacy-preserving by default

**We will NOT:**
- ❌ Require cloud services for core features
- ❌ Lock decisions in proprietary formats
- ❌ Upload conversations without explicit consent
- ❌ Make AI generation mandatory
- ❌ Sacrifice transparency for convenience

---

## Contributing

Want to help build these features? See [CONTRIBUTING.md](CONTRIBUTING.md)

**High-priority areas:**
- AI integration patterns (how assistants can generate nodes)
- IDE extensions (VS Code, JetBrains, etc.)
- Pattern recognition algorithms
- Cross-project indexing

---

**Last Updated**: 2026-02-12  
**Current Version**: 0.2.0  
**Next Milestone**: v0.3.0 (AI-Assisted Capture)
