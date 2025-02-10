import '../scss/components/Header.scss'; 
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1013);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);  // Referencia para el menú desplegable
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };

    // Detectar cambios de tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1013);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Cerrar el menú si el usuario hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Cerrar menú si se hace clic fuera de él
            }
        };

        // Agregar el event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <h1>MARÍA GUERRERO LOBO</h1>
            {isMobile ? (
                <div className="menu-container">
                    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    {menuOpen && (
                        <nav className="mobile-menu" ref={menuRef}>
                            <ul>
                                <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t("SKILLS")}</a></li>
                                <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t("PROJECTS")}</a></li>
                                <li><a href="#learning-path" onClick={() => setMenuOpen(false)}>{t("LEARNING PATH")}</a></li>
                                <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t("CONTACT")}</a></li>
                            </ul>
                        </nav>
                    )}
                </div>
            ) : (
                <nav>
                    <ul>
                        <li><a href="#skills">{t("SKILLS")}</a></li>  
                        <li><a href="#projects">{t("PROJECTS")}</a></li>
                        <li><a href="#learning-path">{t("LEARNING PATH")}</a></li>
                        <li><a href="#contact">{t("CONTACT")}</a></li>
                    </ul>
                </nav>
            )}
            <select 
                onChange={(e) => changeLanguage(e.target.value)} 
                className="language-selector"
                value={i18n.language} 
            >
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select>
        </header>
    );
};

export default Header;