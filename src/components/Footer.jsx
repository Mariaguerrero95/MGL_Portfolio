import "../scss/components/Footer.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation(); // Importamos useTranslation

    return (
        <footer className="footer">
            <p>{t("footer_text")}</p> {/* Traducir el texto del footer */}
        </footer>
    );
};

export default Footer;