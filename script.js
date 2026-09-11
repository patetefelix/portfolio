/* ============================================================
   FÉLIX PATETE — PORTFOLIO v2
   Interaction layer: cursor, loader, parallax, 3D tilt,
   magnetic hover, scroll-driven counters, split-text reveals,
   marquee, tabs, modal.
   ============================================================ */

"use strict";

/* ─── UTILITY ─────────────────────────────────────────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const lerp = (a, b, t) => a + (b - a) * t;

/* ─── DATA ────────────────────────────────────────────────── */

const TAB_COPY = {
  uiux: "High-conversion e-commerce storefronts and complex B2B catalogs, designed to scale — Adobe Commerce, Shopify, BigCommerce, and Shopware.",
  brand: "0→1 identity systems — brand strategy, typography, packaging, and retail interiors built to last.",
  growth: "Visual strategy for digital marketing — email flows, high-performing ad creative, and campaign assets built for DTC retention and conversion."
};

const CLIENTS = [
  "TK Elevator", "Caplugs", "Frontier Co-op",
  "PT Solutions", "AFG Distribution", "BrüMate", "Hoveround Mobility Solutions",
  "Oklahoma Correctional Industries", "BriskHeat", "High Speed Gear", "Nueske's", "White Cap Foods",
  "Professional's Choice", "Zip Corvette", "Feat Clothing", "Smithey Ironware", "12th Tribe",
  "Accutech", "Emraw", "Icarus Precision", "Siege Suppressors", "Phoenix Medical Instruments", "Live Q Or Die",
  "Crimson Agility", "Riddy", "Rugged Suppressors", "Garment Decor", "Denali Leather Goods",
  "Bark 2 Earth", "Klassen Farm Products",
  "Massalino Bakery", "Brüssel", "Oggi Pizza", "Arépale", "Disfruta", "Casa Santafé Hostel",
  "Bon Pops", "Cuida tu Mente", "Biona Coffee", "Sunset Coffee", "Casa de Encantos Tea House",
  "Phila Cup Coffee", "El Paraíso Heladería", "Pawty Animals", "Fryefit",
  "Rasa", "Tiny Rituals", "Static Nails"
];

