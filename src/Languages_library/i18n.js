import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'mgl-lang';

const en = {
    common: {
        viewAll: 'View all projects',
        viewProject: 'View project',
        viewCase: 'View case study',
        viewLive: 'Live site',
        viewRepo: 'Source code',
        backToWork: 'Back to work',
        nextProject: 'Next project',
        availableForNewProjects: 'AVAILABLE FOR NEW PROJECTS',
        basedIn: 'Based in Spain',
        workingRemotely: 'Working remotely',
        getInTouch: 'Get in touch',
        more: 'More',
        explore: 'Explore',
    },
    header: {
        work: 'Work', experience: 'Experience', skills: 'Skills', about: 'About',
        testimonials: 'Testimonials', contact: 'Contact',
        toggleTheme: 'Toggle theme', toggleLanguage: 'Toggle language',
        brand: 'MARÍA GUERRERO LOBO',
    },
    hero: {
        kicker: 'FULL STACK & PRODUCT ENGINEER',
        title: {
            line1: 'I build intelligent',
            line2Pre: 'digital',
            line2Em: 'experiences',
            line3Pre: 'that solve',
            line3Em: 'real problems.',
        },
        description: 'I design and build scalable, human-centered products with modern technologies, AI integrations and great UX.',
        cta: { primary: 'View my work', secondary: "Let's talk" },
    },
    featured: { kicker: 'FEATURED CASE STUDIES' },
    skills: {
        kicker: 'SKILLS & TECHNOLOGIES',
        tabs: {
            frontend: 'Frontend', backend: 'Backend', aiData: 'AI & Data',
            designUx: 'Design & UX', tools: 'Tools & DevOps', other: 'Other',
        },
    },
    experience: {
        kicker: 'EXPERIENCE',
        items: {
            zano: {
                period: 'DEC 2024 — PRESENT',
                title: 'Full Stack & Product Engineer — Zano (Remote)',
                summary: 'Designing and building internal products and intelligence systems used by life sciences research and governance teams.',
                bullets: [
                    'Designed product experiences and user flows',
                    'Built full-stack applications and APIs',
                    'Implemented AI-assisted features',
                    'Improved system performance & reliability',
                    'Collaborated directly with clients and stakeholders to refine UX and product behavior',
                    'Maintained and improved production systems used by real teams',
                ],
            },
            freelance: {
                period: '2022 — DEC 2024',
                title: 'Freelance & Personal Projects',
                summary: 'Full Stack Developer',
                description: 'Worked on multiple projects to explore ideas, learn new technologies and solve real problems.',
            },
        },
    },
    about: {
        kicker: 'ABOUT ME',
        body: "I'm a product-minded engineer who loves turning complex systems into clear, intuitive experiences. I care about details, performance and creating impactful solutions.",
        cta: 'More about me',
        stats: {
            years: { value: '2+', label: 'Years of experience' },
            projects: { value: '10+', label: 'Projects shipped' },
            commits: { value: '100+', label: 'Commits this year' },
            curiosity: { value: '∞', label: 'Curiosity' },
        },
    },
    testimonials: {
        kicker: 'WHAT CLIENTS SAY',
        items: {
            zanoClient: { quote: 'Maria is an extremely attentive and passionate developer. She deeply understands the product, the users and the business behind it.', author: 'Zano Client' },
            zanoColleague1: { quote: 'She brings great product sense and technical depth. Her UI work is clean, modern and thoughtful.', author: 'Zano Colleague' },
            zanoColleague2: { quote: 'Maria consistently delivers high quality work, communicates clearly and is always one step ahead.', author: 'Zano Colleague' },
        },
    },
    contact: {
        title: { line1: "Let's build something", em: 'meaningful', line2: 'together.' },
        body: "I'm currently available for remote opportunities, product collaborations and creative engineering projects.",
        cta: 'Get in touch',
        meta: {
            available: 'Available for new projects',
            location: 'Based in Spain',
            timezone: 'CET (UTC+1)',
            email: 'hello@mariaguerrerolobo.com',
        },
        availability: { kicker: 'AVAILABLE FOR', items: ['Remote opportunities', 'Worldwide'] },
        form: {
            name: 'Your name',
            email: 'Your email',
            company: 'Company / Team',
            lookingFor: 'What are you looking for?',
            categories: ['Product Design', 'Frontend Engineering', 'AI Interfaces', 'Freelance', 'Collaboration', 'Other'],
            message: 'Tell me about your project...',
            updates: "I'd love updates about your work.",
            send: 'Send message',
            sent: 'Message sent successfully!',
            error: 'There was an error sending the message.',
        },
    },
    footer: {
        navigation: 'Navigation', more: 'More', availability: 'Available for',
        rights: '© 2025 María Guerrero Lobo. All rights reserved.',
        role: 'Full Stack & Product Engineer',
        links: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    },
    caseStudies: {
        lifeSciences: {
            title: 'Life Sciences Intelligence Workspace',
            summary: 'A secure workspace that turns scattered research and therapy data into actionable intelligence.',
            role: 'Full Stack & Product Engineer', year: '2025', category: 'AI / Life Sciences',
            sections: {
                overview: { title: 'Overview', body: 'A unified workspace for life sciences teams to capture research, organize therapy data and surface insights through AI-assisted search.' },
                product: { title: 'Product Thinking', body: 'Designed the product around three core user journeys: ingest, organize, ask. Reduced friction in cross-team workflows.' },
                interface: { title: 'Interface System', body: 'A modular design system with reusable patterns for tables, command palettes, and AI conversations.' },
                engineering: { title: 'Engineering', body: 'Next.js app with a Python service layer. Performance tuned to keep large research datasets responsive.' },
                ai: { title: 'AI & Data Layer', body: 'Retrieval-augmented workflows powered by a vector index over therapy data, with audit trails for every answer.' },
                challenges: { title: 'Challenges', body: 'Balancing speed with rigor: every AI response had to be traceable to source documents for compliance.' },
                outcome: { title: 'Outcome', body: 'Internal users reduced time-to-insight by an order of magnitude on research questions that previously required manual digging.' },
            },
        },
        conference: {
            title: 'Conference Planning Data Platform',
            summary: 'A planning platform that turns conference websites into structured agendas.',
            role: 'Full Stack & Product Engineer', year: '2025', category: 'Data Platform',
            sections: {
                overview: { title: 'Overview', body: 'Tool that crawls scientific conferences and organizes sessions, speakers and topics into a planning workspace.' },
                product: { title: 'Product Thinking', body: 'Optimized for analysts who plan attendance across dozens of conferences with overlapping schedules.' },
                interface: { title: 'Interface System', body: 'Schedule grids, filter rails and saved views — designed for power users who live in the product.' },
                engineering: { title: 'Engineering', body: 'React frontend backed by Django + Celery workers running scraping and normalization pipelines.' },
                ai: { title: 'AI & Data Layer', body: 'LLM-assisted extraction of structured session metadata from heterogeneous conference sites.' },
                challenges: { title: 'Challenges', body: 'Every conference site is different. The pipeline had to gracefully degrade and surface low-confidence data for review.' },
                outcome: { title: 'Outcome', body: 'Cut the manual planning effort drastically and gave teams a single place to align on which sessions to attend.' },
            },
        },
        aiGovernance: {
            title: 'AI-Assisted Governance Dashboard',
            summary: 'AI-powered search and dashboards for governance, risk and audit teams.',
            role: 'Full Stack & Product Engineer', year: '2026', category: 'AI / Governance',
            sections: {
                overview: { title: 'Overview', body: 'A dashboard layer that turns governance policies and audit evidence into a queryable, explainable system.' },
                product: { title: 'Product Thinking', body: 'Built for risk managers who need to ask high-stakes questions and trust every answer they get back.' },
                interface: { title: 'Interface System', body: 'Editorial dashboards, evidence cards and an AI side panel that always shows its sources.' },
                engineering: { title: 'Engineering', body: 'Next.js + FastAPI architecture with role-based access and immutable audit logs.' },
                ai: { title: 'AI & Data Layer', body: 'RAG over policy documents and evidence, with citations rendered directly inside the chat surface.' },
                challenges: { title: 'Challenges', body: 'Designing for trust: zero hallucinations tolerated. Every answer cites or refuses.' },
                outcome: { title: 'Outcome', body: 'Audit teams adopted the tool as the canonical interface for governance review.' },
            },
        },
    },
    playground: {
        kicker: 'PLAYGROUND',
        title: 'Experiments & explorations',
        description: 'A collection of older personal projects, creative coding experiments and exploratory builds. Not flagship work — just playgrounds for learning and curiosity.',
        categories: { experiment: 'Experiment', exploration: 'Exploration', learning: 'Learning' },
        items: {
            ciclicas: { title: 'Cíclicas Foundation', description: 'Full website redesign and development for a non-profit foundation — a real-world freelance build.' },
            pacoBargues: { title: 'Paco Bargues Art', description: 'Online showcase for a painter — elegant gallery and contact flow for art enthusiasts.' },
            rickMorty: { title: 'Rick & Morty Finder', description: 'Character explorer for the Rick and Morty universe, built to learn external APIs and routing.' },
            animeFinder: { title: 'Anime Series Finder', description: 'Dynamic anime search app with favorites persisted in LocalStorage.' },
        },
    },
    notFound: {
        title: 'Page not found',
        body: 'The page you are looking for does not exist or has been moved.',
        cta: 'Back to home',
    },
};

