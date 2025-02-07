import '../scss/components/Header.scss'; 
import React from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
};
    
    return (
    <header className="header">
        <h1>María Guerrero Lobo</h1>
        <nav>
            <ul>
                <li><a href="#skills">{t("skills")}</a></li>  
                <li><a href="#projects">{t("projects")}</a></li>
                <li><a href="#learning-path">{t("learningPath")}</a></li>
                <li><a href="#contact">{t("contact")}</a></li>
            </ul>
        </nav>
        <select onChange={(e) => changeLanguage(e.target.value)} className="language-selector" value={i18n.language}>
            <option value="en">EN</option>
            <option value="es">ES</option>
        </select>
    </header>
        );
    };
    
export default Header;