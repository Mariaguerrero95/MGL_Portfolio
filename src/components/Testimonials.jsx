import "../scss/components/Testimonials.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  {
    name: "Gema Rosado Jordán",
    positionKey: "testimonial_position_1", 
    testimonialKey: "testimonial_1"
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="testimonials">
      <h2>{t("testimonial_title")}</h2>

      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{t(item.testimonialKey)}"</p>
            <p className="testimonial-author">{item.name}</p>
            <p className="testimonial-position">{t(item.positionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