const es = {
    common: {
        viewAll: 'Ver todos los proyectos', viewProject: 'Ver proyecto', viewCase: 'Ver case study',
        viewLive: 'Sitio en vivo', viewRepo: 'Código fuente', backToWork: 'Volver a proyectos',
        nextProject: 'Siguiente proyecto', availableForNewProjects: 'DISPONIBLE PARA NUEVOS PROYECTOS',
        basedIn: 'En España', workingRemotely: 'Trabajando en remoto', getInTouch: 'Hablemos',
        more: 'Más', explore: 'Explorar',
    },
    header: {
        work: 'Proyectos', experience: 'Experiencia', skills: 'Skills', about: 'Sobre mí',
        testimonials: 'Testimonios', contact: 'Contacto',
        toggleTheme: 'Cambiar tema', toggleLanguage: 'Cambiar idioma',
        brand: 'MARÍA GUERRERO LOBO',
    },
    hero: {
        kicker: 'FULL STACK & PRODUCT ENGINEER',
        title: {
            line1: 'Construyo',
            line2Pre: 'experiencias',
            line2Em: 'digitales',
            line3Pre: 'que resuelven',
            line3Em: 'problemas reales.',
        },
        description: 'Diseño y desarrollo productos escalables y centrados en las personas, con tecnologías modernas, integraciones de IA y UX cuidada.',
        cta: { primary: 'Ver mi trabajo', secondary: 'Hablemos' },
    },
    featured: { kicker: 'CASE STUDIES DESTACADOS' },
    skills: {
        kicker: 'SKILLS Y TECNOLOGÍAS',
        tabs: {
            frontend: 'Frontend', backend: 'Backend', aiData: 'IA & Datos',
            designUx: 'Diseño & UX', tools: 'Tools & DevOps', other: 'Otros',
        },
    },
    experience: {
        kicker: 'EXPERIENCIA',
        items: {
            zano: {
                period: 'DIC 2024 — PRESENTE',
                title: 'Full Stack & Product Engineer — Zano (Remoto)',
                summary: 'Diseñando y construyendo productos internos y sistemas de inteligencia para equipos de investigación en ciencias de la vida y gobernanza.',
                bullets: [
                    'Diseño de experiencias de producto y flujos de usuario',
                    'Aplicaciones full-stack y APIs',
                    'Funcionalidades asistidas por IA',
                    'Mejora de rendimiento y fiabilidad del sistema',
                    'Colaboración directa con clientes y stakeholders para refinar UX y comportamiento de producto',
                    'Mantenimiento y mejora de sistemas en producción usados por equipos reales',
                ],
            },
            freelance: {
                period: '2022 — DIC 2024',
                title: 'Freelance & Proyectos Personales',
                summary: 'Full Stack Developer',
                description: 'Trabajé en múltiples proyectos para explorar ideas, aprender nuevas tecnologías y resolver problemas reales.',
            },
        },
    },
    about: {
        kicker: 'SOBRE MÍ',
        body: 'Soy una ingeniera con mentalidad de producto a la que le encanta convertir sistemas complejos en experiencias claras e intuitivas. Cuido el detalle, el rendimiento y crear soluciones con impacto.',
        cta: 'Más sobre mí',
        stats: {
            years: { value: '2+', label: 'Años de experiencia' },
            projects: { value: '10+', label: 'Proyectos entregados' },
            commits: { value: '100+', label: 'Commits este año' },
            curiosity: { value: '∞', label: 'Curiosidad' },
        },
    },
    testimonials: {
        kicker: 'LO QUE DICEN LOS CLIENTES',
        items: {
            zanoClient: { quote: 'María es una desarrolladora extremadamente atenta y apasionada. Entiende profundamente el producto, los usuarios y el negocio detrás.', author: 'Cliente de Zano' },
            zanoColleague1: { quote: 'Aporta gran visión de producto y profundidad técnica. Su trabajo de UI es limpio, moderno y reflexivo.', author: 'Compañero de Zano' },
            zanoColleague2: { quote: 'María entrega trabajo de alta calidad de forma constante, comunica con claridad y siempre va un paso por delante.', author: 'Compañero de Zano' },
        },
    },
    contact: {
        title: { line1: 'Construyamos algo', em: 'increíble', line2: 'juntos.' },
        body: 'Actualmente disponible para oportunidades remotas, colaboraciones de producto y proyectos de ingeniería creativa.',
        cta: 'Hablemos',
        meta: {
            available: 'Disponible para nuevos proyectos',
            location: 'En España',
            timezone: 'CET (UTC+1)',
            email: 'hello@mariaguerrerolobo.com',
        },
        availability: { kicker: 'DISPONIBLE PARA', items: ['Oportunidades remotas', 'Cualquier país'] },
        form: {
            name: 'Tu nombre',
            email: 'Tu correo electrónico',
            company: 'Empresa / Equipo',
            lookingFor: '¿Qué estás buscando?',
            categories: ['Diseño de producto', 'Frontend Engineering', 'Interfaces de IA', 'Freelance', 'Colaboración', 'Otro'],
            message: 'Cuéntame sobre tu proyecto...',
            updates: 'Me gustaría recibir actualizaciones sobre tu trabajo.',
            send: 'Enviar mensaje',
            sent: '¡Mensaje enviado correctamente!',
            error: 'Hubo un error al enviar el mensaje.',
        },
    },
    footer: {
        navigation: 'Navegación', more: 'Más', availability: 'Disponible para',
        rights: '© 2025 María Guerrero Lobo. Todos los derechos reservados.',
        role: 'Full Stack & Product Engineer',
        links: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    },
    caseStudies: {
        lifeSciences: {
            title: 'Workspace de Inteligencia en Ciencias de la Vida',
            summary: 'Un workspace seguro que convierte investigación y datos de terapias dispersos en inteligencia accionable.',
            role: 'Full Stack & Product Engineer', year: '2025', category: 'IA / Ciencias de la vida',
            sections: {
                overview: { title: 'Visión general', body: 'Un workspace unificado para que equipos de ciencias de la vida capturen investigación, organicen datos de terapias y obtengan insights vía búsqueda asistida por IA.' },
                product: { title: 'Product Thinking', body: 'Diseñado en torno a tres flujos principales: ingestar, organizar, preguntar. Reduciendo la fricción entre equipos.' },
                interface: { title: 'Sistema de interfaz', body: 'Un design system modular con patrones reutilizables para tablas, command palettes y conversaciones con IA.' },
                engineering: { title: 'Ingeniería', body: 'App Next.js con una capa de servicios en Python. Rendimiento optimizado para datasets de investigación grandes.' },
                ai: { title: 'Capa de IA y datos', body: 'Workflows RAG sobre un índice vectorial de datos de terapias, con trazabilidad en cada respuesta.' },
                challenges: { title: 'Retos', body: 'Equilibrar velocidad con rigor: cada respuesta de IA debía poder trazarse hasta los documentos fuente para cumplir normativa.' },
                outcome: { title: 'Resultado', body: 'Los usuarios internos redujeron drásticamente el tiempo para llegar a insights en preguntas que antes requerían búsqueda manual.' },
            },
        },
        conference: {
            title: 'Plataforma de Datos para Planificación de Congresos',
            summary: 'Una plataforma que convierte webs de congresos en agendas estructuradas.',
            role: 'Full Stack & Product Engineer', year: '2025', category: 'Plataforma de datos',
            sections: {
                overview: { title: 'Visión general', body: 'Herramienta que rastrea congresos científicos y organiza sesiones, ponentes y temas en un workspace de planificación.' },
                product: { title: 'Product Thinking', body: 'Optimizada para analistas que planifican asistencia a decenas de congresos con horarios solapados.' },
                interface: { title: 'Sistema de interfaz', body: 'Cuadrículas de horarios, filtros laterales y vistas guardadas — diseñado para usuarios avanzados.' },
                engineering: { title: 'Ingeniería', body: 'Frontend en React con backend Django + workers Celery ejecutando pipelines de scraping y normalización.' },
                ai: { title: 'Capa de IA y datos', body: 'Extracción asistida por LLM de metadatos estructurados desde webs heterogéneas de congresos.' },
                challenges: { title: 'Retos', body: 'Cada web de congreso es distinta. El pipeline debía degradar con elegancia y marcar datos de baja confianza para revisión.' },
                outcome: { title: 'Resultado', body: 'Redujo enormemente el trabajo manual de planificación y dio a los equipos un único lugar para alinear su asistencia.' },
            },
        },
        aiGovernance: {
            title: 'Dashboard de Gobernanza Asistido por IA',
            summary: 'Búsqueda y dashboards potenciados por IA para equipos de gobernanza, riesgo y auditoría.',
            role: 'Full Stack & Product Engineer', year: '2026', category: 'IA / Gobernanza',
            sections: {
                overview: { title: 'Visión general', body: 'Una capa de dashboards que convierte políticas y evidencia de auditoría en un sistema consultable y explicable.' },
                product: { title: 'Product Thinking', body: 'Construido para managers de riesgo que necesitan hacer preguntas críticas y confiar en cada respuesta.' },
                interface: { title: 'Sistema de interfaz', body: 'Dashboards editoriales, tarjetas de evidencia y un panel lateral de IA que siempre muestra sus fuentes.' },
                engineering: { title: 'Ingeniería', body: 'Arquitectura Next.js + FastAPI con control de acceso por roles y logs de auditoría inmutables.' },
                ai: { title: 'Capa de IA y datos', body: 'RAG sobre políticas y evidencia, con citas renderizadas directamente dentro del chat.' },
                challenges: { title: 'Retos', body: 'Diseño para la confianza: cero alucinaciones toleradas. Cada respuesta cita o rechaza responder.' },
                outcome: { title: 'Resultado', body: 'Los equipos de auditoría adoptaron la herramienta como interfaz canónica para la revisión de gobernanza.' },
            },
        },
    },
    playground: {
        kicker: 'PLAYGROUND',
        title: 'Experimentos y exploraciones',
        description: 'Una colección de proyectos personales antiguos, experimentos de creative coding y builds exploratorios. No son trabajo flagship — son playgrounds de aprendizaje y curiosidad.',
        categories: { experiment: 'Experimento', exploration: 'Exploración', learning: 'Aprendizaje' },
        items: {
            ciclicas: { title: 'Fundación Cíclicas', description: 'Rediseño y desarrollo completo de la web para una fundación sin ánimo de lucro — un proyecto freelance real.' },
            pacoBargues: { title: 'Paco Bargues Art', description: 'Showcase online para un pintor — galería elegante y flujo de contacto para amantes del arte.' },
            rickMorty: { title: 'Buscador de Rick & Morty', description: 'Explorador de personajes del universo Rick and Morty, hecho para aprender APIs externas y routing.' },
            animeFinder: { title: 'Anime Series Finder', description: 'App dinámica de búsqueda de anime con favoritos persistidos en LocalStorage.' },
        },
    },
    notFound: {
        title: 'Página no encontrada',
        body: 'La página que buscas no existe o ha sido movida.',
        cta: 'Volver al inicio',
    },
};

const initialLang = (() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
    return (navigator.language || 'en').startsWith('es') ? 'es' : 'en';
})();

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    returnObjects: true,
});

i18n.on('languageChanged', (lng) => {
    try { window.localStorage.setItem(STORAGE_KEY, lng); } catch { /* ignore */ }
    if (typeof document !== 'undefined') document.documentElement.lang = lng;
});

if (typeof document !== 'undefined') {
    document.documentElement.lang = initialLang;
}

export default i18n;
