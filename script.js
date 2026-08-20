/* ============================================================
   FÉLIX PATETE — PORTFOLIO
   Project data acts as the "CMS collection" — edit this array
   to add, remove, or update case studies. No build step needed.
   ============================================================ */

/* ============================================================
   TAB COPY
   ============================================================ */
const TAB_COPY = {
  uiux: "High-conversion e-commerce storefronts and complex B2B catalogs, designed to scale — Adobe Commerce, Shopify, BigCommerce, and Shopware.",
  brand: "0→1 identity systems — brand strategy, typography, packaging, and retail interiors built to last.",
  growth: "Visual strategy for digital marketing — email flows, high-performing ad creative, and campaign assets built for DTC retention and conversion."
};

/* ============================================================
   CLIENTS — marquee strip
   ============================================================ */
const CLIENTS = [
  "Crimson Agility", "Nueske's", "TK Elevator", "White Cap Foods",
  "Accutech", "Denali Leather Goods", "Bark 2 Earth", "Biona Coffee",
  "Feat Clothing", "Brumate", "Smithey Ironware", "12th Tribe",
  "Wolven Threads", "Lifeboost Coffee"
];

/* ============================================================
   PROJECTS — full case studies (grid + modal)

   metrics: 2 honest, scope-based numbers pulled directly from the
   work itself (catalog size, flows shipped, steps redesigned).
   These are NOT business outcomes — see the "outcome" field and
   the .cs-note in the modal for where to drop in real analytics
   once you have client-approved numbers to share.
   ============================================================ */
