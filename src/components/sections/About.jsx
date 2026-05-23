import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TbArrowUpRight, TbCalendarTime, TbRocket, TbGitCommit, TbInfinity } from 'react-icons/tb';
import SectionLabel from '../ui/SectionLabel.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';

const STAT_ICONS = {
    years: TbCalendarTime,
    projects: TbRocket,
    commits: TbGitCommit,
    curiosity: TbInfinity,
};

export default function About() {
    const { t } = useTranslation();
    const stats = t('about.stats', { returnObjects: true });

    return (
        <section className="about section" id="about">
            <div className="container about__grid">
                <motion.div
                    className="about__panel card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <SectionLabel>{t('about.kicker')}</SectionLabel>
                    <p className="about__body serif">{t('about.body')}</p>
                    <MagneticButton as="a" href="#contact" className="btn btn--secondary">
                        {t('about.cta')} <TbArrowUpRight />
                    </MagneticButton>
                </motion.div>

                <div className="about__stats">
                    {Object.entries(stats).map(([key, stat], i) => {
                        const Icon = STAT_ICONS[key] || TbRocket;
                        return (
                            <motion.div
                                key={key}
                                className="about__stat card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                            >
                                <span className="about__stat-icon"><Icon /></span>
                                <span className="about__stat-value serif">{stat.value}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
