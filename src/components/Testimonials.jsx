import "../scss/components/Testimonials.scss";
import React from "react";
import { useTranslation } from "react-i18next";


const testimonialsData = [
    {
    name: "Gema Rosado Jordán", 
    position: "Founder of Cíclicas", 
    testimonial: "Maria completely redesigned Cíclicas website with talent and strategic vision. Her work is clean, scalable, and precise, and she turns even our chaotic ideas into clear, functional solutions. A professional who adds value from day one—100% recommended."
    },
    // Puedes agregar más testimonios aquí si quieres
];
const Testimonials = () => {
    const { t } = useTranslation();

    return (
    <section id="testimonials" className="testimonials">
        <h2>{t("Testimonials")}</h2>
        <div className="testimonials-container">
            {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{item.testimonial}"</p>
                <p className="testimonial-author">{item.name}</p>
                <p className="testimonial-position">{item.position}</p>
            </div>
        ))}
        </div>
    </section>
    );
};
export default Testimonials;