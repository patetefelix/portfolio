/* ============================================================
   FÉLIX PATETE — PORTFOLIO
   Project data acts as the "CMS collection" — edit this array
   to add, remove, or update case studies. No build step needed.
   ============================================================ */

const PROJECTS = [

  /* ---------------- TAB 1 — UI/UX & E-COMMERCE ---------------- */
  {
    id: "accutech", tab: "uiux", type: "case", featured: true,
    name: "Accutech", industry: "IT Hardware & Data Storage", platform: "Adobe Commerce",
    role: "UX Design · Figma Prototyping",
    desc: "A 15,000-SKU technical catalog rebuilt for faster procurement browsing.",
    image: "images/proj-accutech.jpg",
    challenge: "Enterprise IT buyers needed a faster way to find and compare thousands of SKUs of enterprise storage hardware without getting lost in category depth.",
    owned: ["Full storefront UX redesign in Figma", "Category & PLP filtering logic", "PDP layout for spec-heavy technical products"],
    scope: ["Homepage merchandising", "Category navigation", "Cart"],
    influence: "Pushed for a simplified featured-products module on the homepage to shorten the path to top sellers.",
    outcome: "A cleaner, faster browsing experience for a highly technical B2B catalog, built for both procurement buyers and IT resellers."
  },
  {
    id: "nueskes", tab: "uiux", type: "case", featured: true,
    name: "Nueske's", industry: "Specialty Foods · Smoked Meats DTC", platform: "Adobe Commerce",
    role: "UX Design · Merchandising",
    desc: "A premium DTC storefront for gifting-led, seasonal smoked-meat sales.",
    image: "images/proj-nueskes.jpg",
    challenge: "A legacy smoked-meats retailer needed a storefront that felt as premium and appetite-driving as the product, while still handling a large SKU catalog with gifting and subscription flows.",
    owned: ["Category & PDP redesign", "Cart & checkout UX", "Seasonal merchandising modules (holiday gifting, best sellers)"],
    scope: ["Homepage", "PLP / PDP", "Cart"],
    influence: "Introduced recipe-driven cross-sell modules to connect product pages back to real usage occasions.",
    outcome: "A storefront that leans into food photography and seasonal merchandising to drive gifting and repeat purchase."
  },
  {
    id: "briskheat", tab: "uiux", type: "case", featured: false,
    name: "BriskHeat", industry: "Industrial Heating Equipment", platform: "Adobe Commerce",
    role: "UX Design · PDP Systems",
    desc: "A need-based storefront for facilities engineers, not casual browsers.",
    image: "images/proj-briskheat.jpg",
    challenge: "Technical B2B buyers — facilities and industrial engineers — needed to move from a functional need like \u201cfreeze protection\u201d straight to the right SKU without wading through spec sheets.",
    owned: ["Storefront UX", "PDP layout for technical, spec-heavy products", "Checkout flow"],
    scope: ["Category navigation", "PDP", "Cart & checkout"],
    influence: "Suggested need-based merchandising (\u201cFreeze Protection Top Sellers\u201d) over pure category browsing, matching how industrial buyers actually shop.",
    outcome: "A storefront that speaks the language of facilities engineers first, catalog structure second."
  },
  {
    id: "tavs", tab: "uiux", type: "case", featured: false,
    name: "TAVS", industry: "Firearms & Tactical Equipment Retail", platform: "Adobe Commerce",
    role: "UX Design · Regulated Commerce",
    desc: "A regulated-category storefront built for trust as much as conversion.",
    image: "images/proj-tavs.jpg",
    challenge: "A firearms & equipment retailer needed a storefront that felt premium and trustworthy while handling age-gated, regulated products.",
    owned: ["Homepage & category UX", "PDP", "Cart", "Trust & compliance architecture"],
    scope: ["Full storefront experience"],
    influence: "Shaped where trust-and-compliance messaging (age verification, dealer info) sits so it doesn't undercut the shopping experience.",
    outcome: "A storefront built to Crimson Agility's regulated-commerce standard for the firearms industry."
  },
  {
    id: "whitecap", tab: "uiux", type: "case", featured: true,
    name: "White Cap Foods", industry: "Foodservice Distribution · B2B", platform: "Figma → static HTML/CSS",
    role: "Design System",
    desc: "A full design system for a foodservice distributor, delivered as static HTML/CSS for engineering handoff.",
    image: "images/proj-whitecap.jpg",
    challenge: "A foodservice distributor's B2B customers — restaurants, retailers — needed a faster reorder experience across a huge catalog, plus a working credit application flow for new accounts.",
    owned: ["Full Figma design system — homepage, mega menu, cart/checkout, and account pages", "Static HTML/CSS delivery for engineering"],
    scope: ["Mega menu IA", "Reorder flow", "Credit approval application form"],
    influence: "Simplified the credit approval form's structure to reduce abandonment for new B2B accounts.",
    outcome: "A reusable design system rather than a one-off storefront — built so the engineering team could implement it directly from static markup."
  },
  {
    id: "riddy", tab: "uiux", type: "case", featured: false,
    name: "Riddy", industry: "Lawn Care & Pest Control · Subscription DTC", platform: "Shopify",
    role: "UX Design · Onboarding Flow",
    desc: "Explaining a recurring-service subscription without a sales call.",
    image: "images/proj-riddy.jpg",
    challenge: "A local-service subscription brand needed to explain a model that isn't self-evident — recurring lawn & pest treatments — and get visitors to sign up without a sales call.",
    owned: ["Full site UX — homepage, plan builder / quote flow, cart"],
    scope: ["Onboarding / plan-selection flow", "Homepage storytelling"],
    influence: "Moved the \u201cHow does a Riddy subscription work\u201d 3-step explainer higher on the homepage after noticing the model needed context before the pitch.",
    outcome: "A friendlier, more approachable storefront for a service that's easy to misunderstand at a glance."
  },
  {
    id: "profchoice", tab: "uiux", type: "case", featured: false,
    name: "Professional's Choice", industry: "Equestrian Performance Gear", platform: "Adobe Commerce",
    role: "UX Design · Category Strategy",
    desc: "A storefront built to carry a 50-year reputation into the browsing experience.",
    image: "images/proj-profchoice.jpg",
    challenge: "A well-established equestrian brand needed an e-commerce experience with the same credibility as its decades-long reputation, across a technical product range — boots, tack, sports medicine gear.",
    owned: ["Storefront UX", "Category / PDP for technical gear", "Shop-by-category navigation"],
    scope: ["Homepage", "PLP / PDP"],
    influence: "Recommended shop-by-category entry points over search-first navigation, matching how equestrians actually browse by discipline — Western vs. English.",
    outcome: "A storefront that carries the brand's earned-credibility positioning into the shopping experience."
  },
  {
    id: "tke", tab: "uiux", type: "case", featured: true,
    name: "TK Elevator", industry: "Industrial Elevator Parts · B2B", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "A spare-parts catalog built for technicians who already know their part number.",
    image: "images/proj-tke.jpg",
    challenge: "Facilities technicians needed to find exact spare parts — bearings, assemblies — by spec, fast: a classic \u201cI know what I need, get me there in two clicks\u201d B2B flow.",
    owned: ["Storefront UX for the spare-parts catalog", "PDP with technical spec tables", "\u201cFrequently bought together\u201d cross-sell"],
    scope: ["Category navigation", "PDP"],
    influence: "Advocated for a spec-first PDP layout — exact bearing dimensions above the fold — over lifestyle imagery, since technicians shop by number, not photo.",
    outcome: "A parts catalog built for people who already know what they need and just need it fast."
  },
  {
    id: "siege", tab: "uiux", type: "case", featured: false,
    name: "Siege Suppressors", industry: "Firearms Suppressors · DTC", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "An engineered visual language for a highly technical buyer.",
    image: "images/proj-siege.jpg",
    challenge: "A suppressor brand needed a storefront that felt as engineered and premium as its hardware, while clearly explaining technical differentiators — like the Linear Diffuser Array — to a knowledgeable buyer.",
    owned: ["Storefront UX", "PDP video / technical-explainer integration", "Category navigation"],
    scope: ["Homepage", "PDP"],
    influence: "Pushed to lead PDPs with the technical explainer video instead of specs-only, since buyers were already sold on the category and needed differentiation.",
    outcome: "A dark, engineered visual language matched to a highly technical buyer."
  },
  {
    id: "crimson-rcr", tab: "uiux", type: "case", featured: false,
    name: "Crimson Agility — Regulated Commerce Recovery", industry: "Internal Service Line", platform: "Marketing site",
    role: "Landing Page UX",
    desc: "The landing page for Crimson's highest-stakes service — migrating merchants in regulated categories.",
    image: "images/proj-crimson-rcr.jpg",
    challenge: "Merchants on legacy or non-compliant platforms in regulated categories (firearms, supplements, and similar) needed a clear reason to trust Crimson with a full commerce-system migration.",
    owned: ["Landing page UX and visual system for the Regulated Commerce Recovery service"],
    scope: ["Full landing page"],
    influence: "Shaped the \u201cOperate today. Build for tomorrow.\u201d positioning to speak to merchants who can't afford downtime during a platform move.",
    outcome: "A dedicated landing experience for Crimson's highest-stakes service line."
  },
  {
    id: "tactical", tab: "uiux", type: "gallery", featured: false,
    name: "Tactical & Outdoor Gear", industry: "Firearms Accessories · DTC", platform: "—",
    role: "UX Design",
    desc: "A minimal, engineered storefront for a tactical/outdoor gear retailer.",
    image: "images/proj-tactical-b.jpg",
    caption: "Client name pending confirmation — see note below the grid."
  },

  /* ---------------- TAB 2 — BRAND IDENTITY (featured) ---------------- */
  {
    id: "denali", tab: "brand", type: "case", featured: true,
    name: "Denali Leather Goods", industry: "Leather Goods · 0→1 Brand", platform: "Brand Identity",
    role: "Brand Strategy · Identity System",
    desc: "A rugged, heritage identity built to hold up on embossed leather and Instagram alike.",
    image: "images/b-denali.jpg",
    challenge: "A leather goods company needed a brand identity built from scratch that felt rugged and heritage without tipping into cliché \u201coutdoors\u201d visual tropes.",
    owned: ["Full identity system — wordmark, seal mark, typography", "Social & print applications"],
    scope: ["Logo suite (stacked & horizontal)", "Brand guidelines", "Social templates", "Stationery"],
    influence: "Advocated for a monochrome-first palette so the brand would hold up equally well on leather embossing and digital screens.",
    outcome: "A cohesive identity that works across product embossing, social content, and print collateral."
  },
  {
    id: "bark2earth", tab: "brand", type: "case", featured: true,
    name: "Bark 2 Earth", industry: "Pet Treats & Wellness · 0→1 Brand", platform: "Brand Identity",
    role: "Branding · Packaging · Web",
    desc: "Shelf-ready packaging and a matching site for a natural pet-treats brand.",
    image: "images/b-bark2earth.jpg",
    challenge: "A natural pet-treats brand needed packaging and a site that could compete on a crowded shelf — physical and digital — against much bigger pet brands.",
    owned: ["Brand identity", "Packaging design system", "Website design"],
    scope: ["Logo", "Packaging (pouch + box)", "Site"],
    influence: "Pushed the \u201chead to tails\u201d tagline and paw-print mark to carry across every packaging SKU for shelf recognition.",
    outcome: "A consistent, shelf-ready identity across both product and digital touchpoints."
  },
  {
    id: "biona", tab: "brand", type: "case", featured: true,
    name: "Biona Coffee", industry: "Coffee · 0→1 Packaging", platform: "Brand Identity",
    role: "Branding · Packaging",
    desc: "An origin-first packaging system across roasts and single-origin lines.",
    image: "images/b-bionacoffee.jpg",
    challenge: "A coffee brand needed packaging that communicated origin — Peru, Colombia — and quality at a glance, on a shelf full of similar bags.",
    owned: ["Brand identity and packaging system across multiple origins & roasts"],
    scope: ["Logo", "Packaging design", "Color-coding system by origin"],
    influence: "Introduced a consistent origin/roast color-coding system across all SKUs.",
    outcome: "A packaging family that's easy to shop by origin at a glance."
  },

  /* ---------------- TAB 3 — GROWTH MARKETING CREATIVE ---------------- */
  {
    id: "feat", tab: "growth", type: "case", featured: true,
    name: "Feat Clothing", industry: "Apparel · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "A soft, sustainable-brand email system built for a fast drop cadence.",
    image: "images/email-feat.jpg",
    challenge: "A sustainable apparel brand needed weekly email campaigns that kept its soft, sustainable positioning without feeling repetitive.",
    owned: ["Email template design and campaign builds across drops, sales, and seasonal moments"],
    scope: ["Email design", "Light copy adaptation"],
    influence: "Built a modular template system so new drops could be turned around quickly without starting from scratch.",
    outcome: "A recognizable, on-brand email system that could be produced quickly across a high send cadence."
  },
  {
    id: "brumate", tab: "growth", type: "case", featured: true,
    name: "Brumate", industry: "Drinkware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "A color-driven email system for a drinkware catalog with dozens of SKUs.",
    image: "images/email-brumate.jpg",
    challenge: "A drinkware brand with dozens of colorways needed emails that could sell \u201cwhich color, which style\u201d as much as the product itself.",
    owned: ["Email campaign design across product launches, holidays, and always-on flows"],
    scope: ["Email design"],
    influence: "Standardized a colorway-grid module reused across nearly every campaign.",
    outcome: "A high-frequency email system built for a large, color-driven SKU catalog."
  },
  {
    id: "smithey", tab: "growth", type: "case", featured: true,
    name: "Smithey Ironware", industry: "Cookware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Brand storytelling emails mixed with product marketing for a heritage cookware brand.",
    image: "images/email-smithey.jpg",
    challenge: "A heritage cast-iron cookware brand needed emails that felt as crafted as the product, without leaning on generic DTC email tropes.",
    owned: ["Email campaign design, including maker-profile storytelling emails alongside product & sale emails"],
    scope: ["Email design"],
    influence: "Balanced the send calendar between brand storytelling and direct product marketing.",
    outcome: "An email system that mixes brand storytelling with product marketing."
  },
  {
    id: "12thtribe", tab: "growth", type: "case", featured: false,
    name: "12th Tribe", industry: "Apparel · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "A flexible template system for a fast-moving fashion brand.",
    image: "images/email-12thtribe.jpg",
    challenge: "A fast-moving fashion brand needed a high cadence of on-trend email campaigns.",
    owned: ["Email template design and campaign builds"],
    scope: ["Email design"],
    influence: "Kept a consistent modular grid so campaigns could flex between lookbook-style and sale-driven sends.",
    outcome: "A flexible template system built for a fast content cadence."
  },
  {
    id: "crimson-collateral", tab: "growth", type: "case", featured: true,
    name: "Crimson Agility Campaign Assets", industry: "B2B E-Commerce Agency · Internal", platform: "Digital Marketing",
    role: "Campaign Creative",
    desc: "A reusable ad-tile and social system across service lines and case studies.",
    image: "images/marketing-collateral-01.jpg",
    challenge: "Crimson Agility needed a consistent visual system for paid social, case-study promotion, and service-line marketing — audits, 2A commerce, compliance.",
    owned: ["Ad tile and social graphic system across multiple campaigns and service lines"],
    scope: ["Social ad templates", "Case-study promo graphics", "Service-line campaign assets"],
    influence: "Built the templates modular so non-designers on the team could swap copy without breaking the grid.",
    outcome: "A flexible, on-brand template system the internal team could reuse across campaigns.",
    gallery2: "images/marketing-collateral-02.jpg"
  },
];

