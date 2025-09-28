import '../scss/components/Projects.scss'; 
import React from "react";
import { useTranslation } from "react-i18next";


const projects = [
    {
        title: "Web for Ciclicas Foundation",
        descriptionKey: "ciclicas_description",  
        technologies: ["WordPress", "PHP","mySQL", "HTML", "CSS", " Backup (UpdraftPlus)", "Elementor", "iThemes Security", "WPForms", "DNS", "SSL/HTTPS", "Hostalia", "Teamwork" ],
        // ENLACE ACTUALIZADO PARA ESTE PROYECTO
        videoUrl: "https://www.youtube.com/embed/w17GLftrXMM", // ¡Este es el nuevo enlace!
        github: null,
        demo: "https://ciclicas.org/",
    },
    {
        title: "Paco Bargues Art",
        descriptionKey: "art_bargues_description",  
        technologies: ["HTML", "SASS","Bootstrap", "JavaScript", "React", "Vite"],
        videoUrl: "https://www.youtube.com/embed/apiHyuZ4DMA", 
        github: "https://github.com/Mariaguerrero95/PacoBarguesArt-Website",
        demo: "https://mariaguerrero95.github.io/PacoBarguesArt-Website/#/",
    },
    {
        title: "Rick and Morty Character finder",
        descriptionKey: "rick_and_morty_description",  
        technologies: ["HTML", "SASS", "Bootstrap","Javascript","Fetch API", "React", "Vite"],
        videoUrl: "https://www.youtube.com/embed/2sOudO4eQC4", 
        github: "https://github.com/Mariaguerrero95/modulo-3-evaluacion-final-Mariaguerrero95",
        demo: "https://mariaguerrero95.github.io/modulo-3-evaluacion-final-Mariaguerrero95/#/",
    },
    {
        title: "Anime series finder",
        descriptionKey: "anime_series_finder_description",  
        technologies: ["HTML", "SASS", "Bootstrap", "JavaScript", "Fetch API", "LocalStorage", "Bootstrap"],
        videoUrl: "https://www.youtube.com/embed/7TcL7yBWho8", 
        github: "https://github.com/Adalab/modulo-2-evaluacion-final-Mariaguerrero95",
        demo: "https://beta.adalab.es/modulo-2-evaluacion-final-Mariaguerrero95/",
    }
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects">
            <h2>{t("projects")}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* Contenedor del video: solo se muestra si videoUrl existe */}
                        {project.videoUrl && (
                            <div className="project-media">
                                <div className="video-container">
                                    <iframe
                                        src={`${project.videoUrl}?loop=1&playlist=${project.videoUrl.split('/').pop()}&controls=0&mute=1`}
                                        title={t(project.title)}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        )}
                        
                        {/* Contenedor de la descripción */}
                        <div className="project-description">
                            <h3>{t(project.title)}</h3>
                            <p>{t(project.descriptionKey)}</p>
                            <div className="tech-list">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech">{t(tech)}</span>
                                ))}
                            </div>
                            <div className="buttons">
                                {project.github && project.github !== "" && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                                )}
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo">Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

