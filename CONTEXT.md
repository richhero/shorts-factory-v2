# UCE v15.6 Project Context (Memory Guard)

## 🎨 Core Design System (NEVER DELETE)
- **Theme**: Premium Dark Mode
- **Colors**:
  - Background: `#0e0e10`
  - Sidebar: `#18181b`
  - Accent Blue: `#00a3ff`
  - Accent Purple: `#a855f7`
  - Text Main: `#efeff1`
- **Layout**:
  - Sidebar (220px)
  - Workspace Header (52px)
  - Tool Panel (400px, Right side)
  - Timeline (Bottom area)

## 🏗️ Critical Component Structure
- **Sidebar**: Must contain Discovery, Editor, Automation, Education categories.
- **Tool Panel**: Must contain "AI Quick Tools" grid (Subtitles, Remove Silence, etc.).
- **Dual Preview**: 1:1 Split view for Original Source vs AI Rendered Result.
- **Timeline Map**: Verification table showing "Sequence, Target, Source, Action".

## 🚀 Key Features
- **Export Modal**: Multi-language SRT list + Pro Editor Workflow Integration (Premiere, CapCut, Vrew).
- **Direct Input**: Support for JSON and Direct Text Entry.

## ⚠️ Anti-Regression Rules
1. DO NOT overwrite `App.css` entirely unless re-syncing base styles.
2. ALWAYS use `multi_replace_file_content` for surgical updates.
3. BEFORE any UI change, verify against this `CONTEXT.md`.
