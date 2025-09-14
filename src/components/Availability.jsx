import React from 'react';
import '../scss/components/Availability.scss';
import { useTranslation } from "react-i18next";

const Availability = () => {
    const { t } = useTranslation();

    return (
        <section className="availability-container">
            {/* El contenido ahora está directamente en la sección */}
            <div className="status-line">
                <span className="status-indicator"></span>
                <p>{t("Available for projects")}</p>
            </div>
            <p className="availability-text">
                {t("Currently accepting web development projects.")}
                <br />
                {t("Average response time: 24 hours.")}
            </p>
        </section>
    );
};

export default Availability;