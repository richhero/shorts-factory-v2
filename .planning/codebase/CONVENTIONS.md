# CONVENTIONS.md

## Visual Standards (CRITICAL)
- **Primary Theme**: Dark Mode ONLY.
  - Background: `#0e0e10`
  - Sidebar: `#18181b`
  - Text: `#efeff1`
- **Font**: Inter (sans-serif)
- **Borders**: `1px solid #2f2f35`

## Development Rules
1. **Surgical Editing**: Never overwrite entire large files. Use `multi_replace_file_content`.
2. **Persistence**: Every UI change must be verified against `CONTEXT.md`.
3. **Naming**: Use descriptive class names that reflect the Premium Dark theme.

## Component Layout
- **Sidebar**: Left-aligned, fixed width (220px), contains 4 main categories.
- **Header**: Top-aligned, fixed height (52px).
- **Tool Panel**: Right-aligned, fixed width (400px).
