import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            // Header
            "SKILLS": "Skills",
            "PROJECTS": "Projects",
            "LEARNING PATH": "Learning Path",
            "CONTACT": "Contact",
            "Testimonials": "Testimonials",
            
            // Hero Section
            "hello": "Hi",
            "im": "I'm a",
            "developer": "Front-end Developer",
            "hero_description": "I am an enthusiastic and detail-oriented coder with a keen interest in front-end development and web design. I am passionate about creating user-friendly, responsive websites and improving user experiences. I have knowledge in HTML, CSS, Bootstrap, JavaScript, React, Angular and Wordpress as well as back-end solutions such as MySQL and ExpressJS.",
            
            // Contact Form
            "contact": "Contact Me",
            "download": "Download CV",
            "name": "Your Name",
            "email": "Your Email",
            "subject": "Subject",
            "message_placeholder": "Your Message",
            "send": "Send",
            "message_sent": "Message sent successfully!",
            "message_error": "There was an error sending the message.",
            
            // Projects
            "projects": "Projects",
            "ciclicas_description": "I led the full development of the new Cíclicas Foundation website, creating a fully customized digital experience from scratch. I worked remotely with the team to restructure the architecture, optimize the user journey, and build a scalable, high-performance platform.",
            "Rick and Morty Character finder": "Rick and Morty Character finder",
            "Anime series finder": "Anime series finder",
            "Paco Bargues Art": "Paco Bargues Art",
            "art_bargues_description": "I crafted and developed an online showcase for the painter and artist Paco Bargues, bringing his entire collection to life through an elegant gallery and offering an easy way for art enthusiasts to get in touch.",
            "rick_and_morty_description": "This GitHub repository contains the characters from the Rick and Morty series. Users can view detailed information about each character, including their name, species, and the number of episodes they appear in.",
            "anime_series_finder_description": "Developed a dynamic web application for searching anime series using an external API. Users can mark their favorite series, manage their favorites by removing individual items or resetting the entire list, and retain their selections even after refreshing the page.",
            
            // Technologies
            "React": "React",
            "Vite": "Vite",
            "Javascript": "Javascript",
            "HTML": "HTML",
            "SASS": "SASS",
            "Bootstrap": "Bootstrap",
            "FetchAPI": "Fetch API",
            "LocalStorage": "LocalStorage",
            "SCSS": "SCSS",
            
            // Learning Path
            "learningPathTitle": "Recent studies",
            "fullStackBootcampTitle": "Full Stack Bootcamp",
            "fullStackBootcampDescription": "100% remote master in development and programming.",
            "fullStackBootcampPlatform": "Adalab",
            "angularCourseTitle": "Angular 17 Course",
            "angularCourseDescription": "Angular fundamentals and architectures.",
            "angularCoursePlatform": "Platzi",
            "cybersecurityprogramTitle": "Cybersecurity Program",
            "cybersecurityprogramDescription": "Fully remote Cybersecurity program, sponsored by Google.",
            "cybersecuritypregramPlatform": "Coursera / YesWeTech",
            "viewResource": "VIEW RESOURCE",
            "downloadCertificate": "Download diploma",
            
            // Footer
            "footer_text": "Made with ♥ by María Guerrero Lobo © 2025",

            //Testimonials
            "testimonial_title": "Testimonials",
            "testimonial_1": "Maria completely redesigned Cíclicas website with talent and strategic vision. Her work is clean, scalable, and precise, and she turns even our chaotic ideas into clear, functional solutions. A professional who adds value from day one—100% recommended.",
            "testimonial_position_1": "Founder of Cíclicas",

            // Availability
            "Available for projects": "Available for projects",
            "Currently accepting web development projects.": "Currently accepting web development projects.",
            "Average response time: 24 hours.": "Average response time: 24 hours."
        }
    },
    es: {
        translation: {
            // Header
            "SKILLS": "Habilidades",
            "PROJECTS": "Proyectos",
            "LEARNING PATH": "Ruta de aprendizaje",
            "CONTACT": "Contáctame",
            "Testimonials": "Testimonios",
            
            // Hero Section
            "hello": "Hola",
            "im": "Soy",
            "developer": "Desarrolladora Front-end",
            "hero_description": "Desarrolladora front-end entusiasta y orientada al detalle, especializada en crear experiencias web intuitivas, responsive y atractivas. Dominio de HTML, CSS, Bootstrap, JavaScript, React, Angular y WordPress complementado con conocimientos en soluciones back-end como MySQL y ExpressJS.",
            
            // Contact Form
            "contact": "Contáctame",
            "download": "Descargar CV",
            "name": "Tu nombre",
            "email": "Tu correo electrónico",
            "subject": "Asunto",
            "message_placeholder": "Tu mensaje",
            "send": "Enviar",
            "message_sent": "¡Mensaje enviado exitosamente!",
            "message_error": "Hubo un error al enviar el mensaje.",
            
            // Projects
            "projects": "Proyectos",
            "Web for Ciclicas Foundation": "Página web para la Fundación Cíclicas",
            "ciclicas_description": "Lideré el desarrollo completo de la nueva web de Fundación Cíclicas, creando una experiencia digital personalizada desde cero. Trabajé en remoto con el equipo para reestructurar la arquitectura, optimizar el recorrido del usuario y construir una plataforma escalable y de alto rendimiento.",
            "Rick and Morty Character finder": "Buscador de personajes de Rick and Morty",
            "Anime series finder": "Buscador de series de anime",
            "Sports e-commerce landing page": "Página de aterrizaje para e-commerce deportivo",
            "rick_and_morty_description": "Este repositorio de GitHub contiene los personajes de la serie Rick and Morty. Los usuarios pueden ver información detallada sobre cada personaje, incluyendo su nombre, especie y la cantidad de episodios en los que aparece.",
            "anime_series_finder_description": "Desarrollé una aplicación web dinámica para buscar series de anime usando una API externa. Los usuarios pueden marcar sus series favoritas, gestionar sus favoritos eliminando elementos individuales o reiniciando la lista completa, y mantener sus selecciones incluso después de recargar la página.",
            "Paco Bargues Art": "Arte Paco Bargues",
            "art_bargues_description": "He diseñado y desarrollado una web online para el pintor y artista Paco Bargues, dando vida a toda su colección a través de una galería elegante y ofreciendo una forma sencilla para que los amantes del arte puedan ponerse en contacto.",
            
            // Technologies
            "React": "React",
            "Vite": "Vite",
            "Javascript": "JavaScript",
            "HTML": "HTML",
            "SASS": "SASS",
            "Bootstrap": "Bootstrap",
            "FetchAPI": "Fetch API",
            "LocalStorage": "LocalStorage",
            "SCSS": "SCSS",
            
            // Learning Path
            "learningPathTitle": "Estudios recientes",
            "fullStackBootcampTitle": "Bootcamp Full Stack",
            "fullStackBootcampDescription": "Máster 100% remoto en desarrollo y programación.",
            "fullStackBootcampPlatform": "Adalab",
            "angularCourseTitle": "Curso Angular 17",
            "angularCourseDescription": "Fundamentos y arquitecturas de Angular.",
            "angularCoursePlatform": "Platzi",
            "cybersecurityprogramTitle": "Programa en Ciberseguridad",
            "cybersecurityprogramDescription": "Programa en Ciberseguridad 100% remoto, becada por Google.",
            "viewResource": "VER RECURSO",
            "downloadCertificate": "Descargar diploma",
            
            // Footer
            "footer_text": "Hecho con ♥ por María Guerrero Lobo © 2025",
            
            //Testimonials
            "testimonial_title": "Testimonios",
            "testimonial_1": "María rediseñó por completo la página web de Cíclicas con talento y visión estratégica. Su trabajo es limpio, escalable y preciso, y convierte incluso nuestras ideas caóticas en soluciones claras y funcionales. Una profesional que aporta valor desde el primer día — 100% recomendada.",
            "testimonial_position_1": "Fundadora de Cíclicas", // ¡La coma que faltaba estaba aquí!

            // Availability
            "Available for projects": "Disponible para proyectos",
            "Currently accepting web development projects.": "Actualmente acepto proyectos de desarrollo web.",
            "Average response time: 24 hours.": "Tiempo de respuesta promedio: 24 horas."
        }
    }
};

