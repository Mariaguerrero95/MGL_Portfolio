import { useState } from "react";
import "../scss/components/Contact.scss"; 

const Contact = () => {
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
        alert("Message sent successfully!");

        // Resetear formulario
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        } else {
        alert("Error sending message");
        }
    };

    return (
        <section id="contact" className="contact">
        <h2 className="nameContact">Contact</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            />
            <textarea
            name="message"
            placeholder="Write here..."
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            <button type="submit">Send</button>
        </form>
        </section>
    );
};

export default Contact;