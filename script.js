/* ============================================================
   FÉLIX PATETE — PORTFOLIO v3
   1. Project data (edit PROJECTS to add, remove or reorder work)
   2. Story previews, project index, case study dialog
   3. Theme, motion, contact
   ============================================================ */

"use strict";

const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

/* ─── DATA ────────────────────────────────────────────────── */
const PROJECTS = [
  {
    "id": "tke",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "TK Elevator",
    "industry": "Industrial Elevator Parts · B2B · Crimson Agility",
    "platform": "Adobe Commerce",
    "techStack": "Magento 2 / Enterprise B2B",
    "liveUrl": "https://www.tkelevator.com/us-en/",
    "role": "UX Design · Technical PDP",
    "desc": "Designed a 2-click part-lookup flow for maintenance technicians.",
    "thumbnail": "images/tke-thumb.png",
    "gallery": [
      "images/tke-01.png",
      "images/tke-02.png",
      "images/tke-03.png",
      "images/tke-04.png",
      "images/tke-05.png",
      "images/tke-06.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page",
      "Frequently-bought-together module"
    ]
  },
  {
    "id": "nueskes",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "Nueske's",
    "industry": "Specialty Foods · Smoked Meats DTC · Crimson Agility",
    "platform": "Custom E-Commerce",
    "techStack": "Proprietary PHP Engine",
    "liveUrl": "https://nueskes.com/",
    "role": "UX Design · Merchandising",
    "desc": "Rebuilt the DTC storefront to support gifting, seasonality, and premium positioning.",
    "thumbnail": "images/nueskes-thumb.png",
    "gallery": [
      "images/nueskes-01.png",
      "images/nueskes-02.png",
      "images/nueskes-03.png",
      "images/nueskes-04.png",
      "images/nueskes-05.png",
      "images/nueskes-06.png",
      "images/nueskes-07.png"
    ],
    "scope": [
      "Homepage",
      "PLP / PDP",
      "Cart",
      "Gift & seasonal merchandising modules"
    ]
  },
  {
    "id": "accutech",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "Accutech",
    "industry": "IT Hardware & Data Storage · B2B · Crimson Agility",
    "platform": "Adobe Commerce",
    "techStack": "Enterprise B2B Catalog",
    "comingSoon": true,
    "role": "UX Design · Figma Prototyping",
    "desc": "Restructured a 15,000-SKU B2B catalog for faster corporate purchasing decisions.",
    "thumbnail": "images/accutech-thumb.png",
    "gallery": [
      "images/accutech-01.png",
      "images/accutech-02.png",
      "images/accutech-03.png",
      "images/accutech-04.png",
      "images/accutech-05.png",
      "images/accutech-06.png",
      "images/accutech-07.png"
    ],
    "scope": [
      "Homepage merchandising",
      "Category navigation",
      "Spec-based filtering",
      "Cart flow"
    ]
  },
  {
    "id": "whitecap",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "White Cap Foods",
    "industry": "Foodservice Distribution · B2B · Crimson Agility",
    "platform": "Figma → HTML/CSS",
    "comingSoon": true,
    "role": "Design System",
    "desc": "Shipped a full e-commerce design system with static HTML/CSS handoff for engineering.",
    "thumbnail": "images/whitecap-thumb.png",
    "gallery": [
      "images/whitecap-01.png",
      "images/whitecap-02.png",
      "images/whitecap-03.png",
      "images/whitecap-04.png",
      "images/whitecap-05.png",
      "images/whitecap-06.png",
      "images/whitecap-07.png"
    ],
    "scope": [
      "Homepage",
      "Mega menu",
      "Cart / checkout",
      "Account page",
      "B2B credit application flow"
    ]
  },
  {
    "id": "briskheat",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "BriskHeat",
    "industry": "Industrial Heating Equipment · Global Manufacturer · Crimson Agility",
    "platform": "Adobe Commerce",
    "techStack": "Magento 2 / Custom Industrial Configurator",
    "liveUrl": "https://www.briskheat.com/",
    "role": "UX Design · Storefront & Checkout",
    "desc": "Redesigned the storefront and checkout for a global industrial heating equipment leader.",
    "thumbnail": "images/briskheat-thumb.png",
    "gallery": [
      "images/briskheat-01.png",
      "images/briskheat-02.png",
      "images/briskheat-03.png",
      "images/briskheat-04.png",
      "images/briskheat-05.png",
      "images/briskheat-06.png",
      "images/briskheat-07.png"
    ],
    "scope": [
      "Homepage",
      "Category navigation",
      "Checkout",
      "Seasonal campaign modules"
    ]
  },
  {
    "id": "siege",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "Siege Suppressors",
    "industry": "Firearms & Tactical Equipment · DTC · Crimson Agility",
    "platform": "Shopify",
    "techStack": "Shopify Core",
    "liveUrl": "https://siegesuppressors.com/",
    "role": "UX Design · Technical PDP",
    "desc": "Designed spec-heavy PDPs and an educational content system for a precision suppressor brand.",
    "thumbnail": "images/siege-thumb.png",
    "gallery": [
      "images/siege-01.png",
      "images/siege-02.png",
      "images/siege-03.png",
      "images/siege-04.png",
      "images/siege-05.png",
      "images/siege-06.png",
      "images/siege-07.png"
    ],
    "scope": [
      "Category / PLP",
      "Product detail page",
      "Educational content template"
    ]
  },
  {
    "id": "riddy",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "Riddy",
    "industry": "Lawn Care & Pest Control · DTC Subscription · Crimson Agility",
    "platform": "Adobe Commerce",
    "comingSoon": true,
    "role": "UX Design · Subscription Flow",
    "desc": "Designed a plan-builder subscription flow for a DTC lawn care and pest control brand.",
    "thumbnail": "images/riddy-thumb.png",
    "gallery": [
      "images/riddy-01.png",
      "images/riddy-02.png",
      "images/riddy-03.png",
      "images/riddy-04.png",
      "images/riddy-05.png"
    ],
    "scope": [
      "Subscription plan builder",
      "Homepage",
      "Cart / checkout"
    ]
  },
  {
    "id": "professionalschoice",
    "tab": "uiux",
    "type": "case",
    "featured": true,
    "name": "Professional's Choice",
    "industry": "Equestrian Sports Medicine · Category Leader",
    "platform": "Web Shop Manager",
    "techStack": "Specialized Equine E-Commerce",
    "liveUrl": "https://www.profchoice.com/",
    "role": "UX Design · Catalog & PDP",
    "desc": "Designed the storefront for the category leader in equestrian sports medicine and horse tack.",
    "thumbnail": "images/profchoice-thumb.png",
    "gallery": [
      "images/profchoice-01.png",
      "images/profchoice-02.png",
      "images/profchoice-03.png",
      "images/profchoice-04.png",
      "images/profchoice-05.png",
      "images/profchoice-06.png",
      "images/profchoice-07.png",
      "images/profchoice-08.png"
    ],
    "scope": [
      "Category / PLP",
      "Product detail page",
      "Education content"
    ]
  },
  {
    "id": "caplugs",
    "tab": "uiux",
    "type": "case",
    "name": "Caplugs",
    "industry": "Custom Plastic Molding & Industrial Protection · Global Manufacturer",
    "platform": "Adobe Commerce",
    "techStack": "Magento Enterprise / B2B",
    "liveUrl": "https://www.caplugs.com/",
    "role": "UX Design",
    "desc": "Storefront UX for a global leader in custom plastic molding and masking solutions.",
    "thumbnail": "images/caplugs-thumb.png",
    "gallery": [
      "images/caplugs-01.png",
      "images/caplugs-02.png",
      "images/caplugs-03.png",
      "images/caplugs-04.png",
      "images/caplugs-05.png",
      "images/caplugs-06.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page"
    ]
  },
  {
    "id": "frontier-coop",
    "tab": "uiux",
    "type": "case",
    "name": "Frontier Co-op",
    "industry": "Natural Products Cooperative · DTC",
    "platform": "Adobe Commerce",
    "techStack": "Magento Enterprise / Acquia",
    "liveUrl": "https://www.frontiercoop.com/",
    "role": "UX Design",
    "desc": "Storefront UX for the co-op behind billion-dollar natural product brands like Simply Organic and Aura Cacia.",
    "thumbnail": "images/frontier-thumb.png",
    "gallery": [
      "images/frontier-01.png",
      "images/frontier-02.png",
      "images/frontier-03.png"
    ],
    "scope": [
      "Homepage",
      "Category navigation"
    ]
  },
  {
    "id": "pt-solutions",
    "tab": "uiux",
    "type": "case",
    "name": "PT Solutions",
    "industry": "Physical Therapy Healthcare Network",
    "platform": "WordPress / Custom",
    "techStack": "Healthcare CMS & Epic EMR",
    "liveUrl": "https://ptsolutions.com/",
    "role": "UX Design",
    "desc": "Digital UX for a national physical therapy network with hundreds of clinical locations.",
    "thumbnail": "images/pst-thumb.png",
    "gallery": [
      "images/pst-01.png",
      "images/pst-02.png",
      "images/pst-03.png",
      "images/pst-04.png"
    ],
    "scope": [
      "Location finder",
      "Appointment request flow"
    ]
  },
  {
    "id": "afg-distribution",
    "tab": "uiux",
    "type": "case",
    "name": "AFG Distribution",
    "industry": "B2B Wholesale Distribution",
    "platform": "Custom B2B",
    "techStack": "Custom Wholesale E-Commerce Portal",
    "comingSoon": true,
    "role": "UX Design",
    "desc": "B2B storefront UX for one of North America's largest wholesale distributors in its category.",
    "thumbnail": "images/afg-thumb.png",
    "gallery": [
      "images/afg-02.png",
      "images/afg-03.png",
      "images/afg-thumb.jpg"
    ],
    "scope": [
      "Category navigation",
      "Bulk order flow"
    ]
  },
  {
    "id": "hoveround",
    "tab": "uiux",
    "type": "case",
    "name": "Hoveround Mobility Solutions",
    "industry": "Medical Devices · Power Mobility · DTC",
    "platform": "Custom Web",
    "techStack": "AngularJS / Custom Portal",
    "liveUrl": "https://www.hoveround.com/",
    "role": "UX Design",
    "desc": "DTC storefront UX for an iconic national power wheelchair manufacturer.",
    "thumbnail": "images/hoveround-thumb.png",
    "gallery": [
      "images/hoveround-01.png",
      "images/hoveround-02.png",
      "images/hoveround-03.png",
      "images/hoveround-04.png",
      "images/hoveround-05.png",
      "images/hoveround-06.png"
    ],
    "scope": [
      "Product selection flow",
      "Informational content pages"
    ]
  },
  {
    "id": "oci",
    "tab": "uiux",
    "type": "case",
    "name": "Oklahoma Correctional Industries",
    "industry": "State Government Manufacturing & Industrial Supply",
    "platform": "Gov CMS (Drupal)",
    "techStack": "Enterprise Government Portal",
    "comingSoon": true,
    "role": "UX Design",
    "desc": "B2B storefront UX for a state government manufacturing and industrial supply enterprise.",
    "thumbnail": "images/oci-thumb.png",
    "gallery": [
      "images/oci-01.png",
      "images/oci-02.png",
      "images/oci-03.png",
      "images/oci-04.png"
    ],
    "scope": [
      "Category navigation",
      "B2B ordering flow"
    ]
  },
  {
    "id": "hsgi",
    "tab": "uiux",
    "type": "case",
    "name": "High Speed Gear",
    "industry": "Tactical Gear · DTC",
    "platform": "Shopify Plus",
    "techStack": "Shopify Enterprise",
    "liveUrl": "https://www.highspeedgear.com/",
    "role": "UX Design",
    "desc": "DTC storefront UX for a premier tactical gear manufacturer serving military, law enforcement, and civilian markets.",
    "thumbnail": "images/highspeed-thumb.png",
    "gallery": [
      "images/highspeed-01.png",
      "images/highspeed-02.png",
      "images/highspeed-03.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page"
    ]
  },
  {
    "id": "zip-corvette",
    "tab": "uiux",
    "type": "case",
    "name": "Zip Corvette",
    "industry": "Corvette Restoration Parts & Performance",
    "platform": "Adobe Commerce",
    "techStack": "Magento 2 / B2C Catalog",
    "comingSoon": true,
    "role": "UX Design",
    "desc": "E-commerce UX for the leading US authority in Corvette restoration parts.",
    "thumbnail": "images/zipcorvette-thumb.png",
    "gallery": [
      "images/zipcorvette-01.png",
      "images/zipcorvette-02.png"
    ],
    "scope": [
      "Category / fitment filtering",
      "Product detail page"
    ]
  },
  {
    "id": "icarus-precision",
    "tab": "uiux",
    "type": "case",
    "name": "Icarus Precision",
    "industry": "Precision CNC Machining · Firearm Components",
    "platform": "Shopify",
    "techStack": "Shopify Core",
    "comingSoon": true,
    "role": "UX Design",
    "desc": "DTC storefront UX for a high-precision CNC machining and firearm grip module brand.",
    "thumbnail": "images/icarus-thumb.png",
    "gallery": [
      "images/icarus-01.png",
      "images/icarus-02.png",
      "images/icarus-03.png",
      "images/icarus-04.png",
      "images/icarus-05.png",
      "images/icarus-06.png"
    ],
    "scope": [
      "Product detail page",
      "Category navigation"
    ]
  },
  {
    "id": "live-q-or-die",
    "tab": "uiux",
    "type": "case",
    "name": "Live Q Or Die (Q)",
    "industry": "Firearms & Suppressors · DTC",
    "platform": "Shopify",
    "techStack": "Shopify Core",
    "liveUrl": "https://www.liveqordie.com/",
    "role": "UX Design",
    "desc": "DTC storefront UX for a firearms and suppressor manufacturer known for the Honey Badger platform.",
    "thumbnail": "images/livq-thumb.png",
    "gallery": [
      "images/livq-01.png",
      "images/livq-02.png",
      "images/livq-03.png",
      "images/livq-04.png",
      "images/livq-05.png",
      "images/livq-06.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page"
    ]
  },
  {
    "id": "phoenix-medical",
    "tab": "uiux",
    "type": "case",
    "name": "Phoenix Medical Instruments",
    "industry": "Surgical Instruments & Healthcare Equipment · B2B",
    "platform": "Adobe Commerce",
    "comingSoon": true,
    "role": "UX Design",
    "desc": "B2B storefront UX for a specialized manufacturer of surgical instruments.",
    "thumbnail": "images/phoenix-thumb.png",
    "gallery": [
      "images/phoenix-01.png",
      "images/phoenix-02.png",
      "images/phoenix-03.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page"
    ]
  },
  {
    "id": "rugged-suppressors",
    "tab": "uiux",
    "type": "case",
    "name": "Rugged Suppressors",
    "industry": "Firearm Suppressors & Accessories · DTC",
    "platform": "Shopify",
    "techStack": "Shopify Core",
    "liveUrl": "https://www.ruggedsuppressors.com/",
    "role": "UX Design",
    "desc": "E-commerce UX for a firearm suppressor manufacturer and retailer.",
    "thumbnail": "images/rugged-thumb.png",
    "gallery": [
      "images/rugged-01.png",
      "images/rugged-02.png",
      "images/rugged-03.png",
      "images/rugged-04.png",
      "images/rugged-05.png",
      "images/rugged-06.png",
      "images/rugged-07.png"
    ],
    "scope": [
      "Category navigation",
      "Product detail page"
    ]
  },
  {
    "id": "garment-decor-full",
    "tab": "uiux",
    "type": "case",
    "name": "Garment Decor",
    "industry": "Apparel Screen-Printing & Embroidery · B2B",
    "platform": "WooCommerce",
    "techStack": "WordPress / Custom Printing Engine",
    "comingSoon": true,
    "role": "Branding · Brand Guidelines · Web Design",
    "desc": "Branding, guidelines, and web design for a commercial apparel decoration vendor.",
    "thumbnail": "images/garment-thumb.jpg",
    "gallery": [
      "images/garment-01.jpg",
      "images/garment-02.jpg",
      "images/garment-03.jpg",
      "images/garment-04.jpg",
      "images/garment-05.jpg"
    ],
    "scope": [
      "Logo",
      "Brand guidelines",
      "Web design"
    ]
  },
  {
    "id": "klassen-farm",
    "tab": "uiux",
    "type": "case",
    "name": "Klassen Farm Products",
    "industry": "Agricultural & Farm Products",
    "platform": "Brand Identity + Web",
    "comingSoon": true,
    "role": "Branding · Web Design",
    "desc": "Branding and web design for a specialty agricultural and farm products manufacturer.",
    "thumbnail": "images/klassen-thumb.png",
    "gallery": [
      "images/klassen-01.png",
      "images/klassen-02.png"
    ],
    "scope": [
      "Logo",
      "Web design"
    ]
  },
  {
    "id": "feat",
    "tab": "growth",
    "type": "case",
    "featured": true,
    "name": "Feat Clothing",
    "industry": "Apparel · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://featclothing.com/",
    "role": "Email Design",
    "desc": "Built a modular email system to support weekly drops without wearing down the brand's aesthetic.",
    "thumbnail": "images/feat-thumb.png",
    "gallery": [
      "images/feat-01.png",
      "images/feat-02.png",
      "images/feat-03.png",
      "images/feat-04.png",
      "images/feat-05.png",
      "images/feat-06.png",
      "images/feat-07.png",
      "images/feat-08.png",
      "images/feat-09.png"
    ],
    "scope": [
      "Email design",
      "Copy-to-visual adaptation"
    ]
  },
  {
    "id": "rasa",
    "tab": "growth",
    "type": "case",
    "name": "Rasa",
    "industry": "Adaptogenic Coffee Alternatives · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://wearerasa.com/",
    "role": "Email Design",
    "desc": "Designed campaigns for an adaptogen and mushroom coffee-alternative brand.",
    "thumbnail": "images/rasa-thumb.jpg",
    "gallery": [
      "images/rasa-01.jpg",
      "images/rasa-02.jpg",
      "images/rasa-03.jpg",
      "images/rasa-04.jpg",
      "images/rasa-05.jpg",
      "images/rasa-06.jpg"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "tinyrituals",
    "tab": "growth",
    "type": "case",
    "name": "Tiny Rituals",
    "industry": "Spiritual Jewelry & Crystals · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://tinyrituals.co/",
    "role": "Email Design",
    "desc": "Designed campaigns for a crystal and spiritual jewelry brand.",
    "thumbnail": "images/tinyrituals-thumb.jpg",
    "gallery": [
      "images/tinyrituals-01.jpg",
      "images/tinyrituals-02.jpg",
      "images/tinyrituals-03.jpg"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "12thtribe",
    "tab": "growth",
    "type": "case",
    "name": "12th Tribe",
    "industry": "Women's Fashion Apparel · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://12thtribe.com/",
    "role": "Email Design",
    "desc": "Designed email campaigns for a fashion DTC brand with a heavy social-first audience.",
    "thumbnail": "images/12tribe-thumb.png",
    "gallery": [
      "images/12tribe-01.png",
      "images/12tribe-02.png",
      "images/12tribe-03.png",
      "images/12tribe-04.png",
      "images/12tribe-05.png",
      "images/12tribe-06.png",
      "images/12tribe-07.png",
      "images/12tribe-08.png",
      "images/12tribe-09.png"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "static-nails",
    "tab": "growth",
    "type": "case",
    "name": "Static Nails",
    "industry": "Beauty & Personal Care · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://staticnails.com/",
    "role": "Email Design",
    "desc": "Designed email campaigns for a press-on nail DTC brand.",
    "thumbnail": "images/staticnails-thumb.jpg",
    "gallery": [
      "images/staticnails-01.jpg",
      "images/staticnails-02.jpg",
      "images/staticnails-03.jpg",
      "images/staticnails-04.jpg",
      "images/staticnails-05.jpg",
      "images/staticnails-06.jpg",
      "images/staticnails-07.jpg",
      "images/staticnails-08.jpg",
      "images/staticnails-09.jpg",
      "images/staticnails-10.jpg",
      "images/staticnails-11.jpg",
      "images/staticnails-12.jpg",
      "images/staticnails-13.jpg"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "brümate",
    "tab": "growth",
    "type": "case",
    "name": "BrüMate",
    "industry": "Drinkware & Coolers · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://brumate.com/",
    "role": "Email Design",
    "desc": "Email campaign design for a premium drinkware DTC brand.",
    "thumbnail": "images/brumate-thumb.png",
    "gallery": [
      "images/brumate-01.png",
      "images/brumate-02.png",
      "images/brumate-03.png",
      "images/brumate-04.png",
      "images/brumate-05.png",
      "images/brumate-06.png",
      "images/brumate-07.png"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "smithey",
    "tab": "growth",
    "type": "case",
    "name": "Smithey Ironware",
    "industry": "Cast Iron Cookware · DTC",
    "platform": "Email Marketing",
    "liveUrl": "https://smithey.com/",
    "role": "Email Design",
    "desc": "Email design for an American heirloom cast iron cookware brand.",
    "thumbnail": "images/smithey-thumb.png",
    "gallery": [
      "images/smithey-01.png",
      "images/smithey-02.png",
      "images/smithey-03.png",
      "images/smithey-04.png",
      "images/smithey-05.png",
      "images/smithey-06.png",
      "images/smithey-07.png",
      "images/smithey-08.png",
      "images/smithey-09.png"
    ],
    "scope": [
      "Email design"
    ]
  },
  {
    "id": "wolven",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "Wolven",
    "industry": "Sustainable Activewear · DTC",
    "platform": "Brand Identity",
    "role": "Branding",
    "desc": "Visual identity for a sustainable activewear brand.",
    "thumbnail": "images/wolven-thumb.png",
    "gallery": [
      "images/wolven-01.png",
      "images/wolven-02.png",
      "images/wolven-03.png",
      "images/wolven-04.png",
      "images/wolven-05.png",
      "images/wolven-06.png",
      "images/wolven-07.png",
      "images/wolven-08.png",
      "images/wolven-09.png"
    ],
    "scope": [
      "Logo",
      "Brand identity"
    ]
  },
  {
    "id": "paraiso",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "El Paraíso Heladería",
    "industry": "Artisan Ice Cream · Hospitality",
    "platform": "Brand Identity",
    "role": "Branding · Packaging · Retail",
    "desc": "Full identity system for an artisan ice cream shop in Medellín — logo, packaging, and retail branding.",
    "thumbnail": "images/paraiso-thumb.jpg",
    "gallery": [
      "images/paraiso-01.jpeg",
      "images/paraiso-02.jpg",
      "images/paraiso-03.png",
      "images/paraiso-04.png",
      "images/paraiso-05.jpg",
      "images/paraiso-06.jpg",
      "images/paraiso-07.gif",
      "images/paraiso-08.jpg",
      "images/paraiso-09.jpg",
      "images/paraiso-10.gif",
      "images/paraiso-11.jpg",
      "images/paraiso-12.jpg",
      "images/paraiso-14.jpg",
      "images/paraiso-14.png",
      "images/paraiso-15.png",
      "images/paraiso-16.jpg",
      "images/paraiso-17.png",
      "images/paraiso-19.png",
      "images/paraiso-20.jpg",
      "images/paraiso-21.jpg"
    ],
    "scope": [
      "Logo",
      "Packaging",
      "Retail interior branding"
    ]
  },
  {
    "id": "massalino",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "Massalino Bakery",
    "industry": "Artisan Bakery · Hospitality",
    "platform": "Brand Identity",
    "role": "Branding · Packaging",
    "desc": "Brand identity and packaging for an artisan Italian-style bakery.",
    "thumbnail": "images/massalino-thumb.jpeg",
    "gallery": [
      "images/massalino-01.png",
      "images/massalino-02.jpg",
      "images/massalino-03.jpg",
      "images/massalino-04.jpg",
      "images/massalino-05.png",
      "images/massalino-06.jpg",
      "images/massalino-07.jpg",
      "images/massalino-08.jpg",
      "images/massalino-09.jpg",
      "images/massalino-10.jpg",
      "images/massalino-11.jpg",
      "images/massalino-12.jpg",
      "images/massalino-13.jpg",
      "images/massalino-14.jpg",
      "images/massalino-14.png",
      "images/massalino-15.jpg",
      "images/massalino-16.jpg",
      "images/massalino-17.jpg",
      "images/massalino-18.jpg",
      "images/massalino-19.jpeg",
      "images/massalino-20.jpg",
      "images/massalino-21.jpg",
      "images/massalino-22.jpeg",
      "images/massalino-22.jpg",
      "images/massalino-23.jpeg",
      "images/massalino-23.jpg",
      "images/massalino-24.jpg",
      "images/massalino-25.jpg",
      "images/massalino-26.jpg",
      "images/massalino-27.jpg",
      "images/massalino-28.jpg",
      "images/massalino-29.jpg",
      "images/massalino-30.jpg"
    ],
    "scope": [
      "Logo",
      "Packaging design",
      "Brand guidelines"
    ]
  },
  {
    "id": "disfruta",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "Disfruta",
    "industry": "Food & Beverage · Hospitality",
    "platform": "Brand Identity",
    "role": "Branding · Retail",
    "desc": "Visual identity and retail branding for a food and beverage concept.",
    "thumbnail": "images/disfruta-thumb.jpeg",
    "gallery": [
      "images/disfruta-01.jpg",
      "images/disfruta-02.jpg",
      "images/disfruta-03.jpg",
      "images/disfruta-04.jpeg",
      "images/disfruta-05.jpg",
      "images/disfruta-07.png",
      "images/disfruta-08.png",
      "images/disfruta-09.png",
      "images/disfruta-10.png",
      "images/disfruta-11.png",
      "images/disfruta-12.png",
      "images/disfruta-13.jpeg"
    ],
    "scope": [
      "Logo",
      "Retail branding"
    ]
  },
  {
    "id": "casasantafe",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "Casa Santafé Hostel",
    "industry": "Boutique Hospitality",
    "platform": "Brand Identity",
    "role": "Branding",
    "desc": "Brand identity for a boutique hostel in the heart of Bogotá's historic La Candelaria neighborhood.",
    "thumbnail": "images/casasantafe-thumb.jpg",
    "gallery": [
      "images/casasantafe-02.jpg",
      "images/casasantafe-03.jpg",
      "images/casasantafe-04.jpg",
      "images/casasantafe-05.jpg",
      "images/casasantafe-06.gif",
      "images/casasantafe-07.jpg",
      "images/casasantafe-08.jpg",
      "images/casasantafe-09.jpg",
      "images/casasantafe-10.jpg",
      "images/casasantafe-11.jpg",
      "images/casasantafe-12.jpg",
      "images/casasantafe-13.jpg",
      "images/casasantafe-14.jpg",
      "images/casasantafe-16.jpg",
      "images/casasantafe-17.png",
      "images/casasantafe-18.jpg",
      "images/casasantafe-19.jpg"
    ],
    "scope": [
      "Logo",
      "Brand guidelines",
      "Signage system"
    ]
  },
  {
    "id": "pawty-animals",
    "tab": "brand",
    "type": "case",
    "featured": true,
    "name": "Pawty Animals",
    "industry": "Pet Services · Retail",
    "platform": "Brand Identity",
    "role": "Branding · Retail",
    "desc": "Playful visual identity and retail branding for a pet grooming and accessories brand.",
    "thumbnail": "images/pawtyanimals-thumb.jpg",
    "gallery": [
      "images/pawtyanimals-01.png",
      "images/pawtyanimals-02.png",
      "images/pawtyanimals-03.png",
      "images/pawtyanimals-04.png",
      "images/pawtyanimals-05.png",
      "images/pawtyanimals-06.png",
      "images/pawtyanimals-07.png",
      "images/pawtyanimals-08.png",
      "images/pawtyanimals-09.png",
      "images/pawtyanimals-10.png",
      "images/pawtyanimals-11.jpg",
      "images/pawtyanimals-11.png",
      "images/pawtyanimals-12.jpg",
      "images/pawtyanimals-13.jpg",
      "images/pawtyanimals-14.jpg",
      "images/pawtyanimals-15.jpg"
    ],
    "scope": [
      "Logo",
      "Brand identity",
      "Retail branding"
    ]
  },
  {
    "id": "casaencantos",
    "tab": "brand",
    "type": "case",
    "name": "Casa de Encantos Tea House",
    "industry": "Tea & Wellness · Hospitality",
    "platform": "Brand Identity",
    "role": "Branding · Packaging",
    "desc": "Visual identity and packaging for a tea house brand.",
    "thumbnail": "images/casaencantos-thumb.jpg",
    "gallery": [
      "images/casaencantos-01.jpg",
      "images/casaencantos-02.jpg",
      "images/casaencantos-03.jpg",
      "images/casaencantos-04.jpg",
      "images/casaencantos-05.jpg",
      "images/casaencantos-06.jpg",
      "images/casaencantos-07.jpg",
      "images/casaencantos-08.jpg",
      "images/casaencantos-09.jpg",
      "images/casaencantos-10.jpg",
      "images/casaencantos-11.jpg",
      "images/casaencantos-12.jpg",
      "images/casaencantos-13.jpg",
      "images/casaencantos-14.jpg",
      "images/casaencantos-15.jpg",
      "images/casaencantos-16.jpg"
    ],
    "scope": [
      "Logo",
      "Packaging"
    ]
  },
  {
    "id": "bonpops",
    "tab": "brand",
    "type": "case",
    "name": "Bon Pops",
    "industry": "Frozen Treats · Retail",
    "platform": "Brand Identity",
    "role": "Branding · Retail",
    "desc": "Branding and retail branding for a frozen-pop retail concept.",
    "thumbnail": "images/bonpops-thumb.jpg",
    "gallery": [
      "images/bonpops-01.jpg",
      "images/bonpops-02.jpg",
      "images/bonpops-03.jpg",
      "images/bonpops-04.jpg",
      "images/bonpops-05.jpg",
      "images/bonpops-06.jpg",
      "images/bonpops-07.jpg",
      "images/bonpops-08.jpg",
      "images/bonpops-09.jpg",
      "images/bonpops-10.jpg",
      "images/bonpops-11.jpg",
      "images/bonpops-12.jpg",
      "images/bonpops-13.jpg",
      "images/bonpops-14.jpg"
    ],
    "scope": [
      "Logo",
      "Retail branding"
    ]
  },
  {
    "id": "cuida-tu-mente",
    "tab": "brand",
    "type": "case",
    "name": "Cuida tu Mente",
    "industry": "Mental Health Services",
    "platform": "Brand Identity",
    "role": "Branding",
    "desc": "Branding and retail branding for a mental health services brand.",
    "thumbnail": "images/cuidatumente-thumb.jpg",
    "gallery": [
      "images/cuidatumente-01.jpg",
      "images/cuidatumente-02.jpg",
      "images/cuidatumente-03.jpg",
      "images/cuidatumente-04.jpg",
      "images/cuidatumente-05.jpg"
    ],
    "scope": [
      "Logo",
      "Retail branding"
    ]
  },
  {
    "id": "sunset-coffee",
    "tab": "brand",
    "type": "case",
    "name": "Sunset Coffee",
    "industry": "Specialty Coffee · Packaging",
    "platform": "Brand Identity",
    "role": "Branding · Packaging",
    "desc": "Branding and packaging for a specialty coffee line.",
    "thumbnail": "images/sunsetcoffee-thumb.jpg",
    "gallery": [
      "images/sunsetcoffee-01.png",
      "images/sunsetcoffee-02.jpg",
      "images/sunsetcoffee-03.jpg",
      "images/sunsetcoffee-04.jpg",
      "images/sunsetcoffee-05.jpg",
      "images/sunsetcoffee-06.jpg",
      "images/sunsetcoffee-07.jpg",
      "images/sunsetcoffee-08.jpg",
      "images/sunsetcoffee-09.jpg",
      "images/sunsetcoffee-10.jpg"
    ],
    "scope": [
      "Logo",
      "Packaging design"
    ]
  },
  {
    "id": "phila-cup",
    "tab": "brand",
    "type": "case",
    "name": "Phila Cup Coffee",
    "industry": "Coffee · Packaging",
    "platform": "Brand Identity",
    "role": "Logo Design · Packaging",
    "desc": "Logo and packaging design for a Philadelphia coffee brand.",
    "thumbnail": "images/philacup-thumb.png",
    "gallery": [
      "images/philacup-01.jpg",
      "images/philacup-02.jpg",
      "images/philacup-03.jpg",
      "images/philacup-04.jpg",
      "images/philacup-05.jpg",
      "images/philacup-06.jpg",
      "images/philacup-07.png"
    ],
    "scope": [
      "Logo",
      "Packaging design"
    ]
  },
  {
    "id": "humboldt",
    "tab": "brand",
    "type": "case",
    "name": "Humboldt",
    "industry": "Wine & Spirits · Packaging",
    "platform": "Brand Identity",
    "role": "Branding · Packaging",
    "desc": "Branding and packaging for a wine and spirits brand.",
    "thumbnail": "images/humboldt-thumb.jpg",
    "gallery": [
      "images/humboldt-01.jpg",
      "images/humboldt-02.jpg",
      "images/humboldt-03.png",
      "images/humboldt-04.png",
      "images/humboldt-05.png",
      "images/humboldt-06.png",
      "images/humboldt-07.jpg",
      "images/humboldt-08.jpg",
      "images/humboldt-09.png",
      "images/humboldt-10.png",
      "images/humboldt-11.png",
      "images/humboldt-12.jpg",
      "images/humboldt-13.jpg",
      "images/humboldt-14.jpg",
      "images/humboldt-16.jpg",
      "images/humboldt-17.png",
      "images/humboldt-18.png",
      "images/humboldt-19.jpg",
      "images/humboldt-20.jpg",
      "images/humboldt-21.png",
      "images/humboldt-22.jpg",
      "images/humboldt-23.jpg",
      "images/humboldt-24.png",
      "images/humboldt-25.png"
    ],
    "scope": [
      "Logo",
      "Packaging design"
    ]
  },
  {
    "id": "archive-arepale",
    "tab": "brand",
    "type": "case",
    "name": "Arépale",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/arepale-thumb.jpg",
    "gallery": [
      "images/arepale-01.jpg",
      "images/arepale-02.jpg",
      "images/arepale-03.jpg",
      "images/arepale-04.jpg",
      "images/arepale-05.jpg",
      "images/arepale-06.jpg",
      "images/arepale-07.jpg",
      "images/arepale-08.jpg",
      "images/arepale-09.jpg",
      "images/arepale-10.jpg",
      "images/arepale-11.jpg",
      "images/arepale-12.jpg",
      "images/arepale-13.jpg",
      "images/arepale-14.jpg",
      "images/arepale-15.jpg",
      "images/arepale-16.jpg",
      "images/arepale-17.png",
      "images/arepale-18.jpg",
      "images/arepale-19.jpg",
      "images/arepale-20.jpg",
      "images/arepale-21.jpg",
      "images/arepale-22.jpg",
      "images/arepale-23.jpg",
      "images/arepale-24.jpg",
      "images/arepale-25.jpg",
      "images/arepale-26.jpg",
      "images/arepale-27.jpg"
    ],
    "scope": []
  },
  {
    "id": "archive-bark2earth",
    "tab": "brand",
    "type": "case",
    "name": "Bark 2 Earth",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/bark2earth-thumb.png",
    "gallery": [
      "images/bark2earth-01.png",
      "images/bark2earth-02.png",
      "images/bark2earth-03.png",
      "images/bark2earth-04.png",
      "images/bark2earth-05.png",
      "images/bark2earth-06.png",
      "images/bark2earth-07.png"
    ],
    "scope": []
  },
  {
    "id": "archive-biona",
    "tab": "brand",
    "type": "case",
    "name": "Biona Coffee",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/biona-thumb.png",
    "gallery": [
      "images/biona-01.png",
      "images/biona-02.png",
      "images/biona-03.png",
      "images/biona-04.png",
      "images/biona-05.png",
      "images/biona-06.png",
      "images/biona-07.png",
      "images/biona-08.png",
      "images/biona-09.png"
    ],
    "scope": []
  },
  {
    "id": "archive-brussel",
    "tab": "brand",
    "type": "case",
    "name": "Brüssel",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/brussel-thumb.jpg",
    "gallery": [
      "images/brussel-01.jpg",
      "images/brussel-02.jpg",
      "images/brussel-03.jpg",
      "images/brussel-04.jpg",
      "images/brussel-05.jpg",
      "images/brussel-06.jpg",
      "images/brussel-07.jpg",
      "images/brussel-08.jpg",
      "images/brussel-09.jpg",
      "images/brussel-10.jpg",
      "images/brussel-11.jpg",
      "images/brussel-12.jpg"
    ],
    "scope": []
  },
  {
    "id": "archive-denali",
    "tab": "brand",
    "type": "case",
    "name": "Denali Leather Goods",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/denali-thumb.jpg",
    "gallery": [
      "images/denali-01.jpg",
      "images/denali-02.jpg",
      "images/denali-03.jpg",
      "images/denali-04.jpg",
      "images/denali-05.jpg",
      "images/denali-06.jpg",
      "images/denali-07.jpg",
      "images/denali-08.jpg",
      "images/denali-09.jpg",
      "images/denali-10.jpg",
      "images/denali-11.jpg",
      "images/denali-12.jpg",
      "images/denali-13.jpg",
      "images/denali-14.jpg"
    ],
    "scope": []
  },
  {
    "id": "archive-emraw",
    "tab": "brand",
    "type": "case",
    "name": "Emraw",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/emraw-thumb.jpg",
    "gallery": [
      "images/emraw-01.jpg",
      "images/emraw-02.jpg",
      "images/emraw-03.jpg",
      "images/emraw-04.jpg",
      "images/emraw-05.jpg",
      "images/emraw-06.jpg",
      "images/emraw-07.jpg",
      "images/emraw-08.png",
      "images/emraw-09.png",
      "images/emraw-10.png",
      "images/emraw-11.png",
      "images/emraw-12.png",
      "images/emraw-13.png",
      "images/emraw-14.png"
    ],
    "scope": []
  },
  {
    "id": "archive-fryefit",
    "tab": "brand",
    "type": "case",
    "name": "Fryefit",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/Fryefit banner.jpg",
    "gallery": [
      "images/fryefit-01.jpg",
      "images/fryefit-02.jpg",
      "images/fryefit-03.jpg",
      "images/fryefit-04.jpg",
      "images/fryefit-05.jpg",
      "images/fryefit-06.jpg",
      "images/fryefit-07.jpg",
      "images/fryefit-08.jpg",
      "images/fryefit-09.jpg",
      "images/fryefit-10.jpg",
      "images/fryefit-11.jpg",
      "images/fryefit-12.jpg",
      "images/fryefit-13.jpg",
      "images/fryefit-14.jpg",
      "images/fryefit-15.png",
      "images/fryefit-16.jpg"
    ],
    "scope": []
  },
  {
    "id": "archive-lifeboostcoffee",
    "tab": "growth",
    "type": "case",
    "name": "Lifeboost Coffee",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/lifeboostcoffee-thumb.png",
    "gallery": [
      "images/lifeboostcoffee-01.png",
      "images/lifeboostcoffee-02.png",
      "images/lifeboostcoffee-03.png",
      "images/lifeboostcoffee-04.png",
      "images/lifeboostcoffee-05.png",
      "images/lifeboostcoffee-06.png",
      "images/lifeboostcoffee-07.png",
      "images/lifeboostcoffee-08.png",
      "images/lifeboostcoffee-09.png"
    ],
    "scope": []
  },
  {
    "id": "archive-oggi",
    "tab": "brand",
    "type": "case",
    "name": "Oggi Pizza",
    "industry": "",
    "platform": "",
    "role": "",
    "desc": "",
    "thumbnail": "images/oggi-thumb.png",
    "gallery": [
      "images/oggi-01.jpg",
      "images/oggi-02.jpg",
      "images/oggi-03.jpg",
      "images/oggi-04.jpg",
      "images/oggi-05.jpg",
      "images/oggi-06.jpg",
      "images/oggi-07.jpg",
      "images/oggi-08.jpg",
      "images/oggi-09.jpg",
      "images/oggi-10.jpg",
      "images/oggi-11.jpg",
      "images/oggi-12.jpg",
      "images/oggi-13.jpg",
      "images/oggi-14.jpg",
      "images/oggi-15.jpg",
      "images/oggi-15.png",
      "images/oggi-16.png",
      "images/oggi-17.png",
      "images/oggi-18.png"
    ],
    "scope": []
  }
];

/* ─── HELPERS ─────────────────────────────────────────────── */
const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const byId = id => PROJECTS.find(p => p.id === id);
const LABELS = { uiux: 'UX and e-commerce', brand: 'Brand identity', growth: 'Email and growth' };
const ARROW = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12H20M13 5L20 12L13 19" stroke="currentColor" stroke-width="2"/></svg>';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Relative paths, so the site works on GitHub Pages, a custom domain, or locally.
const url = path => path.split('/').map(encodeURIComponent).join('/');
// Lightweight card image: images/thumbs/<name>.webp, falling back to the original file.
const thumb = p => 'images/thumbs/' + p.thumbnail.split('/').pop().replace(/\.[^.]+$/, '') + '.webp';
const thumbImg = (p, alt = '') => `<img src="${url(thumb(p))}" data-fallback="${url(p.thumbnail)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
const host = p => { try { return new URL(p.liveUrl).hostname.replace(/^www\./, ''); } catch { return ''; } };

/* Missing thumbnail → original image → a quiet note. */
document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  if (img.dataset.fallback && !img.dataset.fellBack) {
    img.dataset.fellBack = '1';
    img.src = img.dataset.fallback;
    return;
  }
  if (img.closest('.client, .tools')) { img.remove(); return; }
  const note = document.createElement('span');
  note.className = 'media-missing';
  note.textContent = img.alt ? `${img.alt}: image unavailable` : 'Image unavailable';
  img.replaceWith(note);
}, true);
$$('img').forEach(img => { if (img.complete && !img.naturalWidth) img.dispatchEvent(new Event('error')); });

/* ─── LONG CAPTURES PAN INSIDE THEIR FRAME ────────────────── */
function fitPan(img) {
  const box = img.closest('[data-pan]');
  if (!box || !img.naturalWidth) return;
  const boxH = box.clientHeight, boxW = box.clientWidth;
  if (!boxH || !boxW) return;
  const fullH = boxW * img.naturalHeight / img.naturalWidth;
  const travel = fullH - boxH;
  const tall = travel > boxH * .35;
  img.classList.toggle('is-tall', tall);
  if (!tall) return;
  box.style.setProperty('--pan', `${-travel}px`);
  const speed = box.dataset.pan === 'auto' ? 26 : 150; // px per second
  box.style.setProperty('--pan-t', `${Math.max(3, travel / speed).toFixed(1)}s`);
}
function watchPan(scope = document) {
  $$('[data-pan] img', scope).forEach(img => {
    if (img.complete) fitPan(img);
    img.addEventListener('load', () => fitPan(img));
  });
}
let panFrame = 0;
addEventListener('resize', () => {
  cancelAnimationFrame(panFrame);
  panFrame = requestAnimationFrame(() => $$('[data-pan] img').forEach(fitPan));
});

/* ─── STORY: SMALL PREVIEWS + PHONES ──────────────────────── */
$$('[data-minis]').forEach(row => {
  row.innerHTML = row.dataset.minis.split(',').map(byId).filter(Boolean).map(p => `
    <button type="button" class="mini" data-case="${esc(p.id)}" aria-label="Open ${esc(p.name)}">
      <span class="mini-shot" data-pan="hover">${thumbImg(p)}</span>
      <b>${esc(p.name)}</b>
    </button>`).join('');
});
$$('[data-phones]').forEach(row => {
  row.innerHTML = row.dataset.phones.split(',').map(byId).filter(Boolean).map(p => `
    <button type="button" class="surface" data-case="${esc(p.id)}" aria-label="Open ${esc(p.name)}">
      <span class="frame frame-phone trace"><span class="frame-shot" data-pan="auto">${thumbImg(p, p.name + ' email design')}</span></span>
      <span class="surface-cap"><b>${esc(p.name)}</b><span>${esc((p.industry || '').split(' · ')[0])}</span></span>
    </button>`).join('');
});
$$('[data-count]').forEach(el => { el.textContent = PROJECTS.filter(p => p.tab === el.dataset.count).length; });

/* ─── PROJECT INDEX ───────────────────────────────────────── */
const grid = $('#projectGrid');
const filters = $$('.filter');
const inFilter = (p, f) => f === 'all' || (f === 'featured' ? p.featured : p.tab === f);
let currentFilter = 'featured';

filters.forEach(btn => {
  $('sup', btn).textContent = PROJECTS.filter(p => inFilter(p, btn.dataset.filter)).length;
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

function setFilter(filter, animate = true) {
  currentFilter = filter;
  filters.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  const list = PROJECTS.filter(p => inFilter(p, filter));
  grid.classList.toggle('is-swapping', animate && !reduceMotion.matches);
  grid.innerHTML = list.map((p, i) => {
    const line = (p.industry || '').split(' · ')[0] || LABELS[p.tab];
    return `
    <button type="button" class="card" data-case="${esc(p.id)}" style="--i:${Math.min(i, 16)}" aria-label="Open ${esc(p.name)}">
      <span class="card-shot" data-pan="hover">${thumbImg(p)}<span class="card-open" aria-hidden="true">${ARROW}</span></span>
      <span class="card-text"><b>${esc(p.name)}</b><span>${esc(line)}</span></span>
    </button>`;
  }).join('');
  watchPan(grid);
}
setFilter(currentFilter, false);
$('#statProjects').dataset.countTo = PROJECTS.length;
$('#statProjects').textContent = PROJECTS.length;

$$('[data-browse]').forEach(btn => btn.addEventListener('click', () => {
  setFilter(btn.dataset.browse);
  $('#projects').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
}));

/* ─── CASE STUDY DIALOG ───────────────────────────────────── */
const modal = $('#modal');
const modalScroll = $('#modalScroll');
const modalCrumb = $('#modalCrumb');
let openId = null;
let lastFocus = null;

// Previous / next walk through the same discipline as the open project.
const siblings = p => PROJECTS.filter(x => x.tab === p.tab);
const neighbour = (p, step) => { const s = siblings(p); return s[(s.indexOf(p) + step + s.length) % s.length]; };

function renderCase(p) {
  const meta = [['Industry', p.industry], ['Role', p.role], ['Platform', p.platform], ['Tech stack', p.techStack]].filter(m => m[1]);
  const next = neighbour(p, 1);
  const live = p.liveUrl
    ? `<a class="btn btn-line" href="${esc(p.liveUrl)}" target="_blank" rel="noopener"><span>Visit ${esc(host(p) || 'live site')}</span>${ARROW.replace('<svg', '<svg class="arrow"')}</a>`
    : (p.comingSoon ? '<span class="chip is-soon">Live site coming soon</span>' : '');
  modalCrumb.textContent = `${LABELS[p.tab]}, ${siblings(p).indexOf(p) + 1} of ${siblings(p).length}`;
  modalScroll.innerHTML = `
    <div class="cs-top">
      <div>
        <h2 class="h-xl" id="csTitle">${esc(p.name)}</h2>
        ${p.desc ? `<p class="lede">${esc(p.desc)}</p>` : ''}
        ${live || (p.scope || []).length ? `<div class="cs-row">${live}${(p.scope || []).map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>` : ''}
      </div>
      ${meta.length ? `<dl class="cs-meta">${meta.map(m => `<div><dt>${m[0]}</dt><dd>${esc(m[1])}</dd></div>`).join('')}</dl>` : ''}
    </div>
    <div class="cs-gallery${p.tab === 'growth' ? ' is-columns' : ''}">
      ${p.gallery.map((src, i) => `<img src="${url(src)}" alt="${esc(p.name)}, image ${i + 1}" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async">`).join('')}
    </div>
    <button type="button" class="cs-next" data-case="${esc(next.id)}">
      <span><span>Next in ${esc(LABELS[p.tab].toLowerCase())}</span><b>${esc(next.name)}</b></span>${ARROW}
    </button>`;
  modalScroll.scrollTop = 0;
}

function openCase(id, push = true) {
  const p = byId(id);
  if (!p) return;
  if (!openId) lastFocus = document.activeElement;
  openId = id;
  renderCase(p);
  modal.inert = false;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  $('main').inert = true; $('#siteNav').inert = true; $('footer').inert = true;
  document.body.style.overflow = 'hidden';
  $('#modalClose').focus({ preventScroll: true });
  if (push) history.replaceState(null, '', '#project=' + encodeURIComponent(id));
}
function closeCase() {
  if (!openId) return;
  openId = null;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modal.inert = true;
  $('main').inert = false; $('#siteNav').inert = false; $('footer').inert = false;
  document.body.style.overflow = '';
  history.replaceState(null, '', location.pathname + location.search);
  lastFocus?.focus?.({ preventScroll: true });
}
const stepCase = step => { if (openId) openCase(neighbour(byId(openId), step).id); };

// One delegated listener opens any project, wherever its trigger lives.
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-case]');
  if (trigger) openCase(trigger.dataset.case);
});
$('#modalClose').addEventListener('click', closeCase);
$('#modalBackdrop').addEventListener('click', closeCase);
$('#modalPrev').addEventListener('click', () => stepCase(-1));
$('#modalNext').addEventListener('click', () => stepCase(1));
document.addEventListener('keydown', event => {
  if (!openId) return;
  if (event.key === 'Escape') closeCase();
  if (event.key === 'ArrowRight') stepCase(1);
  if (event.key === 'ArrowLeft') stepCase(-1);
  if (event.key === 'Tab') {
    const focusable = $$('button, a[href]', modal).filter(el => el.offsetParent !== null);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
// A shared link such as …/portfolio/#project=tke opens that case study directly.
const linked = /^#project=(.+)$/.exec(location.hash);
if (linked) openCase(decodeURIComponent(linked[1]), false);

/* ─── THEME ───────────────────────────────────────────────── */
const themeToggle = $('#themeToggle');
const syncTheme = () => {
  themeToggle.setAttribute('aria-pressed', String(root.dataset.theme === 'light'));
  $('meta[name="theme-color"]').content = root.dataset.theme === 'light' ? '#eee7d9' : '#102c26';
};
syncTheme();
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const apply = () => { root.dataset.theme = next; syncTheme(); };
  const r = themeToggle.getBoundingClientRect();
  root.style.setProperty('--tx', `${r.left + r.width / 2}px`);
  root.style.setProperty('--ty', `${r.top + r.height / 2}px`);
  if (document.startViewTransition && !reduceMotion.matches) document.startViewTransition(apply); else apply();
  try { localStorage.setItem('felix-theme', next); } catch { /* optional */ }
});

/* ─── MOTION ──────────────────────────────────────────────── */
// The hero's single load sequence.
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('is-loaded')));
watchPan();

// Sections draw their rule and count their numbers once, on arrival.
function countUp(el) {
  const target = Number(el.dataset.countTo);
  if (reduceMotion.matches || !target) return;
  const start = performance.now(), duration = 1100;
  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const arrive = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('in');
  if (entry.target.matches('.stats')) $$('[data-count-to]', entry.target).forEach(countUp);
  arrive.unobserve(entry.target);
}), { threshold: .2 });
$$('[data-reveal], .stats').forEach(el => arrive.observe(el));

// Scroll: progress bar, nav state, career line.
const nav = $('#siteNav');
const path = $('#path');
const navLinks = $$('.nav-links a');
let lastY = scrollY, frame = 0;
function onScroll() {
  frame = 0;
  const y = scrollY;
  const max = root.scrollHeight - innerHeight;
  root.style.setProperty('--progress', max > 0 ? (y / max).toFixed(4) : 0);
  nav.classList.toggle('is-away', y > 600 && y > lastY + 4 && !nav.contains(document.activeElement));
  if (y < lastY - 4) nav.classList.remove('is-away');
  lastY = y;

  let current = '';
  ['work', 'projects', 'about', 'contact'].forEach(id => { if ($('#' + id).getBoundingClientRect().top <= innerHeight * .4) current = id; });
  navLinks.forEach(link => link.dataset.nav === current ? link.setAttribute('aria-current', 'true') : link.removeAttribute('aria-current'));

  const r = path.getBoundingClientRect();
  const p = reduceMotion.matches ? 1 : clamp((innerHeight * .85 - r.top) / (innerHeight * .5), 0, 1);
  path.style.setProperty('--p', p.toFixed(3));
  const steps = $$('li', path);
  steps.forEach((li, i) => li.classList.toggle('is-on', p >= (i + .02) / steps.length));
}
addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(onScroll); }, { passive: true });
addEventListener('resize', onScroll);
onScroll();

// Primary buttons lean slightly toward the pointer.
$$('.magnetic').forEach(el => {
  el.addEventListener('pointermove', event => {
    if (reduceMotion.matches || !finePointer.matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(event.clientX - r.left - r.width / 2) * .12}px, ${(event.clientY - r.top - r.height / 2) * .18}px)`;
  });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
});

// Client strip: duplicate the group so the loop is seamless.
$$('[data-marquee]').forEach(section => {
  const track = $('.marquee-track', section), group = $('.marquee-group', section);
  const fill = () => {
    $$('.marquee-group[aria-hidden]', track).forEach(c => c.remove());
    const copies = Math.max(1, Math.ceil(section.clientWidth / Math.max(1, group.offsetWidth)));
    // An even number of groups keeps the -50% loop seamless.
    const total = (copies + 1) % 2 ? copies + 2 : copies + 1;
    for (let i = 1; i < total; i++) {
      const clone = group.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      $$('button', clone).forEach(b => { b.tabIndex = -1; });
      track.appendChild(clone);
    }
  };
  fill();
  addEventListener('resize', fill);
  section.classList.add('is-ready');
});

// Each background wash drifts on its own path.
$$('.wash i').forEach(layer => {
  const rand = (a, b) => (a + Math.random() * (b - a)).toFixed(1);
  layer.style.setProperty('--x1', rand(-18, 0) + '%'); layer.style.setProperty('--y1', rand(-12, 0) + '%');
  layer.style.setProperty('--x2', rand(8, 26) + '%'); layer.style.setProperty('--y2', rand(8, 24) + '%');
  layer.style.setProperty('--t', rand(55, 95) + 's'); layer.style.setProperty('--d', '-' + rand(0, 60) + 's');
});
document.addEventListener('visibilitychange', () => root.classList.toggle('tab-hidden', document.hidden));

// One switch pauses every ambient animation.
const bgToggle = $('#bgToggle');
let paused = false;
try { paused = localStorage.getItem('felix-motion-paused') === 'true'; } catch { /* optional */ }
function syncMotion() {
  const off = paused || reduceMotion.matches;
  root.classList.toggle('bg-paused', off);
  bgToggle.textContent = reduceMotion.matches ? 'Reduced motion is on' : (paused ? 'Resume motion' : 'Pause motion');
  bgToggle.setAttribute('aria-pressed', String(off));
  bgToggle.disabled = reduceMotion.matches;
}
bgToggle.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('felix-motion-paused', String(paused)); } catch { /* optional */ }
  syncMotion();
});
reduceMotion.addEventListener('change', () => { syncMotion(); onScroll(); });
syncMotion();

