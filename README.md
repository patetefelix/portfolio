# félix. — portfolio site

Static site, zero build step. Ready for GitHub Pages.

## Publish it in ~5 minutes

1. Create a new repo on GitHub — e.g. `felix-portfolio` (or `<your-username>.github.io` if you want it at the root of your GitHub domain).
2. Upload these files (`index.html`, `styles.css`, `script.js`, the `images/` folder) to the repo — either drag-and-drop on github.com or:
   ```bash
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/felix-portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / root**.
4. Your site goes live at `https://<your-username>.github.io/felix-portfolio/` (or at the root if you used the `<username>.github.io` repo name).

## Editing content — no code required beyond this

Everything project-related lives in **`script.js`**, in the `PROJECTS` array near the top. Each project is one object:

```js
{
  id: "nueskes", tab: "uiux", type: "case", featured: true,
  name: "Nueske's", industry: "...", platform: "...", role: "...",
  desc: "...",
  thumbnail: "images/nueskes-thumb.png",      // card hero image
  gallery: ["images/nueskes-01.png", ...],    // full set shown in the project view, in order
  scope: ["Homepage", "PLP / PDP", ...]       // short, factual list of what you worked on
}
```

- `tab` — `"uiux"`, `"brand"`, or `"growth"` — controls which of the 3 filter tabs it appears under.
- `type` — `"case"` opens the full project-view modal (header + image gallery + "What I worked on" list). `"gallery"` just opens a single image with a caption (used for the lighter Tier 5 brand items — see `BRAND_GALLERY`).
- `thumbnail` — the single image shown on the grid card. Name it `<something>-thumb.<ext>`.
- `gallery` — every other image for that project, shown stacked in order in the modal. Add or remove paths freely; the modal loops over whatever's in the array.
- Add a new project by copy-pasting an object and editing the fields. Remove one by deleting its object.

The **"more brand work"** strip (Denali/Bark 2 Earth/Biona are full case studies; the rest are a lighter gallery) lives in the `BRAND_GALLERY` array right below `PROJECTS` — those still use a single `image` field, unchanged.

## Images wired up (Aug 2026 update)

Thumbnail + gallery paths are now set for the 21 projects where you gave me real filenames:

TK Elevator, Nueske's, Accutech, White Cap Foods, BriskHeat, Siege Suppressors, Riddy, Professional's Choice, Caplugs, Frontier Co-op, PT Solutions, AFG Distribution, Hoveround Mobility Solutions, Oklahoma Correctional Industries, High Speed Gear, Zip Corvette, Icarus Precision, Phoenix Medical Instruments, Rugged Suppressors, Garment Decor, Klassen Farm Products.

Two things worth double-checking on your end:

- **Rugged Suppressors** is now correctly matched to the `rugged-*` image files (previously mislabeled as "Outlast Supply" — fixed).
- **The `livq-*` image set** (7 files) doesn't match any client currently in the site. I left it out — tell me which project it belongs to (or if it's a new one to add) and I'll wire it in.
- **AFG Distribution** only had `afg-02` and `afg-03` in what you sent — no `afg-01` — so the gallery is just those two for now.

**Everyone else** (Denali, Bark 2 Earth, Biona, Emraw, the Crimson Agility campaign assets, Feat, BrüMate, Smithey, 12th Tribe, and all 14 `BRAND_GALLERY` items) is still on its old single image path from before — those will show a broken-image icon until you send over `thumb` + full-image filenames for them, same pattern as above.

## Design system

- **Fonts:** Instrument Serif for display type (headings, card names), DM Sans for body copy, DM Mono for the small mono labels (eyebrows, tab numbers, `cs-head-item`). All three load from one Google Fonts request in `index.html`. Instrument Serif only ships in weight 400 (regular + italic) — don't set `font-weight` above 400 on anything using `--font-display`.
- **Colors:** pulled from your own Alinea studio palette — pine green `#1B3E3A`, cream `#EBE4DC`, sand `#B9AC9F`. Light mode uses them close to source. Dark mode swaps the pine accent for a muted sage (`#93BBA4`). Everything is a CSS variable in `styles.css`.
- **Section headers:** the `.eyebrow` labels (Work, About, Clients, Say Hello, More Brand Work) are now standard capitalized text — the CSS no longer force-lowercases or prefixes them, so whatever you type in `index.html` is what renders.

## Project copy — what's real vs. what's a placeholder

Every case study now shows just: client / industry / platform / role, the full image gallery, and a short, factual "What I worked on" list (the `scope` array — actual surfaces/flows you designed, nothing invented). I removed the earlier Challenge / Ownership / Outcome narrative and the metric chips — that copy was my best-effort read of screenshots and resume lines without your real project briefs, and read as more polished than it should for things I can't verify. Better to keep it short and add real specifics yourself than to leave speculative claims live.

**Still worth doing when you have time:** if you want a line or two of real context for any project (a genuine challenge, a number, a testimonial), just tell me which one and what to add — happy to keep it short.

## Structure
```
index.html      → all content/markup
styles.css       → design tokens + layout (breakpoints at 1200 / 810 / 390px)
script.js        → project data + tab filtering + modal + theme toggle
images/          → your project screenshots (thumb + gallery images per project)
```
