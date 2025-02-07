import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            hello: "Hello",
            developer: "Front-end Developer",
            contact: "Contact Me",
            download: "Download CV"
    }
    },
    es: {
        translation: {
            hello: "Hola",
            developer: "Desarrollador Front-end",
            contact: "Contáctame",
            download: "Descargar CV"
    }
    },
};

// Inicialización de i18next
i18n
    .use(initReactI18next) // Conecta i18next con React
    .init({
        resources,         // Las traducciones
        lng: "en",         // Idioma por defecto
        interpolation: {
        escapeValue: false  // React ya se encarga de la seguridad, no es necesario escapar valores
    }
    });

    export default i18n;