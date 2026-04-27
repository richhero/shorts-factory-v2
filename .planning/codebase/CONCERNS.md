# CONCERNS.md

## Known Risks & Regressions
1. **Context Rot**: High risk of AI forgetting the Dark Mode theme during long sessions.
   - *Mitigation*: Periodic re-reading of `CONVENTIONS.md`.
2. **UI Overwrite**: Risk of deleting Sidebar/Layout styles when adding feature-specific CSS.
   - *Mitigation*: Move to Modular CSS (CSS Modules) in Phase 1.
3. **Memory Overflow**: Long `App.jsx` files lead to hallucinations.
   - *Mitigation*: Split into smaller functional components.

## Technical Debt
- Single large `App.css` containing contradictory styles from different sessions.
- Mixed light/dark mode variables in root (need cleanup).
