# Memory Bank - Keystone One Project

This directory contains the project's memory bank system - a structured knowledge base that maintains context, decisions, and important information about the Keystone One Hugo website project.

## Purpose

The memory bank serves as:
- **Context Repository**: Stores project understanding and architectural decisions
- **AI Assistant Context**: Provides consistent context for AI assistants working on the project
- **Documentation Hub**: Maintains living documentation of the project
- **Decision Log**: Tracks important decisions and their rationale

## Structure

```
.memory-bank/
├── README.md                    # This file - overview of the memory bank
├── manifest.json                # Index of all memory bank entries
├── project-overview.md          # High-level project summary
├── architecture.md              # System architecture and design patterns
├── configuration.md             # Configuration details and settings
├── content-structure.md         # Content organization and guidelines
├── development-workflow.md      # Development processes and commands
├── decisions/                   # Architecture decision records (ADRs)
│   └── 001-memory-bank-initialization.md
└── context/                     # Contextual information
    ├── tech-stack.md
    └── conventions.md
```

## Usage

### For AI Assistants

When working on this project:
1. Read `manifest.json` to understand available context
2. Review relevant memory bank files for current task
3. Update memory bank when making significant changes
4. Add new decision records when making architectural choices

### For Developers

- Consult memory bank files before making major changes
- Update documentation when implementing new features
- Add decision records for significant architectural decisions
- Keep configuration details current

## Maintenance

- **Update Frequency**: Update after significant changes
- **Review Period**: Monthly review of accuracy
- **Ownership**: All team members are responsible for keeping memory bank current

---

**Last Updated**: 2026-01-19
**Version**: 1.0.0