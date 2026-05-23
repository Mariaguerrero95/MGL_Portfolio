import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_TABS } from '../../lib/skills-data.js';
import { resolveIcon } from '../../lib/icon-resolver.js';
import SectionLabel from '../ui/SectionLabel.jsx';

export default function SkillsTabs() {
    const { t } = useTranslation();
    const [active, setActive] = useState(SKILL_TABS[0].id);
    const tab = SKILL_TABS.find((t) => t.id === active);

    return (
        <section className="skills-tabs section" id="skills">
            <div className="container">
                <header className="section-head">
                    <SectionLabel>{t('skills.kicker')}</SectionLabel>
                </header>

                <div className="skills-tabs__tabs" role="tablist">
                    {SKILL_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={active === tab.id}
                            className={`skills-tabs__tab ${active === tab.id ? 'is-active' : ''}`}
                            onClick={() => setActive(tab.id)}
                            data-cursor="magnet"
                        >
                            {active === tab.id && (
                                <motion.span
                                    layoutId="skill-pill"
                                    className="skills-tabs__pill"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span>{t(tab.labelKey)}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        className="skills-tabs__grid"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {tab.items.map((item) => {
                            const Icon = resolveIcon(item.icon);
                            return (
                                <div key={item.name} className="skills-tabs__item">
                                    <span className="skills-tabs__icon"><Icon /></span>
                                    <span className="skills-tabs__name">{item.name}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
