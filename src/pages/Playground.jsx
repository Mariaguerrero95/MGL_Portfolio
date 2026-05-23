import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TbArrowUpRight, TbBrandGithub } from 'react-icons/tb';
import { PLAYGROUND_PROJECTS } from '../lib/projects-data.js';
import SectionLabel from '../components/ui/SectionLabel.jsx';

export default function Playground() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="playground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <header className="playground__hero container">
                <SectionLabel>{t('playground.kicker')}</SectionLabel>
                <h1 className="playground__title">
                    {t('playground.title').split(' ').map((w, i, arr) => (
                        i === arr.length - 1
                            ? <em key={i} className="serif">{w}</em>
                            : <span key={i}>{w} </span>
                    ))}
                </h1>
                <p className="playground__desc">{t('playground.description')}</p>
            </header>

            <div className="container playground__grid">
                {PLAYGROUND_PROJECTS.map((p, i) => {
                    const data = t(p.i18nKey, { returnObjects: true });
                    return (
                        <motion.article
                            key={p.id}
                            className="playground__card card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                        >
                            <div className="playground__card-head">
                                <span className="chip chip--ghost">
                                    {t(`playground.categories.${p.category}`)}
                                </span>
                                <div className="playground__card-icons">
                                    {p.repo && (
                                        <a href={p.repo} aria-label="Source" target="_blank" rel="noreferrer" data-cursor="magnet">
                                            <TbBrandGithub />
                                        </a>
                                    )}
                                    {p.href && (
                                        <a href={p.href} aria-label="Live" target="_blank" rel="noreferrer" data-cursor="magnet">
                                            <TbArrowUpRight />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="playground__card-title serif">{data.title}</h3>
                            <p className="playground__card-desc">{data.description}</p>
                            <div className="playground__card-tags">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="chip">{tag}</span>
                                ))}
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </motion.div>
    );
}
