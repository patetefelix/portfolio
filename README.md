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

## Things worth doing before this goes fully live

- **One client name needs your confirmation.** In the UI/UX tab, the "Tactical & Outdoor Gear" card (`images/proj-tactical-b.jpg`) — I couldn't confidently read the actual brand name off the screenshots, and I didn't want to guess wrong on a public portfolio. Rename it (or delete it) in `PROJECTS`.
- **The Challenge/Ownership/Outcome copy is my best-effort read of each screenshot** — accurate to what's visibly true, but written without your actual project briefs or metrics. If you have real numbers (conversion lift, time-to-purchase, anything measurable) swap them into the `outcome` field — real metrics will do more for you with recruiters than my qualitative descriptions.
- **The `.cs-note` box in each case study** is a placeholder reminding you to paste a real Figma embed link if you want one — currently just a text prompt, not a live embed.
- Add your real LinkedIn URL — it's a `#` placeholder in `index.html` (search for `linkedin`).

## Structure
```
index.html      → all content/markup
styles.css       → design tokens + layout (breakpoints at 1200 / 810 / 390px)
script.js        → project data + tab filtering + modal + theme toggle
images/          → cropped from your resume PDF, optimized for web
```
