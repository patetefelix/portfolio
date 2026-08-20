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
  desc: "...", image: "images/proj-nueskes.jpg",
  challenge: "...", owned: [...], scope: [...], influence: "...", outcome: "..."
}
```

- `tab` — `"uiux"`, `"brand"`, or `"growth"` — controls which of the 3 filter tabs it appears under.
- `type` — `"case"` opens the full Ownership → Challenge → Outcome modal on click. `"gallery"` just opens the image with a caption (used for the one client I wasn't 100% sure how to name — see below).
- Add a new project by copy-pasting an object and editing the fields. Remove one by deleting its object.

The **"more brand work"** strip (Denali/Bark 2 Earth/Biona are full case studies; the rest are a lighter gallery) lives in the `BRAND_GALLERY` array right below `PROJECTS`.

## Design system

- **Fonts:** Instrument Serif for display type (headings, card names, the big stats), DM Sans for body copy, DM Mono for the small lowercase labels (`.eyebrow`, tab numbers, `cs-head-item`). All three load from one Google Fonts request in `index.html`. Instrument Serif only ships in weight 400 (regular + italic) — don't set `font-weight` above 400 on anything using `--font-display`, it'll just fall back to the browser's synthetic bold, which looks bad.
- **Colors:** pulled from your own Alinea studio palette — pine green `#1B3E3A`, cream `#EBE4DC`, sand `#B9AC9F`. Light mode uses them close to source (cream background, pine text/accent). Dark mode swaps the pine accent for a muted sage (`#93BBA4`) so it still reads as "the same plant" against a near-black canvas, instead of reaching for a generic terracotta or acid-green accent. Everything is a CSS variable in `styles.css` — change the palette in one place.

## Metrics — what's real vs. what needs your input

Every project card and case study now shows 2 small stat chips (`metrics` field on each object in `PROJECTS`). **These are scope metrics I could honestly infer from the case itself** — catalog size, number of surfaces redesigned, click-count on a flow — not fabricated business outcomes. I didn't invent conversion-rate, revenue, or AOV numbers for real clients; I don't have your analytics, and made-up stats on a public portfolio are the kind of thing that falls apart in an interview.

**Before this goes fully live:**
- **The Challenge/Ownership/Outcome copy is my best-effort read of each screenshot and resume line** — accurate to what's visibly true, but written without your actual project briefs. If you have real numbers (conversion lift, AOV change, time-to-purchase, client testimonials) add them to the `outcome` field for that project — a verified number will outperform any qualitative line I can write.
- **The `.cs-note` box in each case study** now doubles as a reminder for both a real Figma embed link and real metrics — still just a text prompt, not a live embed.
- Add your real LinkedIn URL — it's a `#` placeholder in `index.html` (search for `linkedin`).
- The `BRAND_GALLERY` array (lighter, logo-only entries below the brand tab) references image paths like `images/b-massalino.jpg` — confirm these match your actual `images/` folder filenames, or swap them.

## Structure
```
index.html      → all content/markup
styles.css       → design tokens + layout (breakpoints at 1200 / 810 / 390px)
script.js        → project data + tab filtering + modal + theme toggle
images/          → cropped from your resume PDF, optimized for web
```
