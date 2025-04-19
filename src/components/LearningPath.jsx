import "../scss/components/skills.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const learningData = [
    {
        titleKey: "fullStackBootcampTitle", // Clave para traducir el título
        descriptionKey: "fullStackBootcampDescription", // Clave para traducir la descripción
        platformKey: "fullStackBootcampPlatform", // Clave para traducir la plataforma
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon" />,
        link: "https://adalab.es/"
    },
    {
        titleKey: "angularCourseTitle", // Clave para traducir el título
        descriptionKey: "angularCourseDescription", // Clave para traducir la descripción
        platformKey: "angularCoursePlatform", // Clave para traducir la plataforma
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon" />,
        link: "https://platzi.com/cursos/angular/"
    },
    {
        titleKey: "cybersecurityprogramTitle", // Clave para traducir el título
        descriptionKey: "cybersecurityprogramDescription", // Clave para traducir la descripción
        platformKey: "cybersecuritypregramPlatform", // Clave para traducir la plataforma
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon" />,
        link: "https://www.coursera.org/programs/yes-we-tech-google-learning-program-28izm"
    },
];

const LearningPath = () => {
    const { t } = useTranslation(); // Habilitar la traducción

    return (
        <section id="learning-path" className="learning-path">
            <h2 className="section-title">{t("learningPathTitle")}</h2> {/* Título traducido */}
            <div className="cards-container">
                {learningData.map((item, index) => (
                    <div key={index} className="card">
                        <div className="card-header">
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{t(item.titleKey)}</h3> {/* Título traducido */}
                        </div>
                        <p className="card-description">{t(item.descriptionKey)}</p> {/* Descripción traducida */}
                        <a href={item.link} className="card-link">
                            {t("viewResource")} {/* Texto de "VIEW RESOURCE" traducido */}
                        </a>
                        <span className="card-platform">{t(item.platformKey)}</span> {/* Plataforma traducida */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearningPath;
