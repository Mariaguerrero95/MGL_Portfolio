import "../scss/components/skills.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const learningData = [
    {
    title: "Full Stack Bootcamp",
    description: "100% remote course in development and programming.",
    platform: "Adalab",
    icon: <FontAwesomeIcon icon={faLaptopCode} className="icon" />,
    link: "https://adalab.es/"
},
    {
    title: "Angular 17 Course",
    description: "Angular fundamentals and architectures.",
    platform: "Platzi",
    icon: <FontAwesomeIcon icon={faLaptopCode} className="icon" />,
    link: "https://platzi.com/cursos/angular/"
},
];

const LearningPath = () => {
    return (
        <section className="learning-path">
        <h2 className="section-title">Recent studies</h2>
        <div className="cards-container">
            {learningData.map((item, index) => (
            <div key={index} className="card">
                <div className="card-header">
                    <div className="card-icon">{item.icon}</div>
                    <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
                <a href={item.link} className="card-link">
                VIEW RESOURCE
                </a>
                <span className="card-platform">{item.platform}</span>
            </div>
            ))}
        </div>
        </section>
    );
};

export default LearningPath;
