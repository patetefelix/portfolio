/* ============================================================
   FÉLIX PATETE — PORTFOLIO
   Project data acts as the "CMS collection" — edit this array
   to add, remove, or update case studies. No build step needed.

   Ordering note: within each tab, clients worked with through
   Crimson Agility (Sept 2023–present) are listed first, since
   that's Félix's current and most senior-scope work. Everything
   after that follows the tiered "importance" list, largest/most
   prominent companies first.
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
   CLIENTS — marquee strip, ordered by company scale/prominence
   (Tier 1 = global mega-corporations, down to Tier 5 = boutique
   and 0→1 brands), names capitalized.
   ============================================================ */
const CLIENTS = [
  // Tier 1 — global industrial giants & mega-corporations
  "TK Elevator", "Caplugs", "Frontier Co-op",
  // Tier 2 — large national enterprises, healthcare & high-volume distributors
  "PT Solutions", "AFG Distribution", "BrüMate", "Hoveround Mobility Solutions",
  "Oklahoma Correctional Industries", "BriskHeat", "High Speed Gear", "Nueske's", "White Cap Foods",
  // Tier 3 — category leaders, high-growth DTC & specialized manufacturers
  "Professional's Choice", "Zip Corvette", "Feat Clothing", "Smithey Ironware", "12th Tribe",
  "Accutech", "Emraw", "Icarus Precision", "Siege Suppressors", "Phoenix Medical Instruments", "Live Q Or Die",
  // Tier 4 — growing DTC brands, niche B2B & digital agencies
  "Crimson Agility", "Riddy", "Rugged Suppressors", "Garment Decor", "Denali Leather Goods",
  "Bark 2 Earth", "Klassen Farm Products",
  // Tier 5 — boutique regional brands, hospitality & 0→1 startups
  "Massalino Bakery", "Brüssel", "Oggi Pizza", "Arépale", "Disfruta", "Casa Santafé Hostel",
  "Bon Pops", "Cuida tu Mente", "Biona Coffee", "Sunset Coffee", "Casa de Encantos Tea House",
  "Phila Cup Coffee", "El Paraíso Heladería", "Pawty Animals", "Fryefit",
  "Rasa", "Tiny Rituals", "Static Nails"
];

/* ============================================================
   PROJECTS — full case studies (grid + modal)

   thumbnail → card hero image. gallery → full set of images shown
   in the project-view modal, in order. Clients without new image
   filenames yet fall back to their single existing image for both
   — swap in real thumbnail/gallery paths as soon as they're named
   and dropped into /images.

   desc + scope are kept short and factual — a one-line summary and
   a plain list of what was actually designed. No invented business
   outcomes or narrative copy.
   ============================================================ */
