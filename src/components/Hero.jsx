import '../scss/components/Hero.scss'; 
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-text">
                <h2>{t("hello")}, I'm a <span>{t("developer")}</span></h2>
                <p>Passionate about creating beautiful, responsive, and user-friendly web applications.</p>
                <div className="buttons">
                    <a href="#contact" className="btn">{t("contact")}</a>
                    <a href="./public/CVMaría.pdf" download className="btn btn-secondary">{t("download")}</a>
                </div>
                {/* Agregamos el contenedor para los íconos debajo de los botones */}
                <div className="social-icons">
                    <a href="https://github.com/Mariaguerrero95" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mariaguerrero-developer/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div>
                <img className="hero-image" src="./public/Fotocv.jpg" alt="María Guerrero Lobo" />
            </div>
        </section>
    );
};

export default Hero;