const PROJECTS = [
  {
    id:"tke", tab:"uiux", type:"case", featured:true,
    name:"TK Elevator", industry:"Industrial Elevator Parts · B2B · Crimson Agility", platform:"Adobe Commerce", techStack:"Magento 2 / Enterprise B2B", liveUrl:"https://www.tkelevator.com/us-en/",
    role:"UX Design · Technical PDP",
    desc:"Designed a 2-click part-lookup flow for maintenance technicians.",
    thumbnail:"images/tke-thumb.png",
    gallery:["images/tke-01.png","images/tke-02.png","images/tke-03.png","images/tke-04.png","images/tke-05.png","images/tke-06.png"],
    scope:["Category navigation","Product detail page","Frequently-bought-together module"]
  },
  {
    id:"nueskes", tab:"uiux", type:"case", featured:true,
    name:"Nueske's", industry:"Specialty Foods · Smoked Meats DTC · Crimson Agility", platform:"Custom E-Commerce", techStack:"Proprietary PHP Engine", liveUrl:"https://nueskes.com/",
    role:"UX Design · Merchandising",
    desc:"Rebuilt the DTC storefront to support gifting, seasonality, and premium positioning.",
    thumbnail:"images/nueskes-thumb.png",
    gallery:["images/nueskes-01.png","images/nueskes-02.png","images/nueskes-03.png","images/nueskes-04.png","images/nueskes-05.png","images/nueskes-06.png","images/nueskes-07.png"],
    scope:["Homepage","PLP / PDP","Cart","Gift & seasonal merchandising modules"]
  },
  {
    id:"accutech", tab:"uiux", type:"case", featured:true,
    name:"Accutech", industry:"IT Hardware & Data Storage · B2B · Crimson Agility", platform:"Adobe Commerce", techStack:"Enterprise B2B Catalog", comingSoon:true,
    role:"UX Design · Figma Prototyping",
    desc:"Restructured a 15,000-SKU B2B catalog for faster corporate purchasing decisions.",
    thumbnail:"images/accutech-thumb.png",
    gallery:["images/accutech-01.png","images/accutech-02.png","images/accutech-03.png","images/accutech-04.png","images/accutech-05.png","images/accutech-06.png","images/accutech-07.png"],
    scope:["Homepage merchandising","Category navigation","Spec-based filtering","Cart flow"]
  },
  {
    id:"whitecap", tab:"uiux", type:"case", featured:true,
    name:"White Cap Foods", industry:"Foodservice Distribution · B2B · Crimson Agility", platform:"Figma → HTML/CSS", comingSoon:true,
    role:"Design System",
    desc:"Shipped a full e-commerce design system with static HTML/CSS handoff for engineering.",
    thumbnail:"images/whitecap-thumb.png",
    gallery:["images/whitecap-01.png","images/whitecap-02.png","images/whitecap-03.png","images/whitecap-04.png","images/whitecap-05.png","images/whitecap-06.png","images/whitecap-07.png"],
    scope:["Homepage","Mega menu","Cart / checkout","Account page","B2B credit application flow"]
  },
  {
    id:"briskheat", tab:"uiux", type:"case", featured:true,
    name:"BriskHeat", industry:"Industrial Heating Equipment · Global Manufacturer · Crimson Agility", platform:"Adobe Commerce", techStack:"Magento 2 / Custom Industrial Configurator", liveUrl:"https://www.briskheat.com/",
    role:"UX Design · Storefront & Checkout",
    desc:"Redesigned the storefront and checkout for a global industrial heating equipment leader.",
    thumbnail:"images/briskheat-thumb.png",
    gallery:["images/briskheat-01.png","images/briskheat-02.png","images/briskheat-03.png","images/briskheat-04.png","images/briskheat-05.png","images/briskheat-06.png","images/briskheat-07.png"],
    scope:["Homepage","Category navigation","Checkout","Seasonal campaign modules"]
  },
  {
    id:"siege", tab:"uiux", type:"case", featured:true,
    name:"Siege Suppressors", industry:"Firearms & Tactical Equipment · DTC · Crimson Agility", platform:"Shopify", techStack:"Shopify Core", liveUrl:"https://siegesuppressors.com/",
    role:"UX Design · Technical PDP",
    desc:"Designed spec-heavy PDPs and an educational content system for a precision suppressor brand.",
    thumbnail:"images/siege-thumb.png",
    gallery:["images/siege-01.png","images/siege-02.png","images/siege-03.png","images/siege-04.png","images/siege-05.png","images/siege-06.png","images/siege-07.png"],
    scope:["Category / PLP","Product detail page","Educational content template"]
  },
  {
    id:"riddy", tab:"uiux", type:"case", featured:true,
    name:"Riddy", industry:"Lawn Care & Pest Control · DTC Subscription · Crimson Agility", platform:"Adobe Commerce", comingSoon:true,
    role:"UX Design · Subscription Flow",
    desc:"Designed a plan-builder subscription flow for a DTC lawn care and pest control brand.",
    thumbnail:"images/riddy-thumb.png",
    gallery:["images/riddy-01.png","images/riddy-02.png","images/riddy-03.png","images/riddy-04.png","images/riddy-05.png"],
    scope:["Subscription plan builder","Homepage","Cart / checkout"]
  },
  {
    id:"professionalschoice", tab:"uiux", type:"case", featured:true,
    name:"Professional's Choice", industry:"Equestrian Sports Medicine · Category Leader", platform:"Web Shop Manager", techStack:"Specialized Equine E-Commerce", liveUrl:"https://www.profchoice.com/",
    role:"UX Design · Catalog & PDP",
    desc:"Designed the storefront for the category leader in equestrian sports medicine and horse tack.",
    thumbnail:"images/profchoice-thumb.png",
    gallery:["images/profchoice-01.png","images/profchoice-02.png","images/profchoice-03.png","images/profchoice-04.png","images/profchoice-05.png","images/profchoice-06.png","images/profchoice-07.png","images/profchoice-08.png"],
    scope:["Category / PLP","Product detail page","Education content"]
  },
  {
    id:"caplugs", tab:"uiux", type:"case",
    name:"Caplugs", industry:"Custom Plastic Molding & Industrial Protection · Global Manufacturer", platform:"Adobe Commerce", techStack:"Magento Enterprise / B2B", liveUrl:"https://www.caplugs.com/",
    role:"UX Design",
    desc:"Storefront UX for a global leader in custom plastic molding and masking solutions.",
    thumbnail:"images/caplugs-thumb.png",
    gallery:["images/caplugs-01.png","images/caplugs-02.png","images/caplugs-03.png","images/caplugs-04.png","images/caplugs-05.png","images/caplugs-06.png"],
    scope:["Category navigation","Product detail page"]
  },
  {
    id:"frontier-coop", tab:"uiux", type:"case",
    name:"Frontier Co-op", industry:"Natural Products Cooperative · DTC", platform:"Adobe Commerce", techStack:"Magento Enterprise / Acquia", liveUrl:"https://www.frontiercoop.com/",
    role:"UX Design",
    desc:"Storefront UX for the co-op behind billion-dollar natural product brands like Simply Organic and Aura Cacia.",
    thumbnail:"images/frontier-thumb.png",
    gallery:["images/frontier-01.png","images/frontier-02.png","images/frontier-03.png"],
    scope:["Homepage","Category navigation"]
  },
  {
    id:"pt-solutions", tab:"uiux", type:"case",
    name:"PT Solutions", industry:"Physical Therapy Healthcare Network", platform:"WordPress / Custom", techStack:"Healthcare CMS & Epic EMR", liveUrl:"https://ptsolutions.com/",
    role:"UX Design",
    desc:"Digital UX for a national physical therapy network with hundreds of clinical locations.",
    thumbnail:"images/pst-thumb.png",
    gallery:["images/pst-01.png","images/pst-02.png","images/pst-03.png","images/pst-04.png"],
    scope:["Location finder","Appointment request flow"]
  },
  {
    id:"afg-distribution", tab:"uiux", type:"case",
    name:"AFG Distribution", industry:"B2B Wholesale Distribution", platform:"Custom B2B", techStack:"Custom Wholesale E-Commerce Portal", comingSoon:true,
    role:"UX Design",
    desc:"B2B storefront UX for one of North America's largest wholesale distributors in its category.",
    thumbnail:"images/afg-thumb.png",
    gallery:["images/afg-02.png","images/afg-03.png"],
    scope:["Category navigation","Bulk order flow"]
  },
  {
    id:"hoveround", tab:"uiux", type:"case",
    name:"Hoveround Mobility Solutions", industry:"Medical Devices · Power Mobility · DTC", platform:"Custom Web", techStack:"AngularJS / Custom Portal", liveUrl:"https://www.hoveround.com/",
    role:"UX Design",
    desc:"DTC storefront UX for an iconic national power wheelchair manufacturer.",
    thumbnail:"images/hoveround-thumb.png",
    gallery:["images/hoveround-01.png","images/hoveround-02.png","images/hoveround-03.png","images/hoveround-04.png","images/hoveround-05.png","images/hoveround-06.png"],
    scope:["Product selection flow","Informational content pages"]
  },
  {
    id:"oci", tab:"uiux", type:"case",
    name:"Oklahoma Correctional Industries", industry:"State Government Manufacturing & Industrial Supply", platform:"Gov CMS (Drupal)", techStack:"Enterprise Government Portal", comingSoon:true,
    role:"UX Design",
    desc:"B2B storefront UX for a state government manufacturing and industrial supply enterprise.",
    thumbnail:"images/oci-thumb.png",
    gallery:["images/oci-01.png","images/oci-02.png","images/oci-03.png","images/oci-04.png"],
    scope:["Category navigation","B2B ordering flow"]
  },
  {
    id:"hsgi", tab:"uiux", type:"case",
    name:"High Speed Gear", industry:"Tactical Gear · DTC", platform:"Shopify Plus", techStack:"Shopify Enterprise", liveUrl:"https://www.highspeedgear.com/",
    role:"UX Design",
    desc:"DTC storefront UX for a premier tactical gear manufacturer serving military, law enforcement, and civilian markets.",
    thumbnail:"images/highspeed-thumb.png",
    gallery:["images/highspeed-01.png","images/highspeed-02.png","images/highspeed-03.png"],
    scope:["Category navigation","Product detail page"]
  },
  {
    id:"zip-corvette", tab:"uiux", type:"case",
    name:"Zip Corvette", industry:"Corvette Restoration Parts & Performance", platform:"Adobe Commerce", techStack:"Magento 2 / B2C Catalog", comingSoon:true,
    role:"UX Design",
    desc:"E-commerce UX for the leading US authority in Corvette restoration parts.",
    thumbnail:"images/zipcorvette-thumb.png",
    gallery:["images/zipcorvette-01.png","images/zipcorvette-02.png"],
    scope:["Category / fitment filtering","Product detail page"]
  },
  {
    id:"icarus-precision", tab:"uiux", type:"case",
    name:"Icarus Precision", industry:"Precision CNC Machining · Firearm Components", platform:"Shopify", techStack:"Shopify Core", comingSoon:true,
    role:"UX Design",
    desc:"DTC storefront UX for a high-precision CNC machining and firearm grip module brand.",
    thumbnail:"images/icarus-thumb.png",
    gallery:["images/icarus-01.png","images/icarus-02.png","images/icarus-03.png","images/icarus-04.png","images/icarus-05.png","images/icarus-06.png"],
    scope:["Product detail page","Category navigation"]
  },
  {
    id:"live-q-or-die", tab:"uiux", type:"case",
    name:"Live Q Or Die (Q)", industry:"Firearms & Suppressors · DTC", platform:"Shopify", techStack:"Shopify Core", liveUrl:"https://www.liveqordie.com/",
    role:"UX Design",
    desc:"DTC storefront UX for a firearms and suppressor manufacturer known for the Honey Badger platform.",
    thumbnail:"images/livq-thumb.png",
    gallery:["images/livq-01.png","images/livq-02.png","images/livq-03.png","images/livq-04.png","images/livq-05.png","images/livq-06.png","images/livq-07.png"],
    scope:["Category navigation","Product detail page"]
  },
  {
    id:"phoenix-medical", tab:"uiux", type:"case",
    name:"Phoenix Medical Instruments", industry:"Surgical Instruments & Healthcare Equipment · B2B", platform:"Adobe Commerce", comingSoon:true,
    role:"UX Design",
    desc:"B2B storefront UX for a specialized manufacturer of surgical instruments.",
    thumbnail:"images/phoenix-thumb.png",
    gallery:["images/phoenix-01.png","images/phoenix-02.png","images/phoenix-03.png"],
    scope:["Category navigation","Product detail page"]
  },
  {
    id:"rugged-suppressors", tab:"uiux", type:"case",
    name:"Rugged Suppressors", industry:"Firearm Suppressors & Accessories · DTC", platform:"Shopify", techStack:"Shopify Core", liveUrl:"https://www.ruggedsuppressors.com/",
    role:"UX Design",
    desc:"E-commerce UX for a firearm suppressor manufacturer and retailer.",
    thumbnail:"images/rugged-thumb.png",
    gallery:["images/rugged-01.png","images/rugged-02.png","images/rugged-03.png","images/rugged-04.png","images/rugged-05.png","images/rugged-06.png","images/rugged-07.png"],
    scope:["Category navigation","Product detail page"]
  },
  {
    id:"garment-decor-full", tab:"uiux", type:"case",
    name:"Garment Decor", industry:"Apparel Screen-Printing & Embroidery · B2B", platform:"WooCommerce", techStack:"WordPress / Custom Printing Engine", comingSoon:true,
    role:"Branding · Brand Guidelines · Web Design",
    desc:"Branding, guidelines, and web design for a commercial apparel decoration vendor.",
    thumbnail:"images/garment-thumb.jpg",
    gallery:["images/garment-01.jpg","images/garment-02.jpg","images/garment-03.jpg","images/garment-04.jpg","images/garment-05.jpg"],
    scope:["Logo","Brand guidelines","Web design"]
  },
  {
    id:"klassen-farm", tab:"uiux", type:"case",
    name:"Klassen Farm Products", industry:"Agricultural & Farm Products", platform:"Brand Identity + Web", comingSoon:true,
    role:"Branding · Web Design",
    desc:"Branding and web design for a specialty agricultural and farm products manufacturer.",
    thumbnail:"images/klassen-thumb.png",
    gallery:["images/klassen-01.png","images/klassen-02.png"],
    scope:["Logo","Web design"]
  },
  {
    id:"feat", tab:"growth", type:"case", featured:true,
    name:"Feat Clothing", industry:"Apparel · DTC", platform:"Email Marketing", liveUrl:"https://featclothing.com/",
    role:"Email Design",
    desc:"Built a modular email system to support weekly drops without wearing down the brand's aesthetic.",
    thumbnail:"images/feat-thumb.png",
    gallery:["images/feat-01.png","images/feat-02.png","images/feat-03.png","images/feat-04.png","images/feat-05.png","images/feat-06.png","images/feat-07.png","images/feat-08.png","images/feat-09.png"],
    scope:["Email design","Copy-to-visual adaptation"]
  },
  {
    id:"rasa", tab:"growth", type:"case",
    name:"Rasa", industry:"Adaptogenic Coffee Alternatives · DTC", platform:"Email Marketing", liveUrl:"https://wearerasa.com/",
    role:"Email Design",
    desc:"Designed campaigns for an adaptogen and mushroom coffee-alternative brand.",
    thumbnail:"images/rasa-thumb.jpg",
    gallery:["images/rasa-01.jpg","images/rasa-02.jpg","images/rasa-03.jpg","images/rasa-04.jpg","images/rasa-05.jpg","images/rasa-06.jpg"],
    scope:["Email design"]
  },
  {
    id:"tinyrituals", tab:"growth", type:"case",
    name:"Tiny Rituals", industry:"Spiritual Jewelry & Crystals · DTC", platform:"Email Marketing", liveUrl:"https://tinyrituals.co/",
    role:"Email Design",
    desc:"Designed campaigns for a crystal and spiritual jewelry brand.",
    thumbnail:"images/tinyrituals-thumb.jpg",
    gallery:["images/tinyrituals-01.jpg","images/tinyrituals-02.jpg","images/tinyrituals-03.jpg"],
    scope:["Email design"]
  },
  {
    id:"12thtribe", tab:"growth", type:"case",
    name:"12th Tribe", industry:"Women's Fashion Apparel · DTC", platform:"Email Marketing", liveUrl:"https://12thtribe.com/",
    role:"Email Design",
    desc:"Designed email campaigns for a fashion DTC brand with a heavy social-first audience.",
    thumbnail:"images/12thtribe-thumb.jpg",
    gallery:["images/12thtribe-01.jpg","images/12thtribe-02.jpg","images/12thtribe-03.jpg","images/12thtribe-04.jpg","images/12thtribe-05.jpg"],
    scope:["Email design"]
  },
  {
    id:"static-nails", tab:"growth", type:"case",
    name:"Static Nails", industry:"Beauty & Personal Care · DTC", platform:"Email Marketing", liveUrl:"https://staticnails.com/",
    role:"Email Design",
    desc:"Designed email campaigns for a press-on nail DTC brand.",
    thumbnail:"images/staticnails-thumb.jpg",
    gallery:["images/staticnails-01.jpg","images/staticnails-02.jpg","images/staticnails-03.jpg","images/staticnails-04.jpg","images/staticnails-05.jpg"],
    scope:["Email design"]
  },
  {
    id:"brümate", tab:"growth", type:"case",
    name:"BrüMate", industry:"Drinkware & Coolers · DTC", platform:"Email Marketing", liveUrl:"https://brumate.com/",
    role:"Email Design",
    desc:"Email campaign design for a premium drinkware DTC brand.",
    thumbnail:"images/brumate-thumb.jpg",
    gallery:["images/brumate-01.jpg","images/brumate-02.jpg","images/brumate-03.jpg"],
    scope:["Email design"]
  },
  {
    id:"smithey", tab:"growth", type:"case",
    name:"Smithey Ironware", industry:"Cast Iron Cookware · DTC", platform:"Email Marketing", liveUrl:"https://smithey.com/",
    role:"Email Design",
    desc:"Email design for an American heirloom cast iron cookware brand.",
    thumbnail:"images/smithey-thumb.jpg",
    gallery:["images/smithey-01.jpg","images/smithey-02.jpg","images/smithey-03.jpg"],
    scope:["Email design"]
  },
  {
    id:"wolven", tab:"brand", type:"case", featured:true,
    name:"Wolven", industry:"Sustainable Activewear · DTC", platform:"Brand Identity",
    role:"Branding",
    desc:"Visual identity for a sustainable activewear brand.",
    thumbnail:"images/wolven-thumb.png",
    gallery:["images/wolven-01.png","images/wolven-02.png","images/wolven-03.png"],
    scope:["Logo","Brand identity"]
  },
  {
    id:"paraiso", tab:"brand", type:"case", featured:true,
    name:"El Paraíso Heladería", industry:"Artisan Ice Cream · Hospitality", platform:"Brand Identity",
    role:"Branding · Packaging · Retail",
    desc:"Full identity system for an artisan ice cream shop in Medellín — logo, packaging, and retail branding.",
    thumbnail:"images/paraiso-thumb.jpg",
    gallery:["images/paraiso-01.jpg","images/paraiso-02.jpg","images/paraiso-03.jpg","images/paraiso-04.jpg","images/paraiso-05.jpg","images/paraiso-06.jpg"],
    scope:["Logo","Packaging","Retail interior branding"]
  },
  {
    id:"massalino", tab:"brand", type:"case", featured:true,
    name:"Massalino Bakery", industry:"Artisan Bakery · Hospitality", platform:"Brand Identity",
    role:"Branding · Packaging",
    desc:"Brand identity and packaging for an artisan Italian-style bakery.",
    thumbnail:"images/massalino-thumb.jpg",
    gallery:["images/massalino-01.jpg","images/massalino-02.jpg","images/massalino-03.jpg","images/massalino-04.jpg","images/massalino-05.jpg","images/massalino-06.jpg"],
    scope:["Logo","Packaging design","Brand guidelines"]
  },
  {
    id:"disfruta", tab:"brand", type:"case", featured:true,
    name:"Disfruta", industry:"Food & Beverage · Hospitality", platform:"Brand Identity",
    role:"Branding · Retail",
    desc:"Visual identity and retail branding for a food and beverage concept.",
    thumbnail:"images/disfruta-thumb.jpg",
    gallery:["images/disfruta-01.jpg","images/disfruta-02.jpg","images/disfruta-03.jpg","images/disfruta-04.jpg"],
    scope:["Logo","Retail branding"]
  },
  {
    id:"casasantafe", tab:"brand", type:"case", featured:true,
    name:"Casa Santafé Hostel", industry:"Boutique Hospitality", platform:"Brand Identity",
    role:"Branding",
    desc:"Brand identity for a boutique hostel in the heart of Bogotá's historic La Candelaria neighborhood.",
    thumbnail:"images/casasantafe-thumb.jpg",
    gallery:["images/casasantafe-01.jpg","images/casasantafe-02.jpg","images/casasantafe-03.jpg","images/casasantafe-04.jpg","images/casasantafe-05.jpg"],
    scope:["Logo","Brand guidelines","Signage system"]
  },
  {
    id:"pawty-animals", tab:"brand", type:"case", featured:true,
    name:"Pawty Animals", industry:"Pet Services · Retail", platform:"Brand Identity",
    role:"Branding · Retail",
    desc:"Playful visual identity and retail branding for a pet grooming and accessories brand.",
    thumbnail:"images/pawty-thumb.jpg",
    gallery:["images/pawty-01.jpg","images/pawty-02.jpg","images/pawty-03.jpg"],
    scope:["Logo","Brand identity","Retail branding"]
  },
  {
    id:"casaencantos", tab:"brand", type:"case",
    name:"Casa de Encantos Tea House", industry:"Tea & Wellness · Hospitality", platform:"Brand Identity",
    role:"Branding · Packaging",
    desc:"Visual identity and packaging for a tea house brand.",
    thumbnail:"images/casaencantos-thumb.jpg",
    gallery:["images/casaencantos-01.jpg","images/casaencantos-02.jpg","images/casaencantos-03.jpg","images/casaencantos-04.jpg","images/casaencantos-05.jpg","images/casaencantos-06.jpg"],
    scope:["Logo","Packaging"]
  },
  {
    id:"bonpops", tab:"brand", type:"case",
    name:"Bon Pops", industry:"Frozen Treats · Retail", platform:"Brand Identity",
    role:"Branding · Retail",
    desc:"Branding and retail branding for a frozen-pop retail concept.",
    thumbnail:"images/bonpops-thumb.jpg",
    gallery:["images/bonpops-01.jpg","images/bonpops-02.jpg","images/bonpops-03.jpg","images/bonpops-04.jpg","images/bonpops-05.jpg","images/bonpops-06.jpg","images/bonpops-07.jpg","images/bonpops-08.jpg","images/bonpops-09.jpg","images/bonpops-10.jpg","images/bonpops-11.jpg","images/bonpops-12.jpg","images/bonpops-13.jpg","images/bonpops-14.jpg"],
    scope:["Logo","Retail branding"]
  },
  {
    id:"cuida-tu-mente", tab:"brand", type:"case",
    name:"Cuida tu Mente", industry:"Mental Health Services", platform:"Brand Identity",
    role:"Branding",
    desc:"Branding and retail branding for a mental health services brand.",
    thumbnail:"images/cuidatumente-thumb.jpg",
    gallery:["images/cuidatumente-01.jpg","images/cuidatumente-02.jpg","images/cuidatumente-03.jpg","images/cuidatumente-04.jpg","images/cuidatumente-05.jpg"],
    scope:["Logo","Retail branding"]
  },
  {
    id:"sunset-coffee", tab:"brand", type:"case",
    name:"Sunset Coffee", industry:"Specialty Coffee · Packaging", platform:"Brand Identity",
    role:"Branding · Packaging",
    desc:"Branding and packaging for a specialty coffee line.",
    thumbnail:"images/sunsetcoffee-thumb.jpg",
    gallery:["images/sunsetcoffee-01.png","images/sunsetcoffee-02.jpg","images/sunsetcoffee-03.jpg","images/sunsetcoffee-04.jpg","images/sunsetcoffee-05.jpg","images/sunsetcoffee-06.jpg","images/sunsetcoffee-07.jpg","images/sunsetcoffee-08.jpg","images/sunsetcoffee-09.jpg","images/sunsetcoffee-10.jpg"],
    scope:["Logo","Packaging design"]
  },
  {
    id:"phila-cup", tab:"brand", type:"case",
    name:"Phila Cup Coffee", industry:"Coffee · Packaging", platform:"Brand Identity",
    role:"Logo Design · Packaging",
    desc:"Logo and packaging design for a Philadelphia coffee brand.",
    thumbnail:"images/philacup-thumb.png",
    gallery:["images/philacup-01.jpg","images/philacup-02.jpg","images/philacup-03.jpg","images/philacup-04.jpg","images/philacup-05.jpg","images/philacup-06.jpg","images/philacup-07.png"],
    scope:["Logo","Packaging design"]
  },
  {
    id:"humboldt", tab:"brand", type:"case",
    name:"Humboldt", industry:"Wine & Spirits · Packaging", platform:"Brand Identity",
    role:"Branding · Packaging",
    desc:"Branding and packaging for a wine and spirits brand.",
    thumbnail:"images/humboldt-thumb.jpg",
    gallery:["images/humboldt-01.jpg","images/humboldt-02.jpg","images/humboldt-03.png","images/humboldt-04.png","images/humboldt-05.png","images/humboldt-06.png","images/humboldt-07.jpg","images/humboldt-08.jpg","images/humboldt-09.png","images/humboldt-10.png"],
    scope:["Logo","Packaging design"]
  }
];

