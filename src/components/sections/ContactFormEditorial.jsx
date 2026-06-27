export default function ContactFormEditorial() {
  return (
    <section className="section contact-editorial" id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-form__card">
          <div className="contact-form__left">
            <h2 className="contact-form__title">Let’s build something meaningful</h2>
            <p className="contact-form__body">Short conversational intro. Tell me what you’re building and I’ll reply within a few days.</p>
          </div>
          <div className="contact-form__right">
            <form onSubmit={e => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="contact-form__field"><label className="contact-form__label">Name</label><input name="name" placeholder="Your name" /></div>
                <div className="contact-form__field"><label className="contact-form__label">Email</label><input name="email" type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="contact-form__field contact-form__field--textarea"><label className="contact-form__label">Message</label><textarea name="message" rows={6} placeholder="Tell me about the project"></textarea></div>
              <div className="contact-form__footer"><button className="btn btn--primary" type="submit">Send message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
