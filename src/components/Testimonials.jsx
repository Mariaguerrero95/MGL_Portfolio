import "../scss/components/Testimonials.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  {
    name: "Jaafar Ali Jaafar",
    positionKey: "testimonial_position_2",
    testimonialKey: "testimonial_2"
  },
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
      <p className="testimonial-text">
        "{item.testimonialKey ? t(item.testimonialKey) : item.testimonial}"
      </p>
      <p className="testimonial-author">{item.name}</p>
      <p className="testimonial-position">
        {item.positionKey ? t(item.positionKey) : item.position}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Testimonials;