const PROJECTS = [

  /* ---------------- TAB 1 — UI/UX & E-COMMERCE ---------------- */
  {
    id: "accutech", tab: "uiux", type: "case", featured: true,
    name: "Accutech", industry: "IT Hardware & Data Storage · B2B", platform: "Adobe Commerce",
    role: "UX Design · Figma Prototyping",
    desc: "Restructured a 15,000-SKU B2B catalog for faster corporate purchasing decisions.",
    image: "images/proj-accutech.jpg",
    challenge: "IT procurement teams had to compare thousands of technical storage SKUs, but deep, inconsistent category navigation buried the specs they needed to make a decision.",
    owned: [
      "Architected the storefront navigation and PLP/PDP layout in Figma for a 15,000-SKU technical catalog",
      "Designed advanced filtering logic so buyers could narrow by spec, not just category",
      "Structured the PDP around comparison-critical technical specs instead of lifestyle imagery"
    ],
    scope: ["Homepage merchandising", "Category navigation", "Cart flow"],
    influence: "Proposed a simplified featured-products module for the homepage to shorten the path to the highest-turnover SKUs — adopted for the final build.",
    outcome: "A navigation system built for how IT buyers actually shop: spec-first, comparison-ready, and fast to scan across a catalog too large to browse by category alone.",
    metrics: [
      { value: "15K+", label: "SKUs restructured" },
      { value: "3", label: "surfaces redesigned" }
    ]
  },
  {
    id: "nueskes", tab: "uiux", type: "case", featured: true,
    name: "Nueske's", industry: "Specialty Foods · Smoked Meats DTC", platform: "Adobe Commerce",
    role: "UX Design · Merchandising",
    desc: "Rebuilt the DTC storefront to support gifting, seasonality, and premium positioning.",
    image: "images/proj-nueskes.jpg",
    challenge: "A century-old smoked-meats brand needed a digital storefront that matched its premium in-store reputation, while handling a large catalog, gift flows, and seasonal demand spikes.",
    owned: [
      "Redesigned category and product detail pages to lead with food photography and provenance",
      "Streamlined cart and checkout UX to reduce friction during gifting and subscription purchases",
      "Built seasonal and gift-focused merchandising modules for the homepage and PDP"
    ],
    scope: ["Homepage", "PLP / PDP", "Cart"],
    influence: "Introduced recipe-based cross-sell modules that connect products to real cooking occasions instead of generic \"related items.\"",
    outcome: "A storefront built to turn gastronomic browsing into orders — recipe-driven cross-sell and seasonal merchandising designed to support average order value and repeat purchases.",
    metrics: [
      { value: "3", label: "core flows rebuilt" },
      { value: "Recipe-led", label: "cross-sell model" }
    ]
  },
  {
    id: "tke", tab: "uiux", type: "case", featured: true,
    name: "TK Elevator", industry: "Industrial Elevator Parts · B2B", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "Designed a 2-click part-lookup flow for maintenance technicians.",
    image: "images/proj-tke.jpg",
    challenge: "Field technicians needed to find the exact replacement part by technical spec — in the field, without wading through a catalog built for casual browsing.",
    owned: [
      "Designed B2B storefront UX for an industrial spare-parts catalog",
      "Built PDPs with interactive technical spec tables in place of standard marketing copy",
      "Added a \"frequently bought together\" module for common repair bundles"
    ],
    scope: ["Category navigation", "Product detail page"],
    influence: "Pushed for spec data above the fold on the PDP instead of lifestyle imagery — matched how technicians actually search, not how most B2B templates are built.",
    outcome: "A parts catalog technicians can search by spec in two clicks instead of browsing categories — built for speed under field conditions.",
    metrics: [
      { value: "2-click", label: "part lookup flow" },
      { value: "Spec-first", label: "PDP layout" }
    ]
  },
  {
    id: "whitecap", tab: "uiux", type: "case", featured: true,
    name: "White Cap Foods", industry: "Foodservice Distribution · B2B", platform: "Figma → HTML/CSS",
    role: "Design System",
    desc: "Shipped a full e-commerce design system with static HTML/CSS handoff for engineering.",
    image: "images/proj-whitecap.jpg",
    challenge: "A foodservice distributor's B2B customers needed fast reordering and a credit application process that wasn't scaring off new accounts partway through.",
    owned: [
      "Built a complete design system in Figma — homepage, mega menu, cart, and account",
      "Delivered static HTML/CSS markup so engineering could implement without a rebuild",
      "Redesigned the commercial credit application as a stepped, lower-friction flow"
    ],
    scope: ["Mega menu IA", "Reorder flow", "B2B credit application"],
    influence: "Restructured the credit form into logical steps specifically to cut abandonment on new B2B account signups.",
    outcome: "A modular, engineering-ready design system built for reuse — plus a credit application flow designed to keep new accounts from dropping off partway through.",
    metrics: [
      { value: "4", label: "systems shipped" },
      { value: "Stepped", label: "credit form redesign" }
    ]
  },

  /* ---------------- TAB 2 — BRAND IDENTITY ---------------- */
  {
    id: "denali", tab: "brand", type: "case", featured: true,
    name: "Denali Leather Goods", industry: "Leather Goods · Brand 0→1", platform: "Brand Identity",
    role: "Brand Strategy · Identity System",
    desc: "Built a 0→1 identity durable enough for hide-stamping and screens alike.",
    image: "images/b-denali.jpg",
    challenge: "A new leather-goods brand needed an identity that read as elegant and durable without leaning on category clichés — and had to survive being heat-stamped into leather, not just displayed on a screen.",
    owned: [
      "Designed the full visual system — wordmark, seal mark, and typography",
      "Extended the system across print, packaging, and digital applications"
    ],
    scope: ["Logo suite", "Brand style guide", "Social templates", "Stationery"],
    influence: "Defined a primary monochrome palette specifically so the mark stays legible whether it's heat-stamped into leather or rendered on a screen.",
    outcome: "A cohesive, versatile brand ready to scale across physical production and e-commerce channels.",
    metrics: [
      { value: "4", label: "deliverables — logo → stationery" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },
  {
    id: "bark2earth", tab: "brand", type: "case", featured: true,
    name: "Bark 2 Earth", industry: "Pet Treats & Wellness · Brand 0→1", platform: "Brand Identity",
    role: "Branding · Packaging · Web",
    desc: "Took a pet-wellness brand from logo to shelf-ready packaging to storefront.",
    image: "images/b-bark2earth.jpg",
    challenge: "A natural pet-treats brand needed to stand out on crowded physical and digital shelves against established competitors.",
    owned: [
      "Designed the brand identity system",
      "Built the packaging system across the full product line",
      "Designed the e-commerce website"
    ],
    scope: ["Logo", "Packaging (pouch + box)", "Web design"],
    influence: "Established a unified color code and graphic pattern system to keep brand recognition consistent across every product line.",
    outcome: "A shelf-ready visual identity that signals natural origin and builds consumer trust at the point of purchase.",
    metrics: [
      { value: "3", label: "disciplines — logo, packaging, web" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },
  {
    id: "biona", tab: "brand", type: "case", featured: true,
    name: "Biona Coffee", industry: "Coffee · Packaging 0→1", platform: "Brand Identity",
    role: "Branding · Packaging",
    desc: "Built an origin-coded packaging system across multiple roasts and countries.",
    image: "images/b-bionacoffee.jpg",
    challenge: "A specialty coffee brand needed packaging that communicated origin (Peru, Colombia) and craft quality instantly, at a shelf glance.",
    owned: [
      "Designed the visual identity and packaging line across multiple origins and roast levels"
    ],
    scope: ["Logo", "Packaging design", "Origin-based color + illustration system"],
    influence: "Designed a labeling and color system by origin so shoppers can make a fast, confident purchase decision at shelf.",
    outcome: "A cohesive, standout packaging family that reinforces the product's premium positioning.",
    metrics: [
      { value: "Multi-origin", label: "packaging system" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },

  /* ---------------- TAB 3 — GROWTH MARKETING CREATIVE ---------------- */
  {
    id: "feat", tab: "growth", type: "case", featured: true,
    name: "Feat Clothing", industry: "Apparel · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Built a modular email system to support weekly drops without wearing down the brand's aesthetic.",
    image: "images/email-feat.jpg",
    challenge: "Sustaining a high weekly send cadence without eroding the brand's soft, sustainable visual identity.",
    owned: [
      "Designed templates and campaigns for product launches, seasonal offers, and automated flows"
    ],
    scope: ["Email design", "Copy-to-visual adaptation"],
    influence: "Built a modular system of reusable Figma blocks that cut production time per campaign.",
    outcome: "A consistent, fast-moving visual system that supports a high publishing cadence without losing audience engagement.",
    metrics: [
      { value: "Weekly", label: "send cadence supported" },
      { value: "Modular", label: "reusable Figma blocks" }
    ]
  },
  {
    id: "brumate", tab: "growth", type: "case", featured: true,
    name: "Brumate", industry: "Drinkware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Designed color-forward campaigns to showcase a wide multi-variant catalog.",
    image: "images/email-brumate.jpg",
    challenge: "Presenting many color variants and products attractively within high-volume conversion campaigns.",
    owned: [
      "Designed campaigns for launches, holidays, and seasonal promotions"
    ],
    scope: ["Email design"],
    influence: "Standardized grid modules specifically for color variants, making fast visual comparison possible inside the email.",
    outcome: "An efficient email system built to drive conversion across a catalog with high SKU-variant density.",
    metrics: [
      { value: "Grid system", label: "for color-variant SKUs" },
      { value: "Seasonal", label: "campaign calendar" }
    ]
  },
  {
    id: "crimson-collateral", tab: "growth", type: "case", featured: true,
    name: "Crimson Agility Campaign Assets", industry: "B2B E-Commerce Agency", platform: "Digital Marketing",
    role: "Campaign Creative",
    desc: "Built a reusable ad-tile and social system for B2B e-commerce services marketing.",
    image: "images/marketing-collateral-01.jpg",
    challenge: "Needed a coherent graphic identity for paid campaigns and B2B promotions covering e-commerce audits and compliance services.",
    owned: [
      "Built a system of ad templates and social content spanning multiple service lines"
    ],
    scope: ["Ad templates", "Case-study promo graphics", "Campaign visual assets"],
    influence: "Built modular templates the internal team could update with new copy and imagery without breaking layout or brand consistency.",
    outcome: "A versatile marketing asset kit that professionalized the agency's paid and social presence.",
    metrics: [
      { value: "Template system", label: "ads + social" },
      { value: "Multi-service", label: "campaign coverage" }
    ]
  }
];

/* ============================================================
   BRAND_GALLERY — lighter, logo-first identity work
   (opens as a captioned image, not a full case study)
   ============================================================ */
const BRAND_GALLERY = [
  { id: "massalino", tab: "brand", type: "gallery", name: "Massalino Bakery", image: "images/b-massalino.jpg", caption: " · Branding, packaging, and retail signage for an Italian-style bakery." },
  { id: "sunset-coffee", tab: "brand", type: "gallery", name: "Sunset Coffee", image: "images/b-sunsetcoffee.jpg", caption: " · Branding and packaging for a specialty coffee line." },
  { id: "el-paraiso", tab: "brand", type: "gallery", name: "El Paraíso Heladería", image: "images/b-elparaiso.jpg", caption: " · Branding, packaging, and 3D visualization for an ice cream brand." },
  { id: "casa-encantos", tab: "brand", type: "gallery", name: "Casa de Encantos — Tea House", image: "images/b-casadeencantos.jpg", caption: " · Branding and packaging for a boutique tea house line." },
  { id: "fryefit", tab: "brand", type: "gallery", name: "Fryefit", image: "images/b-fryefit.jpg", caption: " · Brand identity for a faith-and-fitness apparel line." },
  { id: "garment-decor", tab: "brand", type: "gallery", name: "Garment Decor", image: "images/b-garmentdecor.jpg", caption: " · Branding, brand guidelines, and web design for a garment printing company." },
  { id: "phila-cup", tab: "brand", type: "gallery", name: "Phila Cup Coffee", image: "images/b-philacup.jpg", caption: " · Logo and packaging design for a Philadelphia coffee brand." },
  { id: "bon-pops", tab: "brand", type: "gallery", name: "Bon Pops", image: "images/b-bonpops.jpg", caption: " · Branding and retail branding for a frozen-pop retail concept." }
];

/* ============================================================
   Tabs + grid rendering
   ============================================================ */
let currentTab = "uiux";

const tabsEl = document.getElementById("tabs");
const tabDescEl = document.getElementById("tabDesc");
const gridEl = document.getElementById("projectGrid");
const subgridHeadEl = document.getElementById("subgridHead");
const brandGalleryEl = document.getElementById("brandGallery");

function metricsHTML(metrics){
  if (!metrics || !metrics.length) return "";
  return `<div class="card-metrics">${metrics.map(m => `
    <div><span class="metric-value">${m.value}</span><span class="metric-label">${m.label}</span></div>
  `).join("")}</div>`;
}

function cardHTML(p){
  return `
    <div class="card-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
    <div class="card-tags"><span class="card-tag">${p.platform}</span></div>
    <div class="card-body">
      <p class="card-role">${p.role}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.desc}</p>
      ${metricsHTML(p.metrics)}
      <span class="card-cta">view case study <span class="btn-icon" style="width:18px;height:18px;font-size:10px;">↗</span></span>
    </div>
  `;
}

function renderGrid(tab){
  gridEl.innerHTML = "";
  gridEl.classList.toggle("is-dense", tab !== "uiux");

  PROJECTS
    .filter(p => p.tab === tab)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = cardHTML(p);
      card.addEventListener("click", () => openCase(p.id));
      gridEl.appendChild(card);
    });

  observeCards(gridEl.querySelectorAll(".card"));

  const isBrand = tab === "brand";
  subgridHeadEl.hidden = !isBrand;
  brandGalleryEl.innerHTML = "";
  if (isBrand){
    BRAND_GALLERY.forEach(p => {
      const el = document.createElement("div");
      el.className = "subcard";
      el.innerHTML = `
        <div class="subcard-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="subcard-label">${p.name}</div>
      `;
      el.addEventListener("click", () => openCase(p.id));
      brandGalleryEl.appendChild(el);
    });
    observeCards(brandGalleryEl.querySelectorAll(".subcard"));
  }
}

tabsEl.querySelectorAll(".tab").forEach(tabBtn => {
  tabBtn.addEventListener("click", () => {
    const tab = tabBtn.dataset.tab;
    if (tab === currentTab) return;
    currentTab = tab;

    tabsEl.querySelectorAll(".tab").forEach(t => {
      const isActive = t === tabBtn;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    tabDescEl.textContent = TAB_COPY[tab];
    renderGrid(tab);
  });
});

/* ============================================================
   Clients marquee
   ============================================================ */
function populateMarquee(){
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const doubled = [...CLIENTS, ...CLIENTS]; // duplicated for the seamless -50% loop
  track.innerHTML = doubled.map(name => `<span>${name}</span>`).join("");
}

/* ============================================================
   Modal — case study + lightbox
   ============================================================ */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function openCase(id){
  const p = PROJECTS.find(x => x.id === id) || BRAND_GALLERY.find(x => x.id === id);
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

      ${p.metrics ? `<div class="cs-metrics">${p.metrics.map(m => `
        <div><span class="metric-value">${m.value}</span><span class="metric-label">${m.label}</span></div>
      `).join("")}</div>` : ""}

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

      <div class="cs-note"><b>Have real numbers for this project?</b> Conversion lift, AOV change, time-to-purchase, client feedback — drop them into the "outcome" field in script.js. Verified metrics will do more for you with recruiters than any copy I can write for you. Also a good spot for a live Figma prototype embed link, if you have one.</div>
    </div>
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
// Reveal-on-scroll runs first and independently — a bug in the
// project data or grid rendering below should never be able to
// blank out the rest of the page.
observeReveal(document.querySelectorAll(".hero .reveal, .clients .eyebrow, .work-head, .tabs, .tab-desc, .about .reveal, .contact .reveal"));

try {
  tabDescEl.textContent = TAB_COPY[currentTab];
  populateMarquee();
  renderGrid(currentTab);
} catch (err){
  console.error("Félix portfolio — failed to render tabs/grid/marquee:", err);
}