const BRAND_GALLERY = PROJECTS.filter(p => p.tab === "brand");


let previousFocus = null;
/* ─── TABS + GRID RENDER ─────────────────────────────────── */
let currentTab = "uiux";
const tabsEl       = $("#tabs");
const tabDescEl    = $("#tabDesc");
const gridEl       = $("#projectGrid");
const subgridHeadEl  = $("#subgridHead");
const brandFeaturedEl= $("#brandGalleryFeatured");
const brandGalleryEl = $("#brandGallery");

function cardHTML(p) {
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

function liveLinkHTML(p) {
  if (p.liveUrl) return `<a class="btn btn-ghost btn-sm cs-live-btn" href="${p.liveUrl}" target="_blank" rel="noopener"><span>view live</span><span class="btn-icon" style="width:20px;height:20px;font-size:10px;">↗</span></a>`;
  if (p.comingSoon) return `<span class="btn btn-ghost btn-sm cs-live-btn is-disabled">coming soon</span>`;
  return "";
}

function renderGrid(tab) {
  gridEl.innerHTML = "";
  gridEl.classList.toggle("is-dense", tab !== "uiux");

  PROJECTS.filter(p => p.tab === tab).forEach(p => {
    const card = document.createElement("button");
    card.type = "button";
    card.setAttribute("aria-label", `View ${p.name} case study`);
    card.className = "card";
    card.innerHTML = cardHTML(p);
    card.addEventListener("click", () => openCase(p.id));
    gridEl.appendChild(card);
  });

  observeCards($$(".card", gridEl));
  initCardTilt();

  const isBrand = tab === "brand";
  subgridHeadEl.hidden = !isBrand;
  brandFeaturedEl.innerHTML = "";
  brandGalleryEl.innerHTML = "";

  subgridHeadEl.hidden = true;

  if (window.applyMagneticToNew) window.applyMagneticToNew();
}

tabsEl && tabsEl.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    if (tab === currentTab) return;
    currentTab = tab;
    tabsEl.querySelectorAll(".tab").forEach(t => {
      const active = t === btn;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    tabDescEl.textContent = TAB_COPY[tab];
    renderGrid(tab);
  });
});