/* Secondary "more brand work" gallery — lighter cards, image + name only */
const BRAND_GALLERY = [
  { name: "Brussel", tag: "Branding, Retail Branding", image: "images/b-brussel.jpg" },
  { name: "Emraw", tag: "Branding, Label Design", image: "images/b-emraw.jpg" },
  { name: "Cuida tu Mente", tag: "Branding, Retail Branding", image: "images/b-cuidatumente.jpg" },
  { name: "Bon Pops", tag: "Branding, Retail Branding", image: "images/b-bonpops.jpg" },
  { name: "Fryefit", tag: "Branding", image: "images/b-fryefit.jpg" },
  { name: "Casa Santafé Hostel", tag: "Branding, Signage Design", image: "images/b-casasantafe.jpg" },
  { name: "Garment Decor", tag: "Branding, Web Design", image: "images/b-garmentdecor.jpg" },
  { name: "Phila Cup Coffee", tag: "Logo, Packaging Design", image: "images/b-philacup.jpg" },
  { name: "Oggi Pizza", tag: "Branding, Retail Branding", image: "images/b-oggipizza.jpg" },
  { name: "Arépale", tag: "Branding, Menu Design", image: "images/b-arepale.jpg" },
  { name: "Sunset Coffee", tag: "Branding, Social Media", image: "images/b-sunsetcoffee-b.jpg" },
  { name: "Pawty Animals", tag: "Branding, Web, Packaging", image: "images/b-pawtyanimals.jpg" },
  { name: "Massalino Bakery", tag: "Branding, Retail Branding", image: "images/b-massalino.jpg" },
  { name: "Casa de Encantos", tag: "Branding, Packaging Design", image: "images/b-casadeencantos.jpg" },
  { name: "El Paraíso Heladería", tag: "Branding, 3D Visualisation", image: "images/b-elparaiso.jpg" },
  { name: "Disfruta", tag: "Branding, Interior Design", image: "images/b-disfruta.jpg" },
];