// Inicialización de i18next
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;

/*

OTRA MANERA DE ESCRIBIRLO ES:

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            // Header
            SKILLS: "Skills",
            PROJECTS: "Projects",
            LEARNING_PATH: "Learning Path",
            CONTACT: "Contact",

            // Hero Section
            hello: "Hi",
            im: "I'm a",
            developer: "Front-end Developer",
            hero_description: "I am an enthusiastic and detail-oriented coder...",

            // Contact Form
            contact: "Contact Me",
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message_placeholder: "Your Message",
            send: "Send",
            message_sent: "Message sent successfully!",
            message_error: "There was an error sending the message.",

            // Projects
            projects: "Projects",
            Rick_and_Morty_Character_finder: "Rick and Morty Character finder",
            Anime_series_finder: "Anime series finder",
            Sports_ecommerce_landing_page: "Sports e-commerce landing page",
            rick_and_morty_description: "This GitHub repository contains...",
            anime_series_finder_description: "Developed a dynamic web application...",
            sports_ecommerce_landing_page_description: "Designed and developed a responsive landing page...",

            // Technologies
            React: "React",
            Vite: "Vite",
            Javascript: "Javascript",
            HTML: "HTML",
            SASS: "SASS",
            Bootstrap: "Bootstrap",
            FetchAPI: "Fetch API",
            LocalStorage: "LocalStorage",
            SCSS: "SCSS",

            // Learning Path
            learningPathTitle: "Recent studies",
            fullStackBootcampTitle: "Full Stack Bootcamp",
            fullStackBootcampDescription: "100% remote course in development and programming.",
            fullStackBootcampPlatform: "Adalab",
            angularCourseTitle: "Angular 17 Course",
            angularCourseDescription: "Angular fundamentals and architectures.",
            angularCoursePlatform: "Platzi",
            viewResource: "VIEW RESOURCE",

            // Footer
            footer_text: "Made with ♥ by María Guerrero Lobo © 2025"
        }
    },
    es: {
        translation: {
            // Header
            SKILLS: "Habilidades",
            PROJECTS: "Proyectos",
            LEARNING_PATH: "Ruta de aprendizaje",
            CONTACT: "Contáctame",

            // Hero Section
            hello: "Hola",
            im: "Soy",
            developer: "Desarrolladora Front-end",
            hero_description: "Soy una programadora entusiasta y orientada al detalle...",

            // Contact Form
            contact: "Contáctame",
            name: "Tu nombre",
            email: "Tu correo electrónico",
            subject: "Asunto",
            message_placeholder: "Tu mensaje",
            send: "Enviar",
            message_sent: "¡Mensaje enviado exitosamente!",
            message_error: "Hubo un error al enviar el mensaje.",

            // Projects
            projects: "Proyectos",
            Rick_and_Morty_Character_finder: "Buscador de personajes de Rick and Morty",
            Anime_series_finder: "Buscador de series de anime",
            Sports_ecommerce_landing_page: "Página de aterrizaje para e-commerce deportivo",
            rick_and_morty_description: "Este repositorio de GitHub contiene...",
            anime_series_finder_description: "Desarrollé una aplicación web dinámica...",
            sports_ecommerce_landing_page_description: "Diseñé y desarrollé una página de aterrizaje responsive...",

            // Technologies
            React: "React",
            Vite: "Vite",
            Javascript: "JavaScript",
            HTML: "HTML",
            SASS: "SASS",
            Bootstrap: "Bootstrap",
            FetchAPI: "Fetch API",
            LocalStorage: "LocalStorage",
            SCSS: "SCSS",

            // Learning Path
            learningPathTitle: "Estudios recientes",
            fullStackBootcampTitle: "Bootcamp Full Stack",
            fullStackBootcampDescription: "Curso 100% remoto en desarrollo y programación.",
            fullStackBootcampPlatform: "Adalab",
            angularCourseTitle: "Curso Angular 17",
            angularCourseDescription: "Fundamentos y arquitecturas de Angular.",
            angularCoursePlatform: "Platzi",
            viewResource: "VER RECURSO",

            // Footer
            footer_text: "Hecho con ♥ por María Guerrero Lobo © 2025"
        }
    }
};

// Inicialización de i18next
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
*/