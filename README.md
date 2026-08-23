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

- **Rugged Suppressors** is correctly matched to the `rugged-*` image files (previously mislabeled as "Outlast Supply" — fixed).
- **AFG Distribution** only had `afg-02` and `afg-03` in what you sent — no `afg-01` — so the gallery is just those two for now.

## Platform tags, tech stack, and "view live" (Aug 2026 update)

- **Platform tags updated** on every UI/UX project you sent a table for, and each now also carries a `techStack` field (shown as a second row in the case-study modal, under "platform") — e.g. TK Elevator is `platform: "Adobe Commerce"` / `techStack: "Magento 2 / Enterprise B2B"`.
- **New project added: Live Q Or Die (Q)** — `id: "live-q-or-die"`, Shopify, in the UI/UX tab. This turned out to be the client behind the `livq-*` image set (7 files) that didn't match anyone before — Q, LLC's actual site is liveqordie.com, so I matched it up.
- **"View live" button** added to the case-study modal, right under the description. It only renders when a project has a `liveUrl` (a real link) or is flagged `comingSoon: true` (shows a disabled "coming soon" pill) — otherwise nothing shows, rather than a guessed link.
  - **Confirmed live** (I verified these): Caplugs, Siege Suppressors, Rugged Suppressors, Hoveround, Live Q Or Die, plus the growth-tab email clients you gave URLs for (Feat, BrüMate, Smithey, 12th Tribe, Wolven, Lifeboost).
  - **Marked "coming soon"** per your note: Icarus Precision, Zip Corvette.
  - **No `liveUrl` set yet** (I didn't want to guess a company URL and get it wrong on a live site): TK Elevator, Nueske's, Accutech, White Cap Foods, BriskHeat, Riddy, Professional's Choice, Frontier Co-op, PT Solutions, AFG Distribution, Oklahoma Correctional Industries, Phoenix Medical Instruments. Send me the real links (or `comingSoon: true`) for any of these and I'll wire them in the same way.

## Growth marketing tab (Aug 2026 update)

Now exactly **9 cards**, matching your list. "Crimson Agility Campaign Assets" was removed (no client name on that one — it was internal collateral, not a real brand).

- **Feat, BrüMate, Smithey, 12th Tribe, Wolven, Lifeboost** — unchanged from the last update (naming + live links already in place).
- **Three new cards added**, images-only like the rest of this tab (no stats), using the same `<slug>-thumb / <slug>-01` convention:
  - **Rasa** (`id: "rasa"`) — `rasa-thumb.jpg` / `rasa-01.jpg` — [wearerasa.com](https://wearerasa.com/)
  - **Tiny Rituals** (`id: "tinyrituals"`) — `tinyrituals-thumb.jpg` / `tinyrituals-01.jpg` — [tinyrituals.co](https://tinyrituals.co/)
  - **Static Nails** (`id: "staticnails"`) — `staticnails-thumb.jpg` / `staticnails-01.jpg` — [staticnails.com](https://staticnails.com/)
  - I didn't have any brief or scope detail for these three, so the descriptions are generic one-liners — send me a sentence on what you actually did for each and I'll tighten them up.

## Brand tab reordered (Aug 2026 update)

- **Featured order is now, top to bottom:** El Paraíso, Massalino, Disfruta, Casa Santafé, Casa de Encantos, Pawty Animals — as full case cards, per your list.
- **Denali, Bark 2 Earth, Biona, and Emraw moved down** into the lighter "More Brand Work" strip (small captioned cards, same as Brüssel/Oggi Pizza/etc.) to make room. Their images are renamed to the `<slug>-thumb.jpg` convention too: `denali-thumb.jpg`, `bark2earth-thumb.jpg`, `biona-thumb.jpg`, `emraw-thumb.jpg`.
- **Garment Decor and Klassen Farm Products moved to the UI/UX (Work) tab** — both are website projects, so they now show up as web case studies instead of under Brand Identity. Garment Decor's platform tag is now `WooCommerce` (tech stack: `WordPress / Custom Printing Engine`), matching your table from before.

## Hero image stack fixed (Aug 2026 update)

The three cards in the homepage hero were pointing at files that were never actually uploaded (`proj-nueskes.jpg`, `b-bark2earth.jpg`, `email-brumate.jpg` — hence the broken-image icons on mobile). Swapped them for one from each category, using files that already exist in the site's data: **Nueske's** (web), **El Paraíso** (branding), **Feat Clothing** (email). If you'd rather feature different projects there, just tell me which three and I'll swap the paths.

## Brand gallery — full case studies now (Aug 2026 update)

All 19 `BRAND_GALLERY` items are now full case studies (`type: "case"`) with real multi-image galleries, using the actual filenames from your images folder — same as every other project on the site. Clicking any brand card now opens the full case modal (header + image grid + "what I worked on"), not a single lightbox image.

- **New client added: Humboldt** (`id: "humboldt"`, 24 images) — this wasn't on the site before; I matched it from the `humboldt-*` files. I inferred "Wine & Spirits · Packaging" from the bottle imagery in the thumbnails since I don't have a brief for it — please correct the industry/description if that's wrong.
- **Fixed a naming mismatch:** Casa de Encantos was pointing at `casadeencantos-*`, but your actual files are `casaencantos-*` (no "de"). Updated to match.
- **Fixed several file-extension mismatches** between what the code expected and what you actually have: `massalino-thumb` is `.jpeg` not `.jpg`, `disfruta-thumb` is `.jpeg`, `oggi-thumb` and `philacup-thumb` are `.png`, `bark2earth-thumb` and `biona-thumb` are `.png`. All now point at the real files.
- **Pawty Animals** didn't have a dedicated `-thumb` file in what you sent, so I used `pawtyanimals-01.png` as the card thumbnail and kept it out of the gallery grid to avoid repeating it.
- A few filenames appeared twice with different extensions in your list (e.g. `massalino-22.jpg` and `massalino-22.jpeg`, `oggi-15.png` and `oggi-15.jpg`) — I included both as separate gallery images since I can't tell if they're duplicates or different shots. Worth a quick look on your end; delete whichever's the accidental export if they're the same photo.
- Descriptions and scope lists for the brand tab still follow the same "keep it short, only what's verifiable" approach as before — nothing invented beyond what the existing captions already said.

## "View live" — now on every UI/UX project too (Aug 2026 update)

Every project in the UI/UX & E-Commerce tab now shows a "view live" control in its case-study modal, matching the growth-marketing tab:

- **Newly confirmed links** (I verified these are the real sites): TK Elevator, Nueske's, BriskHeat, Professional's Choice, Frontier Co-op, PT Solutions, High Speed Gear.
- **Marked "coming soon"** rather than guessed, since the company name alone wasn't enough to be sure I had the right site: Accutech, White Cap Foods, Riddy, AFG Distribution, Oklahoma Correctional Industries, Phoenix Medical Instruments, Garment Decor, Klassen Farm Products — plus the two you already flagged (Icarus Precision, Zip Corvette). Send me the real URL for any of these and I'll swap `comingSoon: true` for a real `liveUrl`.

## Profile photo crop (Aug 2026 update)

Adjusted `object-position` on the About-section portrait — it was centered on the source image, which left a slab of blank background on the left side of the crop. Shifted the focal point right and slightly up so the photo fills the frame more evenly. If it still looks off once you see it live, it's a one-line CSS tweak (`.about-portrait` in `styles.css`) — just let me know which direction to nudge it.

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