const CLIENT_NAMES = [
  "Crimson Agility","TK Elevator","Nueske's","BriskHeat","White Cap Foods",
  "Siege Suppressors","Professional's Choice","Brumate","Smithey Ironware",
  "Feat Clothing","12th Tribe","Riddy"
];

const TAB_COPY = {
  uiux: "High-converting storefronts and B2B platforms — Adobe Commerce, Shopify, BigCommerce, Shopware.",
  brand: "Strategy, logomark, typography, packaging, and retail guidelines — brands built from zero to one.",
  growth: "Email flows, social collateral, and promotional campaign assets for DTC brands."
};

/* ============================================================
   Render: client marquee
   ============================================================ */
const marqueeTrack = document.getElementById("marqueeTrack");
const marqueeItems = [...CLIENT_NAMES, ...CLIENT_NAMES]
  .map(n => `<span>${n}</span>`).join("");
marqueeTrack.innerHTML = marqueeItems;

/* ============================================================
   Render: project grid (tab-filtered)
   ============================================================ */
const grid = document.getElementById("projectGrid");
const tabDesc = document.getElementById("tabDesc");
const tabs = document.querySelectorAll(".tab");
let currentTab = "uiux";

function cardTemplate(p){
  return `
    <article class="card reveal-card" data-id="${p.id}">
      <div class="card-tags"><span class="card-tag">${p.role.split("·")[0].trim()}</span></div>
      <div class="card-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="card-body">
        <p class="card-role">${p.industry}</p>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <span class="card-cta">${p.type === "case" ? "view case study" : "view work"} <span class="btn-icon" style="width:18px;height:18px;font-size:10px;">↗</span></span>
      </div>
    </article>
  `;
}

