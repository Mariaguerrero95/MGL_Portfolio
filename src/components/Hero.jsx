import '../scss/components/Hero.scss'; 
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import fotocv from '/Fotocv.jpg';


const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <img className="hero-image" src={fotocv} alt="María Guerrero Lobo" />
            <div className="hero-text">
                <h2>{t("hello")}, {t("im")} <span>{t("developer")}</span></h2>
                <p>{t("hero_description")}</p>
                <div className="buttons">
                    <a href="#contact" className="btn">{t("contact")}</a>
                    <a href="./cv.pdf" download className="btn btn-secondary">{t("download")}</a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/Mariaguerrero95" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mariaguerrero-developer/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
