/* ==========================================================
   content.js — textos de cada proyecto, en orden [EN, CA, ES]
   Para editar un texto, cambia la posición del idioma correspondiente.
   ========================================================== */
window.App = window.App || {};

App.TEXT = {
  latte: {
    sub:   ["Mobile app · User Interface", "App mòbil · Interfície d’usuari", "App móvil · Interfaz de usuario"],
    sum:   ["Latte, your map to great coffee: a social app to discover, save and share cafés and bakeries.",
            "Latte, el teu mapa per al bon cafè: una app social per descobrir, desar i compartir cafeteries i forns.",
            "Latte, tu mapa para el buen café: una app social para descubrir, guardar y compartir cafeterías y panaderías."],
    role:  ["UX/UI design", "Disseny UX/UI", "Diseño UX/UI"],
    scope: ["Research to prototype", "De la recerca al prototip", "De la investigación al prototipo"],
    body:  ["A collaborative project developed as part of the <strong>Inclusive Design</strong> course, where we were given creative freedom to choose our own concept and topic. Working as a team, we created Latte, a social mobile app focused on discovering, saving, and sharing cafés and bakeries. The project explored the complete <strong>UX/UI design process</strong>, including user research, customer journeys, user flows, wireframes, interaction design, usability testing, and visual design, with each team member contributing to the final product.",
            "Un projecte col·laboratiu de l’assignatura de <strong>Disseny Inclusiu</strong>, on teníem llibertat creativa per triar el concepte i el tema. Treballant en equip, vam crear Latte, una app mòbil social per descobrir, desar i compartir cafeteries i forns. El projecte va recórrer tot el <strong>procés de disseny UX/UI</strong>: recerca d’usuaris, customer journeys, fluxos, wireframes, disseny d’interacció, tests d’usabilitat i disseny visual, amb la contribució de cada membre de l’equip al producte final.",
            "Un proyecto colaborativo de la asignatura de <strong>Diseño Inclusivo</strong>, donde teníamos libertad creativa para elegir el concepto y el tema. Trabajando en equipo, creamos Latte, una app móvil social para descubrir, guardar y compartir cafeterías y panaderías. El proyecto recorrió todo el <strong>proceso de diseño UX/UI</strong>: investigación de usuarios, customer journeys, flujos, wireframes, diseño de interacción, tests de usabilidad y diseño visual, con la contribución de cada miembro del equipo al producto final."],
    process: ["Design process", "Procés de disseny", "Proceso de diseño"],
    stats: [["6", ["design stages, from customer journey to usability test", "fases de disseny, del customer journey al test d’usabilitat", "fases de diseño, del customer journey al test de usabilidad"]], ["2", ["user personas, each with a full journey", "personatges d’usuari, cadascun amb el seu journey complet", "personas de usuario, cada una con su journey completo"]], ["3", ["usability test tasks planned", "tasques de test d’usabilitat planificades", "tareas de test de usabilidad planificadas"]], ["3", ["brand colours and 2 typefaces", "colors de marca i 2 tipografies", "colores de marca y 2 tipografías"]]],
    steps: [{"tag": "01", "title": ["Concept & objectives", "Concepte i objectius", "Concepto y objetivos"], "text": ["Latte is a brand and product built from scratch: a social app for coffee and matcha lovers to discover, save and share cafés and bakeries. Our goals were a functional, visually appealing platform, connections through shared interests, support for independent cafés, and putting interaction design, information architecture and market analysis into practice.", "Latte és una marca i un producte creats des de zero: una app social per a amants del cafè i el matcha per descobrir, desar i compartir cafeteries i forns. Els objectius: una plataforma funcional i visualment atractiva, connexions per interessos compartits, suport a les cafeteries independents i posar en pràctica disseny d’interacció, arquitectura de la informació i anàlisi de mercat.", "Latte es una marca y un producto creados desde cero: una app social para amantes del café y el matcha para descubrir, guardar y compartir cafeterías y panaderías. Los objetivos: una plataforma funcional y visualmente atractiva, conexiones por intereses compartidos, apoyo a las cafeterías independientes y poner en práctica diseño de interacción, arquitectura de la información y análisis de mercado."]}, {"tag": "02", "title": ["Users & customer journey", "Usuaris i customer journey", "Usuarios y customer journey"], "text": ["The audience is young adults aged 18 to 40: students, freelancers and urban professionals. We built two personas, Alexandra, a marketing specialist who hunts for good matcha, and David, a financial analyst who needs quiet cafés to work from. Each journey maps six phases (discovery, registration, exploration, interaction, community and outcome) with emotions and channels.", "El públic són joves de 18 a 40 anys: estudiants, freelancers i professionals urbans. Vam crear dos personatges: l’Alexandra, especialista en màrqueting que busca bon matcha, i en David, analista financer que necessita cafeteries tranquil·les per treballar. Cada journey recorre sis fases (descobriment, registre, exploració, interacció, comunitat i resultat) amb emocions i canals.", "El público son jóvenes de 18 a 40 años: estudiantes, freelancers y profesionales urbanos. Creamos dos personas: Alexandra, especialista en marketing que busca buen matcha, y David, analista financiero que necesita cafeterías tranquilas para trabajar. Cada journey recorre seis fases (descubrimiento, registro, exploración, interacción, comunidad y resultado) con emociones y canales."]}, {"tag": "03", "title": ["Flowcharts", "Diagrames de flux", "Diagramas de flujo"], "text": ["Two flows describe the core tasks: viewing a café profile (search or recommendations, details, rating, review, save to favourites) and searching for coffee with filters by price, ratings, location and speciality, ending in the decision to go or not. They gave us a clear structure of decision points and system responses.", "Dos fluxos descriuen les tasques principals: veure el perfil d’una cafeteria (cerca o recomanacions, detalls, valoració, ressenya, desar a preferits) i cercar cafè amb filtres de preu, valoracions, ubicació i especialitats, fins a decidir si hi anem o no. Ens van donar una estructura clara dels punts de decisió i de les respostes del sistema.", "Dos flujos describen las tareas principales: ver el perfil de una cafetería (búsqueda o recomendaciones, detalles, valoración, reseña, guardar en favoritos) y buscar café con filtros de precio, valoraciones, ubicación y especialidades, hasta decidir si ir o no. Nos dieron una estructura clara de los puntos de decisión y las respuestas del sistema."]}, {"tag": "04", "title": ["Wireflows", "Wireflows", "Wireflows"], "text": ["Wireframes connected with arrows show how people move through the app: the main feed, the map, posting photos, profile and search. Simulating those paths let us test the coherence of the navigation and spot redundancies or missing links before designing the final screens.", "Els wireframes connectats amb fletxes mostren com es mou la gent per l’app: el feed principal, el mapa, publicar fotos, el perfil i la cerca. Simular aquests camins ens va permetre provar la coherència de la navegació i detectar redundàncies o enllaços que faltaven abans de dissenyar les pantalles finals.", "Los wireframes conectados con flechas muestran cómo se mueve la gente por la app: el feed principal, el mapa, publicar fotos, el perfil y la búsqueda. Simular esos caminos nos permitió probar la coherencia de la navegación y detectar redundancias o enlaces que faltaban antes de diseñar las pantallas finales."]}, {"tag": "05", "title": ["Wireframes", "Wireframes", "Wireframes"], "text": ["High-fidelity wireframes in Figma covered profiles, lists, the map, search, chat and post creation. They defined the layout, components and content hierarchy of every screen, and were the reference for moving into the final visual design.", "Els wireframes d’alta fidelitat a Figma cobrien perfils, llistes, el mapa, la cerca, el xat i la creació de publicacions. Van definir el disseny, els components i la jerarquia de continguts de cada pantalla, i van ser la referència per passar al disseny visual final.", "Los wireframes de alta fidelidad en Figma cubrían perfiles, listas, el mapa, la búsqueda, el chat y la creación de publicaciones. Definieron el diseño, los componentes y la jerarquía de contenidos de cada pantalla, y fueron la referencia para pasar al diseño visual final."]}, {"tag": "06", "title": ["Visual identity", "Identitat visual", "Identidad visual"], "text": ["A cosy, minimalist look inspired by modern cafés: pistachio (#B3B792), almond (#E5E0D8) and carob (#725C3A), with Helvetica Neue and the script Filmotype Yale, which come together in the wordmark. The logo is a latte-art tulip.", "Un aspecte acollidor i minimalista inspirat en les cafeteries modernes: pistatxo (#B3B792), ametlla (#E5E0D8) i garrofa (#725C3A), amb Helvetica Neue i la lletra manuscrita Filmotype Yale, que es combinen en el nom de la marca. El logo és una tulipa de latte art.", "Un aspecto acogedor y minimalista inspirado en las cafeterías modernas: pistacho (#B3B792), almendra (#E5E0D8) y algarroba (#725C3A), con Helvetica Neue y la tipografía manuscrita Filmotype Yale, que se combinan en el nombre de la marca. El logo es un tulipán de latte art."]}, {"tag": "07", "title": ["Final design", "Disseny final", "Diseño final"], "text": ["A simple vertical grid of scrollable cards in a familiar social-media format, with muted greens, warm beige and soft browns, and a darker brown tab underline to keep the hierarchy. Each post shows photo, user, description, café tag, location and rating; icons at the bottom switch between home, map, post, explore and profile.", "Una graella vertical senzilla de targetes desplaçables en un format de xarxa social conegut, amb verds suaus, beix càlid i marrons tous, i un subratllat marró més fosc a la pestanya activa per mantenir la jerarquia. Cada publicació mostra foto, usuari, descripció, etiqueta de la cafeteria, ubicació i valoració; les icones de baix canvien entre inici, mapa, publicar, explorar i perfil.", "Una cuadrícula vertical sencilla de tarjetas desplazables en un formato de red social conocido, con verdes suaves, beige cálido y marrones suaves, y un subrayado marrón más oscuro en la pestaña activa para mantener la jerarquía. Cada publicación muestra foto, usuario, descripción, etiqueta de la cafetería, ubicación y valoración; los iconos inferiores cambian entre inicio, mapa, publicar, explorar y perfil."]}, {"tag": "08", "title": ["Usability test plan", "Pla de test d’usabilitat", "Plan de test de usabilidad"], "text": ["We prepared a complete test plan with three tasks (open a café profile from the map, filter for a quiet café with Wi-Fi and outdoor seating, and leave a review) plus pre-test, post-task and post-test questionnaires. The test itself has not been carried out yet.", "Vam preparar un pla de test complet amb tres tasques (obrir el perfil d’una cafeteria des del mapa, filtrar una cafeteria tranquil·la amb Wi-Fi i terrassa, i deixar una ressenya) i qüestionaris previ, posterior a cada tasca i final. El test en si encara no s’ha dut a terme.", "Preparamos un plan de test completo con tres tareas (abrir el perfil de una cafetería desde el mapa, filtrar una cafetería tranquila con Wi-Fi y terraza, y dejar una reseña) y cuestionarios previo, posterior a cada tarea y final. El test en sí todavía no se ha realizado."]}]
  },
  nutri: {
    sub:   ["AI chatbot · AI", "Xatbot d’IA · IA", "Chatbot de IA · IA"],
    sum:   ["A web app with a nutrition chat and a personalised meal-plan generator, powered by Llama 3.3 70B through the Groq API and prompt engineering.",
            "Una aplicació web amb un xat de nutrició i un generador de plans de menjars personalitzats, amb Llama 3.3 70B a través de l’API de Groq i prompt engineering.",
            "Una aplicación web con un chat de nutrición y un generador de planes de comidas personalizados, con Llama 3.3 70B a través de la API de Groq y prompt engineering."],
    role:  ["Front-End Developer & UI/UX Designer", "Desenvolupadora front-end i dissenyadora UI/UX", "Desarrolladora front-end y diseñadora UI/UX"],
    scope: ["Web development, AI integration & prompt engineering", "Desenvolupament web, integració d’IA i prompt engineering", "Desarrollo web, integración de IA y prompt engineering"],
    body:  ["A team project for the <strong>Generative Artificial Intelligence</strong> course (La Salle, Universitat Ramon Llull), built with Ariadna Jové and Ana Rodríguez. NutriPlan AI has two modules: a <strong>nutrition chat</strong> that answers questions and compares foods, and a <strong>plan generator</strong> that builds a personalised meal plan from the user’s goal, duration, diet type, allergies and food preferences. It uses a pre-trained <strong>Llama 3.3 70B</strong> model through the <strong>Groq API</strong> (no training of our own) and <strong>prompt engineering</strong> to keep answers on topic and to force every plan to come back as valid <strong>JSON</strong>, which the interface renders as macro cards and a day-by-day plan. It is an educational tool and does not replace a nutritionist.<p class=\"tech\"><strong>Limits:</strong> without an external nutrition database, calories and macros are model estimates, not verified data. <strong>Next steps:</strong> connect USDA FoodData Central or BEDCA, add a backend with user accounts and saved plans, combine the plans with sports and activity data, and build a mobile version.</p>",
            "Un projecte en equip de l’assignatura d’<strong>Intel·ligència Artificial Generativa</strong> (La Salle, Universitat Ramon Llull), creat amb Ariadna Jové i Ana Rodríguez. NutriPlan AI té dos mòduls: un <strong>xat de nutrició</strong> que respon preguntes i compara aliments, i un <strong>generador de plans</strong> que crea un pla de menjars personalitzat a partir de l’objectiu, la durada, el tipus de dieta, les al·lèrgies i les preferències de l’usuari. Utilitza un model preentrenat <strong>Llama 3.3 70B</strong> a través de l’<strong>API de Groq</strong> (sense entrenament propi) i <strong>prompt engineering</strong> per mantenir les respostes dins del tema i obligar que cada pla torni com a <strong>JSON</strong> vàlid, que la interfície mostra com a targetes de macros i un pla dia a dia. És una eina educativa i no substitueix un nutricionista.<p class=\"tech\"><strong>Límits:</strong> sense una base de dades nutricional externa, les calories i els macros són estimacions del model, no dades verificades. <strong>Pròxims passos:</strong> connectar USDA FoodData Central o BEDCA, afegir un backend amb comptes d’usuari i plans desats, combinar els plans amb dades esportives i d’activitat, i crear una versió mòbil.</p>",
            "Un proyecto en equipo de la asignatura de <strong>Inteligencia Artificial Generativa</strong> (La Salle, Universitat Ramon Llull), creado con Ariadna Jové y Ana Rodríguez. NutriPlan AI tiene dos módulos: un <strong>chat de nutrición</strong> que responde preguntas y compara alimentos, y un <strong>generador de planes</strong> que crea un plan de comidas personalizado a partir del objetivo, la duración, el tipo de dieta, las alergias y las preferencias del usuario. Usa un modelo preentrenado <strong>Llama 3.3 70B</strong> a través de la <strong>API de Groq</strong> (sin entrenamiento propio) y <strong>prompt engineering</strong> para mantener las respuestas dentro del tema y obligar a que cada plan vuelva como <strong>JSON</strong> válido, que la interfaz muestra como tarjetas de macros y un plan día a día. Es una herramienta educativa y no sustituye a un nutricionista.<p class=\"tech\"><strong>Límites:</strong> sin una base de datos nutricional externa, las calorías y los macros son estimaciones del modelo, no datos verificados. <strong>Próximos pasos:</strong> conectar USDA FoodData Central o BEDCA, añadir un backend con cuentas de usuario y planes guardados, combinar los planes con datos deportivos y de actividad, y crear una versión móvil.</p>"],
    process: ["Process · from mock-up to final version", "Procés · del mock-up a la versió final", "Proceso · del mock-up a la versión final"],
    stats: [
      [">90%", ["of plans came back as valid JSON when the prompt was well defined", "dels plans van tornar com a JSON vàlid amb un prompt ben definit", "de los planes volvieron como JSON válido con un prompt bien definido"]],
      ["1–3 s", ["chat response time", "temps de resposta del xat", "tiempo de respuesta del chat"]],
      ["3–6 s", ["to generate a full plan", "per generar un pla complet", "para generar un plan completo"]],
      ["4", ["iterative versions: mock-up, MVP, functional, final", "versions iteratives: mock-up, MVP, funcional, final", "versiones iterativas: mock-up, MVP, funcional, final"]]
    ],
    steps: [
      { tag: "V0", title: ["Idea & mock-up", "Idea i mock-up", "Idea y mock-up"],
        text: ["We defined the product, the problem and the basic architecture, and sketched the main screens in Figma. Early decisions: a web app with a conversational AI assistant; pre-trained models through an external API, with no training of our own; a clear split between the free-form chat and the structured plan generator; and plans returned as JSON so the interface can render them in a structured way.",
               "Vam definir el producte, el problema i l’arquitectura bàsica, i vam esbossar les pantalles principals a Figma. Primeres decisions: una aplicació web amb un assistent conversacional d’IA; models preentrenats a través d’una API externa, sense entrenament propi; una separació clara entre el xat lliure i el generador de plans estructurats; i plans retornats en JSON perquè la interfície els pugui mostrar de forma estructurada.",
               "Definimos el producto, el problema y la arquitectura básica, y esbozamos las pantallas principales en Figma. Primeras decisiones: una aplicación web con un asistente conversacional de IA; modelos preentrenados a través de una API externa, sin entrenamiento propio; una separación clara entre el chat libre y el generador de planes estructurados; y planes devueltos en JSON para que la interfaz pueda mostrarlos de forma estructurada."],
        caps: [["Food consultation", "Consulta d’aliments", "Consulta de alimentos"], ["Plan generator", "Generador de plans", "Generador de planes"], ["Generated plan", "Pla generat", "Plan generado"]] },
      { tag: "V1", title: ["MVP", "MVP", "MVP"],
        text: ["A single-page web with a simple chat interface, built to prove the idea. It connected to the Groq API with the llama-3.3-70b-versatile model, kept coherent conversations and answered nutrition questions correctly. The interface was deliberately minimal so we could first check that the AI worked well.",
               "Una web d’una sola pàgina amb una interfície de xat senzilla, creada per demostrar la idea. Es connectava a l’API de Groq amb el model llama-3.3-70b-versatile, mantenia converses coherents i responia correctament preguntes de nutrició. La interfície es va fer deliberadament mínima per comprovar primer que la IA funcionava bé.",
               "Una web de una sola página con una interfaz de chat sencilla, creada para demostrar la idea. Se conectaba a la API de Groq con el modelo llama-3.3-70b-versatile, mantenía conversaciones coherentes y respondía correctamente preguntas de nutrición. La interfaz se hizo deliberadamente mínima para comprobar primero que la IA funcionaba bien."],
        caps: [["First prototype with the AI interaction", "Primer prototip amb la interacció de la IA", "Primer prototipo con la interacción de la IA"]] },
      { tag: "V2", title: ["Functional version", "Versió funcional", "Versión funcional"],
        text: ["We combined the MVP with a second version of the project that brought a complete dashboard interface. It went from a simple chat page to a multi-page app with navigation between sections, focusing on making the user experience as intuitive and simple as possible so it could reach a wider range of users.",
               "Vam combinar l’MVP amb una segona versió del projecte que aportava una interfície completa de tipus dashboard. Es va passar d’una simple pàgina de xat a una aplicació multipàgina amb navegació entre seccions, centrant-nos que l’experiència d’usuari fos el més intuïtiva i senzilla possible per arribar a més usuaris.",
               "Combinamos el MVP con una segunda versión del proyecto que aportó una interfaz completa tipo dashboard. Se pasó de una simple página de chat a una aplicación multipágina con navegación entre secciones, centrándonos en que la experiencia de usuario fuera lo más intuitiva y sencilla posible para llegar a más usuarios."],
        caps: [["Home", "Inici", "Inicio"], ["Generate plan", "Generar pla", "Generar plan"], ["Plan result", "Resultat del pla", "Resultado del plan"], ["Food consultation chat", "Xat de consulta d’aliments", "Chat de consulta de alimentos"]] },
      { tag: "V3", title: ["Final version", "Versió final", "Versión final"],
        text: ["The final version consolidated everything from version 2, added robustness improvements and completed the technical documentation. The system prompts were refined to improve the quality and consistency of answers, and error handling was validated across every flow.",
               "La versió final va consolidar tot el de la versió 2, va afegir millores de robustesa i va completar la documentació tècnica. Es van refinar els prompts del sistema per millorar la qualitat i la coherència de les respostes, i es va validar la gestió d’errors en tots els fluxos.",
               "La versión final consolidó todo lo de la versión 2, añadió mejoras de robustez y completó la documentación técnica. Se refinaron los prompts del sistema para mejorar la calidad y la coherencia de las respuestas, y se validó la gestión de errores en todos los flujos."],
        caps: [["System prompt that defines the assistant’s role", "Prompt del sistema que defineix el rol de l’assistent", "Prompt del sistema que define el rol del asistente"]] }
    ]
  },
  alula: {
    "sub": [
      "Project management tool · UX / Product design",
      "Eina de gestió de projectes · UX / Product design",
      "Herramienta de gestión de proyectos · UX / Product design"
    ],
    "sum": [
      "A project management tool for engineering managers, designed so a routine update takes seconds and blockers and overload surface on their own, with nobody chasing the team for status.",
      "Una eina de gestió de projectes per a managers d’enginyeria, pensada perquè una actualització rutinària trigui segons i els bloquejos i la sobrecàrrega surtin a la llum sols, sense anar al darrere de l’equip per saber l’estat.",
      "Una herramienta de gestión de proyectos para managers de ingeniería, pensada para que una actualización rutinaria lleve segundos y los bloqueos y la sobrecarga salgan a la luz solos, sin ir detrás del equipo para saber el estado."
    ],
    "role": [
      "UX / Product designer",
      "UX / Product designer",
      "UX / Product designer"
    ],
    "scope": [
      "Research, flows, UI and functional prototype",
      "Recerca, fluxos, UI i prototip funcional",
      "Investigación, flujos, UI y prototipo funcional"
    ],
    "body": [
      "An individual <strong>UX / product design</strong> case study that goes from research to a functional prototype. The target user is David, an <strong>engineering manager</strong> who spends the day asking people for status instead of leading. Alula focuses on three tasks: <strong>creating a project</strong> with just a name, <strong>updating a task</strong> by dragging a card, and <strong>seeing the team’s workload</strong> at a glance. Below you can follow the process step by step, from the benchmark and the persona to flows, wireflows, visual identity and the final screens, and watch the functional prototype at the end.",
      "Un cas d’estudi individual d’<strong>UX / disseny de producte</strong> que va de la recerca a un prototip funcional. L’usuari és en David, un <strong>engineering manager</strong> que passa el dia demanant l’estat a la gent en lloc de liderar. Alula se centra en tres tasques: <strong>crear un projecte</strong> només amb un nom, <strong>actualitzar una tasca</strong> arrossegant una targeta i <strong>veure la càrrega de l’equip</strong> d’un cop d’ull. A sota pots seguir el procés pas a pas, del benchmark i la persona als fluxos, els wireflows, la identitat visual i les pantalles finals, i veure el prototip funcional al final.",
      "Un caso de estudio individual de <strong>UX / diseño de producto</strong> que va de la investigación a un prototipo funcional. El usuario es David, un <strong>engineering manager</strong> que pasa el día pidiendo el estado a la gente en lugar de liderar. Alula se centra en tres tareas: <strong>crear un proyecto</strong> solo con un nombre, <strong>actualizar una tarea</strong> arrastrando una tarjeta y <strong>ver la carga del equipo</strong> de un vistazo. Más abajo puedes seguir el proceso paso a paso, desde el benchmark y la persona hasta los flujos, los wireflows, la identidad visual y las pantallas finales, y ver el prototipo funcional al final."
    ],
    "process": [
      "Design process",
      "Procés de disseny",
      "Proceso de diseño"
    ],
    "stats": [
      [
        "3",
        [
          "tools benchmarked: Linear, Monday.com and Jira",
          "eines analitzades: Linear, Monday.com i Jira",
          "herramientas analizadas: Linear, Monday.com y Jira"
        ]
      ],
      [
        "6 → 1",
        [
          "from a six-field form to a name and a row of chips",
          "d’un formulari de sis camps a un nom i una fila de chips",
          "de un formulario de seis campos a un nombre y una fila de chips"
        ]
      ],
      [
        "3",
        [
          "core flows: create a project, update a task, view workload",
          "fluxos principals: crear un projecte, actualitzar una tasca, veure la càrrega",
          "flujos principales: crear un proyecto, actualizar una tarea, ver la carga"
        ]
      ],
      [
        "4 px",
        [
          "base grid, 12 columns and 32 px minimum touch targets",
          "graella base, 12 columnes i àrees tàctils mínimes de 32 px",
          "cuadrícula base, 12 columnas y áreas táctiles mínimas de 32 px"
        ]
      ]
    ],
    "steps": [
      {
        "tag": "01",
        "title": [
          "The problem",
          "El problema",
          "El problema"
        ],
        "text": [
          "Project managers and team leads are overwhelmed by fragmented tools, and the cost lands on their time: they spend the day asking people for status instead of leading. It affects managers who run technical teams, especially as companies scale and work becomes hybrid. Getting a real-time picture of progress means chasing teammates for manual updates, and when updating a task is slow or confusing the team stops doing it, so project data goes stale and blockers are found late. The opportunity: a tool where a routine update takes seconds and blockers and overload surface on their own.",
          "Els project managers i els team leads van desbordats d’eines fragmentades, i el cost recau en el seu temps: passen el dia demanant l’estat a la gent en lloc de liderar. Afecta els managers que dirigeixen equips tècnics, sobretot a mesura que les empreses creixen i el treball es torna híbrid. Tenir una imatge en temps real del progrés vol dir anar al darrere dels companys perquè facin actualitzacions manuals, i quan actualitzar una tasca és lent o confús l’equip deixa de fer-ho: les dades del projecte queden obsoletes i els bloquejos es descobreixen tard. L’oportunitat: una eina on una actualització rutinària triga segons i els bloquejos i la sobrecàrrega surten a la llum sols.",
          "Los project managers y los team leads están desbordados por herramientas fragmentadas, y el coste recae en su tiempo: pasan el día pidiendo el estado a la gente en lugar de liderar. Afecta a los managers que dirigen equipos técnicos, sobre todo a medida que las empresas crecen y el trabajo se vuelve híbrido. Tener una imagen en tiempo real del progreso significa ir detrás de los compañeros para que hagan actualizaciones manuales, y cuando actualizar una tarea es lento o confuso el equipo deja de hacerlo: los datos del proyecto se quedan obsoletos y los bloqueos se descubren tarde. La oportunidad: una herramienta donde una actualización rutinaria lleve segundos y los bloqueos y la sobrecarga salgan a la luz solos."
        ]
      },
      {
        "tag": "02",
        "title": [
          "Competitive benchmark",
          "Benchmark competitiu",
          "Benchmark competitivo"
        ],
        "text": [
          "I compared Linear, Monday.com and Jira. Linear is fast and clean, but relies heavily on hidden shortcuts and menus, which makes it hard for beginners to learn. Monday.com is visual and accessible out of the box, with strong colour coding, but its vibrant layout causes cognitive overload and clutter on dense boards. Jira delivers great tracking and reporting depth, but suffers from low initial intuitiveness, complex navigation and a visually heavy layout.",
          "Vaig comparar Linear, Monday.com i Jira. Linear és ràpid i net, però depèn molt de dreceres i menús amagats, cosa que en dificulta l’aprenentatge al principi. Monday.com és visual i accessible de sèrie, amb una bona codificació per colors, però el seu disseny vibrant provoca sobrecàrrega cognitiva i soroll visual en taulers densos. Jira ofereix gran profunditat de seguiment i informes, però té poca intuïció inicial, una navegació complexa i un disseny visualment pesat.",
          "Comparé Linear, Monday.com y Jira. Linear es rápido y limpio, pero depende mucho de atajos y menús ocultos, lo que dificulta aprenderlo al principio. Monday.com es visual y accesible de serie, con una buena codificación por colores, pero su diseño vibrante provoca sobrecarga cognitiva y ruido visual en tableros densos. Jira ofrece gran profundidad de seguimiento e informes, pero tiene poca intuitividad inicial, una navegación compleja y un diseño visualmente pesado."
        ],
        "caps": [
          [
            "Linear vs. Monday.com vs. Jira",
            "Linear vs. Monday.com vs. Jira",
            "Linear vs. Monday.com vs. Jira"
          ]
        ]
      },
      {
        "tag": "03",
        "title": [
          "User persona",
          "Persona d’usuari",
          "Persona de usuario"
        ],
        "text": [
          "David Miller, 45, is an engineering manager who runs large technical teams. His core struggle: he can’t get a real-time snapshot of progress without chasing people for manual status updates. He needs instant visibility into team allocation and workflow velocity so he can unblock projects, and a tool with a low learning curve so his team updates tasks consistently, without administrative friction.",
          "En David Miller, de 45 anys, és un engineering manager que dirigeix grans equips tècnics. El seu problema principal: no pot tenir una imatge en temps real del progrés sense anar al darrere de la gent per obtenir actualitzacions manuals. Necessita visibilitat immediata de l’assignació de l’equip i del ritme de treball per desbloquejar projectes, i una eina amb una corba d’aprenentatge baixa perquè el seu equip actualitzi les tasques amb constància, sense fricció administrativa.",
          "David Miller, de 45 años, es un engineering manager que dirige grandes equipos técnicos. Su problema principal: no puede tener una imagen en tiempo real del progreso sin ir detrás de la gente para obtener actualizaciones manuales. Necesita visibilidad inmediata de la asignación del equipo y del ritmo de trabajo para desbloquear proyectos, y una herramienta con una curva de aprendizaje baja para que su equipo actualice las tareas con constancia, sin fricción administrativa."
        ],
        "caps": [
          [
            "User persona: David Miller",
            "Persona d’usuari: David Miller",
            "Persona de usuario: David Miller"
          ]
        ]
      },
      {
        "tag": "04",
        "title": [
          "Customer journey",
          "Customer journey",
          "Customer journey"
        ],
        "text": [
          "The journey maps David’s experience with a new tool, phase by phase. It drops to Very Negative in Phase 4 (trial and setup): an overwhelming initial configuration and hidden UI controls, as in Jira and Linear, alienate managers who are trying to set up modern workflows. It peaks at Very Positive in Phases 6–7, once David gets real-time visibility through clean, high-density dashboards that remove the need for manual status updates and micromanagement.",
          "El journey recull l’experiència d’en David amb una eina nova, fase a fase. Cau a Molt negativa a la fase 4 (prova i configuració): una configuració inicial aclaparadora i uns controls amagats a la interfície, com a Jira i Linear, allunyen els managers que intenten muntar fluxos de treball moderns. Arriba al màxim, Molt positiva, a les fases 6–7, quan en David obté visibilitat en temps real amb panells nets i d’alta densitat que eliminen la necessitat d’actualitzacions manuals i de micromanagement.",
          "El journey recoge la experiencia de David con una herramienta nueva, fase a fase. Cae a Muy negativa en la fase 4 (prueba y configuración): una configuración inicial abrumadora y unos controles ocultos en la interfaz, como en Jira y Linear, alejan a los managers que intentan montar flujos de trabajo modernos. Llega al máximo, Muy positiva, en las fases 6–7, cuando David obtiene visibilidad en tiempo real con paneles limpios y de alta densidad que eliminan la necesidad de actualizaciones manuales y de micromanagement."
        ],
        "caps": [
          [
            "Customer journey map",
            "Mapa del customer journey",
            "Mapa del customer journey"
          ]
        ]
      },
      {
        "tag": "05",
        "title": [
          "Flows and priorities",
          "Fluxos i prioritats",
          "Flujos y prioridades"
        ],
        "text": [
          "Three flows cover the core tasks: Create project, Update tasks and View workload. Each decision gate answers something from the research. “Use a template?” and the inline validation loops target the setup drop-off. “Quick change?” keeps a routine update to a couple of seconds, and “Status blocked?” sends blockers to the manager automatically, so he doesn’t have to ask. “Anyone over 100%?” is where David gets the visibility he asked for, and the interface adapts to the user’s role so contributors see a simpler view. I chose features with one rule: each had to solve a problem from the research and be part of my flows. The order was: updating a task fast (drag a card, or type and press Enter), workload and blocked tasks, a short Create project, and a suggested rebalance. Comments, notifications and advanced reports stayed out: they add information to the screens, and David wants less.",
          "Tres fluxos cobreixen les tasques principals: Crear projecte, Actualitzar tasques i Veure la càrrega de treball. Cada punt de decisió respon a alguna cosa de la recerca. «Fer servir una plantilla?» i els bucles de validació en línia ataquen l’abandonament en la configuració. «Canvi ràpid?» manté una actualització rutinària en un parell de segons, i «Estat bloquejat?» envia els bloquejos al manager automàticament perquè no hagi de preguntar. «Algú per sobre del 100%?» és on en David obté la visibilitat que demanava, i la interfície s’adapta al rol de l’usuari perquè els col·laboradors vegin una vista més simple. Vaig triar les funcions amb una sola regla: cadascuna havia de resoldre un problema de la recerca i formar part dels meus fluxos. L’ordre va ser: actualitzar una tasca ràpidament (arrossegar una targeta, o escriure i prémer Enter), càrrega de treball i tasques bloquejades, un Crear projecte curt i una proposta de rebalanceig. Els comentaris, les notificacions i els informes avançats es van quedar fora: afegeixen informació a les pantalles, i en David en vol menys.",
          "Tres flujos cubren las tareas principales: Crear proyecto, Actualizar tareas y Ver la carga de trabajo. Cada punto de decisión responde a algo de la investigación. «¿Usar una plantilla?» y los bucles de validación en línea atacan el abandono en la configuración. «¿Cambio rápido?» mantiene una actualización rutinaria en un par de segundos, y «¿Estado bloqueado?» envía los bloqueos al manager automáticamente, para que no tenga que preguntar. «¿Alguien por encima del 100%?» es donde David obtiene la visibilidad que pedía, y la interfaz se adapta al rol del usuario para que los colaboradores vean una vista más simple. Elegí las funciones con una sola regla: cada una tenía que resolver un problema de la investigación y formar parte de mis flujos. El orden fue: actualizar una tarea rápido (arrastrar una tarjeta, o escribir y pulsar Enter), carga de trabajo y tareas bloqueadas, un Crear proyecto corto y una propuesta de rebalanceo. Los comentarios, las notificaciones y los informes avanzados se quedaron fuera: añaden información a las pantallas, y David quiere menos."
        ],
        "caps": [
          [
            "Create project, update tasks and view workload flows",
            "Fluxos de crear projecte, actualitzar tasques i veure la càrrega",
            "Flujos de crear proyecto, actualizar tareas y ver la carga"
          ]
        ]
      },
      {
        "tag": "06",
        "title": [
          "From sketch to wireflows",
          "Dels esbossos als wireflows",
          "De los bocetos a los wireflows"
        ],
        "text": [
          "The clearest change is in Create project. My first sketch was a standard modal with six stacked fields: name, description, project lead, priority, date and initial status. It was easy to understand, but long, and every field looked equally important even though only the name is required. In the second version it became one open page: the name is a large title, the other properties are a single row of chips (status, priority, lead, members, dates, labels), and milestones and team invites sit lower, folded away. A smaller change happened on Home. The first sketch showed three lists side by side (to do, in process and done) plus the KPI; the second added a people panel, so David sees who is blocked and who is overloaded before reading any task.",
          "El canvi més clar és a Crear projecte. El meu primer esbós era un modal estàndard amb sis camps apilats: nom, descripció, responsable del projecte, prioritat, data i estat inicial. Era fàcil d’entendre, però llarg, i tots els camps semblaven igual d’importants tot i que només el nom és obligatori. A la segona versió es va convertir en una pàgina oberta: el nom és un títol gran, la resta de propietats són una sola fila de chips (estat, prioritat, responsable, membres, dates, etiquetes), i les fites i les invitacions a l’equip queden més avall, plegades. Un canvi més petit va ser a Inici. El primer esbós mostrava tres llistes una al costat de l’altra (per fer, en procés i fetes) a més del KPI; la segona va afegir un panell de persones, perquè en David vegi qui està bloquejat i qui està sobrecarregat abans de llegir cap tasca.",
          "El cambio más claro está en Crear proyecto. Mi primer boceto era un modal estándar con seis campos apilados: nombre, descripción, responsable del proyecto, prioridad, fecha y estado inicial. Era fácil de entender, pero largo, y todos los campos parecían igual de importantes aunque solo el nombre es obligatorio. En la segunda versión pasó a ser una página abierta: el nombre es un título grande, el resto de propiedades son una sola fila de chips (estado, prioridad, responsable, miembros, fechas, etiquetas), y los hitos y las invitaciones al equipo quedan más abajo, plegados. Un cambio más pequeño fue en Inicio. El primer boceto mostraba tres listas una junto a otra (por hacer, en proceso y hechas) además del KPI; la segunda añadió un panel de personas, para que David vea quién está bloqueado y quién sobrecargado antes de leer ninguna tarea."
        ],
        "caps": [
          [
            "Create project: first sketch (top) and second version (bottom)",
            "Crear projecte: primer esbós (a dalt) i segona versió (a baix)",
            "Crear proyecto: primer boceto (arriba) y segunda versión (abajo)"
          ],
          [
            "Home: first sketch (top) and second version (bottom)",
            "Inici: primer esbós (a dalt) i segona versió (a baix)",
            "Inicio: primer boceto (arriba) y segunda versión (abajo)"
          ]
        ]
      },
      {
        "tag": "07",
        "title": [
          "Identity: why “Alula”",
          "Identitat: per què «Alula»",
          "Identidad: por qué «Alula»"
        ],
        "text": [
          "The alula is a tiny group of feathers on the leading edge of a bird’s wing: small, but it helps the bird keep control. A project has the same moment at the start, where teams lose momentum because nobody is sure who is doing what, what is blocked or whether anyone has updated their task. The name also carries the idea of despegar, taking off, and the logo is drawn as a wing. The benchmark showed what the category looks like (dense, dark or colourful, and full of options), so a moodboard decided what Alula should feel like: one blue as the only brand colour, with red, yellow and green kept for status; generous white space and a clear type hierarchy; one set of simple line icons; and folds that show detail only when it is needed. Every screen sits on a 4 px base grid and a 12-column layout (80 px columns, 16 px gutters), and spacing, sizes and corner radii (8, 12 and 16 px) are multiples of 4. Every interactive element has a minimum target of 32 × 32 px (40 and 48 px for the main buttons), and text never goes below 12 px.",
          "L’alula és un petit grup de plomes a la vora d’atac de l’ala d’un ocell: és petita, però ajuda l’ocell a mantenir el control. Un projecte té el mateix moment al principi, quan els equips perden impuls perquè ningú està segur de qui fa què, què està bloquejat o si algú ha actualitzat la seva tasca. El nom també porta la idea de «despegar», enlairar-se, i el logo està dibuixat com una ala. El benchmark va mostrar com és la categoria (densa, fosca o colorista, i plena d’opcions), així que un moodboard va decidir com havia de sentir-se Alula: un sol blau com a únic color de marca, amb vermell, groc i verd reservats per a l’estat; molt espai en blanc i una jerarquia tipogràfica clara; un sol conjunt d’icones de línia senzilles; i plecs que mostren el detall només quan cal. Totes les pantalles es recolzen en una graella base de 4 px i un disseny de 12 columnes (columnes de 80 px, canals de 16 px), i els espaiats, mides i radis (8, 12 i 16 px) són múltiples de 4. Cada element interactiu té una àrea mínima de 32 × 32 px (40 i 48 px per als botons principals), i el text mai baixa de 12 px.",
          "La álula es un pequeño grupo de plumas en el borde de ataque del ala de un ave: es diminuta, pero ayuda al ave a mantener el control. Un proyecto vive el mismo momento al empezar, cuando los equipos pierden impulso porque nadie tiene claro quién hace qué, qué está bloqueado o si alguien ha actualizado su tarea. El nombre también lleva la idea de despegar, y el logo está dibujado como un ala. El benchmark mostró cómo es la categoría (densa, oscura o colorida, y llena de opciones), así que un moodboard decidió cómo debía sentirse Alula: un solo azul como único color de marca, con rojo, amarillo y verde reservados para el estado; mucho espacio en blanco y una jerarquía tipográfica clara; un solo conjunto de iconos de línea sencillos; y pliegues que muestran el detalle solo cuando hace falta. Todas las pantallas se apoyan en una cuadrícula base de 4 px y un diseño de 12 columnas (columnas de 80 px, medianiles de 16 px), y los espaciados, tamaños y radios (8, 12 y 16 px) son múltiplos de 4. Cada elemento interactivo tiene un área mínima de 32 × 32 px (40 y 48 px para los botones principales), y el texto nunca baja de 12 px."
        ],
        "caps": [
          [
            "Moodboard: colour, typography and grid",
            "Moodboard: color, tipografia i graella",
            "Moodboard: color, tipografía y cuadrícula"
          ],
          [
            "Moodboard: components, icons and logo",
            "Moodboard: components, icones i logo",
            "Moodboard: componentes, iconos y logo"
          ]
        ]
      },
      {
        "tag": "08",
        "title": [
          "Home",
          "Inici",
          "Inicio"
        ],
        "text": [
          "Home gives the status before David opens anything. Three numbers (active projects, tasks due this week, team capacity) sit at the top. His own tasks show status and due date on one row, and the blocked one stands out in red. Team workload bars carry a colour and a number, so the over-limit person (118%) is visible at a glance. A people panel shows each person’s task count and how many are blocked, and projects show one progress bar and one percentage, with the team as avatars. There is a single primary action, one blue button; colour everywhere else is reserved for status.",
          "Inici dona l’estat abans que en David obri res. A dalt hi ha tres números (projectes actius, tasques que venen aquesta setmana, capacitat de l’equip). Les seves tasques mostren l’estat i la data en una sola fila, i la bloquejada destaca en vermell. Les barres de càrrega de l’equip porten color i número, de manera que la persona per sobre del límit (118%) es veu d’un cop d’ull. Un panell de persones mostra el nombre de tasques de cadascú i quantes estan bloquejades, i els projectes mostren una barra de progrés i un percentatge, amb l’equip com a avatars. Hi ha una única acció principal, un botó blau; el color a la resta de la pàgina es reserva per a l’estat.",
          "Inicio da el estado antes de que David abra nada. Arriba hay tres números (proyectos activos, tareas que vencen esta semana, capacidad del equipo). Sus tareas muestran el estado y la fecha en una sola fila, y la bloqueada destaca en rojo. Las barras de carga del equipo llevan color y número, de modo que la persona por encima del límite (118%) se ve de un vistazo. Un panel de personas muestra el número de tareas de cada una y cuántas están bloqueadas, y los proyectos muestran una barra de progreso y un porcentaje, con el equipo como avatares. Hay una única acción principal, un botón azul; el color en el resto de la página se reserva para el estado."
        ],
        "caps": [
          [
            "Home dashboard",
            "Panell d’inici",
            "Panel de inicio"
          ]
        ]
      },
      {
        "tag": "09",
        "title": [
          "Create project",
          "Crear un projecte",
          "Crear un proyecto"
        ],
        "text": [
          "All the properties sit in one row of chips (status, priority, lead, members, dates), not in nested settings. A template skips the blank page, and milestones and team invites stay folded so the form stays short; invites can wait until the project exists. The create button is disabled until the form is valid, which prevents empty projects without showing an error message. Once the form is filled in, validation is inline: the error sits next to the field, in red with an icon and a sentence. Milestones expand in place without leaving the modal, and the single blue button is the only obvious next step.",
          "Totes les propietats són en una sola fila de chips (estat, prioritat, responsable, membres, dates), no en ajustos aniuats. Una plantilla evita la pàgina en blanc, i les fites i les invitacions a l’equip queden plegades perquè el formulari sigui curt; les invitacions poden esperar fins que el projecte existeixi. El botó de crear està desactivat fins que el formulari és vàlid, cosa que evita projectes buits sense mostrar cap missatge d’error. Un cop omplert, la validació és en línia: l’error és al costat del camp, en vermell amb una icona i una frase. Les fites es despleguen al mateix lloc sense sortir del modal, i l’únic botó blau és el següent pas evident.",
          "Todas las propiedades están en una sola fila de chips (estado, prioridad, responsable, miembros, fechas), no en ajustes anidados. Una plantilla evita la página en blanco, y los hitos y las invitaciones al equipo quedan plegados para que el formulario sea corto; las invitaciones pueden esperar a que el proyecto exista. El botón de crear está desactivado hasta que el formulario es válido, lo que evita proyectos vacíos sin mostrar ningún mensaje de error. Una vez relleno, la validación es en línea: el error está junto al campo, en rojo con un icono y una frase. Los hitos se despliegan en el mismo sitio sin salir del modal, y el único botón azul es el siguiente paso evidente."
        ],
        "caps": [
          [
            "Empty form",
            "Formulari buit",
            "Formulario vacío"
          ],
          [
            "Filled in, with inline validation",
            "Omplert, amb validació en línia",
            "Rellenado, con validación en línea"
          ]
        ]
      },
      {
        "tag": "10",
        "title": [
          "Workload",
          "Càrrega de treball",
          "Carga de trabajo"
        ],
        "text": [
          "Capacity is a bar and a number: green up to 90%, yellow up to 100% and red above. Expanding a person shows the tasks behind the load in place, without hiding information behind complex menus. Overload is flagged more than once (red bar, warning icon and the words “Over limit”), so colour is never the only signal. Team and date filters and a Share button support leadership asking for transparent metrics. A suggested rebalance turns the numbers into an action: move two tasks from the over-limit person to someone with capacity, with the effect shown before confirming. A strip with the key numbers (capacity, hours planned and blocked tasks) summarises the page.",
          "La capacitat és una barra i un número: verd fins al 90%, groc fins al 100% i vermell per sobre. Desplegar una persona mostra al mateix lloc les tasques que hi ha darrere de la càrrega, sense amagar informació darrere de menús complexos. La sobrecàrrega s’assenyala més d’una vegada (barra vermella, icona d’avís i les paraules «Over limit»), de manera que el color mai és l’únic senyal. Els filtres d’equip i de dates i un botó Compartir donen suport a la direcció, que demana mètriques transparents. Una proposta de rebalanceig converteix els números en una acció: moure dues tasques de la persona per sobre del límit a algú amb capacitat, amb l’efecte visible abans de confirmar. Una franja amb els números clau (capacitat, hores planificades i tasques bloquejades) resumeix la pàgina.",
          "La capacidad es una barra y un número: verde hasta el 90%, amarillo hasta el 100% y rojo por encima. Desplegar a una persona muestra en el mismo sitio las tareas que hay detrás de la carga, sin esconder información tras menús complejos. La sobrecarga se señala más de una vez (barra roja, icono de aviso y las palabras «Over limit»), de modo que el color nunca es la única señal. Los filtros de equipo y de fechas y un botón Compartir dan soporte a la dirección, que pide métricas transparentes. Una propuesta de rebalanceo convierte los números en una acción: mover dos tareas de la persona por encima del límite a alguien con capacidad, mostrando el efecto antes de confirmar. Una franja con los números clave (capacidad, horas planificadas y tareas bloqueadas) resume la página."
        ],
        "caps": [
          [
            "Team workload",
            "Càrrega de l’equip",
            "Carga del equipo"
          ]
        ]
      },
      {
        "tag": "11",
        "title": [
          "Updating tasks",
          "Actualitzar tasques",
          "Actualizar tareas"
        ],
        "text": [
          "Updating a status is one gesture: dragging a card to another column is the whole update, and dashed slots show origin and destination. A task is created without a form (type and press Enter), column totals give the snapshot before any card is read, and Board, List and Timeline show the same tasks one click apart. For detail, the panel opens with the current status, the last update and Mark done first, so the most common update takes one click. Every property (status, priority, assignee, date and estimate) is an editable chip, subtasks open with a chevron, and history stays folded as a single row to avoid Jira’s heavy layout. A “Saved” check removes the doubt about whether the update counted, which keeps the team updating consistently.",
          "Actualitzar un estat és un sol gest: arrossegar una targeta a una altra columna és tota l’actualització, i els buits de línia discontínua mostren l’origen i la destinació. Una tasca es crea sense formulari (escriure i prémer Enter), els totals de cada columna donen la imatge general abans de llegir cap targeta, i Tauler, Llista i Cronologia mostren les mateixes tasques a un clic de distància. Per al detall, el panell s’obre amb l’estat actual, l’última actualització i Marcar com a fet al davant, de manera que l’actualització més habitual triga un clic. Cada propietat (estat, prioritat, responsable, data i estimació) és un chip editable, les subtasques s’obren amb una fletxa, i l’historial queda plegat en una sola fila per evitar el disseny pesat de Jira. Un «Saved» amb una marca elimina el dubte de si l’actualització ha comptat, i això manté l’equip actualitzant amb constància.",
          "Actualizar un estado es un solo gesto: arrastrar una tarjeta a otra columna es toda la actualización, y los huecos de línea discontinua muestran el origen y el destino. Una tarea se crea sin formulario (escribir y pulsar Enter), los totales de cada columna dan la imagen general antes de leer ninguna tarjeta, y Tablero, Lista y Cronología muestran las mismas tareas a un clic de distancia. Para el detalle, el panel se abre con el estado actual, la última actualización y Marcar como hecho al principio, de modo que la actualización más habitual lleva un clic. Cada propiedad (estado, prioridad, responsable, fecha y estimación) es un chip editable, las subtareas se abren con una flecha, y el historial queda plegado en una sola fila para evitar el diseño pesado de Jira. Un «Saved» con una marca elimina la duda de si la actualización contó, y eso mantiene al equipo actualizando con constancia."
        ],
        "caps": [
          [
            "Board: update a task by dragging",
            "Tauler: actualitza una tasca arrossegant",
            "Tablero: actualiza una tarea arrastrando"
          ],
          [
            "Task panel: detailed update",
            "Panell de tasca: actualització detallada",
            "Panel de tarea: actualización detallada"
          ]
        ]
      },
      {
        "tag": "12",
        "title": [
          "What I learned",
          "Què he après",
          "Qué he aprendido"
        ],
        "text": [
          "The problem I wanted to solve was simple: David, an engineering manager, spends too much time asking his team for updates. Alula tries to fix that in three places. To create a project he only needs a name. To update a task he drags a card on the board. And on Home and Workload he can already see who is blocked and who has too much work, so he doesn’t need to ask anyone. The biggest change was the Create project screen: my first idea was a form with six fields and in the end it was just a name and a row of chips. Each time I removed something that was not in my flows, the screen looked cleaner. At the end I also found small accessibility problems, like very small initials in the avatars and priority icons that looked like dots, and I changed them because they went against my own rules. If I continued, I would test it with real engineering managers and measure how long a first update takes.",
          "El problema que volia resoldre era senzill: en David, un engineering manager, passa massa temps demanant actualitzacions al seu equip. Alula intenta arreglar-ho en tres llocs. Per crear un projecte només necessita un nom. Per actualitzar una tasca arrossega una targeta al tauler. I a Inici i a Càrrega de treball ja pot veure qui està bloquejat i qui té massa feina, de manera que no ha de preguntar a ningú. El canvi més gran va ser la pantalla de Crear projecte: la meva primera idea era un formulari de sis camps i al final només va quedar un nom i una fila de chips. Cada vegada que treia alguna cosa que no era als meus fluxos, la pantalla quedava més neta. Al final també vaig trobar petits problemes d’accessibilitat, com unes inicials molt petites als avatars i unes icones de prioritat que semblaven punts, i els vaig canviar perquè anaven contra les meves pròpies regles. Si continués, ho provaria amb engineering managers reals i mesuraria quant triga una primera actualització.",
          "El problema que quería resolver era sencillo: David, un engineering manager, pasa demasiado tiempo pidiendo actualizaciones a su equipo. Alula intenta arreglarlo en tres sitios. Para crear un proyecto solo necesita un nombre. Para actualizar una tarea arrastra una tarjeta en el tablero. Y en Inicio y en Carga de trabajo ya puede ver quién está bloqueado y quién tiene demasiado trabajo, así que no necesita preguntar a nadie. El cambio más grande fue la pantalla de Crear proyecto: mi primera idea era un formulario de seis campos y al final solo quedó un nombre y una fila de chips. Cada vez que quitaba algo que no estaba en mis flujos, la pantalla quedaba más limpia. Al final también encontré pequeños problemas de accesibilidad, como unas iniciales muy pequeñas en los avatares y unos iconos de prioridad que parecían puntos, y los cambié porque iban en contra de mis propias reglas. Si continuara, lo probaría con engineering managers reales y mediría cuánto tarda una primera actualización."
        ]
      }
    ]
  },
  trip: {
    sub:   ["Website · Interactive Media Programming", "Web · Programació de Mitjans Interactius", "Web · Programación de Medios Interactivos"],
    sum:   ["Your travel companion: organize trips, check the weather and discover new experiences from one simple platform.",
            "El teu company de viatge: organitza viatges, consulta el temps i descobreix noves experiències des d’una sola plataforma.",
            "Tu compañero de viaje: organiza viajes, consulta el clima y descubre nuevas experiencias desde una sola plataforma."],
    role:  ["Front-End Developer", "Desenvolupadora front-end", "Desarrolladora front-end"],
    scope: ["HTML, CSS & JavaScript", "HTML, CSS i JavaScript", "HTML, CSS y JavaScript"],
    body:  ["A collaborative web project developed as part of the <strong>Web Programming I</strong> course. The project focused on creating an interactive platform that allows users to create and manage trips, organize daily activities, and check real-time weather information. Working as a team, we designed and developed the complete experience using <strong>HTML, CSS, and JavaScript</strong>, focusing on an intuitive and responsive interface, dynamic interactions, data persistence, and API integration.",
            "Un projecte web col·laboratiu de l’assignatura de <strong>Programació Web I</strong>. Ens vam centrar a crear una plataforma interactiva que permet crear i gestionar viatges, organitzar activitats diàries i consultar el temps en temps real. Treballant en equip, vam dissenyar i desenvolupar tota l’experiència amb <strong>HTML, CSS i JavaScript</strong>, amb una interfície intuïtiva i adaptable, interaccions dinàmiques, persistència de dades i integració d’API.",
            "Un proyecto web colaborativo de la asignatura de <strong>Programación Web I</strong>. Nos centramos en crear una plataforma interactiva que permite crear y gestionar viajes, organizar actividades diarias y consultar el clima en tiempo real. Trabajando en equipo, diseñamos y desarrollamos toda la experiencia con <strong>HTML, CSS y JavaScript</strong>, con una interfaz intuitiva y adaptable, interacciones dinámicas, persistencia de datos e integración de API."],
    process: ["Walkthrough", "Recorregut", "Recorrido"],
    stats: [["3", ["core features: trip management, live weather, suggestions", "funcions principals: gestió de viatges, temps en directe, suggeriments", "funciones principales: gestión de viajes, clima en directo, sugerencias"]], ["5", ["sections in the main navigation", "seccions a la navegació principal", "secciones en la navegación principal"]], ["1", ["responsive interface built with plain HTML, CSS and JavaScript", "interfície adaptable creada amb HTML, CSS i JavaScript", "interfaz adaptable creada con HTML, CSS y JavaScript"]]],
    steps: [{"tag": "01", "title": ["Home", "Inici", "Inicio"], "text": ["A landing page with a full-width hero image and a clear call to action, “Empezar aventura”, plus a menu to the five sections: Home, Trips, Weather, About and Suggestions.", "Una pàgina d’inici amb una imatge d’impacte a tota amplada i una crida a l’acció clara, «Empezar aventura», i un menú amb les cinc seccions: Inici, Viatges, Temps, Sobre nosaltres i Suggeriments.", "Una página de inicio con una imagen de impacto a todo el ancho y una llamada a la acción clara, «Empezar aventura», y un menú con las cinco secciones: Inicio, Viajes, Clima, Sobre nosotros y Sugerencias."], "caps": [["Home", "Inici", "Inicio"]]}, {"tag": "02", "title": ["Plan your trips", "Planifica els teus viatges", "Planifica tus viajes"], "text": ["Create a trip with a name, destination and dates, then add activities with a time and a short description. Trips can be edited or deleted, and the data persists so nothing is lost when you leave the page.", "Crea un viatge amb nom, destinació i dates i afegeix-hi activitats amb hora i una descripció breu. Els viatges es poden editar o eliminar, i les dades es mantenen perquè no es perdi res en sortir de la pàgina.", "Crea un viaje con nombre, destino y fechas y añade actividades con hora y una descripción breve. Los viajes se pueden editar o eliminar, y los datos persisten para que no se pierda nada al salir de la página."], "caps": [["Trips and activities", "Viatges i activitats", "Viajes y actividades"]]}, {"tag": "03", "title": ["Live weather", "Temps en directe", "Clima en directo"], "text": ["Search any city to see the current temperature and sky conditions, retrieved in real time through a weather API. Each searched city appears as a card, here Barcelona at 23°C and Tokyo at 20°C.", "Cerca qualsevol ciutat per veure’n la temperatura actual i l’estat del cel, obtinguts en temps real mitjançant una API del temps. Cada ciutat cercada apareix com una targeta, aquí Barcelona a 23 °C i Tòquio a 20 °C.", "Busca cualquier ciudad para ver su temperatura actual y el estado del cielo, obtenidos en tiempo real mediante una API del clima. Cada ciudad buscada aparece como una tarjeta, aquí Barcelona a 23 °C y Tokio a 20 °C."], "caps": [["Weather search", "Cerca del temps", "Búsqueda del clima"]]}, {"tag": "04", "title": ["About", "Sobre nosaltres", "Sobre nosotros"], "text": ["An About page that sets out the project’s values (simplicity, user experience, creativity, innovation and authenticity) as numbered cards.", "Una pàgina «Sobre nosaltres» que presenta els valors del projecte (simplicitat, experiència d’usuari, creativitat, innovació i autenticitat) en targetes numerades.", "Una página «Sobre nosotros» que presenta los valores del proyecto (simplicidad, experiencia de usuario, creatividad, innovación y autenticidad) en tarjetas numeradas."], "caps": [["About page", "Pàgina Sobre nosaltres", "Página Sobre nosotros"]]}, {"tag": "05", "title": ["Contact form", "Formulari de contacte", "Formulario de contacto"], "text": ["A contact form with required fields and validation: if anything is missing, an error message asks the user to complete all required fields before sending.", "Un formulari de contacte amb camps obligatoris i validació: si falta alguna cosa, un missatge d’error demana omplir tots els camps obligatoris abans d’enviar.", "Un formulario de contacto con campos obligatorios y validación: si falta algo, un mensaje de error pide completar todos los campos obligatorios antes de enviar."], "caps": [["Form validation", "Validació del formulari", "Validación del formulario"]]}]
  },
  dow: {
    title: ["Product design internship at Dow Jones", "Pràctiques de disseny de producte a Dow Jones", "Prácticas de diseño de producto en Dow Jones"],
    sum:   ["Migrated an RCPT prototype from Tailwind to Bootstrap and developed a reusable Dow Jones design system from Figma, standardizing UI components and improving designer–developer handoff.",
            "Vaig migrar un prototip RCPT de Tailwind a Bootstrap i vaig desenvolupar un sistema de disseny reutilitzable de Dow Jones a partir de Figma, estandarditzant components d’UI i millorant el traspàs entre disseny i desenvolupament.",
            "Migré un prototipo RCPT de Tailwind a Bootstrap y desarrollé un sistema de diseño reutilizable de Dow Jones a partir de Figma, estandarizando componentes de UI y mejorando el traspaso entre diseño y desarrollo."],
    role:  ["Product Design Intern", "Becària de disseny de producte", "Becaria de diseño de producto"],
    scope: ["Research, AI, and interface craft", "Recerca, IA i cura de la interfície", "Investigación, IA y cuidado de la interfaz"],
    body:  ["Migrated an RCPT prototype from <strong>Tailwind CSS to Bootstrap</strong> to align the design and engineering workflow. Rebuilt and standardized UI components based on <strong>Figma specifications</strong>, developed a reusable <strong>Dow Jones design system in SCSS</strong>, including design tokens, buttons, badges, chips, modals, forms, alerts and interactive components. Improved <strong>design-to-development handoff, consistency, and scalability</strong> by creating a shared language between designers and engineers.<p class=\"tech\">Technologies: Bootstrap · SCSS · Figma · HTML/CSS · Design Systems</p>",
            "Vaig migrar un prototip RCPT de <strong>Tailwind CSS a Bootstrap</strong> per alinear el flux de treball entre disseny i enginyeria. Vaig reconstruir i estandarditzar components d’UI a partir de les <strong>especificacions de Figma</strong> i vaig desenvolupar un <strong>sistema de disseny de Dow Jones en SCSS</strong> reutilitzable, amb design tokens, botons, badges, chips, modals, formularis, alertes i components interactius. Vaig millorar el <strong>traspàs de disseny a desenvolupament, la coherència i l’escalabilitat</strong> creant un llenguatge comú entre dissenyadors i enginyers.<p class=\"tech\">Tecnologies: Bootstrap · SCSS · Figma · HTML/CSS · Sistemes de disseny</p>",
            "Migré un prototipo RCPT de <strong>Tailwind CSS a Bootstrap</strong> para alinear el flujo de trabajo entre diseño e ingeniería. Reconstruí y estandaricé componentes de UI a partir de las <strong>especificaciones de Figma</strong> y desarrollé un <strong>sistema de diseño de Dow Jones en SCSS</strong> reutilizable, con design tokens, botones, badges, chips, modales, formularios, alertas y componentes interactivos. Mejoré el <strong>traspaso de diseño a desarrollo, la coherencia y la escalabilidad</strong> creando un lenguaje común entre diseñadores e ingenieros.<p class=\"tech\">Tecnologías: Bootstrap · SCSS · Figma · HTML/CSS · Sistemas de diseño</p>"],
    process: ["How it went", "Com va anar", "Cómo fue"],
    stats: [["30+", ["badge variants in the component library", "variants de badge a la biblioteca de components", "variantes de badge en la biblioteca de componentes"]], ["10", ["tint steps per colour token, from 08 to 900", "graus de tint per token de color, de 08 a 900", "pasos de tinte por token de color, de 08 a 900"]], ["2", ["SCSS files form the system: tokens and components", "fitxers SCSS formen el sistema: tokens i components", "archivos SCSS forman el sistema: tokens y componentes"]], ["1", ["shared language between designers and engineers", "llenguatge compartit entre dissenyadors i enginyers", "lenguaje compartido entre diseñadores e ingenieros"]]],
    steps: [{"tag": "01", "title": ["Where we started", "Punt de partida", "Punto de partida"], "text": ["The RCPT prototype was built with Tailwind, which is fast and flexible for prototyping. Dow Jones already had INDEX, its internal design system, but RCPT had no established components in it, so designers and engineers had no shared reference. My first attempt was a Storybook to catalogue the components we used, but it only documented the Tailwind version.", "El prototip d’RCPT estava fet amb Tailwind, ràpid i flexible per prototipar. Dow Jones ja tenia INDEX, el seu sistema de disseny intern, però RCPT no hi tenia components establerts, així que dissenyadors i enginyers no tenien una referència compartida. El meu primer intent va ser un Storybook per catalogar els components, però només documentava la versió en Tailwind.", "El prototipo de RCPT estaba hecho con Tailwind, rápido y flexible para prototipar. Dow Jones ya tenía INDEX, su sistema de diseño interno, pero RCPT no tenía componentes establecidos en él, así que diseñadores e ingenieros no tenían una referencia compartida. Mi primer intento fue un Storybook para catalogar los componentes, pero solo documentaba la versión en Tailwind."]}, {"tag": "02", "title": ["The turning point", "El punt d’inflexió", "El punto de inflexión"], "text": ["In an RCPT Engineering–UX sync, engineers explained they build the real product in Bootstrap. Designers prototyped in Tailwind and engineers spent hours rewriting every handoff, so what was approved was not quite what launched. The project pivoted: migrate the prototype to Bootstrap so it speaks engineering’s language from the start.", "En una sessió d’Engineering–UX d’RCPT, els enginyers van explicar que construeixen el producte real amb Bootstrap. Els dissenyadors prototipaven en Tailwind i els enginyers passaven hores reescrivint cada traspàs, així que el que s’aprovava no era exactament el que sortia. El projecte va girar: migrar el prototip a Bootstrap perquè parlés des del principi el llenguatge d’enginyeria.", "En una sesión de Engineering–UX de RCPT, los ingenieros explicaron que construyen el producto real con Bootstrap. Los diseñadores prototipaban en Tailwind y los ingenieros pasaban horas reescribiendo cada traspaso, así que lo aprobado no era exactamente lo que salía. El proyecto giró: migrar el prototipo a Bootstrap para que hablara desde el principio el lenguaje de ingeniería."]}, {"tag": "03", "title": ["The migration, step by step", "La migració, pas a pas", "La migración, paso a paso"], "text": ["I aligned on the Bootstrap version with engineering, set the style load order so Dow Jones styles take priority, configured Bootstrap’s helpers and interactive features (tooltips, dropdowns, modals), skinned it with the brand’s colours, fonts and sizing from Figma, built what Bootstrap lacks (toggles, chips, badges, side panels) and rebuilt each part of the Figma design one by one.", "Vaig acordar la versió de Bootstrap amb enginyeria, vaig definir l’ordre de càrrega dels estils perquè els de Dow Jones tinguin prioritat, vaig configurar els helpers i les funcions interactives de Bootstrap (tooltips, desplegables, modals), el vaig vestir amb colors, tipografies i mides de la marca des de Figma, vaig crear el que Bootstrap no inclou (interruptors, chips, badges, panells laterals) i vaig reconstruir cada part del disseny de Figma una per una.", "Acordé la versión de Bootstrap con ingeniería, definí el orden de carga de estilos para que los de Dow Jones tengan prioridad, configuré los helpers y las funciones interactivas de Bootstrap (tooltips, desplegables, modales), lo vestí con los colores, tipografías y tamaños de la marca desde Figma, creé lo que Bootstrap no incluye (interruptores, chips, badges, paneles laterales) y reconstruí cada parte del diseño de Figma una por una."]}, {"tag": "04", "title": ["Matching it back to Figma", "Ajustar-ho a Figma", "Ajustarlo a Figma"], "text": ["With the migration done, I opened Figma next to the prototype and compared it with the approved designs component by component and screen by screen: spacing, colour, type scale, states and interactions. Where the prototype had drifted, I left comments and went back into the code, so there is no visual gap between what was approved and what shipped.", "Un cop feta la migració, vaig obrir Figma al costat del prototip i el vaig comparar amb els dissenys aprovats component a component i pantalla a pantalla: espaiats, color, escala tipogràfica, estats i interaccions. Allà on el prototip s’havia desviat, vaig deixar comentaris i vaig tornar al codi, perquè no hi hagi cap diferència visual entre el que es va aprovar i el que surt.", "Con la migración hecha, abrí Figma junto al prototipo y lo comparé con los diseños aprobados componente a componente y pantalla a pantalla: espaciados, color, escala tipográfica, estados e interacciones. Donde el prototipo se había desviado, dejé comentarios y volví al código, para que no haya ninguna diferencia visual entre lo aprobado y lo que sale."], "caps": [["RCPT prototype screens", "Pantalles del prototip d’RCPT", "Pantallas del prototipo de RCPT"]]}, {"tag": "05", "title": ["A design system in code", "Un sistema de disseny en codi", "Un sistema de diseño en código"], "text": ["The work landed in two SCSS files. _variables.scss holds the design tokens: full tint scales for neutral, primary, alert, success and warning colours (from 08 to 900), plus typography, input, shadow and radius tokens taken from the Figma spec. _base.scss became a component library: buttons, 30+ badge variants, chips, modals, form controls, alerts, a paginator and a dropdown, each matching Figma’s sizes, states and hover behaviour. Along the way I fixed a duplicated .badge-count class and an over-broad tooltip rule.", "La feina va quedar en dos fitxers SCSS. _variables.scss conté els design tokens: escales completes de tints per als colors neutre, primari, d’alerta, d’èxit i d’advertència (de 08 a 900), a més de tokens de tipografia, camps, ombres i radis extrets de l’especificació de Figma. _base.scss es va convertir en una biblioteca de components: botons, més de 30 variants de badge, chips, modals, controls de formulari, alertes, un paginador i un desplegable, cadascun amb les mides, estats i comportament hover de Figma. Pel camí vaig corregir una classe .badge-count duplicada i una regla de tooltip massa àmplia.", "El trabajo quedó en dos archivos SCSS. _variables.scss contiene los design tokens: escalas completas de tintes para los colores neutro, primario, de alerta, de éxito y de advertencia (de 08 a 900), además de tokens de tipografía, campos, sombras y radios extraídos de la especificación de Figma. _base.scss se convirtió en una biblioteca de componentes: botones, más de 30 variantes de badge, chips, modales, controles de formulario, alertas, un paginador y un desplegable, cada uno con los tamaños, estados y comportamiento hover de Figma. Por el camino corregí una clase .badge-count duplicada y una regla de tooltip demasiado amplia."]}, {"tag": "06", "title": ["The impact", "El resultat", "El resultado"], "text": ["Faster handoffs, because engineers can pick up the prototype directly instead of rebuilding it; less wasted work on every design-to-engineering transfer; one shared language, so what you see in the prototype is what ships; and better consistency, with the Dow Jones design system living in one place and matching the approved Figma designs.", "Traspassos més ràpids, perquè els enginyers poden agafar directament el prototip en lloc de reconstruir-lo; menys feina perduda en cada traspàs de disseny a enginyeria; un llenguatge compartit, de manera que el que es veu al prototip és el que surt; i més coherència, amb el sistema de disseny de Dow Jones en un sol lloc i alineat amb els dissenys aprovats de Figma.", "Traspasos más rápidos, porque los ingenieros pueden coger directamente el prototipo en lugar de reconstruirlo; menos trabajo perdido en cada traspaso de diseño a ingeniería; un lenguaje compartido, de modo que lo que se ve en el prototipo es lo que sale; y más consistencia, con el sistema de diseño de Dow Jones en un solo lugar y alineado con los diseños aprobados de Figma."]}]
  }
};
