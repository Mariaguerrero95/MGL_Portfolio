import '../scss/components/Contact.scss'; 
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="contact">
        <h2>Contact</h2>
        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Write here..." required></textarea>
            <button type="submit">Send</button>
        </form>
        </section>
    );
};

export default Contact;