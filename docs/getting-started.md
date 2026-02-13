# Getting Started with Signal & Noise Framework

Welcome! Let's get you capturing conversation intelligence in 5 minutes.

---

## Step 1: Install (Choose One)

### Option A: Quick Test (Single Project)

```bash
# In your project directory
cd your-project
curl -O https://raw.githubusercontent.com/jptrp/signal-and-noise-framework/main/bin/signal
chmod +x signal
./signal init
```

### Option B: Global Install (Recommended)

```bash
# Clone the framework
cd ~/Career  # or wherever you keep code
git clone https://github.com/jptrp/signal-and-noise-framework.git
cd signal-and-noise-framework

# Add to PATH (choose your shell)
# For zsh:
echo 'export PATH="$PATH:'$(pwd)'/bin"' >> ~/.zshrc
source ~/.zshrc

# For bash:
echo 'export PATH="$PATH:'$(pwd)'/bin"' >> ~/.bashrc
source ~/.bashrc

# Verify
signal --version
```

---

## Step 2: Initialize Your Project

```bash
cd your-project
signal init
```

This creates a `.signal/` directory:
```
.signal/
├── index.md              # Project overview
├── conversations/        # Conversation nodes
├── paths/               # Decision tracking
│   ├── active.md
│   └── deferred.md
└── patterns/            # Discovered themes (future)
```

---

## Step 3: Have a Conversation with Your AI Assistant

Work on something. Chat with GitHub Copilot, ChatGPT, or your AI assistant of choice. Discuss options, explore solutions, make decisions.

---

## Step 4: Capture the Conversation

Right after your chat session:

```bash
signal capture "Discussed API authentication approaches"
```

This creates a conversation node and opens it in your editor. Fill it in:

1. **Context** - What you were working on
2. **Summary** - Key points and insights
3. **Paths Revealed** - What options came up
4. **Decision Made** - What you chose and why
5. **Deferred Paths** - What you put off (and why)

**Pro Tip**: Don't overthink it. Start simple. You can always add detail later.

---

## Step 5: Check Your Status

```bash
signal status
```

See your captured conversations at a glance.

---

## Step 6: Navigate Your Context

```bash
# List all conversations
signal list

# View deferred paths (things you put off)
signal paths deferred

# Open a specific conversation
signal open api-authentication
```

---

## Real-World Workflow

### Scenario: Building a New Feature

1. **Start Work** - Pull ticket, open code
2. **Chat with AI** - "How should I implement this?"
3. **Explore Options** - Discuss 2-3 approaches
4. **Make Decision** - Choose one, document reason
5. **Capture** - `signal capture "User profile caching strategy"`
6. **Fill Template** - 2 minutes to record context
7. **Code** - Implement with context preserved

**Later that week:**
- PM asks "Why did we cache in Redis?"
- You: `signal open caching` → see full reasoning
- No memory strain, no repeated explanations

---

## Example: Your First Node

```markdown
# Conversation: Chose Database for User Data

**Date**: 2026-02-12  
**Participant**: You  
**AI Assistant**: GitHub Copilot

## Context
Building user authentication system, need to store users and sessions.

## Paths Revealed

### Path 1: PostgreSQL
- **Status**: `taken`
- **Pros**: Robust, ACID compliance, team experience
- **Cons**: Heavier than needed for v1

### Path 2: MongoDB
- **Status**: `deferred-need-info`
- **Pros**: Flexible schema, fast for simple queries
- **Cons**: No SQL, team less experienced

## Decision Made
**Chosen**: PostgreSQL
**Why**: Team knows it, reliable, good for structured user data

## Deferred Paths
MongoDB - `deferred-need-info`: Research MongoDB performance characteristics before considering for v2
```

That's it! You've preserved the conversation context, the decision rationale, and paths for later.

---

## Tips for Success

### Keep It Simple
- Don't capture every trivial chat - focus on decisions
- 2-minute capture is fine, don't write a novel
- You can always add detail later

### When to Capture
Capture conversations that involve:
- **Decisions** - Choosing between options
- **Architecture** - System design discussions
- **Trade-offs** - Pros/cons of approaches
- **Learning** - New techniques or insights
- **Blockers** - Things that stopped you

### What to Skip
Don't capture:
- Syntax questions ("how do I...")
- Quick fixes
- Trivial decisions
- Tactical debugging

### Build the Habit
- Set a reminder after focused  work sessions
- Do it while context is fresh (right after chat)
- Make it part of your wrap-up routine

---

## Common Patterns

### Pattern 1: Evaluation Sessions
When comparing multiple tools/approaches:
- List each as a revealed path
- Status all as `explored` except chosen one
- Capture evaluation criteria in pros/cons
- Document why others weren't chosen

### Pattern 2: Blocked Decisions
When you can't decide yet:
- Capture all paths as `deferred-need-info`
- Document what info you need
- Set trigger for revisiting
- Come back when you have answers

### Pattern 3: Time-Boxed Deferrals
When something is valuable but not now:
- Status as `deferred-no-time`
- Estimate effort required
- Note when to revisit (after milestone X)
- Track if it keeps coming up (pattern!)

---

## Next Steps

1. ✅ Framework installed
2. ✅ Project initialized
3. ✅ First conversation captured

**Now**: 
- Capture 2-3 more conversations this week
- Review them Friday - see what patterns emerge
- Adjust template to fit your style
- Share with your team if helpful

**Coming Soon** (we're building in the open):
- Pattern recognition
- Multi-project views
- Team collaboration features
- Integration with project management tools

---

## Need Help?

- 📖 **Full Docs**: [docs/](../docs/)
- 💬 **Examples**: [examples/sample-project/](../examples/sample-project/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/jptrp/signal-and-noise-framework/issues)
- 💡 **Ideas**: [GitHub Discussions](https://github.com/jptrp/signal-and-noise-framework/discussions)

---

## Philosophy Reminder

**This is for you**, not for performance theater. Capture what's useful. Skip what's not. The framework serves you, not the other way around.

If it's not helpful, don't use it. If it is, great - you're building a knowledge graph of your project's evolution.

---

**Ready to try it?** `signal init` and capture your next conversation. 🚀
