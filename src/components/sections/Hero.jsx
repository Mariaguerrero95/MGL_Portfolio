import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TbArrowRight } from 'react-icons/tb';
import { SiTypescript, SiReact, SiPython } from 'react-icons/si';
import { TbWaveSine } from 'react-icons/tb';
import MagneticButton from '../ui/MagneticButton.jsx';
import SectionLabel from '../ui/SectionLabel.jsx';

export default function Hero() {
    const { t } = useTranslation();
    const orbitRef = useRef(null);

    useEffect(() => {
        const el = orbitRef.current;
        if (!el) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
        if (reduce || isTablet) {
            // Disable parallax movement on tablet and reduced-motion preferences
            el.style.setProperty('--ox', '0px');
            el.style.setProperty('--oy', '0px');
            return;
        }

        const onMove = (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            el.style.setProperty('--ox', `${dx * 14}px`);
            el.style.setProperty('--oy', `${dy * 10}px`);
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    const fadeUp = {
        initial: { y: 36, opacity: 0 },
        animate: (i = 0) => ({
            y: 0, opacity: 1,
            transition: { delay: 0.05 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <section className="hero">
            <div className="container hero__grid">
                <div className="hero__copy">
                    <motion.div custom={0} variants={fadeUp} initial="initial" animate="animate">
                        <span className="kicker">{t('hero.kicker')}</span>
                    </motion.div>

                    <h1 className="hero__title">
                        <motion.span custom={1} variants={fadeUp} initial="initial" animate="animate">
                            {t('hero.title.line1')}
                        </motion.span>
                        <motion.span custom={2} variants={fadeUp} initial="initial" animate="animate">
                            {t('hero.title.line2Pre')}{' '}
                            <em className="serif">{t('hero.title.line2Em')}</em>
                        </motion.span>
                        <motion.span custom={3} variants={fadeUp} initial="initial" animate="animate">
                            {t('hero.title.line3Pre')}{' '}
                            <em className="serif">{t('hero.title.line3Em')}</em>
                        </motion.span>
                    </h1>

                    <motion.p
                        className="hero__desc"
                        custom={4} variants={fadeUp} initial="initial" animate="animate"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        className="hero__ctas"
                        custom={5} variants={fadeUp} initial="initial" animate="animate"
                    >
                        <MagneticButton as="a" href="#work" className="btn btn--primary">
                            {t('hero.cta.primary')}
                            <span className="arrow"><TbArrowRight /></span>
                        </MagneticButton>
                        <MagneticButton as={Link} to="/contact" className="btn btn--secondary">
                            {t('hero.cta.secondary')}
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        className="hero__availability"
                        custom={6} variants={fadeUp} initial="initial" animate="animate"
                    >
                        <SectionLabel>{t('common.availableForNewProjects')}</SectionLabel>
                        <SectionLabel className="section-label--no-dot">{t('common.basedIn')} · {t('common.workingRemotely')}</SectionLabel>
                    </motion.div>
                </div>

                <div className="hero__visual" ref={orbitRef}>
                    <div className="hero__orbit-wrap">
                        <div className="hero__orbit hero__orbit--outer" aria-hidden="true">
                            <span className="hero__ring" />
                            <span className="hero__chip hero__chip--ts" style={{ '--angle': '20deg' }}>
                                <SiTypescript />
                            </span>
                            <span className="hero__chip hero__chip--wave" style={{ '--angle': '160deg' }}>
                                <TbWaveSine />
                            </span>
                        </div>

                        <div className="hero__orbit hero__orbit--inner" aria-hidden="true">
                            <span className="hero__ring" />
                            <span className="hero__chip hero__chip--react" style={{ '--angle': '210deg' }}>
                                <SiReact />
                            </span>
                            <span className="hero__chip hero__chip--py" style={{ '--angle': '290deg' }}>
                                <SiPython />
                            </span>
                        </div>

                        <div className="hero__photo">
                            <img src="./Fotocv.jpg" alt="María Guerrero Lobo" />
                        </div>

                        <div className="hero__stars" aria-hidden="true">
                            {Array.from({ length: 18 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="hero__star"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 4}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Link to="#" className="sr-only">skip</Link>
        </section>
    );
}