const PROJECTS = [

  /* ================= TAB 1 — UI/UX & E-COMMERCE =================
     Crimson Agility clients first (current, senior-scope work),
     then the rest of the roster by prominence. */

  {
    id: "tke", tab: "uiux", type: "case", featured: true,
    name: "TK Elevator", industry: "Industrial Elevator Parts · B2B · Crimson Agility", platform: "Adobe Commerce", techStack: "Magento 2 / Enterprise B2B",
    role: "UX Design · Technical PDP",
    desc: "Designed a 2-click part-lookup flow for maintenance technicians.",
    thumbnail: "images/tke-thumb.png",
    gallery: ["images/tke-01.png", "images/tke-02.png", "images/tke-03.png", "images/tke-04.png", "images/tke-05.png", "images/tke-06.png"],
    scope: ["Category navigation", "Product detail page", "Frequently-bought-together module"]
  },
  {
    id: "nueskes", tab: "uiux", type: "case", featured: true,
    name: "Nueske's", industry: "Specialty Foods · Smoked Meats DTC · Crimson Agility", platform: "Custom E-Commerce", techStack: "Proprietary PHP Engine",
    role: "UX Design · Merchandising",
    desc: "Rebuilt the DTC storefront to support gifting, seasonality, and premium positioning.",
    thumbnail: "images/nueskes-thumb.png",
    gallery: ["images/nueskes-01.png", "images/nueskes-02.png", "images/nueskes-03.png", "images/nueskes-04.png", "images/nueskes-05.png", "images/nueskes-06.png", "images/nueskes-07.png"],
    scope: ["Homepage", "PLP / PDP", "Cart", "Gift & seasonal merchandising modules"]
  },
  {
    id: "accutech", tab: "uiux", type: "case", featured: true,
    name: "Accutech", industry: "IT Hardware & Data Storage · B2B · Crimson Agility", platform: "Adobe Commerce", techStack: "Enterprise B2B Catalog",
    role: "UX Design · Figma Prototyping",
    desc: "Restructured a 15,000-SKU B2B catalog for faster corporate purchasing decisions.",
    thumbnail: "images/accutech-thumb.png",
    gallery: ["images/accutech-01.png", "images/accutech-02.png", "images/accutech-03.png", "images/accutech-04.png", "images/accutech-05.png", "images/accutech-06.png", "images/accutech-07.png"],
    scope: ["Homepage merchandising", "Category navigation", "Spec-based filtering", "Cart flow"]
  },
  {
    id: "whitecap", tab: "uiux", type: "case", featured: true,
    name: "White Cap Foods", industry: "Foodservice Distribution · B2B · Crimson Agility", platform: "Figma → HTML/CSS",
    role: "Design System",
    desc: "Shipped a full e-commerce design system with static HTML/CSS handoff for engineering.",
    thumbnail: "images/whitecap-thumb.png",
    gallery: ["images/whitecap-01.png", "images/whitecap-02.png", "images/whitecap-03.png", "images/whitecap-04.png", "images/whitecap-05.png", "images/whitecap-06.png", "images/whitecap-07.png"],
    scope: ["Homepage", "Mega menu", "Cart / checkout", "Account page", "B2B credit application flow"]
  },
  {
    id: "briskheat", tab: "uiux", type: "case", featured: true,
    name: "BriskHeat", industry: "Industrial Heating Equipment · Global Manufacturer · Crimson Agility", platform: "Adobe Commerce", techStack: "Magento 2 / Custom Industrial Configurator",
    role: "UX Design · Storefront & Checkout",
    desc: "Redesigned the storefront and checkout for a global industrial heating equipment leader.",
    thumbnail: "images/briskheat-thumb.png",
    gallery: ["images/briskheat-01.png", "images/briskheat-02.png", "images/briskheat-03.png", "images/briskheat-04.png", "images/briskheat-05.png", "images/briskheat-06.png", "images/briskheat-07.png"],
    scope: ["Homepage", "Category navigation", "Checkout", "Seasonal campaign modules"]
  },
  {
    id: "siege", tab: "uiux", type: "case", featured: true,
    name: "Siege Suppressors", industry: "Firearms & Tactical Equipment · DTC · Crimson Agility", platform: "Shopify", techStack: "Shopify Core", liveUrl: "https://siegesuppressors.com/",
    role: "UX Design · Technical PDP",
    desc: "Designed spec-heavy PDPs and an educational content system for a precision suppressor brand.",
    thumbnail: "images/siege-thumb.png",
    gallery: ["images/siege-01.png", "images/siege-02.png", "images/siege-03.png", "images/siege-04.png", "images/siege-05.png", "images/siege-06.png", "images/siege-07.png"],
    scope: ["Category / PLP", "Product detail page", "Educational content template"]
  },
  {
    id: "riddy", tab: "uiux", type: "case", featured: true,
    name: "Riddy", industry: "Lawn Care & Pest Control · DTC Subscription · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Subscription Flow",
    desc: "Designed a plan-builder subscription flow for a DTC lawn care and pest control brand.",
    thumbnail: "images/riddy-thumb.png",
    gallery: ["images/riddy-01.png", "images/riddy-02.png", "images/riddy-03.png", "images/riddy-04.png", "images/riddy-05.png"],
    scope: ["Subscription plan builder", "Homepage", "Cart / checkout"]
  },
  {
    id: "professionalschoice", tab: "uiux", type: "case", featured: true,
    name: "Professional's Choice", industry: "Equestrian Sports Medicine · Category Leader", platform: "Web Shop Manager", techStack: "Specialized Equine E-Commerce",
    role: "UX Design · Catalog & PDP",
    desc: "Designed the storefront for the category leader in equestrian sports medicine and horse tack.",
    thumbnail: "images/profchoice-thumb.png",
    gallery: ["images/profchoice-01.png", "images/profchoice-02.png", "images/profchoice-03.png", "images/profchoice-04.png", "images/profchoice-05.png", "images/profchoice-06.png", "images/profchoice-07.png", "images/profchoice-08.png"],
    scope: ["Category / PLP", "Product detail page", "Education content"]
  },
  {
    id: "caplugs", tab: "uiux", type: "case",
    name: "Caplugs", industry: "Custom Plastic Molding & Industrial Protection · Global Manufacturer", platform: "Adobe Commerce", techStack: "Magento Enterprise / B2B", liveUrl: "https://www.caplugs.com/",
    role: "UX Design",
    desc: "Storefront UX for a global leader in custom plastic molding and masking solutions.",
    thumbnail: "images/caplugs-thumb.png",
    gallery: ["images/caplugs-01.png", "images/caplugs-02.png", "images/caplugs-03.png", "images/caplugs-04.png", "images/caplugs-05.png", "images/caplugs-06.png"],
    scope: ["Category navigation", "Product detail page"]
  },
  {
    id: "frontier-coop", tab: "uiux", type: "case",
    name: "Frontier Co-op", industry: "Natural Products Cooperative · DTC", platform: "Adobe Commerce", techStack: "Magento Enterprise / Acquia",
    role: "UX Design",
    desc: "Storefront UX for the co-op behind billion-dollar natural product brands like Simply Organic and Aura Cacia.",
    thumbnail: "images/frontier-thumb.png",
    gallery: ["images/frontier-01.png", "images/frontier-02.png", "images/frontier-03.png"],
    scope: ["Homepage", "Category navigation"]
  },
  {
    id: "pt-solutions", tab: "uiux", type: "case",
    name: "PT Solutions", industry: "Physical Therapy Healthcare Network", platform: "WordPress / Custom", techStack: "Healthcare CMS & Epic EMR",
    role: "UX Design",
    desc: "Digital UX for a national physical therapy network with hundreds of clinical locations.",
    thumbnail: "images/pst-thumb.png",
    gallery: ["images/pst-01.png", "images/pst-02.png", "images/pst-03.png", "images/pst-04.png"],
    scope: ["Location finder", "Appointment request flow"]
  },
  {
    id: "afg-distribution", tab: "uiux", type: "case",
    name: "AFG Distribution", industry: "B2B Wholesale Distribution", platform: "Custom B2B", techStack: "Custom Wholesale E-Commerce Portal",
    role: "UX Design",
    desc: "B2B storefront UX for one of North America's largest wholesale distributors in its category.",
    thumbnail: "images/afg-thumb.png",
    gallery: ["images/afg-02.png", "images/afg-03.png"],
    scope: ["Category navigation", "Bulk order flow"]
  },
  {
    id: "hoveround", tab: "uiux", type: "case",
    name: "Hoveround Mobility Solutions", industry: "Medical Devices · Power Mobility · DTC", platform: "Custom Web", techStack: "AngularJS / Custom Portal", liveUrl: "https://www.hoveround.com/",
    role: "UX Design",
    desc: "DTC storefront UX for an iconic national power wheelchair manufacturer.",
    thumbnail: "images/hoveround-thumb.png",
    gallery: ["images/hoveround-01.png", "images/hoveround-02.png", "images/hoveround-03.png", "images/hoveround-04.png", "images/hoveround-05.png", "images/hoveround-06.png"],
    scope: ["Product selection flow", "Informational content pages"]
  },
  {
    id: "oci", tab: "uiux", type: "case",
    name: "Oklahoma Correctional Industries", industry: "State Government Manufacturing & Industrial Supply", platform: "Gov CMS (Drupal)", techStack: "Enterprise Government Portal",
    role: "UX Design",
    desc: "B2B storefront UX for a state government manufacturing and industrial supply enterprise.",
    thumbnail: "images/oci-thumb.png",
    gallery: ["images/oci-01.png", "images/oci-02.png", "images/oci-03.png", "images/oci-04.png"],
    scope: ["Category navigation", "B2B ordering flow"]
  },
  {
    id: "hsgi", tab: "uiux", type: "case",
    name: "High Speed Gear", industry: "Tactical Gear · DTC", platform: "Shopify Plus", techStack: "Shopify Enterprise",
    role: "UX Design",
    desc: "DTC storefront UX for a premier tactical gear manufacturer serving military, law enforcement, and civilian markets.",
    thumbnail: "images/highspeed-thumb.png",
    gallery: ["images/highspeed-01.png", "images/highspeed-02.png", "images/highspeed-03.png"],
    scope: ["Category navigation", "Product detail page"]
  },
  {
    id: "zip-corvette", tab: "uiux", type: "case",
    name: "Zip Corvette", industry: "Corvette Restoration Parts & Performance", platform: "Adobe Commerce", techStack: "Magento 2 / B2C Catalog", comingSoon: true,
    role: "UX Design",
    desc: "E-commerce UX for the leading US authority in Corvette restoration parts.",
    thumbnail: "images/zipcorvette-thumb.png",
    gallery: ["images/zipcorvette-01.png", "images/zipcorvette-02.png"],
    scope: ["Category / fitment filtering", "Product detail page"]
  },
  {
    id: "icarus-precision", tab: "uiux", type: "case",
    name: "Icarus Precision", industry: "Precision CNC Machining · Firearm Components", platform: "Shopify", techStack: "Shopify Core", comingSoon: true,
    role: "UX Design",
    desc: "DTC storefront UX for a high-precision CNC machining and firearm grip module brand.",
    thumbnail: "images/icarus-thumb.png",
    gallery: ["images/icarus-01.png", "images/icarus-02.png", "images/icarus-03.png", "images/icarus-04.png", "images/icarus-05.png", "images/icarus-06.png"],
    scope: ["Product detail page", "Category navigation"]
  },
  {
    id: "live-q-or-die", tab: "uiux", type: "case",
    name: "Live Q Or Die (Q)", industry: "Firearms & Suppressors · DTC", platform: "Shopify", techStack: "Shopify Core", liveUrl: "https://www.liveqordie.com/",
    role: "UX Design",
    desc: "DTC storefront UX for a firearms and suppressor manufacturer known for the Honey Badger platform.",
    thumbnail: "images/livq-thumb.png",
    gallery: ["images/livq-01.png", "images/livq-02.png", "images/livq-03.png", "images/livq-04.png", "images/livq-05.png", "images/livq-06.png", "images/livq-07.png"],
    scope: ["Category navigation", "Product detail page"]
  },
  {
    id: "phoenix-medical", tab: "uiux", type: "case",
    name: "Phoenix Medical Instruments", industry: "Surgical Instruments & Healthcare Equipment · B2B", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "B2B storefront UX for a specialized manufacturer of surgical instruments.",
    thumbnail: "images/phoenix-thumb.png",
    gallery: ["images/phoenix-01.png", "images/phoenix-02.png", "images/phoenix-03.png"],
    scope: ["Category navigation", "Product detail page"]
  },
  {
    id: "rugged-suppressors", tab: "uiux", type: "case",
    name: "Rugged Suppressors", industry: "Firearm Suppressors & Accessories · DTC", platform: "Shopify", techStack: "Shopify Core", liveUrl: "https://www.ruggedsuppressors.com/",
    role: "UX Design",
    desc: "E-commerce UX for a firearm suppressor manufacturer and retailer.",
    thumbnail: "images/rugged-thumb.png",
    gallery: ["images/rugged-01.png", "images/rugged-02.png", "images/rugged-03.png", "images/rugged-04.png", "images/rugged-05.png", "images/rugged-06.png", "images/rugged-07.png"],
    scope: ["Category navigation", "Product detail page"]
  },

  /* ================= TAB — BRAND IDENTITY ================= */
  {
    id: "denali", tab: "brand", type: "case", featured: true,
    name: "Denali Leather Goods", industry: "Leather Goods · Brand 0→1", platform: "Brand Identity",
    role: "Brand Strategy · Identity System",
    desc: "Built a 0→1 identity durable enough for hide-stamping and screens alike.",
    thumbnail: "images/b-denali.jpg",
    gallery: ["images/b-denali.jpg"],
    scope: ["Logo suite", "Brand style guide", "Social templates", "Stationery"]
  },
  {
    id: "bark2earth", tab: "brand", type: "case", featured: true,
    name: "Bark 2 Earth", industry: "Pet Treats & Wellness · Brand 0→1", platform: "Brand Identity",
    role: "Branding · Packaging · Web",
    desc: "Took a pet-wellness brand from logo to shelf-ready packaging to storefront.",
    thumbnail: "images/b-bark2earth.jpg",
    gallery: ["images/b-bark2earth.jpg"],
    scope: ["Logo", "Packaging (pouch + box)", "Web design"]
  },
  {
    id: "biona", tab: "brand", type: "case", featured: true,
    name: "Biona Coffee", industry: "Coffee · Packaging 0→1", platform: "Brand Identity",
    role: "Branding · Packaging",
    desc: "Built an origin-coded packaging system across multiple roasts and countries.",
    thumbnail: "images/b-bionacoffee.jpg",
    gallery: ["images/b-bionacoffee.jpg"],
    scope: ["Logo", "Packaging design", "Origin-based color + illustration system"]
  },
  {
    id: "emraw", tab: "brand", type: "case",
    name: "Emraw", industry: "School & Office Supplies · Mass Retail", platform: "Brand Identity + Packaging",
    role: "Branding · Label Design",
    desc: "Branding and packaging for a mass-market school and office supply manufacturer sold nationally.",
    thumbnail: "images/b-emraw.jpg",
    gallery: ["images/b-emraw.jpg"],
    scope: ["Logo", "Packaging / label design", "Retail collateral"]
  },
  {
    id: "garment-decor-full", tab: "uiux", type: "case",
    name: "Garment Decor", industry: "Apparel Screen-Printing & Embroidery · B2B", platform: "Brand Identity + Web",
    role: "Branding · Brand Guidelines · Web Design",
    desc: "Branding, guidelines, and web design for a commercial apparel decoration vendor.",
    thumbnail: "images/garment-thumb.jpg",
    gallery: ["images/garment-01.jpg", "images/garment-02.jpg", "images/garment-03.jpg", "images/garment-04.jpg", "images/garment-05.jpg"],
    scope: ["Logo", "Brand guidelines", "Web design"]
  },
  {
    id: "klassen-farm", tab: "uiux", type: "case",
    name: "Klassen Farm Products", industry: "Agricultural & Farm Products", platform: "Brand Identity + Web",
    role: "Branding · Web Design",
    desc: "Branding and web design for a specialty agricultural and farm products manufacturer.",
    thumbnail: "images/klassen-thumb.png",
    gallery: ["images/klassen-01.png", "images/klassen-02.png"],
    scope: ["Logo", "Web design"]
  },

  /* ================= TAB — GROWTH MARKETING CREATIVE ================= */
  {
    id: "feat", tab: "growth", type: "case", featured: true,
    name: "Feat Clothing", industry: "Apparel · DTC", platform: "Email Marketing", liveUrl: "https://featclothing.com/",
    role: "Email Design",
    desc: "Built a modular email system to support weekly drops without wearing down the brand's aesthetic.",
    thumbnail: "images/feat-thumb.png",
    gallery: ["images/feat-01.png", "images/feat-02.png", "images/feat-03.png", "images/feat-04.png", "images/feat-05.png", "images/feat-06.png", "images/feat-07.png", "images/feat-08.png", "images/feat-09.png"],
    scope: ["Email design", "Copy-to-visual adaptation"]
  },
  {
    id: "rasa", tab: "growth", type: "case",
    name: "Rasa", industry: "Adaptogenic Coffee Alternatives · DTC", platform: "Email Marketing", liveUrl: "https://wearerasa.com/",
    role: "Email Design",
    desc: "Designed campaigns for an adaptogen and mushroom coffee-alternative brand.",
    thumbnail: "images/rasa-thumb.jpg",
    gallery: ["images/rasa-01.jpg", "images/rasa-02.jpg", "images/rasa-03.jpg", "images/rasa-04.jpg", "images/rasa-05.jpg", "images/rasa-06.jpg"],
    scope: ["Email design"]
  },
  {
    id: "tinyrituals", tab: "growth", type: "case",
    name: "Tiny Rituals", industry: "Spiritual Jewelry & Crystals · DTC", platform: "Email Marketing", liveUrl: "https://tinyrituals.co/",
    role: "Email Design",
    desc: "Designed campaigns for a crystal and spiritual jewelry brand.",
    thumbnail: "images/tinyrituals-thumb.jpg",
    gallery: ["images/tinyrituals-01.jpg", "images/tinyrituals-02.jpg", "images/tinyrituals-03.jpg"],
    scope: ["Email design"]
  },
  {
    id: "12thtribe", tab: "growth", type: "case",
    name: "12th Tribe", industry: "Women's Fashion & Festival Wear · DTC", platform: "Email Marketing", liveUrl: "https://www.12thtribe.com/",
    role: "Email Design",
    desc: "Designed high-volume campaigns for a national festival and resort-wear fashion retailer.",
    thumbnail: "images/12tribe-thumb.png",
    gallery: ["images/12tribe-01.png", "images/12tribe-02.png", "images/12tribe-03.png", "images/12tribe-04.png", "images/12tribe-05.png", "images/12tribe-06.png", "images/12tribe-07.png", "images/12tribe-08.png", "images/12tribe-09.png"],
    scope: ["Email design"]
  },
  {
    id: "smithey", tab: "growth", type: "case",
    name: "Smithey Ironware", industry: "Luxury Cookware · DTC", platform: "Email Marketing", liveUrl: "https://smithey.com/",
    role: "Email Design",
    desc: "Designed campaigns for a high-end cast iron cookware brand featured across major culinary media.",
    thumbnail: "images/smithey-thumb.png",
    gallery: ["images/smithey-01.png", "images/smithey-02.png", "images/smithey-03.png", "images/smithey-04.png", "images/smithey-05.png", "images/smithey-06.png", "images/smithey-07.png", "images/smithey-08.png", "images/smithey-09.png"],
    scope: ["Email design", "Recipe + product pairing modules"]
  },
  {
    id: "wolven", tab: "growth", type: "case",
    name: "Wolven Threads", industry: "Sustainable Intimates & Activewear · DTC", platform: "Email Marketing", liveUrl: "https://wolventhreads.com/",
    role: "Email Marketing Strategy",
    desc: "Developed a Q4 email lifecycle strategy — welcome and abandonment drip redesigns, RFM-based segmentation — for a sustainable intimates and activewear brand.",
    thumbnail: "images/wolven-thumb.png",
    gallery: ["images/wolven-01.png", "images/wolven-02.png", "images/wolven-03.png", "images/wolven-04.png", "images/wolven-05.png", "images/wolven-06.png", "images/wolven-07.png", "images/wolven-08.png", "images/wolven-09.png"],
    scope: ["Welcome drip series", "Cart & browse abandonment redesign", "RFM lifecycle segmentation strategy"]
  },
  {
    id: "lifeboost", tab: "growth", type: "case",
    name: "Lifeboost Coffee", industry: "Coffee · DTC", platform: "Email Marketing", liveUrl: "https://lifeboostcoffee.com/",
    role: "Email Design",
    desc: "Designed campaigns for a specialty low-acid coffee DTC brand.",
    thumbnail: "images/lifeboostcoffee-thumb.png",
    gallery: ["images/lifeboostcoffee-01.png", "images/lifeboostcoffee-02.png", "images/lifeboostcoffee-03.png", "images/lifeboostcoffee-04.png", "images/lifeboostcoffee-05.png", "images/lifeboostcoffee-06.png", "images/lifeboostcoffee-07.png", "images/lifeboostcoffee-08.png", "images/lifeboostcoffee-09.png"],
    scope: ["Email design"]
  },
  {
    id: "staticnails", tab: "growth", type: "case",
    name: "Static Nails", industry: "Press-On Nails & Nail Care · DTC", platform: "Email Marketing", liveUrl: "https://staticnails.com",
    role: "Email Design",
    desc: "Designed campaigns for a reusable press-on manicure and nail care brand.",
    thumbnail: "images/staticnails-thumb.jpg",
    gallery: ["images/staticnails-01.jpg", "images/staticnails-02.jpg", "images/staticnails-03.jpg", "images/staticnails-04.jpg", "images/staticnails-05.jpg", "images/staticnails-06.jpg", "images/staticnails-07.jpg", "images/staticnails-08.jpg", "images/staticnails-09.jpg", "images/staticnails-10.jpg", "images/staticnails-11.jpg", "images/staticnails-12.jpg", "images/staticnails-13.jpg"],
    scope: ["Email design"]
  },
  {
    id: "brumate", tab: "growth", type: "case", featured: true,
    name: "BrüMate", industry: "Drinkware · DTC", platform: "Email Marketing", liveUrl: "https://www.brumate.com/",
    role: "Email Design",
    desc: "Designed color-forward campaigns to showcase a wide multi-variant catalog.",
    thumbnail: "images/brumate-thumb.png",
    gallery: ["images/brumate-01.png", "images/brumate-02.png", "images/brumate-03.png", "images/brumate-04.png", "images/brumate-05.png", "images/brumate-06.png", "images/brumate-07.png"],
    scope: ["Email design"]
  }
];

