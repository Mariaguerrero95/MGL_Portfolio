import "../scss/components/Contact.scss"; 
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation(); // Importamos useTranslation

    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Maneja el cambio de los valores de los campos
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Enviar el formulario y resetear
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enviar datos al servidor o Formspree
        const response = await fetch("https://formspree.io/f/xgvozpro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Si la respuesta es exitosa, resetear el formulario
        if (response.ok) {
            alert(t("message_sent")); // Traducción del mensaje de éxito

            // Resetear formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } else {
            alert(t("message_error")); // Traducción del mensaje de error
        }
    };

    return (
        <section id="contact" className="contact">
            <h2 className="nameContact">{t("contact")}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder={t("subject")}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder={t("message_placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">{t("send")}</button>
            </form>
        </section>
    );
};

export default Contact;