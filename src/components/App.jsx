import "../scss/App.scss";
import React from "react";
import "../scss/components/App.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LearningPath from "../components/LearningPath";
import Availability from "../components/Availability";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";


function App() {
    return (
        <>  
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <LearningPath />
            <Testimonials/>
            <Availability />
            <Contact />
            <Footer />
        </>
);
}

export default App;