/* ============================================================
   BRAND_GALLERY — Tier 5 boutique / 0→1 identity work
   (opens as a captioned image, not a full case study)
   ============================================================ */
const BRAND_GALLERY = [
  // Featured — shown first, larger cards, in this order
  { id: "el-paraiso", tab: "brand", type: "gallery", featured: true, name: "El Paraíso Heladería", image: "images/paraiso-thumb.jpg", caption: " · Branding, packaging, and 3D visualization for an ice cream brand." },
  { id: "massalino", tab: "brand", type: "gallery", featured: true, name: "Massalino Bakery", image: "images/massalino-thumb.jpg", caption: " · Branding, packaging, and retail signage for an Italian-style bakery." },
  { id: "disfruta", tab: "brand", type: "gallery", featured: true, name: "Disfruta", image: "images/disfruta-thumb.jpg", caption: " · Branding, menu design, and branded interior design for a juice bar / coffee shop." },
  { id: "casa-santafe", tab: "brand", type: "gallery", featured: true, name: "Casa Santafé Hostel", image: "images/casasantafe-thumb.jpg", caption: " · Branding and signage design for a boutique hostel." },
  { id: "casa-encantos", tab: "brand", type: "gallery", featured: true, name: "Casa de Encantos — Tea House", image: "images/casadeencantos-thumb.jpg", caption: " · Branding and packaging for a boutique tea house line." },
  { id: "pawty-animals", tab: "brand", type: "gallery", featured: true, name: "Pawty Animals", image: "images/pawtyanimals-thumb.jpg", caption: " · Branding, social media, toy design, packaging, and web design for a pet brand." },
  // Remaining — smaller cards
  { id: "brussel", tab: "brand", type: "gallery", name: "Brüssel", image: "images/brussel-thumb.jpg", caption: " · Branding and retail branding for a restaurant concept." },
  { id: "oggi-pizza", tab: "brand", type: "gallery", name: "Oggi Pizza", image: "images/oggi-thumb.jpg", caption: " · Branding and retail branding for a pizzeria." },
  { id: "arepale", tab: "brand", type: "gallery", name: "Arépale", image: "images/arepale-thumb.jpg", caption: " · Branding, menu design, and retail branding for a food truck concept." },
  { id: "bon-pops", tab: "brand", type: "gallery", name: "Bon Pops", image: "images/bonpops-thumb.jpg", caption: " · Branding and retail branding for a frozen-pop retail concept." },
  { id: "cuida-tu-mente", tab: "brand", type: "gallery", name: "Cuida tu Mente", image: "images/cuidatumente-thumb.jpg", caption: " · Branding and retail branding for a mental health services brand." },
  { id: "sunset-coffee", tab: "brand", type: "gallery", name: "Sunset Coffee", image: "images/sunsetcoffee-thumb.jpg", caption: " · Branding and packaging for a specialty coffee line." },
  { id: "phila-cup", tab: "brand", type: "gallery", name: "Phila Cup Coffee", image: "images/philacup-thumb.jpg", caption: " · Logo and packaging design for a Philadelphia coffee brand." },
  { id: "fryefit", tab: "brand", type: "gallery", name: "Fryefit", image: "images/fryefit-thumb.jpg", caption: " · Brand identity for a faith-and-fitness apparel line." }
];


