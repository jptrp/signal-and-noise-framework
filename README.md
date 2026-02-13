# Signal & Noise Framework

**Conversation-Driven Context & Decision Tracking for IDE Teams**

---

## Vision

Every conversation with your AI assistant reveals new paths, uncovers insights, and presents choices. Most of this knowledge is lost the moment the chat window closes. 

**Signal & Noise Framework** captures this conversational intelligence, turning every chat into a knowledge node that:

- 📝 **Records context** - What was discussed, decided, and discovered
- 🔀 **Maps paths** - What options were revealed and which were chosen
- 🎯 **Tracks decisions** - Why paths were taken, deferred, or ignored
- 🔗 **Builds connections** - Links related conversations and patterns
- 🧭 **Guides next steps** - Surfaces deferred paths when you're ready

---

## Philosophy

### For the Hesitant User (Maximum Control)
- Pure markdown files you can read and edit
- No automation without explicit permission
- Clear file structure, no magic
- Git-friendly and auditable

### For the Comfortable User (Guided Experience)
- Smart suggestions for next steps
- Pattern recognition across conversations
- Automatic path surfacing
- Clear instructions on what to do next

**Both start with the same simple foundation: A `.signal/` directory in your project.**

---

## Quick Start

### 1. Initialize a Project

```bash
cd your-project
signal init
```

This creates a `.signal/` directory with:
```
.signal/
├── conversations/     # Conversation nodes
├── paths/            # Decision tree tracking
├── patterns/         # Discovered patterns
└── index.md          # Overview and navigation
```

### 2. Capture a Conversation

After a productive chat session, run:
```bash
signal capture "Discussed API authentication options"
```

**Or let Signal suggest a description for you:**
```bash
signal capture     # Analyzes git commits and changed files

# Signal shows:
# 1. Added JWT authentication middleware (from recent commit)
# 2. Modified 3 files in auth (from git status)
# 3. Working on new feature (generic)
# 4. Custom description...
# Select option (1-4): 
```

This creates a conversation node that prompts you to record:
- What was discussed
- What paths were revealed
- What decision was made
- Why other paths were deferred

### 3. Navigate Your Context

```bash
signal status          # Current project state
signal paths           # View all decision paths
signal deferred        # See what you put off
signal patterns        # Identify recurring themes
```

---

## Core Concepts

### Conversation Nodes

Each chat session becomes a node with:
- **Timestamp** - When it happened
- **Context** - What you were working on
- **Insights** - What you learned
- **Paths Revealed** - Options that emerged
- **Decision Made** - What you chose to do
- **Deferred Paths** - What you didn't do and why

### Path States

Every revealed path has a state:
- `taken` - You followed this direction
- `deferred-need-info` - Need more information first
- `deferred-no-time` - Interesting but not now
- `deferred-blocked` - Waiting on something else
- `explored` - Investigated but not pursued
- `ignored` - Not relevant for this project

### Pattern Recognition

Over time, the framework identifies:
- Recurring topics that need attention
- Common blockers across projects
- Frequently deferred paths
- Knowledge gaps that keep emerging

---

## Installation

### Quick Install (Single Project)
```bash
# Copy the init script to your project
curl -o signal https://raw.githubusercontent.com/yourusername/signal-and-noise-framework/main/bin/signal
chmod +x signal
./signal init
```

### Global Install
```bash
# Clone the repository
git clone https://github.com/yourusername/signal-and-noise-framework.git
cd signal-and-noise-framework

# Add to PATH
echo 'export PATH="$PATH:'$(pwd)'/bin"' >> ~/.zshrc
source ~/.zshrc

# Initialize any project
cd ~/your-project
signal init
```

---

## File Structure

### Per-Project (`.signal/` directory)
```
.signal/
├── index.md                    # Project overview & quick nav
├── conversations/              # Conversation nodes
│   ├── 2026-02-12-api-auth.md
│   ├── 2026-02-13-db-schema.md
│   └── ...
├── paths/                      # Decision tracking
│   ├── active.md              # Currently pursuing
│   ├── deferred.md            # Put off for later
│   └── explored.md            # Investigated paths
├── patterns/                   # Discovered themes
│   ├── recurring-topics.md
│   └── blockers.md
└── .gitignore                  # Optional: ignore if too personal
```

