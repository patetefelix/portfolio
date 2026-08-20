/* ============================================================
   FÉLIX PATETE — PORTFOLIO
   Project data acts as the "CMS collection" — edit this array
   to add, remove, or update case studies. No build step needed.
   ============================================================ */

/* ============================================================
   TEXTOS DE CATEGORÍA (TAB_COPY) - MEJORADOS
   ============================================================ */
const TAB_COPY = {
  uiux: "Tiendas e-commerce de alta conversión y plataformas B2B complejas diseñadas para escala — Adobe Commerce, Shopify, BigCommerce y Shopware.",
  brand: "Sistemas de identidad de 0 a 1: estrategia de marca, tipografía, empaque e interiorismo comercial construidos para perdurar.",
  growth: "Estrategia visual para marketing digital: flujos de email, anuncios de alto rendimiento y assets de campaña enfocados en retención y conversión DTC."
};

/* ============================================================
   COLECCIÓN DE PROYECTOS OPTIMIZADA (PROJECTS)
   ============================================================ */
const PROJECTS = [

  /* ---------------- TAB 1 — UI/UX & E-COMMERCE ---------------- */
  {
    id: "accutech", tab: "uiux", type: "case", featured: true,
    name: "Accutech", industry: "IT Hardware & Data Storage", platform: "Adobe Commerce",
    role: "UX Design · Figma Prototyping",
    desc: "Rediseño UX de catálogo B2B de 15,000 SKUs optimizado para compras corporativas rápidas.",
    image: "images/proj-accutech.jpg",
    challenge: "Los compradores de IT corporativos necesitaban comparar miles de SKUs de almacenamiento técnico sin perderse en arquitecturas de navegación profundas.",
    owned: ["Rediseño integral de interfaz storefront en Figma", "Lógica de filtrado avanzado para PLP y categorías", "Diseño de PDP estructurado para especificaciones técnicas complejas"],
    scope: ["Merchandising en Homepage", "Navegación por categorías", "Flujo de Carrito"],
    influence: "Impulsé un módulo simplificado de productos destacados en la Home para acortar la ruta hacia los SKUs de mayor rotación.",
    outcome: "Una experiencia de navegación más rápida y clara para un catálogo B2B técnico, optimizada tanto para ejecutivos de compras como para distribuidores de TI."
  },
  {
    id: "nueskes", tab: "uiux", type: "case", featured: true,
    name: "Nueske's", industry: "Specialty Foods · Smoked Meats DTC", platform: "Adobe Commerce",
    role: "UX Design · Merchandising",
    desc: "Storefront premium DTC enfocado en regalos corporativos, estacionalidad y venta directa.",
    image: "images/proj-nueskes.jpg",
    challenge: "Marca tradicional de carnes ahumadas requería una tienda digital a la altura de su calidad premium, capaz de gestionar un gran catálogo con flujos de regalos y suscripciones.",
    owned: ["Rediseño de categorías y Fichas de Producto (PDP)", "Optimización de UX en Carrito y Checkout", "Módulos de merchandising estacional y regalos"],
    scope: ["Homepage", "PLP / PDP", "Carrito"],
    influence: "Integré módulos de venta cruzada basados en recetas para conectar los productos con momentos reales de consumo y preparación.",
    outcome: "Un storefront que aprovecha la fotografía gastronómica y el merchandising de temporada para elevar el valor promedio de pedido (AOV) y las compras recurrentes."
  },
  {
    id: "tke", tab: "uiux", type: "case", featured: true,
    name: "TK Elevator", industry: "Industrial Elevator Parts · B2B", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "Catálogo técnico B2B de repuestos optimizado para búsquedas por número de pieza.",
    image: "images/proj-tke.jpg",
    challenge: "Técnicos de mantenimiento necesitaban encontrar repuestos exactos por especificación técnica en un flujo ultra rápido de dos clics.",
    owned: ["UX de tienda B2B para repuestos industriales", "PDP con tablas de especificaciones técnicas interactivas", "Módulo de venta cruzada 'Frecuentemente comprados juntos'"],
    scope: ["Navegación de categorías", "Ficha de producto (PDP)"],
    influence: "Propuse una estructura de PDP priorizada en datos técnicos antes del pliegue (above the fold) en lugar de imágenes de estilo de vida, adaptándome a los hábitos reales de compra técnica.",
    outcome: "Un catálogo de repuestos ágil y preciso que reduce el tiempo de búsqueda para técnicos e ingenieros."
  },
  {
    id: "whitecap", tab: "uiux", type: "case", featured: true,
    name: "White Cap Foods", industry: "Foodservice Distribution · B2B", platform: "Figma → HTML/CSS",
    role: "Design System",
    desc: "Sistema de diseño completo e-commerce entregado en HTML/CSS estático para handover de ingeniería.",
    image: "images/proj-whitecap.jpg",
    challenge: "Los clientes B2B de un distribuidor de alimentos requerían un proceso de reorden ultra rápido y un flujo simplificado para solicitudes de crédito.",
    owned: ["Sistema de diseño completo en Figma (Home, Mega Menu, Carrito, Cuenta)", "Maquetación estática HTML/CSS para desarrollo"],
    scope: ["Arquitectura de Información (Mega Menu)", "Flujo de Reorden", "Formulario de Aprobación de Crédito B2B"],
    influence: "Reestructuré el formulario de crédito comercial dividiéndolo en pasos lógicos para reducir drásticamente la tasa de abandono de nuevas cuentas.",
    outcome: "Un Design System modular y reutilizable listo para implementación directa por el equipo de desarrollo."
  },

  /* ---------------- TAB 2 — BRAND IDENTITY ---------------- */
  {
    id: "denali", tab: "brand", type: "case", featured: true,
    name: "Denali Leather Goods", industry: "Leather Goods · Brand 0→1", platform: "Brand Identity",
    role: "Brand Strategy · Identity System",
    desc: "Identidad de marca robusta y atemporal adaptada tanto para grabado en piel como para entornos digitales.",
    image: "images/b-denali.jpg",
    challenge: "Creación desde cero de la identidad para una marca artesanal de cuero que requería transmitir elegancia y durabilidad sin caer en clichés visuales.",
    owned: ["Sistema visual completo (Wordmark, Isotipo/Sello, Tipografía)", "Aplicaciones impresas, empaque y digitales"],
    scope: ["Suite de logotipos", "Guía de estilo de marca", "Plantillas para redes sociales", "Papelería corporativa"],
    influence: "Definí una paleta monocromática primaria que garantiza legibilidad e impacto gráfico tanto en el grabado térmico sobre cuero como en pantallas.",
    outcome: "Una marca cohesiva y versátil lista para escalar en producción física y canales de e-commerce."
  },
  {
    id: "bark2earth", tab: "brand", type: "case", featured: true,
    name: "Bark 2 Earth", industry: "Pet Treats & Wellness · Brand 0→1", platform: "Brand Identity",
    role: "Branding · Packaging · Web",
    desc: "Branding integral, diseño de empaques para anaquel y tienda e-commerce para marca de bienestar animal.",
    image: "images/b-bark2earth.jpg",
    challenge: "Desarrollar una marca natural para mascotas capaz de destacar visualmente en los anaqueles físicos y digitales frente a competidores consolidados.",
    owned: ["Identidad de marca", "Sistema de diseño de empaque (Packaging)", "Diseño de sitio web e-commerce"],
    scope: ["Logo", "Empaques (Pouch + Cajas)", "Diseño Web"],
    influence: "Establecí un código de color y patrones gráficos unificados para mantener el reconocimiento de marca a través de todas las líneas de producto.",
    outcome: "Una identidad visual consistente y 'shelf-ready' que transmite origen natural y confianza al consumidor."
  },
  {
    id: "biona", tab: "brand", type: "case", featured: true,
    name: "Biona Coffee", industry: "Coffee · Packaging 0→1", platform: "Brand Identity",
    role: "Branding · Packaging",
    desc: "Sistema de empaque enfocado en origen y niveles de tueste para línea de café especial.",
    image: "images/b-bionacoffee.jpg",
    challenge: "Una marca de café especial necesitaba empaques que comunicaran el origen único (Perú, Colombia) y la calidad artesanal de forma inmediata en el punto de venta.",
    owned: ["Identidad visual y línea de empaques para múltiples orígenes y tipos de tueste"],
    scope: ["Logo", "Diseño de empaques", "Sistema de codificación por color e ilustración"],
    influence: "Diseñé un sistema de etiquetado y colorimetría por origen que facilita la decisión de compra rápida en anaquel.",
    outcome: "Una familia de empaques llamativa y coherente que fortalece el posicionamiento premium del producto."
  },

  /* ---------------- TAB 3 — GROWTH MARKETING CREATIVE ---------------- */
  {
    id: "feat", tab: "growth", type: "case", featured: true,
    name: "Feat Clothing", industry: "Apparel · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Sistema visual de email marketing modular para lanzamientos frecuentes en marca de ropa sostenible.",
    image: "images/email-feat.jpg",
    challenge: "Mantener una alta frecuencia de envíos semanales de email sin desgastar la estética suave y sostenible de la marca.",
    owned: ["Diseño de plantillas y campañas para lanzamientos de producto, ofertas estacionales y flujos automáticos"],
    scope: ["Diseño de emails", "Adaptación visual de copy"],
    influence: "Creé un sistema modular de bloques reutilizables en Figma que redujo los tiempos de producción de cada campaña.",
    outcome: "Una estrategia visual consistente y ágil que soporta un ritmo alto de publicación manteniendo el engagement de la audiencia."
  },
  {
    id: "brumate", tab: "growth", type: "case", featured: true,
    name: "Brumate", industry: "Drinkware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Campañas de email dinámicas y coloridas orientadas a resaltar catálogos amplios de productos.",
    image: "images/email-brumate.jpg",
    challenge: "Presentar de forma atractiva múltiples variantes de color y productos en campañas masivas de conversión.",
    owned: ["Diseño de campañas para lanzamientos, festividades y promociones especiales"],
    scope: ["Diseño de Email"],
    influence: "Estandaricé módulos en cuadrícula específicos para variantes de color, facilitando la exploración visual rápida dentro del correo.",
    outcome: "Un sistema de email eficiente enfocado en impulsar la conversión de un catálogo con alta variedad de SKUs."
  },
  {
    id: "crimson-collateral", tab: "growth", type: "case", featured: true,
    name: "Crimson Agility Campaign Assets", industry: "B2B E-Commerce Agency", platform: "Digital Marketing",
    role: "Campaign Creative",
    desc: "Sistema de ad-tiles y gráficos para redes sociales orientados al marketing de servicios e-commerce B2B.",
    image: "images/marketing-collateral-01.jpg",
    challenge: "Crear una identidad gráfica coherente para campañas pagadas y promociones B2B de auditorías e-commerce y soluciones de cumplimiento.",
    owned: ["Sistema de plantillas publicitarias y contenido para redes sociales a través de múltiples servicios"],
    scope: ["Plantillas para Ads", "Gráficos para promocionar Case Studies", "Assets visuales de campaña"],
    influence: "Desarrollé plantillas modulares que permitieron al equipo interno actualizar textos e imágenes sin perder la calidad ni la estructura del diseño.",
    outcome: "Un kit de assets de marketing versátil que profesionalizó la presencia digital de la agencia."
  }
];


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
