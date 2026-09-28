export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  titleEn?: string;
  contentEn?: string;
}

export interface Project {
  id: string;
  order: number;
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
  role?: string;
  roleEn?: string;
  url?: string;
  newsUrl?: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "championship-platform",
    order: 1,
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
    role: "Programadora líder y técnica",
    roleEn: "Lead & Technical Developer",
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
      {
        id: "design",
        title: "Nueva interfaz",
        content:
        "La interfaz se rediseño siguiendo los colores y patrones del nuevo logo de RFEA, front-end totalmente rediseñador por mí mejorando la experiencia y mostrando una imagen moderna y atractiva de la RFEA.",
        titleEn: "New Interface",
        contentEn:
          "The interface is redesigned following the colors and patterns of the new RFEA logo, front-end fully redesigned by me to improve the experience and show a modern and attractive RFEA image.",
      },
    ],
  },
  {
    id: "paddle-worldwide",
    order: 2,
    title: "Rediseño Paddle Worldwide",
    subtitle: "Rediseño visual alineado con nuevo branding",
    description:
      "Rediseño de la plataforma Paddle Worldwide ajustando colores y estilos para estar alineados con su nuevo logotipo e identidad visual.",
    titleEn: "Paddle Worldwide Redesign",
    subtitleEn: "Visual redesign aligned with new branding",
    descriptionEn:
      "Redesign of the Paddle Worldwide platform adjusting colors and styles to align with their new logo and visual identity.",
    image: "./projects/icf/home2.png",
    images: [
      "./projects/icf/home.png",
      "./projects/icf/home2.png",
      "./projects/icf/results1.png",
      "./projects/icf/results2.png",
    ],
    tags: [".NET", "Blazor", "CSS", "Branding"],
    featured: true,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    url: "https://icf.conersyslive.es",
    sections: [
      {
        id: "overview",
        title: "Visión general",
        content:
          "Rediseño completo de la plataforma Paddle Worldwide para alinearlo con la nueva identidad visual de la marca. Se actualizaron colores, tipografías y estilos generales para reflejar el nuevo logotipo y dar una imagen moderna y coherente.",
        titleEn: "Overview",
        contentEn:
          "Complete redesign of the Paddle Worldwide platform to align with the brand's new visual identity. Colors, typography and general styles were updated to reflect the new logo and provide a modern, cohesive image.",
      },
    ],
  },
  {
    id: "realtime-results",
    order: 3,
    title: "FETRI - Sistema de Resultados y Estadísticas",
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
    role: "Programadora líder y técnica",
    roleEn: "Lead & Technical Developer",
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
    order: 5,
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
    featured: false,
    type: "trabajo",
    company: "Conersys Sports Solutions",
    role: "Programadora líder y técnica",
    roleEn: "Lead & Technical Developer",
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
          "Gestión de inscripciones y acreditaciones para eventos nacionales e internacionales, generando sus propias acreditaciones distintivas con pkpass personalizado. Generación de informes y estadísticas post-evento, resultados y rankings.",
        titleEn: "Modules",
        contentEn:
          "Registration and accreditation management for national and international events, generating custom distinctive accreditations with personalized pkpass. Post-event reports and statistics, results and rankings.",
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
    id: "paws-and-notes",
    order: 4,
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
    featured: true,
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
    id: "reading-tracker",
    order: 8,
    title: "Bookly",
    subtitle: "Seguimiento de lectura",
    description:
      "Aplicación para gestionar tu vida lectora: listas de libros, reseñas y objetivos de lectura.",
    titleEn: "Bookly",
    subtitleEn: "Reading tracking",
    descriptionEn:
      "Reading tracking project developed in .NET. This app allows you to save books in lists (read, in progress, etc.), create reviews, or create reading goals.",
    image: "./projects/bookly/home.png",
    images: [
      "./projects/bookly/home.png",
    ],
    tags: [".NET", "Azure", "SQL"],
    featured: false,
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
  "id": "talk-manager",
  "order": 9,
  "title": "TechTalks Tajamar",
  "subtitle": "Votación de charlas en entornos educativos",
  "description": "App para proponer y votar temas de exposiciones en el ámbito educativo, sobretodo tecnológico. Los alumnos proponen charlas en rondas definidas por el profesor, la clase vota y el sistema selecciona automáticamente las más votadas.",
  "titleEn": "TechTalks Tajamar",
  "subtitleEn": "Voting in student environments",
  "descriptionEn": "App for proposing and voting on talk topics in educational settings, mostly tech-related. Students propose talks in rounds defined by the teacher, the class votes and the system automatically selects the most voted ones.",
  "image": "./projects/charlasTajamar/Login.png",
  "images": [
    "./projects/charlasTajamar/Login.png"
  ],
  "tags": ["Vue.js", ".NET", "Bootstrap", "Chart.js", "FullCalendar", "SweetAlert2"],
  "featured": false,
  "type": "personal",
  "sections": [
    {
      "id": "overview",
      "title": "Visión general",
      "content": "Aplicación pensada para entornos estudiantiles donde los alumnos proponen temas de charla en rondas definidas por el profesor. La clase vota cuáles les interesan más y un algoritmo automático selecciona las charlas aceptadas priorizando equidad de participación. Incluye gestión de cursos, usuarios y un panel de estadísticas.",
      "titleEn": "Overview",
      "contentEn": "Application designed for student environments where students propose talk topics in rounds defined by the teacher. The class votes on which ones interest them most and an automatic algorithm selects the accepted talks prioritizing participation equity. Includes course management, user management and a statistics panel."
    },
    {
      "id": "features",
      "title": "Funcionalidades",
      "content": "Sistema de rondas con fechas de cierre, límite de votación y fecha de presentación. Propuesta de charlas por alumnos con título, descripción, duración y recursos adjuntos. Sistema de votación: un voto por alumno por ronda, selección automática de charlas aceptadas. Algoritmo de selección que prioriza alumnos sin charlas aceptadas y respeta la duración máxima de la ronda. Calendario interactivo con eventos codificados por color. Gráficas estadísticas: distribución de charlas por ronda y charlas propuestas/aceptadas por alumno. Gestión de cursos por el profesor. Gestión de usuarios por administrador. Sistema de comentarios y recursos en charlas. Edición de perfil, cambio de contraseña y subida de imagen de perfil. Notificaciones de charlas aceptadas. Diseño responsive para móvil y escritorio. Tres roles diferenciados: Alumno, Profesor y Administrador.",
      "titleEn": "Features",
      "contentEn": "Round system with close dates, voting deadline and presentation date. Talk proposals by students with title, description, duration and attached resources. Voting system: one vote per student per round, automatic selection of accepted talks. Selection algorithm that prioritizes students with no accepted talks and respects maximum round duration. Interactive calendar with color-coded events. Statistics charts: talk distribution per round and proposed/accepted talks per student. Course management by teacher. User management by administrator. Comment and resource system on talks. Profile editing, password change and profile image upload. Accepted talks notifications. Responsive design for mobile and desktop. Three differentiated roles: Student, Teacher and Administrator."
    },
    {
      "id": "architecture",
      "title": "Arquitectura",
      "content": "Frontend SPA construido con Vue 3 y Vue Router en modo history. Comunicación con backend .NET alojado en Azure mediante axios y autenticación JWT Bearer almacenada en cookies con expiración de 4 horas. Gestión de estado local en componentes sin librería externa (sin Vuex/Pinia). Los menús de navegación se renderizan dinámicamente según el rol del usuario.",
      "titleEn": "Architecture",
      "contentEn": "SPA frontend built with Vue 3 and Vue Router in history mode. Communication with .NET backend hosted on Azure via axios and JWT Bearer authentication stored in cookies with 4-hour expiration. Local state management in components without external library (no Vuex/Pinia). Navigation menus are rendered dynamically based on the user's role."
    },
    {
      "id": "roles",
      "title": "Roles de usuario",
      "content": "Alumno: propone charlas, vota, comenta, gestiona su perfil. Profesor: crea rondas, actualiza estados con algoritmo automático, gestiona cursos y alumnos, visualiza estadísticas. Administrador: gestiona todos los usuarios (cambiar curso, rol y estado).",
      "titleEn": "User roles",
      "contentEn": "Student: proposes talks, votes, comments, manages their profile. Teacher: creates rounds, updates statuses with automatic algorithm, manages courses and students, views statistics. Administrator: manages all users (change course, role and status)."
    },
    {
      "id": "backend",
      "title": "Endpoints API",
      "content": "Autenticación: login, registro de alumnos y profesores. Charlas: CRUD completo con estados (PROPUESTA, ACEPTADA, RECHAZADA). Rondas: creación, edición, eliminación por profesor. Votos: registro y consulta por ronda y alumno. Comentarios: creación y eliminación. Recursos: creación y edición. Cursos: creación, activación/desactivación, eliminación. Usuarios: gestión completa por admin con filtros por rol, curso y estado.",
      "titleEn": "API Endpoints",
      "contentEn": "Authentication: login, student and teacher registration. Talks: full CRUD with statuses (PROPOSED, ACCEPTED, REJECTED). Rounds: creation, editing, deletion by teacher. Votes: registration and query by round and student. Comments: creation and deletion. Resources: creation and editing. Courses: creation, activation/deactivation, deletion. Users: full management by admin with filters by role, course and status."
    },
    {
      "id": "challenges",
      "title": "Retos y aprendizajes",
      "content": "Integración de múltiples librerías (FullCalendar, Chart.js, SweetAlert2) en un proyecto Vue 3. Diseño de algoritmo de selección automática de charlas con priorización por equidad. Gestión de autenticación con cookies y tres roles diferenciados. Comunicación con API REST .NET desde frontend Vue. Diseño responsive con Bootstrap 5 y manejo de estados complejos sin store global.",
      "titleEn": "Challenges and learnings",
      "contentEn": "Integration of multiple libraries (FullCalendar, Chart.js, SweetAlert2) in a Vue 3 project. Design of automatic talk selection algorithm with equity prioritization. Authentication management with cookies and three differentiated roles. Communication with .NET REST API from Vue frontend. Responsive design with Bootstrap 5 and complex state management without global store."
    }
  ]
},
{
    id: "rfea-content",
    order: 6,
  title: "RFEA Data",
  subtitle: "Ecosistema estadístico del atletismo español",
  description:
    "Plataforma de gestión de contenido personalizada que permite a editores crear y mantener páginas web dinámicas sin conocimientos técnicos, usando un editor visual drag-and-drop, generando contenido estadístico y análisis de datos.",
  titleEn: "RFEA Data",
  subtitleEn: "Spanish athletics statistics ecosystem",
  descriptionEn:
    "Custom content management platform that allows editors to create and maintain dynamic web pages without technical knowledge, using a visual drag-and-drop editor, generating statistical content and data analysis.",
  image: "./projects/rfeaData/home.png",
  images: [
    "./projects/rfeaData/home.png",
    "./projects/rfeaData/champs1.png",
    "./projects/rfeaData/widget_editor.png"
  ],
  tags: [".NET", "Blazor", "S3", "JSON", "Drag-and-Drop"],
  featured: false,
  type: "trabajo",
  company: "Conersys Sports Solutions",
  role: "Programadora líder y técnica",
  roleEn: "Lead & Technical Developer",
  url: "https://www.rfealive.es/data",
  newsUrl: "https://atletismorfea.es/federacion/communication-hub/noticias/rfeadata-el-gran-ecosistema-estadistico-del-atletismo-espanol",
  sections: [
    {
      id: "overview",
      title: "Visión general",
      content:
        "La Real Federación Española de Atletismo refuerza su posicionamiento como referencia internacional en gestión de datos con RFEADATA, el mayor ecosistema estadístico del atletismo español. Un proyecto que concentra décadas de información federativa y que sitúa a la RFEA entre las organizaciones con mayor riqueza histórica y documental a nivel mundial.\n\nRFEADATA nace con un objetivo claro: poner en valor el dato como elemento central del atletismo. No se trata solo de recopilar información, sino de estructurarla, contextualizarla y hacerla accesible para todo tipo de usuarios. La plataforma reúne registros históricos, evolución de marcas, trayectorias deportivas y resultados de competición.\n\nEl proyecto se articula en seis grandes áreas: Récords de España, Rankings de España de todos los tiempos, Historiales de Campeonatos de España, Historiales de Campeonatos Internacionales, Biografías de atletas y Biografías de atletas históricos. A estas funcionalidades se suma la sección ESTADÍSTICAS, junto a RÁNKINGS y CAMPEONATOS.",
      titleEn: "Overview",
      contentEn:
        "The Royal Spanish Athletics Federation reinforces its positioning as an international reference in data management with RFEADATA, the largest statistical ecosystem of Spanish athletics. A project that concentrates decades of federation information and places the RFEA among the organizations with the greatest historical and documentary richness worldwide.\n\nRFEADATA was born with a clear objective: to highlight data as a central element of athletics. It's not just about collecting information, but structuring, contextualizing and making it accessible to all types of users. The platform brings together historical records, performance evolution, athletic trajectories and competition results.\n\nThe project is articulated in six major areas: Spanish Records, All-Time Spanish Rankings, Spanish Championship Histories, International Championship Histories, Athlete Biographies and Historical Athlete Biographies. The STATISTICS section complements RANKINGS and CHAMPIONSHIPS, expanding the system's reach.",
    },
    {
      id: "architecture",
      title: "Arquitectura",
      content:
        "Widget polimórfico con deserialización automática desde JSON. Doble vía de persistencia: borradores editables y snapshots comprimidos en S3 para publicación. Las páginas sirven como presencia web oficial en rfealive.es, combinando datos deportivos en tiempo real con contenido editorial estático.",
      titleEn: "Architecture",
      contentEn:
        "Polymorphic widget system with automatic JSON deserialization. Dual persistence: editable drafts and compressed snapshots on S3 for publishing. Pages serve as the official web presence on rfealive.es, combining real-time sports data with static editorial content.",
    },
    {
      id: "hemeroteca",
      title: "Hemeroteca digital",
      content:
        "Módulo completo de archivo digital con colecciones padre-hijo, recomendaciones cruzadas entre documentos, filtros por categoría y autor, y un motor de renderizado que genera grids de tarjetas responsive con búsqueda en tiempo real.",
      titleEn: "Digital newspaper archive",
      contentEn:
        "Complete digital archive module with parent-child collections, cross-document recommendations, filters by category and author, and a rendering engine that generates responsive card grids with real-time search.",
    },
    {
      id: "sections",
      title: "Secciones autónomas",
      content:
        "Récords de España, rankings históricos, historiales de campeonatos, biografías de atletas y hemeroteca digital — cada una con su propio layout y widgets independientes.",
      titleEn: "Autonomous sections",
      contentEn:
        "Spanish records, historical rankings, championship histories, athlete biographies and digital archive — each with its own layout and independent widgets.",
    },
  ],
},
{
    id: "rfea-rankings",
    order: 7,
  title: "Sistema de Rankings — Motor de Procesamiento Atlético",
  subtitle: "Pipeline de datos y rankings oficiales",
  description:
    "Pipeline de procesamiento de datos que transforma resultados de competición en rankings oficiales del atletismo español, actualizados automáticamente cada 6 horas.",
  titleEn: "Rankings System — Athletics Processing Engine",
  subtitleEn: "Data pipeline and official rankings",
  descriptionEn:
    "Data processing pipeline that transforms competition results into official Spanish athletics rankings, automatically updated every 6 hours.",
  image: "./projects/rfea/rankings1.png",
  images: [
    "./projects/rfea/rankings1.png",
    "./projects/rfea/rankings2.png",
  ],
  tags: [".NET", "Blazor", "ClickHouse", "SignalR", "S3", "Salesforce API"],
  featured: false,
  type: "trabajo",
  company: "Conersys Sports Solutions",
  role: "Programadora líder y técnica",
  roleEn: "Lead & Technical Developer",
  sections: [
    {
      id: "overview",
      title: "Visión general",
      content:
        "El sistema extrae datos desde Salesforce, los procesa aplicando reglas de validación atlética específicas — filtros de viento, categorías por edad, variantes de pista cubierta — y genera rankings por evento, temporada y ámbito. Los resultados se almacenan en ClickHouse y se sirven como JSON comprimido.",
      titleEn: "Overview",
      contentEn:
        "The system extracts data from Salesforce, processes it applying specific athletics validation rules — wind filters, age categories, indoor track variants — and generates rankings by event, season and scope. Results are stored in ClickHouse and served as compressed JSON.",
    },
    {
      id: "processing",
      title: "Procesamiento masivo",
      content:
        "Miles de resultados se validan contra reglas del atletismo real (viento máximo 2.0 m/s, marcas mínimas por prueba, detección automática de Short Track) generando rankings best, all y top-10 por cada combinación de evento y temporada.",
      titleEn: "Mass processing",
      contentEn:
        "Thousands of results validated against real athletics rules (maximum wind 2.0 m/s, minimum marks per event, automatic Short Track detection) generating best, all and top-10 rankings for every event/season combination.",
    },
    {
      id: "sync",
      title: "Sincronización incremental",
      content:
        "Servicio en segundo plano que detecta qué datos cambiaron, identifica los atletas afectados, rellena huecos de integridad y regenera solo lo necesario. Actualización en tiempo real vía SignalR.",
      titleEn: "Incremental sync",
      contentEn:
        "Background service that detects which data changed, identifies affected athletes, fills integrity gaps and regenerates only what's needed. Real-time updates via SignalR.",
    },
    {
      id: "storage",
      title: "Doble almacenamiento y biografías",
      content:
        "Rankings en ClickHouse para consultas rápidas y en S3 comprimidos para distribución. Biografías automáticas generadas tras cada sincronización combinando datos de 8+ tablas con sistema de fallback de 3 niveles.",
      titleEn: "Dual storage and auto-biographies",
      contentEn:
        "Rankings in ClickHouse for fast queries and compressed S3 for distribution. Automatic athlete profiles generated after each sync combining data from 8+ tables with a 3-level fallback system.",
    },
    {
      id: "coverage",
      title: "Cobertura completa",
      content:
        "Todas las disciplinas del atletismo — desde 60m lisos hasta maratón, incluyendo vallas, saltos, lanzamientos, combinadas, marcha, relevos y obstáculos — con soporte para variantes de aire libre y pista cubierta.",
      titleEn: "Full coverage",
      contentEn:
        "All athletics disciplines — from 60m sprints to marathon, including hurdles, jumps, throws, combined events, race walking, relays and steeplechase — with support for outdoor and indoor variants.",
    },
  ],
},
];