function renderGrid(tab){
  const items = PROJECTS.filter(p => p.tab === tab);
  grid.className = "grid" + (items.length > 6 ? " is-dense" : "");
  grid.innerHTML = items.map(cardTemplate).join("");
  tabDesc.textContent = TAB_COPY[tab];

  // secondary gallery only on brand tab
  const existingSub = document.querySelector(".subgrid-wrap");
  if (existingSub) existingSub.remove();

  if (tab === "brand"){
    const wrap = document.createElement("div");
    wrap.className = "subgrid-wrap";
    wrap.innerHTML = `
      <div class="subgrid-head reveal">
        <p class="eyebrow">.more brand work</p>
        <p>A wider look at Alinea &amp; Crimson Agility branding projects — logo, packaging, and retail identity.</p>
      </div>
      <div class="subgrid" id="subgrid"></div>
    `;
    grid.insertAdjacentElement("afterend", wrap);
    const sub = wrap.querySelector("#subgrid");
    sub.innerHTML = BRAND_GALLERY.map((g,i) => `
      <div class="subcard" data-idx="${i}">
        <div class="subcard-media"><img src="${g.image}" alt="${g.name}" loading="lazy"></div>
        <div class="subcard-label">${g.name}</div>
      </div>
    `).join("");
    sub.querySelectorAll(".subcard").forEach(el => {
      el.addEventListener("click", () => openLightbox(BRAND_GALLERY[+el.dataset.idx]));
    });
    observeReveal(wrap.querySelectorAll(".reveal"));
    observeCards(sub.querySelectorAll(".subcard"));
  }

  grid.querySelectorAll(".card").forEach(el => {
    el.addEventListener("click", () => openCase(el.dataset.id));
  });
  observeCards(grid.querySelectorAll(".card"));
}

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
    btn.classList.add("active"); btn.setAttribute("aria-selected","true");
    currentTab = btn.dataset.tab;
    renderGrid(currentTab);
  });
});

