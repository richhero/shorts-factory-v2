# TESTING.md

## Manual Verification (UAT)
1. **Visual Regression Check**: Compare screenshot after every CSS/JSX change to ensure Dark Mode and Sidebar remain intact.
2. **Functionality Check**: 
   - Export Modal must open and show Pro Editor buttons.
   - Dual Preview must maintain 50/50 split.

## Automated Checks (Planned)
- Use Playwright to detect if `sidebar` element is visible and has correct background color.
- Verify `all-download-btn` exists in the Export Modal.
