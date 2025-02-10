import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            // ... header
            "SKILLS": "Skills",
            "PROJECTS": "Projects",
            "LEARNING PATH": "Learning Path",
            "CONTACT": "Contact",
            // ... header
            hello: "Hi",
            im: "I'm a",
            developer: "Front-end Developer",
            // ... otras traducciones
            contact: "Contact Me",
            "name": "Your Name",
            "email": "Your Email",
            "subject": "Subject",
            "message_placeholder": "Your Message",
            "send": "Send",
            "message_sent": "Message sent successfully!",
            "message_error": "There was an error sending the message.",
            download: "Download CV",
            hero_description: "I am an enthusiastic and detail-oriented coder with a keen interest in front-end development and web design. I am passionate about creating user-friendly, responsive websites and improving user experiences. I have knowledge in HTML, CSS, Bootstrap, JavaScript, React, and Angular, as well as back-end solutions such as MySQL and ExpressJS.",
            projects: "Projects",
            // Títulos de los proyectos
            "Rick and Morty Character finder": "Rick and Morty Character finder",
            "Anime series finder": "Anime series finder",
            "Sports e-commerce landing page": "Sports e-commerce landing page",
            // Descripciones de los proyectos
            "rick_and_morty_description": "This GitHub repository contains the characters from the Rick and Morty series. Users can view detailed information about each character, including their name, species, and the number of episodes they appear in.",
            "anime_series_finder_description": "Developed a dynamic web application for searching anime series using an external API. Users can mark their favorite series, manage their favorites by removing individual items or resetting the entire list, and retain their selections even after refreshing the page.",
            "sports_ecommerce_landing_page_description": "Designed and developed a responsive landing page for a sports e-commerce brand. The website highlights seasonal promotions and features key sections like product highlights, a back-to-school campaign, and an accessible navigation menu.",
            // Tecnologías
            React: "React",
            Vite: "Vite",
            Javascript: "Javascript",
            HTML: "HTML",
            SASS: "SASS",
            Bootstrap: "Bootstrap",
            FetchAPI: "Fetch API",
            LocalStorage: "LocalStorage",
            SCSS: "SCSS",
            // ... otras traducciones
            "learningPathTitle": "Recent studies",
            "fullStackBootcampTitle": "Full Stack Bootcamp",
            "fullStackBootcampDescription": "100% remote course in development and programming.",
            "fullStackBootcampPlatform": "Adalab",
            "angularCourseTitle": "Angular 17 Course",
            "angularCourseDescription": "Angular fundamentals and architectures.",
            "angularCoursePlatform": "Platzi",
            "viewResource": "VIEW RESOURCE",
            // ... footer
            "footer_text": "Made with ♥ by María Guerrero Lobo © 2025",
            // ... footer
        }
    },
    es: {
        translation: {
            // ... header
            "SKILLS": "Habilidades",
            "PROJECTS": "Proyectos",
            "LEARNING PATH": "Ruta de aprendizaje",
            "CONTACT": "Contáctame",
            // ... header
            hello: "Hola",
            im: "Soy",
            developer: "Desarrolladora Front-end",
              // ... otras traducciones
            contact: "Contáctame",
            "name": "Tu nombre",
            "email": "Tu correo electrónico",
            "subject": "Asunto",
            "message_placeholder": "Tu mensaje",
            "send": "Enviar",
            "message_sent": "¡Mensaje enviado exitosamente!",
            "message_error": "Hubo un error al enviar el mensaje.",
            download: "Descargar CV",
            hero_description: "Soy una programadora entusiasta y orientada al detalle con un gran interés en el desarrollo front-end y el diseño web. Me apasiona crear sitios web fáciles de usar, responsivos y mejorar la experiencia del usuario. Tengo conocimientos en HTML, CSS, Bootstrap, JavaScript, React y Angular, así como en soluciones back-end como MySQL y ExpressJS.",
            projects: "Proyectos",
            "Rick and Morty Character finder": "Buscador de personajes de Rick and Morty",
            "Anime series finder": "Buscador de series de anime",
            "Sports e-commerce landing page": "Página de aterrizaje para e-commerce deportivo",
            "rick_and_morty_description": "Este repositorio de GitHub contiene los personajes de la serie Rick and Morty. Los usuarios pueden ver información detallada sobre cada personaje, incluyendo su nombre, especie y la cantidad de episodios en los que aparece.",
            "anime_series_finder_description": "Desarrollé una aplicación web dinámica para buscar series de anime usando una API externa. Los usuarios pueden marcar sus series favoritas, gestionar sus favoritos eliminando elementos individuales o reiniciando la lista completa, y mantener sus selecciones incluso después de recargar la página.",
            "sports_ecommerce_landing_page_description": "Diseñé y desarrollé una página de aterrizaje responsive para una marca de e-commerce deportivo. El sitio web destaca promociones de temporada y presenta secciones clave como productos destacados, una campaña de regreso a clases y un menú de navegación accesible.",
            React: "React",
            Vite: "Vite",
            Javascript: "JavaScript",  // Consistencia
            HTML: "HTML",
            SASS: "SASS",
            Bootstrap: "Bootstrap",
            FetchAPI: "Fetch API",
            LocalStorage: "LocalStorage",
            SCSS: "SCSS",
             // ... otras traducciones
            "learningPathTitle": "Estudios recientes",
            "fullStackBootcampTitle": "Bootcamp Full Stack",
            "fullStackBootcampDescription": "Curso 100% remoto en desarrollo y programación.",
            "fullStackBootcampPlatform": "Adalab",
            "angularCourseTitle": "Curso Angular 17",
            "angularCourseDescription": "Fundamentos y arquitecturas de Angular.",
            "angularCoursePlatform": "Platzi",
            "viewResource": "VER RECURSO",
            // ... footer
            "footer_text": "Hecho con ♥ por María Guerrero Lobo © 2025"
            // ... footer
        }
    }
};

// Inicialización de i18next
i18n
    .use(initReactI18next) 
    .init({
        resources,
        lng: "en", 
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;