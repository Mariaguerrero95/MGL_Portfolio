import "../scss/components/skills.scss";
import { useState } from "react";



const skills = [
    { name: "HTML", logo: "./logos/HTMLicon.png" },
    { name: "CSS", logo: "./logos/CSSicon.png" },
    { name: "TypeScript", logo: "./logos/TYPESCRIPTicon.svg" },
    { name: "JavaScript", logo: "./logos/JAVASCRIPTicon.png" },
    { name: "React", logo: "./logos/REACTicon.webp" },
    { name: "Angular", logo: "./logos/ANGULARicon.png" },
    { name: "MySQL", logo: "./logos/MYSQLicon.png" },
    { name: "Node.js", logo: "./logos/NODEJSicon.png" },
    { name: "Git", logo: "./logos/GITicon.png" },
    { name: "GitHub", logo: "./logos/GITHUBicon.svg" },
    { name: "Bootstrap", logo: "./logos/BOOTSTRAPicon.png" },
    { name: "Tailwind", logo: "./logos/TAILWINDicon.png" },
    { name: "Figma", logo: "./logos/FIGMAicon.png" },
    { name: "Postman", logo: "./logos/POSTMANicon.png" },
    { name: "ExpressJS", logo: "./logos/EXPRESSicon.png" },
];
// Duplico los elementos para que el carrusel sea infinito
const repeatedSkills = [...skills, ...skills];

const Skills = () => {
    const [paused, setPaused] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <section id="skills" className="skills">
        <h2>Skills</h2>
        <div
            className={`skills-container ${paused ? "paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="skills-slider">
            {repeatedSkills.map((skill, index) => (
                <div
                key={index}
                className={`skill-item ${activeSkill === index ? "active" : ""}`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                >
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
);
};

export default Skills;