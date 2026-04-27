# ARCHITECTURE.md

## High-Level UX Pattern
- **Layout Model**: Persistent Sidebar + Header + Main Content Area.
- **Editor Workflow**: 
  1. Input Source (JSON/Text) 
  2. Map to Timeline (Internal Analysis)
  3. Verify (Dual Preview & Map Table)
  4. Render & Export (Modal)

## Component Communication
- **State Flow**: Top-down from `App` to `VideoEditor` and `ExportModal`.
- **Validation**: Real-time parsing of instructions into the `TimelineAnalysisMap`.

## Key Views
- **Dual Preview**: 50/50 split for Source vs Result.
- **Timeline Canvas**: Bottom visual representation of edits.
