import '../scss/components/LearningPath.scss'; 
import React from "react";

const LearningPath = () => {
    return (
        <section id="learning-path" className="learning-path">
        <h2>My Learning Path</h2>
        <div className="course">
            <h3>Web Programming Bootcamp</h3>
            <p>Adalab</p>
        </div>
        <div className="course">
            <h3>Angular from 0 to Expert</h3>
            <p>Udemy</p>
        </div>
        </section>
    );
};

export default LearningPath;
