/* ==========================================================
   projects.js — estructura de cada proyecto: categoría, portada,
   proceso por pasos (imágenes), vídeos y enlaces.
   Los TEXTOS están en content.js (TEXT[id].steps usa el mismo orden).

   Para añadir un proyecto nuevo:
   1) añade un objeto aquí,  2) añade su texto en content.js,
   3) guarda sus imágenes/vídeos en assets/.
   Los enlaces con url "" no se muestran (rellénalos cuando los tengas).
   ========================================================== */
window.App = window.App || {};

App.PROJECTS = [
  {
    id: "latte", title: "Latte", cat: "design", kind: "case", n: "01",
    tags: ["UX/UI", "User research", "Prototyping", "Usability testing"],
    color: "#b5bf90", fg: "#18221b",
    cover: { img: "assets/marks/latte.svg", alt: "Latte logo", fit: "mark" },
    mark: "assets/marks/latte.svg",
    steps: [
      { cols: 1, imgs: ["assets/images/presentation/slide-02.jpg"] },
      { cols: 1, imgs: ["assets/images/presentation/slide-09.jpg", "assets/images/presentation/slide-10.jpg"] },
      { cols: 1, imgs: ["assets/images/presentation/slide-13.jpg"] },
      { cols: 1, imgs: ["assets/images/presentation/slide-16.jpg"] },
      { cols: 1, imgs: ["assets/images/latte-wireframes.png"] },
      { cols: 1, imgs: ["assets/images/latte-moodboard.png", "assets/images/presentation/slide-23.jpg", "assets/images/presentation/slide-26.jpg"] },
      { cols: 2, imgs: ["assets/images/latte-screen-cafeterias.png", "assets/images/latte-screen-amigos.png"] },
      { cols: 1, imgs: ["assets/images/presentation/slide-29.jpg"] }
    ],
    media: [
      { type: "slides", cap: "cap_full", dir: "assets/images/presentation/slide-", count: 36 }
    ],
    links: [
      { key: "l_pdf",   url: "assets/docs/latte-presentation.pdf" },
      { key: "l_figma", url: "https://www.figma.com/design/aOjE72NlesqKaIKgjZLYHS/WiireFrames-Ui?node-id=0-1&p=f" }
    ]
  },
  {
    id: "nutri", title: "NutriPlan AI", cat: "ai code", kind: "case", n: "02",
    tags: ["Front-end", "UI/UX", "Generative AI", "Prompt engineering"],
    color: "#1c3227",
    cover: { img: "assets/marks/nutri.svg", alt: "NutriPlan AI logo", fit: "mark" },
    mark: "assets/marks/nutri.svg",
    steps: [
      { cols: 1, imgs: ["assets/images/nutri/mockup-consulta.jpg", "assets/images/nutri/mockup-generar.jpg", "assets/images/nutri/mockup-resultado.jpg"] },
      { cols: 1, imgs: ["assets/images/nutri/mvp-chat.jpg"] },
      { cols: 2, imgs: ["assets/images/nutri/final-home.jpg", "assets/images/nutri/final-generar.jpg", "assets/images/nutri/final-resultado.jpg", "assets/images/nutri/final-chat.jpg"] },
      { cols: 1, imgs: ["assets/images/nutri/system-prompt.jpg"] }
    ],
    media: [
      { type: "video", cap: "cap_video", src: "assets/videos/nutriplan-demo.mp4", poster: "assets/images/nutriplan-demo-poster.jpg" }
    ],
    links: [
      { key: "l_figma", url: "https://www.figma.com/design/m5OHNVcxsyE1ibUUJtyti3/NutriAI?node-id=0-1&p=f&t=mXmM3p6WHhub9qT8-0" },
      { key: "l_gh", url: "https://github.com/JuliaFuertes/Nutri_PlanIA" },
      { key: "l_report", url: "assets/docs/nutriplan-report.pdf" }
    ]
  },
  {
    id: "alula", title: "Alula", cat: "design", kind: "case", n: "03",
    tags: ["UX research", "Product design", "UI", "Prototyping"],
    color: "#2056e7",
    cover: { img: "assets/marks/alula.svg", alt: "Alula logo", fit: "mark" },
    mark: "assets/marks/alula.svg",
    steps: [
      { cols: 1, imgs: [] },
      { cols: 1, imgs: ["assets/images/alula/benchmark.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/persona.jpg"], max: 720 },
      { cols: 1, imgs: ["assets/images/alula/journey.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/flowcharts.jpg"], max: 820 },
      { cols: 2, imgs: ["assets/images/alula/wf-create.jpg", "assets/images/alula/wf-home.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/mood-1.jpg", "assets/images/alula/mood-2.jpg"], max: 794 },
      { cols: 1, imgs: ["assets/images/alula/home.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/create-empty.jpg", "assets/images/alula/create-full.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/workload.jpg"] },
      { cols: 1, imgs: ["assets/images/alula/task-easy.jpg", "assets/images/alula/task-detail.jpg"] },
      { cols: 1, imgs: [] }
    ],
    media: [
      { type: "video", cap: "cap_proto", src: "assets/videos/alula-prototype.mp4", poster: "assets/images/alula/prototype-poster.jpg" }
    ],
    links: [
      { key: "l_figma",    url: "https://www.figma.com/design/ZNBPoNkmBEM8lpfKLLpBau/Alula?node-id=1075-7637&t=rsfUsdnmtCyGmVqt-1" },
      { key: "l_board",    url: "https://www.figma.com/board/UlfR6mkqlOXhVODru30rBO/Benchmark?node-id=0-1&t=VsDomZWTNcjAeaLG-1" },
      { key: "l_proto_fn", url: "https://drive.google.com/file/d/13DUghwaZhow2DNENP-oQpVJ8TPI1Vgj5/view?usp=sharing" },
      { key: "l_case",     url: "assets/docs/alula-case-study.pdf" }
    ]
  },
  {
    id: "trip", title: "Trip Planner+", cat: "code design", kind: "case", n: "04",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    color: "#192b46",
    cover: { img: "assets/marks/trip.svg", alt: "Trip Planner+ logo", fit: "mark" },
    mark: "assets/marks/trip.svg",
    steps: [
      { cols: 1, imgs: ["assets/images/trip/home.jpg"] },
      { cols: 1, imgs: ["assets/images/trip/trips.jpg"] },
      { cols: 1, imgs: ["assets/images/trip/weather.jpg"] },
      { cols: 1, imgs: ["assets/images/trip/about.jpg"] },
      { cols: 1, imgs: ["assets/images/trip/contact.jpg"] }
    ],
    media: [
      { type: "video", cap: "cap_video", src: "assets/videos/tripplanner-demo.mp4", poster: "assets/images/tripplanner-demo-poster.jpg" }
    ],
    links: [
      { key: "l_gh", url: "https://github.com/JuliaFuertes/Nuestro_Trip" }
    ]
  },
  {
    id: "dow", title: "Dow Jones", kind: "exp", n: "01",
    tags: ["Figma", "Design systems", "SCSS", "Bootstrap", "Tailwind"],
    color: "#12202c",
    cover: { img: "assets/images/dowjones-rcpt.png", alt: "Dow Jones RiskCenter screens", fit: "screen" },
    steps: [
      { cols: 1, imgs: [] },
      { cols: 1, imgs: [] },
      { cols: 1, imgs: [] },
      { cols: 1, imgs: ["assets/images/dowjones-rcpt.png"] },
      { cols: 1, imgs: [] },
      { cols: 1, imgs: [] }
    ],
    media: [],
    links: [
      { key: "l_figma",  url: "https://www.figma.com/design/8ufRYOJYhh34fpUhCtUDtz/Projects-in-dow-jones?node-id=2002-6&p=f&t=7V7Fi3f1iHT9BJTA-0" },
      { key: "l_pdf_dj", url: "assets/docs/dowjones-migration.pdf" },
      { key: "l_docx",   url: "assets/docs/dowjones-migration.docx" }
    ]
  }
];