/* ============================================================
   Modal — case study + lightbox
   ============================================================ */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function openCase(id){
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  modal.classList.remove("lightbox");

  if (p.type === "gallery"){
    modal.classList.add("lightbox");
    modalContent.innerHTML = `
      <img class="lightbox-img" src="${p.image}" alt="${p.name}">
      <div class="lightbox-caption"><b>${p.name}</b>${p.caption}</div>
    `;
    openModal();
    return;
  }

  modalContent.innerHTML = `
    <div class="cs-media"><img src="${p.image}" alt="${p.name}"></div>
    <div class="cs-body">
      <div class="cs-head">
        <div class="cs-head-item">client<b>${p.name}</b></div>
        <div class="cs-head-item">industry<b>${p.industry}</b></div>
        <div class="cs-head-item">platform<b>${p.platform}</b></div>
        <div class="cs-head-item">role<b>${p.role}</b></div>
      </div>

      <div class="cs-section">
        <p class="cs-label">.the business challenge</p>
        <p class="cs-text">${p.challenge}</p>
      </div>

      <div class="cs-section">
        <p class="cs-label">.ownership</p>
        <div class="cs-ownership">
          <div class="cs-owner-col">
            <h4>owned</h4>
            <ul>${p.owned.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>
          <div class="cs-owner-col">
            <h4>scope</h4>
            <ul>${p.scope.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>
          <div class="cs-owner-col">
            <h4>influence</h4>
            <ul><li>${p.influence}</li></ul>
          </div>
        </div>
      </div>

      ${p.gallery2 ? `
      <div class="cs-section">
        <p class="cs-label">.more from this campaign</p>
        <div class="cs-gallery"><img src="${p.gallery2}" alt="${p.name} additional work"></div>
      </div>` : ""}

      <div class="cs-section">
        <p class="cs-label">.outcome &amp; impact</p>
        <p class="cs-text">${p.outcome}</p>
      </div>

      <div class="cs-note">Have a live Figma prototype for this project? Drop the embed link here so hiring managers can click through the real file — this space is ready for it.</div>
    </div>
  `;
  openModal();
}

