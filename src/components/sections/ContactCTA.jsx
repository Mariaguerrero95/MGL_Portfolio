import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    TbBrandGithub, TbBrandLinkedin, TbMail,
    TbMapPin, TbClock, TbUser, TbBuilding, TbPencil, TbArrowRight,
} from 'react-icons/tb';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvozpro';

export default function ContactCTA() {
    const { t } = useTranslation();
    const categories = t('contact.form.categories', { returnObjects: true });

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '', updates: false });
    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    company: formState.company,
                    category: activeCategory,
                    message: formState.message,
                    updates: formState.updates,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', company: '', message: '', updates: false });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="contact-form section" id="contact">
            <div className="container">
                <motion.div
                    className="contact-form__card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* ---- Left panel ---- */}
                    <div className="contact-form__left">
                        <h2 className="contact-form__title">
                            {t('contact.title.line1')}{' '}
                            <em className="serif">{t('contact.title.em')}</em>{' '}
                            {t('contact.title.line2')}
                        </h2>
                        <p className="contact-form__body">{t('contact.body')}</p>

                        <ul className="contact-form__meta">
                            <li>
                                <span className="contact-form__dot" aria-hidden="true" />
                                {t('contact.meta.available')}
                            </li>
                            <li><TbMapPin aria-hidden="true" />{t('contact.meta.location')}</li>
                            <li><TbClock aria-hidden="true" />{t('contact.meta.timezone')}</li>
                            <li><TbMail aria-hidden="true" />{t('contact.meta.email')}</li>
                        </ul>

                        <div className="contact-form__socials">
                            <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" data-cursor="magnet">
                                <TbBrandGithub />
                            </a>
                            <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" data-cursor="magnet">
                                <TbBrandLinkedin />
                            </a>
                            <a href="mailto:hello@mariaguerrerolobo.com" aria-label="Email" data-cursor="magnet">
                                <TbMail />
                            </a>
                        </div>
                    </div>

                    {/* ---- Right panel — Form ---- */}
                    <div className="contact-form__right">
                        {status === 'success' ? (
                            <div className="contact-form__success">
                                <p>{t('contact.form.sent')}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <TbUser aria-hidden="true" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t('contact.form.name')}
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form__field">
                                        <TbMail aria-hidden="true" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t('contact.form.email')}
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <TbBuilding aria-hidden="true" />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder={t('contact.form.company')}
                                        value={formState.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact-form__categories">
                                    <p className="contact-form__label">{t('contact.form.lookingFor')}</p>
                                    <div className="contact-form__tags">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                className={`contact-form__tag${activeCategory === cat ? ' contact-form__tag--active' : ''}`}
                                                onClick={() => setActiveCategory(cat)}
                                            >
                                                {activeCategory === cat && <span className="contact-form__tag-dot" aria-hidden="true" />}
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="contact-form__field contact-form__field--textarea">
                                    <TbPencil aria-hidden="true" />
                                    <textarea
                                        name="message"
                                        placeholder={t('contact.form.message')}
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <div className="contact-form__footer">
                                    <label className="contact-form__check">
                                        <input
                                            type="checkbox"
                                            name="updates"
                                            checked={formState.updates}
                                            onChange={handleChange}
                                        />
                                        <span>{t('contact.form.updates')}</span>
                                    </label>
                                    <button
                                        type="submit"
                                        className="btn btn--primary"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? '…' : t('contact.form.send')}
                                        <TbArrowRight />
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <p className="contact-form__error" role="alert">{t('contact.form.error')}</p>
                                )}
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
