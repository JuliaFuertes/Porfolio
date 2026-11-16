/* ==========================================================
   translations.js — textos de la interfaz en EN / CA / ES
   Para añadir un idioma: agrégalo a LANGS y crea su bloque en UI.
   ========================================================== */
window.App = window.App || {};

App.LANGS = ["en", "ca", "es"];

App.UI = {
  en: {
    nav_work: "Projects", nav_exp: "Experience", nav_profile: "Profile", nav_contact: "Contact",
    sub: "Product design",
    intro_hint: "Move your cursor · click to burst", intro_scroll: "Scroll ↓", intro_alt: "Cherry blossom made of dots. Move your cursor to interact with it.",
    h1: "I turn ideas into digital products that feel intuitive, useful, and a little unexpected.",
    hint: "Selected work below ↓",
    sec_projects: "Projects", sec_projects_sub: "Course & team projects",
    sec_exp: "Experience", sec_exp_sub: "Internships",
    badge_exp: "Internship", full_project: "Full project ↗", full_exp: "Full experience ↗",
    exp_h: "Product design internship",
    exp_p: "Intern at Dow Jones, where I migrated projects from Bootstrap to Tailwind for tech stack alignment.",
    sec_profile: "Profile",
    lead: "I’m Júlia Fuertes, a third-year student at La Salle University studying Design and Creation of Interactive Products, with experience in Product Design through an internship at Dow Jones.",
    edu_label: "Education", edu: "La Salle University · Design and Creation of Interactive Products",
    skills_label: "Skills", location: "Barcelona",
    c_label: "Let’s make something useful", c_h: "Have a product question? Let’s talk.",
    copy: "Copy email", copied: "Copied", failed: "Copy failed",
    context: "Context", process: "Process", cap_full: "Full presentation", zoom: "Open full size", case: "Case study", exp_label: "Experience", role: "Role", scope: "Scope",
    cap_slides: "Prototype walkthrough", cap_screens: "Interface explorations", cap_moodboard: "Moodboard",
    cap_wireframes: "Design system & wireframes", cap_video: "Video demo", cap_images: "Images",
    slide: "Slide", prev: "← Previous", next: "Next →",
    l_pdf: "Presentation (PDF)", l_gh: "GitHub repo", l_figma: "Figma", l_pdf_dj: "PDF", l_docx: "Word document", l_report: "Project report (PDF)",
    cap_proto: "Functional prototype", l_case: "Case study (PDF)", l_board: "Research boards (Figma)", l_proto_fn: "Functional prototype",
    theme: "Toggle dark mode", close: "Close", lang: "Language"
  },
  ca: {
    nav_work: "Projectes", nav_exp: "Experiència", nav_profile: "Perfil", nav_contact: "Contacte",
    sub: "Disseny de producte",
    intro_hint: "Mou el cursor · fes clic", intro_scroll: "Desplaça ↓", intro_alt: "Flor de cirerer feta de puntets. Mou el cursor per interactuar-hi.",
    h1: "Converteixo idees en productes digitals intuïtius, útils i una mica inesperats.",
    hint: "Treballs seleccionats a sota ↓",
    sec_projects: "Projectes", sec_projects_sub: "Projectes de classe i en equip",
    sec_exp: "Experiència", sec_exp_sub: "Pràctiques",
    badge_exp: "Pràctiques", full_project: "Veure el projecte ↗", full_exp: "Veure l’experiència ↗",
    exp_h: "Pràctiques de disseny de producte",
    exp_p: "Becària a Dow Jones, on vaig migrar projectes de Bootstrap a Tailwind per alinear l’stack tecnològic.",
    sec_profile: "Perfil",
    lead: "Sóc la Júlia Fuertes, estudiant de tercer curs a la Universitat La Salle del grau en Disseny i Creació de Productes Interactius, amb experiència en disseny de producte gràcies a unes pràctiques a Dow Jones.",
    edu_label: "Formació", edu: "Universitat La Salle · Disseny i Creació de Productes Interactius",
    skills_label: "Habilitats", location: "Barcelona",
    c_label: "Fem alguna cosa útil", c_h: "Tens una pregunta sobre producte? Parlem.",
    copy: "Copia el correu", copied: "Copiat", failed: "No s’ha pogut copiar",
    context: "Context", process: "Procés", cap_full: "Presentació completa", zoom: "Obrir en gran", case: "Cas pràctic", exp_label: "Experiència", role: "Rol", scope: "Abast",
    cap_slides: "Recorregut del prototip", cap_screens: "Exploracions d’interfície", cap_moodboard: "Moodboard",
    cap_wireframes: "Sistema de disseny i wireframes", cap_video: "Demo en vídeo", cap_images: "Imatges",
    slide: "Diapositiva", prev: "← Anterior", next: "Següent →",
    l_pdf: "Presentació (PDF)", l_gh: "Repositori de GitHub", l_figma: "Figma", l_pdf_dj: "PDF", l_docx: "Document Word", l_report: "Memòria del projecte (PDF)",
    cap_proto: "Prototip funcional", l_case: "Cas pràctic (PDF)", l_board: "Panells de recerca (Figma)", l_proto_fn: "Prototip funcional",
    theme: "Canvia el mode fosc", close: "Tanca", lang: "Idioma"
  },
  es: {
    nav_work: "Proyectos", nav_exp: "Experiencia", nav_profile: "Perfil", nav_contact: "Contacto",
    sub: "Diseño de producto",
    intro_hint: "Mueve el cursor · haz clic", intro_scroll: "Desplázate ↓", intro_alt: "Flor de cerezo hecha de puntitos. Mueve el cursor para interactuar con ella.",
    h1: "Convierto ideas en productos digitales intuitivos, útiles y un poco inesperados.",
    hint: "Trabajos seleccionados abajo ↓",
    sec_projects: "Proyectos", sec_projects_sub: "Proyectos de clase y en equipo",
    sec_exp: "Experiencia", sec_exp_sub: "Prácticas",
    badge_exp: "Prácticas", full_project: "Ver proyecto ↗", full_exp: "Ver experiencia ↗",
    exp_h: "Prácticas de diseño de producto",
    exp_p: "Becaria en Dow Jones, donde migré proyectos de Bootstrap a Tailwind para alinear el stack tecnológico.",
    sec_profile: "Perfil",
    lead: "Soy Júlia Fuertes, estudiante de tercer curso en la Universidad La Salle del grado en Diseño y Creación de Productos Interactivos, con experiencia en diseño de producto gracias a unas prácticas en Dow Jones.",
    edu_label: "Formación", edu: "Universidad La Salle · Diseño y Creación de Productos Interactivos",
    skills_label: "Habilidades", location: "Barcelona",
    c_label: "Hagamos algo útil", c_h: "¿Tienes una pregunta sobre producto? Hablemos.",
    copy: "Copiar correo", copied: "Copiado", failed: "No se pudo copiar",
    context: "Contexto", process: "Proceso", cap_full: "Presentación completa", zoom: "Abrir en grande", case: "Caso de estudio", exp_label: "Experiencia", role: "Rol", scope: "Alcance",
    cap_slides: "Recorrido del prototipo", cap_screens: "Exploraciones de interfaz", cap_moodboard: "Moodboard",
    cap_wireframes: "Sistema de diseño y wireframes", cap_video: "Demo en vídeo", cap_images: "Imágenes",
    slide: "Diapositiva", prev: "← Anterior", next: "Siguiente →",
    l_pdf: "Presentación (PDF)", l_gh: "Repositorio de GitHub", l_figma: "Figma", l_pdf_dj: "PDF", l_docx: "Documento Word", l_report: "Memoria del proyecto (PDF)",
    cap_proto: "Prototipo funcional", l_case: "Caso de estudio (PDF)", l_board: "Paneles de investigación (Figma)", l_proto_fn: "Prototipo funcional",
    theme: "Cambiar modo oscuro", close: "Cerrar", lang: "Idioma"
  }
};