function openLightbox(item){
  modal.classList.add("lightbox");
  modalContent.innerHTML = `
    <img class="lightbox-img" src="${item.image}" alt="${item.name}">
    <div class="lightbox-caption"><b>${item.name}</b>${item.tag}</div>
  `;
  openModal();
}

function openModal(){
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============================================================
   Scroll reveal
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveal(nodeList){
  nodeList.forEach(el => revealObserver.observe(el));
}

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry,i) => {
    if (entry.isIntersecting){
      setTimeout(() => entry.target.classList.add("is-in"), i * 60);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards(nodeList){
  nodeList.forEach(el => cardObserver.observe(el));
}

/* ============================================================
   Theme toggle
   ============================================================ */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("felix-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("felix-theme", next);
});

/* ============================================================
   Nav shadow on scroll (subtle)
   ============================================================ */
const nav = document.getElementById("siteNav");
window.addEventListener("scroll", () => {
  nav.style.top = window.scrollY > 40 ? "12px" : "18px";
}, { passive: true });

/* ============================================================
   Footer year
   ============================================================ */
document.querySelector(".footer-note").innerHTML =
  document.querySelector(".footer-note").innerHTML.replace("{YEAR}", new Date().getFullYear());

/* ============================================================
   Init
   ============================================================ */
renderGrid(currentTab);
observeReveal(document.querySelectorAll(".hero .reveal, .clients .eyebrow, .work-head, .tabs, .tab-desc, .about .reveal, .contact .reveal"));
