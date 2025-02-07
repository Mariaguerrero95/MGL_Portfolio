import '../scss/components/Projects.scss'; 
import React from "react";

const projects = [
    {
        title: "Rick and Morty Character finder",
        description:
            "This GitHub repository contains the characters from the Rick and Morty series. Users can view detailed information about each character, including their name, species, and the number of episodes they appear in.",
        technologies: ["React", "Vite", "Javascript", "HTML", "SASS", "Bootstrap"],
        github: "https://github.com/Mariaguerrero95/modulo-3-evaluacion-final-Mariaguerrero95",
        demo: "https://mariaguerrero95.github.io/modulo-3-evaluacion-final-Mariaguerrero95/#/",
        },
        {
        title: "Anime series finder",
        description:
            "Developed a dynamic web application for searching anime series using an external API. Users can mark their favorite series, manage their favorites by removing individual items or resetting the entire list, and retain their selections even after refreshing the page.",
        technologies: ["HTML", "SASS", "JavaScript", "Fetch API", "LocalStorage", "Bootstrap"],
        github: "https://github.com/Adalab/modulo-2-evaluacion-final-Mariaguerrero95",
        demo: "https://beta.adalab.es/modulo-2-evaluacion-final-Mariaguerrero95/",
        },
        {
            title: "Sports e-commerce landing page",
            description: "Designed and developed a responsive landing page for a sports e-commerce brand. The website highlights seasonal promotions and features key sections like product highlights, a back-to-school campaign, and an accessible navigation menu.",
            technologies: ["HTML", "CSS", "SCSS", "Bootstrap"], // 🔹 Añadir esto
            github: "https://github.com/Mariaguerrero95/evaluacion-modulo-1-Mariaguerrero95",
            demo: "https://mariaguerrero95.github.io/evaluacion-modulo-1-Mariaguerrero95/",
        }
    ];
    
    const Projects = () => {
        return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
            <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                {project.technologies.map((tech, i) => (
                    <span key={i} className="tech">{tech}</span>
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