/* ============================================================
   Tabs + grid rendering
   ============================================================ */
let currentTab = "uiux";

const tabsEl = document.getElementById("tabs");
const tabDescEl = document.getElementById("tabDesc");
const gridEl = document.getElementById("projectGrid");
const subgridHeadEl = document.getElementById("subgridHead");
const brandGalleryFeaturedEl = document.getElementById("brandGalleryFeatured");
const brandGalleryEl = document.getElementById("brandGallery");

function cardHTML(p){
  return `
    <div class="card-media"><img src="${p.thumbnail}" alt="${p.name}" loading="lazy"></div>
    <div class="card-tags"><span class="card-tag">${p.platform}</span></div>
    <div class="card-body">
      <p class="card-role">${p.role}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.desc}</p>
      <span class="card-cta">view case study <span class="btn-icon" style="width:18px;height:18px;font-size:10px;">↗</span></span>
    </div>
  `;
}

/* Renders the "view live" control in the case-study modal:
   - a real link when liveUrl is set
   - a disabled "coming soon" pill when comingSoon is set
   - nothing when neither is set (live link not yet confirmed) */
function liveLinkHTML(p){
  if (p.liveUrl){
    return `<a class="btn btn-ghost btn-sm cs-live-btn" href="${p.liveUrl}" target="_blank" rel="noopener">
      <span>view live</span><span class="btn-icon" style="width:20px;height:20px;font-size:10px;">↗</span>
    </a>`;
  }
  if (p.comingSoon){
    return `<span class="btn btn-ghost btn-sm cs-live-btn is-disabled">coming soon</span>`;
  }
  return "";
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
  brandGalleryFeaturedEl.innerHTML = "";
  brandGalleryEl.innerHTML = "";
  if (isBrand){
    BRAND_GALLERY.filter(p => p.featured).forEach(p => {
      const el = document.createElement("div");
      el.className = "subcard subcard-featured";
      el.innerHTML = `
        <div class="subcard-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="subcard-body">
          <div class="subcard-label">${p.name}</div>
          <p class="subcard-caption">${p.caption.replace(/^\s*·\s*/, "")}</p>
        </div>
      `;
      el.addEventListener("click", () => openCase(p.id));
      brandGalleryFeaturedEl.appendChild(el);
    });
    observeCards(brandGalleryFeaturedEl.querySelectorAll(".subcard"));

    BRAND_GALLERY.filter(p => !p.featured).forEach(p => {
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
    <div class="cs-body">
      <header class="cs-header">
        <div class="cs-head">
          <div class="cs-head-item">client<b>${p.name}</b></div>
          <div class="cs-head-item">industry<b>${p.industry}</b></div>
          <div class="cs-head-item">platform<b>${p.platform}</b></div>
          ${p.techStack ? `<div class="cs-head-item">tech stack<b>${p.techStack}</b></div>` : ""}
          <div class="cs-head-item">role<b>${p.role}</b></div>
        </div>
        <p class="cs-desc">${p.desc}</p>
        ${liveLinkHTML(p)}
      </header>

      <div class="modal-gallery">
        ${p.gallery.map(imgSrc => `
          <div class="gallery-item"><img src="${imgSrc}" alt="${p.name}" loading="lazy" /></div>
        `).join("")}
      </div>

      <div class="cs-section">
        <p class="cs-label">What I worked on</p>
        <ul class="cs-scope-list">${p.scope.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
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