/* ─── CONTACT ─────────────────────────────────────────────── */
const copyBtn = $('#copyEmail');
copyBtn.addEventListener('click', async () => {
  const label = copyBtn.textContent;
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyBtn.textContent = 'Email address copied';
    copyBtn.classList.add('is-done');
  } catch {
    copyBtn.textContent = copyBtn.dataset.email;
  }
  setTimeout(() => { copyBtn.textContent = label; copyBtn.classList.remove('is-done'); }, 2200);
});

// Local time in Medellín, and how it lines up with New York right now.
const clock = $('#clock');
function hourIn(zone, date) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: zone, hour12: false, weekday: 'short', hour: 'numeric', minute: 'numeric' }).formatToParts(date);
  const get = type => parts.find(x => x.type === type).value;
  return { day: get('weekday'), minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
}
function tick() {
  try {
    const now = new Date();
    const time = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Bogota', hour: 'numeric', minute: '2-digit' }).format(now);
    const here = hourIn('America/Bogota', now), ny = hourIn('America/New_York', now);
    let diff = Math.round((ny.minutes - here.minutes) / 60);
    if (diff > 12) diff -= 24; if (diff < -12) diff += 24;
    const relation = diff === 0 ? 'the same time as New York' : `${Math.abs(diff)} hour${Math.abs(diff) > 1 ? 's' : ''} ${diff > 0 ? 'behind' : 'ahead of'} New York`;
    clock.innerHTML = `<b>${time}</b> in Medellín, ${relation}`;
  } catch { clock.hidden = true; }
}
tick();
setInterval(tick, 30000);

$('#year').textContent = new Date().getFullYear();
