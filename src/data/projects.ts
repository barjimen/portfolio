export interface ProjectSection {
  id: string;
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  featured: boolean;
  type: "personal" | "trabajo";
  company?: string;
  url?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "championship-platform",
    title: "RFEA - Página de resultados en tiempo real",
    subtitle: "Resultados y rankings en tiempo real",
    description:
      "Plataforma web escalable para la gestión de resultados deportivos de alto nivel. Realizada en Conersys Sports Solutions para RFEA.",
    image: "./projects/rfea/home.png",
    images: [
      "./projects/rfea/home.png",
      "./projects/rfea/champs.png",
      "./projects/rfea/results1.png",
      "./projects/rfea/results2.png",
      "./projects/rfea/rankings1.png",
      "./projects/rfea/rankings2.png",
      "./projects/rfea/bio1.png",
      "./projects/rfea/bio2.png",
      "./projects/rfea/bio3.png",
    ],
    tags: [".NET", "Blazor", "SignalR", "ClickHouse", "AWS"],
    featured: true,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    url: "https://www.rfealive.es",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Plataforma web desarrollada por Conersys Sports Solutions para RFEA, diseñada con los colores característico de la entidad basandose en su nuevo logotipo. La web permite al usuario visualizar todos los resultados de los campeonatos tanto en tiempo real como en diferido, visualizar el ranking nacional y otros datos de interés.",
      },
      {
        id: "architecture",
        title: "Arquitectura",
        content:
          "Aplicación WASM con frontend en .NET Blazor que consume datos en formato JSON optimizados para lectura rápida. Comunicación en tiempo real mediante SignalR para detectar cambios instantáneos. Caché para optimizar tiempos de respuesta. Un backend separado genera automáticamente las biografías de los atletas cada 6 horas, recuperando los datos desde ClickHouse y almacenándolos en JSON para acceso rápido.",
      },
    ],
  },
  {
    id: "realtime-results",
    title: "FETRI - Sistema de Resultados",
    subtitle: "Datos deportivos en vivo para la FETRI",
    description:
      "Sistema de procesamiento y visualización de resultados deportivos en tiempo real y diferido, integrado con múltiples fuentes de datos para la Federación Española de Triatlón.",
    image: "/projects/fetri/home.png",
    images: [
      "/projects/fetri/home.png",
      "/projects/fetri/calendar-home.png",
      "/projects/fetri/filters.png",
      "/projects/fetri/champ.png",
      "/projects/fetri/results-champ.png",
      "/projects/fetri/results-champ2.png",
      "/projects/fetri/results-champ3.png",
      "/projects/fetri/modal-bio.png",
      "/projects/fetri/bio-completa.png",
    ],
    tags: [".NET", "Blazor", "SQL", "WebSocket", "World Thriatlon API"],
    featured: true,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    url: "https://www.live.fetri.es",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Sistema especializado en la captura, procesamiento y visualización de resultados deportivos. Soporta tanto transmisión en tiempo real como modo diferido para diferentes disciplinas deportivas. Conectado con CRM propio diseñado en especial para las necesidades de la FETRI.",
      },
      {
        id: "tech",
        title: "Stack tecnológico",
        content:
          "Backend en Blazor server, front-end con Blazor. Conexiones externar mediante API para realizar una muestra única de datos completos e historicos. Almacenamiento y consulta eficiente de grandes volúmenes de datos en AWS y SQL.",
      },
      {
        id: "performance",
        title: "Personalización",
        content:
          "El cliente al disponer de su propio CRM diseñado para la FETRI, puede personalizar el sistema para que se adapte a sus necesidades específicas, personalizando cada campeonato de manera única.",
      },
      {
        id: "performance",
        title: "Renovación de la imagen",
        content:
          "La web se ha renovado con un nuevo diseño, mejorando la experiencia de usuario y la accesibilidad. Modernización de la imagen y optimización de recursos.",
      },
    ],
  },
  {
    id: "event-management",
    title: "CRM Deportivo",
    subtitle: "Gestión total de los datos deportivos de una organización",
    description:
      "Herramienta completa para la gestión de eventos deportivos, desde la logística hasta la experiencia del espectador, subida de resultados, rankings, ligas, deportistas y más.",
    image: "/projects/crm/home.png",
    images: [
      "/projects/crm/home.png"
    ],
    tags: [".NET", "Blazor", "AWS", "S3"],
    featured: true,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Plataforma integral para la gestión de eventos deportivos que cubre todo el ciclo de vida: planificación, promoción, ejecución y post-evento.",
      },
      {
        id: "modules",
        title: "Módulos",
        content:
          "Gestión de inscripciones y acreditaciones. Control de accesos. Sistema de comunicación con participantes. Generación de informes y estadísticas post-evento.",
      },
      {
        id: "integration",
        title: "Integraciones",
        content:
          "Almacenamiento de archivos en S3. Integración con pasarelas de pago. APIs para sincronización con plataformas externas. Exportación de datos.",
      },
    ],
  },
  {
    id: "sports-analytics",
    title: "Analytics Deportivo",
    subtitle: "Inteligencia de datos",
    description:
      "Dashboard de analíticas avanzadas para equipos y organizaciones deportivas, con visualizaciones interactivas y reportes automatizados.",
    image: "https://placehold.co/800x500/0a0a0a/FFD166?text=Sports+Analytics",
    images: [
      "https://placehold.co/800x500/0a0a0a/FFD166?text=Sports+Analytics",
      "https://placehold.co/800x500/210B2C/BC96E6?text=Charts",
    ],
    tags: ["Python", "React", "ClickHouse", "Docker"],
    featured: false,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Herramienta de análisis de datos deportivos que proporciona insights accionables para entrenadores, directivos y analistas.",
      },
      {
        id: "visualizations",
        title: "Visualizaciones",
        content:
          "Gráficos interactivos con drill-down. Mapas de calor. Líneas de tiempo comparativas. Exportación a PDF y Excel.",
      },
    ],
  },
  {
    id: "portfolio-web",
    title: "Portfolio Personal",
    subtitle: "Proyecto propio",
    description:
      "Portfolio web desarrollado con React, TypeScript y animaciones fluidas.",
    image: "https://placehold.co/800x500/222023/bc96e6?text=Portfolio",
    images: [
      "https://placehold.co/800x500/222023/bc96e6?text=Portfolio",
      "https://placehold.co/800x500/222023/FFD166?text=Detail",
    ],
    tags: ["React", "TypeScript", "Framer Motion", "CSS Modules"],
    featured: false,
    type: "personal",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Portfolio personal con diseño de estilo carpeta Windows, dividido en secciones de inicio, sobre mí y proyectos con carrusel de imágenes.",
      },
    ],
  },
  {
    id: "reading-tracker",
    title: "Reading Tracker",
    subtitle: "Seguimiento de lectura",
    description:
      "Aplicación para gestionar tu vida lectora: listas de libros, reseñas y objetivos de lectura.",
    image: "https://placehold.co/800x500/222023/BC96E6?text=Reading+Tracker",
    images: [
      "https://placehold.co/800x500/222023/BC96E6?text=Reading+Tracker",
      "https://placehold.co/800x500/222023/FFD166?text=Book+Lists",
      "https://placehold.co/800x500/222023/BC96E6?text=Reviews",
    ],
    tags: [".NET", "Azure", "SQL"],
    featured: true,
    type: "personal",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Aplicación desarrollada en .NET y desplegada en Azure que permite organizar libros en listas (leídos, en proceso, pendientes), crear reseñas personales y establecer objetivos de lectura.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Gestión de listas personalizadas de libros. Sistema de reseñas y valoraciones. Seguimiento de objetivos de lectura. Historial de lecturas completadas. Interfaz sencilla y intuitiva.",
      },
      {
        id: "tech",
        title: "Stack tecnológico",
        content:
          "Backend en .NET desplegado en Azure. Base de datos SQL. Autenticación de usuarios. API REST para consumo de datos.",
      },
    ],
  },
  {
    id: "talk-manager",
    title: "Gestor de Charlas",
    subtitle: "Votación en entornos estudiantiles",
    description:
      "App para proponer y votar temas de charla en el ámbito universitario.",
    image: "https://placehold.co/800x500/222023/FFD166?text=Talk+Manager",
    images: [
      "https://placehold.co/800x500/222023/FFD166?text=Talk+Manager",
      "https://placehold.co/800x500/222023/BC96E6?text=Votaciones",
    ],
    tags: ["Vue.js", ".NET", "Real-time"],
    featured: false,
    type: "personal",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Aplicación pensada para entornos estudiantiles donde los alumnos proponen temas de charla y la clase vota cuáles les interesan más. Fomenta la participación y la elección democrática de contenidos.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Propuesta de temas por parte de los alumnos. Sistema de votación en tiempo real. Ranking de temas más votados. Notificaciones de resultados. Panel de administración para el profesor.",
      },
    ],
  },
  {
    id: "task-tracker",
    title: "Task Tracker",
    subtitle: "Gestión de tareas de trabajo",
    description:
      "App de escritorio para el seguimiento diario de tareas, reuniones y otros elementos de trabajo.",
    image: "https://placehold.co/800x500/222023/bc96e6?text=Task+Tracker",
    images: [
      "https://placehold.co/800x500/222023/bc96e6?text=Task+Tracker",
      "https://placehold.co/800x500/222023/FFD166?text=Dashboard",
    ],
    tags: [".NET", "WPF", "SQLite"],
    featured: false,
    type: "personal",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Aplicación de escritorio diseñada para organizar y dar seguimiento al día a día laboral: tareas pendientes, reuniones, recordatorios y otros elementos relevantes.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Gestión de tareas con estados y prioridades. Calendarización de reuniones. Recordatorios y notificaciones. Vista diaria/semanal. Almacenamiento local con SQLite.",
      },
    ],
  },
];