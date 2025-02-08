import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://formspree.io/f/xgvozpro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message); // Alerta de éxito o error
    };

    return (
        <section id="contact" className="contact">
        <h2>Contact</h2>
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