/* ─── MODAL ──────────────────────────────────────────────── */
const modal        = $("#modal");
const modalBackdrop= $("#modalBackdrop");
const modalContent = $("#modalContent");
const modalClose   = $("#modalClose");

function openCase(id) {
  const p = PROJECTS.find(x => x.id === id) || BRAND_GALLERY.find(x => x.id === id);
  if (!p) return;
  modal.classList.remove("lightbox");

  if (p.type === "gallery") {
    modal.classList.add("lightbox");
    modalContent.innerHTML = `<img class="lightbox-img" src="${p.image}" alt="${p.name}"><div class="lightbox-caption"><b>${p.name}</b>${p.caption}</div>`;
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
        ${p.gallery.map(src => `<div class="gallery-item"><img src="${src}" alt="${p.name}" loading="lazy"></div>`).join("")}
      </div>
      <div class="cs-section">
        <p class="cs-label">What I worked on</p>
        <ul class="cs-scope-list">${p.scope.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
    </div>`;
  openModal();
}

function openModal() {
  previousFocus = document.activeElement;
  modal.inert = false;
  modal.classList.add("is-open");
  document.querySelector("main").inert = true;
  document.querySelector("header.nav").inert = true;
  document.querySelector("footer").inert = true;
  modalClose.focus();
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-inner").scrollTop = 0;
}
function closeModal() {
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.inert = true;
  document.querySelector("main").inert = false;
  document.querySelector("header.nav").inert = false;
  document.querySelector("footer").inert = false;
  previousFocus?.focus();
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modalClose   && modalClose.addEventListener("click", closeModal);
modalBackdrop && modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });


/* Motion is progressive enhancement; content remains readable without it. */
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
function observeCards(cards) { cards.forEach(card => card.classList.add('is-in')); }
function initCardTilt() {
  // Keep the case-study reading surface stable; motion lives in its image.
}

// Preserve every relative filename; GitHub hosts the fallback asset.
document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  const relative = img.getAttribute('src');
  if (!img.dataset.remoteTried && relative?.startsWith('images/')) {
    img.dataset.remoteTried = 'true';
    img.src = 'https://patetefelix.github.io/portfolio/' + relative;
  } else {
    const note = document.createElement('span');
    note.className = 'media-unavailable';
    note.textContent = img.alt ? `${img.alt} — image unavailable` : 'Image unavailable';
    img.replaceWith(note);
  }
}, true);
// Catch early image failures that occurred before this script loaded.
$$('img').forEach(img => {
  if (img.complete && !img.naturalWidth) img.dispatchEvent(new Event('error'));
});

const toggle = $('#themeToggle');
try {
  const saved = localStorage.getItem('felix-theme');
  if (['light', 'dark'].includes(saved)) document.documentElement.dataset.theme = saved;
} catch { /* Storage can be unavailable in private contexts. */ }
function updateThemeLabel() {
  toggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'light'));
}
updateThemeLabel();
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  updateThemeLabel();
  try { localStorage.setItem('felix-theme', next); } catch { /* Optional preference. */ }
});

$('#footerYear').textContent = new Date().getFullYear();
const track = $('#marqueeTrack');
CLIENTS.forEach(name => {
  const item = document.createElement('span');
  item.textContent = name;
  track.appendChild(item);
});
const firstItems = [...track.children];
firstItems.forEach(item => {
  const copy = item.cloneNode(true);
  copy.setAttribute('aria-hidden', 'true');
  track.appendChild(copy);
});
$('.marquee').tabIndex = 0;

// One panel, three keyboard-operable categories.
const tabButtons = $$('.tab');
tabButtons.forEach((tab, i) => {
  tab.id = `tab-${tab.dataset.tab}`;
  tab.setAttribute('aria-controls', 'projectGrid');
  tab.tabIndex = i === 0 ? 0 : -1;
  tab.addEventListener('click', () => {
    tabButtons.forEach(button => button.tabIndex = button === tab ? 0 : -1);
    gridEl.setAttribute('aria-labelledby', tab.id);
  });
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (i + 1) % tabButtons.length;
    if (event.key === 'ArrowLeft') next = (i + tabButtons.length - 1) % tabButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabButtons.length - 1;
    if (next === undefined) return;
    event.preventDefault(); tabButtons[next].click(); tabButtons[next].focus();
  });
});
gridEl.setAttribute('aria-labelledby', tabButtons[0].id);
tabDescEl.textContent = TAB_COPY[currentTab];
renderGrid(currentTab);
$$('[data-case]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.case)));

modal.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = $$('button, a[href], [tabindex="0"]', modal);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

let scrollFrame = 0;
function updateScroll() {
  scrollFrame = 0;
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty('--progress', max > 0 ? scrollY / max : 0);
  $('#siteNav').classList.toggle('is-scrolled', scrollY > 60);
  let current = '';
  ['work', 'about', 'contact'].forEach(id => { if ($('#' + id).getBoundingClientRect().top <= 200) current = id; });
  $$('.nav-links a').forEach(link => {
    const active = link.dataset.nav === current;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();

const stage = $('.hero-stack-wrap');
stage.addEventListener('pointermove', event => {
  if (motion.matches || !finePointer.matches) return;
  const rect = stage.getBoundingClientRect();
  stage.style.setProperty('--stage-x', `${((event.clientX - rect.left) / rect.width - .5) * 9}deg`);
  stage.style.setProperty('--stage-y', `${((event.clientY - rect.top) / rect.height - .5) * -7}deg`);
});
stage.addEventListener('pointerleave', () => {
  stage.style.setProperty('--stage-x', '0deg'); stage.style.setProperty('--stage-y', '0deg');
});
$$('.magnetic').forEach(button => {
  button.addEventListener('pointermove', event => {
    if (motion.matches || !finePointer.matches) return;
    const rect = button.getBoundingClientRect();
    button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .09}px,${(event.clientY - rect.top - rect.height / 2) * .12}px)`;
  });
  button.addEventListener('pointerleave', () => button.style.transform = '');
});
if (!motion.matches) {
  document.documentElement.classList.add('js-motion');
  $$('.reveal-fade,.reveal-count').forEach(el => revealObserver.observe(el));
  $$('.hl-line').forEach((line, index) => line.animate(
    [{ opacity: 0, transform: 'translateY(25px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
    { duration: 950, delay: 100 + index * 100, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }
  ));
}
motion.addEventListener('change', () => {
  if (motion.matches) {
    document.documentElement.classList.remove('js-motion');
    document.getAnimations().forEach(animation => animation.cancel());
    stage.style.transform = 'none';
    $$('.magnetic').forEach(button => button.style.transform = '');
  }
});
