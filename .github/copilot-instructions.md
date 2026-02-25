**Purpose**
- **Scope:** Quick, actionable instructions for AI coding agents working in this repository.
- **Repo:** halo-informatics — minimal starter repository with a top-level [README.md](README.md).

**Quick Context**
- **What you'll find:** This repo currently contains only a short README. No source directories, tests, or CI files were discovered.
- **Default branch:** main (repository: hbutthaloinformatics/halo-informatics).

**Primary Goal for an Agent**
- **Explore and scaffold:** Since there is no code yet, focus on discovering intended language/runtime and then scaffold a minimal, idiomatic project layout (ask before generating).

**Exploration checklist (run first)**
- **List files:** `git ls-files` to confirm repository contents and ignored files.
- **Search for hidden docs:** `rg --hidden "AGENT|copilot|CLAUDE|Dockerfile|Makefile|package.json|pyproject.toml|setup.py|go.mod|Cargo.toml" || true` to locate any accidental indicators of language or tooling.
- **Read README:** See [README.md](README.md) for any human notes.

**Conservative scaffolding rules**
- **Ask before adding large features:** Propose a language/runtime based on repo signals; do not commit scaffolding until the user confirms.
- **Small PRs:** When scaffolding, create a minimal change (one small scaffold commit) and include a clear commit message and PR description.

**If you need to initialize a project**
- **Preferred pattern:** Create a focused scaffold for one stack (Python, Node, Go, Rust)—ask which the user prefers.
- **Scaffold contents:** minimal README update, a `src/` or `pkg/` layout, a `tests/` folder with one smoke test, and a simple `Makefile` or `tasks` entry with `build`, `test`, and `format` targets.

**Conventions & communication**
- **Commit messages:** short imperative title + one-line body; include `#patch` or `#scaffold` tag in the body for discoverability.
- **PRs:** Include a short description, list of added files, and any run steps.

**What not to assume**
- **No implicit runtime:** Do not assume Python/Node/Go; detect via files or ask.
- **No CI/packaging assumptions:** There are no CI config files — propose CI only after confirming requirements.

**Next steps (ask the user)**
- Offer to: (A) run the repo scans and propose a language and minimal scaffold, or (B) wait for the user's specification of language/stack.

**Contact/Feedback**
- If any part of this instruction is unclear or you want a different default scaffold, tell me which stack and I will adjust the plan.
