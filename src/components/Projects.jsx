import '../scss/components/Projects.scss'; 
import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
    {
        title: "Rick and Morty Character finder",
        descriptionKey: "rick_and_morty_description",  // Referirnos a la clave de traducción
        technologies: ["React", "Vite", "Javascript", "HTML", "SASS", "Bootstrap"],
        github: "https://github.com/Mariaguerrero95/modulo-3-evaluacion-final-Mariaguerrero95",
        demo: "https://mariaguerrero95.github.io/modulo-3-evaluacion-final-Mariaguerrero95/#/",
    },
    {
        title: "Anime series finder",
        descriptionKey: "anime_series_finder_description",  // Referirnos a la clave de traducción
        technologies: ["HTML", "SASS", "JavaScript", "Fetch API", "LocalStorage", "Bootstrap"],
        github: "https://github.com/Adalab/modulo-2-evaluacion-final-Mariaguerrero95",
        demo: "https://beta.adalab.es/modulo-2-evaluacion-final-Mariaguerrero95/",
    },
    {
        title: "Sports e-commerce landing page",
        descriptionKey: "sports_ecommerce_landing_page_description",  // Referirnos a la clave de traducción
        technologies: ["HTML", "CSS", "SCSS", "Bootstrap"],
        github: "https://github.com/Mariaguerrero95/evaluacion-modulo-1-Mariaguerrero95",
        demo: "https://mariaguerrero95.github.io/evaluacion-modulo-1-Mariaguerrero95/",
    }
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects">
            <h2>{t("projects")}</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{t(project.title)}</h3>
                    <p>{t(project.descriptionKey)}</p> {/* Utilizar la clave de traducción aquí */}
                    <div className="tech-list">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="tech">{t(tech)}</span>
                        ))}
                    </div>
                    <div className="buttons">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo">Demo</a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;