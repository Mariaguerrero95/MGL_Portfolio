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
                </header>

                <ol className="experience__timeline">
                    {ENTRIES.map((entry, i) => {
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
                                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
