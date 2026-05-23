import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TbArrowLeft, TbArrowUpRight } from 'react-icons/tb';
import { CASE_STUDIES } from '../../lib/routes.js';
import SectionLabel from '../../components/ui/SectionLabel.jsx';
import ProductPreview from '../../components/ui/ProductPreview.jsx';

const SECTION_ORDER = ['overview', 'product', 'interface', 'engineering', 'ai', 'challenges', 'outcome'];

export default function CaseStudyPage({ i18nKey, slug }) {
    const { t } = useTranslation();
    const data = t(i18nKey, { returnObjects: true });
    const cs = CASE_STUDIES.find((c) => c.slug === slug);
    const accent = cs?.accent || 'var(--accent)';

    // Find next case study for footer nav.
    const idx = CASE_STUDIES.findIndex((c) => c.slug === slug);
    const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
    const nextData = t(next.i18nKey, { returnObjects: true });

    return (
        <motion.article
            className="case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <header className="case-study__hero">
                <div className="container">
                    <Link to="/" className="case-study__back" data-cursor="magnet">
                        <TbArrowLeft /> {t('common.backToWork')}
                    </Link>
                    <div className="case-study__meta">
                        <span className="chip">{data.category}</span>
                        <span>{data.year}</span>
                        <span>{data.role}</span>
                    </div>
                    <h1 className="case-study__title">{data.title}</h1>
                    <p className="case-study__summary">{data.summary}</p>

                    <div className="case-study__preview" style={{ '--card-accent': accent }}>
                        <ProductPreview variant={slug} accent={accent} />
                    </div>
                </div>
            </header>

            <div className="container case-study__sections">
                {SECTION_ORDER.map((key) => {
                    const section = data.sections?.[key];
                    if (!section) return null;
                    return (
                        <motion.section
                            key={key}
                            className="case-study__section"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <SectionLabel>{section.title}</SectionLabel>
                            <p className="case-study__body">{section.body}</p>
                        </motion.section>
                    );
                })}
            </div>

            <footer className="case-study__nav container">
                <Link to={next.path} className="case-study__next card" data-cursor="magnet">
                    <span className="eyebrow">{t('common.nextProject')}</span>
                    <span className="case-study__next-title serif">{nextData.title}</span>
                    <TbArrowUpRight />
                </Link>
            </footer>
        </motion.article>
    );
}

CaseStudyPage.propTypes = {
    i18nKey: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
