import "../scss/App.scss";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LearningPath from "../components/LearningPath";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



function App() {
    return (
        <>  
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <LearningPath />
            <Contact />
            <Footer />
        </>
);
}

export default App;
