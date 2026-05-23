import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbArrowUpRight } from 'react-icons/tb';
import { CASE_STUDIES } from '../../lib/routes.js';
import SectionLabel from '../ui/SectionLabel.jsx';
import ProductPreview from '../ui/ProductPreview.jsx';

export default function FeaturedCaseStudies() {
    const { t } = useTranslation();

    return (
        <section className="featured section" id="work">
            <div className="container">
                <header className="section-head">
                    <SectionLabel>{t('featured.kicker')}</SectionLabel>
                    <Link to="/playground" className="section-head__link" data-cursor="magnet">
                        {t('common.viewAll')} <TbArrowUpRight />
                    </Link>
                </header>

                <div className="featured__grid">
                    {CASE_STUDIES.map((cs, i) => {
                        const data = t(cs.i18nKey, { returnObjects: true });
                        return (
                            <motion.article
                                key={cs.slug}
                                className="featured__card card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link to={cs.path} className="featured__link" data-cursor="magnet">
                                    <div className="featured__preview" style={{ '--card-accent': cs.accent }}>
                                        <ProductPreview variant={cs.slug} accent={cs.accent} />
                                    </div>

                                    <div className="featured__body">
                                        <div className="featured__meta">
                                            <span className="chip">{data.category}</span>
                                            <span className="featured__year">{data.year}</span>
                                        </div>
                                        <h3 className="featured__title serif">{data.title}</h3>
                                        <p className="featured__summary">{data.summary}</p>
                                        <div className="featured__tech">
                                            {cs.tech.map((tech) => (
                                                <span key={tech} className="chip chip--ghost">{tech}</span>
                                            ))}
                                        </div>
                                        <span className="featured__cta">
                                            {t('common.viewCase')} <TbArrowUpRight />
                                        </span>
                                    </div>
                                </Link>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
