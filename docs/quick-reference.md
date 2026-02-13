# Signal & Noise Framework: Quick Reference

Everything you need on one page.

---

## Commands

```bash
signal init                            # Initialize .signal/ in project
signal capture "description"           # Create conversation node
signal status                          # Show project status
signal list                            # List all conversations
signal paths                           # Show all paths
signal paths active                    # Show active paths only
signal paths deferred                  # Show deferred paths only
signal open <name>                     # Open conversation by name
signal help                            # Show help
```

---

## Path Status Values

| Status | Meaning | When to Use |
|--------|---------|-------------|
| `taken` | You pursued this path | After implementing |
| `deferred-need-info` | Need more information | Research required |
| `deferred-no-time` | Good idea, but not now | Backlog item |
| `deferred-blocked` | Waiting on something | External dependency |
| `explored` | Investigated but passed | Considered and rejected |
| `ignored` | Not relevant | Out of scope |

---

## When to Capture

✅ **DO capture**:
- Architecture decisions
- Technology evaluations
- Trade-off discussions
- Learning sessions
- Blocker analysis

❌ **DON'T capture**:
- Syntax questions
- Quick bug fixes
- Trivial choices
- Every chat

---

## Quick Capture Template

```markdown
# Conversation: [Brief Title]

## Context
- Working on: [feature/component]
- Problem: [what triggered discussion]

## Paths
1. **[Option 1]** - `taken` - [why chosen]
2. **[Option 2]** - `deferred-need-info` - [what's needed]
3. **[Option 3]** - `explored` - [why not pursued]

## Decision
Chose [Option 1] because [reason]

## Next Actions
- [ ] Step 1
- [ ] Step 2
```

---

## Directory Structure

```
your-project/
├── .signal/
│   ├── index.md                          # Overview
│   ├── conversations/                    # Your nodes
│   │   └── 2026-02-12-topic.md
│   ├── paths/                            # Path tracking
│   │   ├── active.md
│   │   └── deferred.md
│   └── patterns/                         # Future
└── [your project files]
```

---

## Workflow

1. Work on something
2. Chat with AI assistant
3. Make a decision
4. `signal capture "what you decided"`
5. Fill in template (2 min)
6. Continue working

---

## Tips

- **Capture while fresh** - Right after the conversation
- **Keep it brief** - 2-3 minutes is enough
- **Focus on "why"** - Rationale matters more than details
- **Link conversations** - Reference related discussions
- **Review weekly** - See patterns emerging

---

## File Naming

Convention: `YYYY-MM-DD-brief-description.md`

Examples:
- `2026-02-12-api-authentication.md`
- `2026-02-15-database-choice.md`
- `2026-02-20-caching-strategy.md`

---

## Integration

### Git
```bash
# Option 1: Track in repo (team knowledge)
# Nothing to do - .signal/ commits like any folder

# Option 2: Keep personal (.gitignore)
echo ".signal/" >> .gitignore
```

### Editor
```bash
# Set your preferred editor
export EDITOR=code          # VS Code
export EDITOR=nano          # Nano
export EDITOR=vim           # Vim
```

---

## Keyboard Shortcuts

Add to your shell config:

```bash
# ~/.zshrc or ~/.bashrc
alias sc="signal capture"
alias ss="signal status"  
alias sl="signal list"
alias sp="signal paths deferred"
```

---

## Common Questions

**Q: Must I fill every field?**  
A: No. Use what's helpful. Skip what's not.

**Q: How detailed should I be?**  
A: Enough to remember in 3 months. Usually 2-5 minutes.

**Q: Can I edit later?**  
A: Yes! They're just markdown files. Edit anytime.

**Q: What if I forget to capture?**  
A: No problem. Capture when you remember, or skip it.

**Q: Personal or shared?**  
A: Your choice. Some teams share, some keep personal.

---

## Getting Help

```bash
signal help                              # Built-in help
cat ~/.signal/templates/conversation.md  # See template
```

Docs: [https://github.com/yourusername/signal-and-noise-framework](https://github.com/yourusername/signal-and-noise-framework)

---

**That's it!** Start with `signal init` and build from there. 🎯
