export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  titleEn?: string;
  contentEn?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  titleEn?: string;
  subtitleEn?: string;
  descriptionEn?: string;
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
    titleEn: "RFEA - Real-time Results Page",
    subtitleEn: "Real-time results and rankings",
    descriptionEn:
      "Scalable web platform for high-level sports results management. Built at Conersys Sports Solutions for RFEA.",
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
        titleEn: "Overview",
        contentEn:
          "Web platform developed by Conersys Sports Solutions for RFEA, designed with the entity's characteristic colors based on its new logo. The website allows users to view all championship results in real-time and delayed mode, view the national ranking and other relevant data.",
      },
      {
        id: "architecture",
        title: "Arquitectura",
        content:
          "Aplicación WASM con frontend en .NET Blazor que consume datos en formato JSON optimizados para lectura rápida. Comunicación en tiempo real mediante SignalR para detectar cambios instantáneos. Caché para optimizar tiempos de respuesta. Un backend separado genera automáticamente las biografías de los atletas cada 6 horas, recuperando los datos desde ClickHouse y almacenándolos en JSON para acceso rápido.",
        titleEn: "Architecture",
        contentEn:
          "WASM application with .NET Blazor frontend consuming data in fast-read JSON format. Real-time communication via SignalR for instant change detection. Caching for optimized response times. A separate backend automatically generates athlete biographies every 6 hours, fetching data from ClickHouse and storing it in JSON for quick access.",
      },
    ],
  },
  {
    id: "realtime-results",
    title: "FETRI - Sistema de Resultados",
    subtitle: "Datos deportivos en vivo para la FETRI",
    description:
      "Sistema de procesamiento y visualización de resultados deportivos en tiempo real y diferido, integrado con múltiples fuentes de datos para la Federación Española de Triatlón.",
    titleEn: "FETRI - Results System",
    subtitleEn: "Live sports data for FETRI",
    descriptionEn:
      "Real-time and delayed sports results processing and visualization system, integrated with multiple data sources for the Spanish Triathlon Federation.",
    image: "./projects/fetri/home.png",
    images: [
      "./projects/fetri/home.png",
      "./projects/fetri/calendar-home.png",
      "./projects/fetri/filters.png",
      "./projects/fetri/champ.png",
      "./projects/fetri/results-champ.png",
      "./projects/fetri/results-champ2.png",
      "./projects/fetri/results-champ3.png",
      "./projects/fetri/modal-bio.png",
      "./projects/fetri/bio-completa.png",
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
        titleEn: "Overview",
        contentEn:
          "System specialized in capturing, processing and displaying sports results. Supports both real-time and delayed mode for different sports disciplines. Connected to a custom CRM designed specifically for FETRI's needs.",
      },
      {
        id: "tech",
        title: "Stack tecnológico",
        content:
          "Backend en Blazor server, front-end con Blazor. Conexiones externar mediante API para realizar una muestra única de datos completos e historicos. Almacenamiento y consulta eficiente de grandes volúmenes de datos en AWS y SQL.",
        titleEn: "Tech Stack",
        contentEn:
          "Backend on Blazor Server, frontend with Blazor. External API connections for a unified view of complete and historical data. Efficient storage and querying of large data volumes on AWS and SQL.",
      },
      {
        id: "customization",
        title: "Personalización",
        content:
          "El cliente al disponer de su propio CRM diseñado para la FETRI, puede personalizar el sistema para que se adapte a sus necesidades específicas, personalizando cada campeonato de manera única.",
        titleEn: "Customization",
        contentEn:
          "The client, having their own CRM designed for FETRI, can customize the system to adapt to their specific needs, customizing each championship uniquely.",
      },
      {
        id: "redesign",
        title: "Renovación de la imagen",
        content:
          "La web se ha renovado con un nuevo diseño, mejorando la experiencia de usuario y la accesibilidad. Modernización de la imagen y optimización de recursos.",
        titleEn: "Visual Redesign",
        contentEn:
          "The website has been redesigned, improving user experience and accessibility. Image modernization and resource optimization.",
      },
    ],
  },
  {
    id: "event-management",
    title: "CRM Deportivo",
    subtitle: "Gestión total de los datos deportivos de una organización",
    description:
      "Herramienta completa para la gestión de eventos deportivos, desde la logística hasta la experiencia del espectador, subida de resultados, rankings, ligas, deportistas y más.",
    titleEn: "Sports CRM",
    subtitleEn: "Complete sports data management for an organization",
    descriptionEn:
      "Complete tool for sports event management, from logistics to spectator experience, results upload, rankings, leagues, athletes and more.",
    image: "./projects/crm/home.png",
    images: [
      "./projects/crm/home.png"
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
        titleEn: "Overview",
        contentEn:
          "Comprehensive platform for sports event management covering the entire lifecycle: planning, promotion, execution and post-event.",
      },
      {
        id: "modules",
        title: "Módulos",
        content:
          "Gestión de inscripciones y acreditaciones. Control de accesos. Sistema de comunicación con participantes. Generación de informes y estadísticas post-evento.",
        titleEn: "Modules",
        contentEn:
          "Registration and accreditation management. Access control. Communication system with participants. Post-event reports and statistics generation.",
      },
      {
        id: "integration",
        title: "Integraciones",
        content:
          "Almacenamiento de archivos en S3. Integración con pasarelas de pago. APIs para sincronización con plataformas externas. Exportación de datos.",
        titleEn: "Integrations",
        contentEn:
          "File storage on S3. Payment gateway integration. APIs for external platform synchronization. Data export.",
      },
    ],
  },
  {
    id: "sports-analytics",
    title: "Analytics Deportivo",
    subtitle: "Inteligencia de datos",
    description:
      "Dashboard de analíticas avanzadas para equipos y organizaciones deportivas, con visualizaciones interactivas y reportes automatizados.",
    titleEn: "Sports Analytics",
    subtitleEn: "Data Intelligence",
    descriptionEn:
      "Advanced analytics dashboard for sports teams and organizations, with interactive visualizations and automated reports.",
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
        titleEn: "Overview",
        contentEn:
          "Sports data analysis tool that provides actionable insights for coaches, executives and analysts.",
      },
      {
        id: "visualizations",
        title: "Visualizaciones",
        content:
          "Gráficos interactivos con drill-down. Mapas de calor. Líneas de tiempo comparativas. Exportación a PDF y Excel.",
        titleEn: "Visualizations",
        contentEn:
          "Interactive charts with drill-down. Heat maps. Comparative timelines. PDF and Excel export.",
      },
    ],
  },
  {
    id: "paws-and-notes",
    title: "Paws & Notes",
    subtitle: "Diario personal con Pomodoro y sincronización a Notion",
    description:
      "App de escritorio para el seguimiento personal del día a día: diario con estadísticas, Pomodoro configurable, captura rápida global y envío automático a Notion.",
    titleEn: "Paws & Notes",
    subtitleEn: "Personal diary with Pomodoro and Notion sync",
    descriptionEn:
      "Desktop app for daily personal tracking: diary with statistics, configurable Pomodoro, global quick capture and automatic sync to Notion.",
    image: "./projects/paws&notes/home.png",
    images: [
      "./projects/paws&notes/home.png",
      "./projects/paws&notes/what1.png",
      "./projects/paws&notes/diary.png",
      "./projects/paws&notes/tareas.png",
      "./projects/paws&notes/remainders.png",
      "./projects/paws&notes/pomodoro1.png",
      "./projects/paws&notes/pomodoro2.png",
      "./projects/paws&notes/notion_integration.png",
      "./projects/paws&notes/custom1.png",
      "./projects/paws&notes/custom2.png",
    ],
    tags: [".NET 9", "WPF", "Blazor Hybrid", "Notion API"],
    featured: false,
    type: "personal",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Aplicación de escritorio que vive en la bandeja del sistema y funciona en segundo plano. Registra la jornada diary con calendario visual, estadísticas semanales/mensuales de horas trabajadas y energía, y ofrece un Pomodoro con detección de inactividad. Todo se sincroniza con una base de datos de Notion y se puede capturar notas rápidamente desde cualquier lugar con Ctrl+Shift+Space.",
        titleEn: "Overview",
        contentEn:
          "Desktop application that lives in the system tray and runs in the background. Records daily work with visual calendar, weekly/monthly statistics on hours worked and energy, and offers a Pomodoro with inactivity detection. Everything syncs to a Notion database and you can quickly capture notes from anywhere with Ctrl+Shift+Space.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Diario con tipos de día (trabajo/libre/vacaciones/baja), horario, resumen, logros y nivel de energía. Calendario mensual con colores por tipo. Estadísticas por semana/mes/todo con gráfico de horas. Pomodoro con presets personalizados y extensión de +5 min. Captura rápida global. 3 temas de colores con estética de tecla mecánica. Detección de inactividad que pausa el Pomodoro. Rachas de días completados. Resumen semanal automático a Notion.",
        titleEn: "Features",
        contentEn:
          "Diary with day types (work/free/vacation/sick leave), schedule, summary, achievements and energy level. Monthly calendar with color-coded types. Weekly/monthly/all-time statistics with hours chart. Pomodoro with custom presets and +5 min extension. Global quick capture. 3 color themes with mechanical key aesthetics. Inactivity detection that pauses the Pomodoro. Completed day streaks. Automatic weekly summary to Notion.",
      },
      {
        id: "tech",
        title: "Tecnología",
        content:
          "WPF + Blazor Hybrid sobre .NET 9. Persistencia local en JSON (sin base de datos). Integración con la API REST de Notion. Detección de inactividad del sistema vía P/Invoke (GetLastInputInfo). Atajo global registrado con RegisterHotKey. Estilos CSS con variables CSS para los 3 temas y scrollbar personalizado.",
        titleEn: "Technology",
        contentEn:
          "WPF + Blazor Hybrid on .NET 9. Local JSON persistence (no database). Notion REST API integration. System inactivity detection via P/Invoke (GetLastInputInfo). Global hotkey registered with RegisterHotKey. CSS styles with CSS variables for 3 themes and custom scrollbar.",
      },
    ],
  },
  {
    id: "portfolio-web",
    title: "Portfolio Personal",
    subtitle: "Proyecto propio",
    description:
      "Portfolio web desarrollado con React, TypeScript y animaciones fluidas.",
    titleEn: "Personal Portfolio",
    subtitleEn: "Personal project",
    descriptionEn:
      "Web portfolio built with React, TypeScript and smooth animations.",
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
        titleEn: "Overview",
        contentEn:
          "Personal portfolio with Windows folder-style design, divided into home, about me and projects sections with image carousel.",
      },
    ],
  },
  {
    id: "reading-tracker",
    title: "Reading Tracker",
    subtitle: "Seguimiento de lectura",
    description:
      "Aplicación para gestionar tu vida lectora: listas de libros, reseñas y objetivos de lectura.",
    titleEn: "Reading Tracker",
    subtitleEn: "Reading tracking",
    descriptionEn:
      "App to manage your reading life: book lists, reviews and reading goals.",
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
        titleEn: "Overview",
        contentEn:
          "Application built in .NET and deployed on Azure that allows organizing books into lists (read, in progress, pending), creating personal reviews and setting reading goals.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Gestión de listas personalizadas de libros. Sistema de reseñas y valoraciones. Seguimiento de objetivos de lectura. Historial de lecturas completadas. Interfaz sencilla y intuitiva.",
        titleEn: "Features",
        contentEn:
          "Custom book list management. Reviews and ratings system. Reading goal tracking. Completed readings history. Simple and intuitive interface.",
      },
      {
        id: "tech",
        title: "Stack tecnológico",
        content:
          "Backend en .NET desplegado en Azure. Base de datos SQL. Autenticación de usuarios. API REST para consumo de datos.",
        titleEn: "Tech Stack",
        contentEn:
          ".NET backend deployed on Azure. SQL database. User authentication. REST API for data consumption.",
      },
    ],
  },
  {
    id: "talk-manager",
    title: "Gestor de Charlas",
    subtitle: "Votación en entornos estudiantiles",
    description:
      "App para proponer y votar temas de charla en el ámbito universitario.",
    titleEn: "Talk Manager",
    subtitleEn: "Voting in student environments",
    descriptionEn:
      "App for proposing and voting on talk topics in university settings.",
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
        titleEn: "Overview",
        contentEn:
          "Application designed for student environments where students propose talk topics and the class votes on which ones interest them most. Encourages participation and democratic content selection.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Propuesta de temas por parte de los alumnos. Sistema de votación en tiempo real. Ranking de temas más votados. Notificaciones de resultados. Panel de administración para el profesor.",
        titleEn: "Features",
        contentEn:
          "Student topic proposals. Real-time voting system. Most voted topics ranking. Results notifications. Admin panel for the teacher.",
      },
    ],
  },
  {
    id: "task-tracker",
    title: "Task Tracker",
    subtitle: "Gestión de tareas de trabajo",
    description:
      "App de escritorio para el seguimiento diario de tareas, reuniones y otros elementos de trabajo.",
    titleEn: "Task Tracker",
    subtitleEn: "Work task management",
    descriptionEn:
      "Desktop app for daily tracking of tasks, meetings and other work items.",
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
        titleEn: "Overview",
        contentEn:
          "Desktop application designed to organize and track daily work: pending tasks, meetings, reminders and other relevant items.",
      },
      {
        id: "features",
        title: "Funcionalidades",
        content:
          "Gestión de tareas con estados y prioridades. Calendarización de reuniones. Recordatorios y notificaciones. Vista diaria/semanal. Almacenamiento local con SQLite.",
        titleEn: "Features",
        contentEn:
          "Task management with statuses and priorities. Meeting scheduling. Reminders and notifications. Daily/weekly view. Local storage with SQLite.",
      },
    ],
  },
];