### Framework Repository
```
signal-and-noise-framework/
├── bin/                        # CLI tools
│   ├── signal                 # Main CLI
│   └── signal-init            # Project initialization
├── templates/                  # Node templates
│   ├── conversation.md
│   ├── path.md
│   └── pattern.md
├── examples/                   # Example projects
│   └── sample-project/
└── docs/                       # Documentation
    ├── getting-started.md
    ├── node-format.md
    └── patterns.md
```

---

## Usage Examples

### Scenario 1: Solo Developer

You're working on a new API and having a conversation with GitHub Copilot about authentication approaches.

```bash
# After the conversation
signal capture "Explored API authentication options"

# You're prompted to fill in:
# - What options were discussed? (OAuth2, JWT, API Keys)
# - What did you choose? (JWT for now)
# - What did you defer? (OAuth2 - need to learn more about implementation)
# - Why deferred? (need-info)

# Later, when you have time:
signal paths --deferred
# Shows: OAuth2 implementation (need-info)

signal explore oauth2
# Opens the relevant conversation and suggests next steps
```

### Scenario 2: Team Collaboration

Multiple developers working on the same project, each having their own AI-assisted sessions.

```bash
# Developer A
signal capture "Decided on database schema for users table"

# Developer B
signal status
# Shows recent team decisions
signal paths --taken
# Sees what decisions were made and why
```

### Scenario 3: Multi-Project Patterns

You notice you keep deferring the same types of tasks across projects.

```bash
# From the framework root
signal patterns --global
# Reveals: "Testing" deferred 12 times across 4 projects (no-time)

signal suggest
# "You have 12 deferred testing tasks. Want to allocate time for this?"
```

---

## Modes

### Minimum Mode (Hesitant Users)
- Manual creation of markdown files
- No automation
- Clear directory structure
- Full control over every file

### Guided Mode (Comfortable Users)
- CLI prompts for capturing conversations
- Smart suggestions for next steps
- Pattern recognition
- Automatic cross-referencing

**Switch modes anytime:** `signal mode --guided` or `signal mode --minimum`

---

## Integration

### With Existing Tools
- **Git** - `.signal/` directories are git-friendly
- **GitHub Copilot** - Surfaces context for better suggestions
- **Project Management** - Export paths to issues/tasks
- **Documentation** - Conversation nodes become living docs

### With Your Workspace
Works alongside your existing organization:
```bash
# Initialize in any project
cd ~/Career/signal-and-noise-api
signal init

cd ~/Personal/personal-ops-command  
signal init

# View patterns across all projects
signal patterns --workspace ~/Career
```

---

## Contributing

Signal & Noise Framework is open source and welcomes contributions:

1. **Templates** - Share your conversation node formats
2. **Patterns** - Document useful pattern types
3. **Integrations** - Build connections to other tools
4. **CLI Features** - Enhance the navigation experience

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Philosophy in Practice

### Signal (Important) vs Noise (Distraction)

The framework helps you identify what matters:
- **Signal**: Recurring themes, blocked paths, critical decisions
- **Noise**: One-off discussions, tangential explorations

### Context as Currency

In AI-assisted development, context is everything. This framework:
- Preserves context across sessions
- Builds institutional memory
- Reduces repetitive explanations
- Accelerates onboarding

### Human in the Loop

AI suggests, humans decide. This framework:
- Records why decisions were made
- Captures reasoning, not just conclusions
- Maintains human agency
- Builds explainable decision trees

---

## Status

🚧 **Early Development** - We're building in the open

- [x] Core vision defined
- [x] File structure designed
- [ ] CLI implementation
- [ ] Template system
- [ ] Pattern recognition
- [ ] Multi-project support
- [ ] Team collaboration features

---

## License

MIT License - Use it, modify it, share it

---

## Questions?

- 📧 Email: support@signalandnoise.dev
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/signal-and-noise-framework/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/signal-and-noise-framework/issues)

---

**Built with the belief that every conversation has value worth preserving.**
