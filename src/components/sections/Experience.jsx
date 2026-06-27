import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TbBriefcase, TbCode } from 'react-icons/tb';
import SectionLabel from '../ui/SectionLabel.jsx';

const ENTRIES = [
    { id: 'zano', icon: TbBriefcase },
    { id: 'freelance', icon: TbCode },
];

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <header className="section-head">
                    <SectionLabel>{t('experience.kicker')}</SectionLabel>
                    <p className="section-subtitle">A journey through product engineering, design and client collaboration.</p>
                </header>

                {/* Featured Zano card (premium) */}
                {(() => {
                    const zano = t('experience.items.zano', { returnObjects: true });
                    if (!zano) return null;
                    const highlights = Array.isArray(zano.highlights) ? zano.highlights : [
                        'Frontend Engineering',
                        'Backend Development (Python)',
                        'AI-Assisted Features',
                        'Product Design',
                        'Client Collaboration',
                        'Mentoring Junior Intern',
                        'Full Product Ownership',
                    ];
                    return (
                        <motion.div
                            className="experience__featured card"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="featured__media">
                                <div className="featured__logo">
                                    <img src="/previews/zano-live-homepage.png" alt="Zano" />
                                </div>
                            </div>
                                <div className="featured__content">
                                <div className="featured__header">
                                    <h3 className="featured__company">Zano</h3>
                                    <span className="featured__role">Product Engineer</span>
                                </div>
                                <div className="featured__meta">
                                    <span className="featured__badge">November 2024 – July 2025</span>
                                </div>
                                <p className="featured__summary text-muted">A journey through product engineering, design and client collaboration — ownership across frontend, backend and AI features.</p>

                                <ul className="featured__chips" aria-label="Zano highlights">
                                    {highlights.map((h, idx) => <li key={idx} className="chip">{h}</li>)}
                                </ul>

                                <div className="featured__metrics" aria-hidden>
                                    <span className="metric"><strong>Ownership</strong><small>End-to-end</small></span>
                                    <span className="metric"><strong>Mentoring</strong><small>Junior intern</small></span>
                                    <span className="metric"><strong>AI</strong><small>Assisted features</small></span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })()}

                {/* Remaining entries as compact timeline */}
                <ol className="experience__timeline">
                    {ENTRIES.filter(e => e.id !== 'zano').map((entry, i) => {
                        const data = t(`experience.items.${entry.id}`, { returnObjects: true });
                        const Icon = entry.icon;
                        const bullets = Array.isArray(data.bullets) ? data.bullets : null;
                        return (
                            <motion.li
                                key={entry.id}
                                className="experience__item"
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="experience__dot"><Icon /></span>
                                <div className="experience__card card">
                                    <span className="experience__period">{data.period}</span>
                                    <h3 className="experience__title">{data.title}</h3>
                                    <p className="experience__summary text-muted">{data.summary}</p>
                                    {data.description && (
                                        <p className="experience__desc">{data.description}</p>
                                    )}
                                    {bullets && (
                                        <ul className="experience__bullets">
                                            {bullets.map((b, k) => <li key={k}>{b}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </motion.li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
