import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import IconClient from '../../assets/icons/impact/client-collab.svg';
import IconDesign from '../../assets/icons/impact/product-design.svg';
import IconOwnership from '../../assets/icons/impact/full-ownership.svg';
import IconMentor from '../../assets/icons/impact/mentoring.svg';
import IconBrand from '../../assets/icons/impact/design-branding.svg';

const skills = [
    {
        icon: IconClient,
        title: 'Client Collaboration',
        description:
            'Worked directly with clients to understand needs, gather requirements and implement improvements.',
    },
    {
        icon: IconDesign,
        title: 'Product Design',
        description:
            'Designed user flows and interfaces in Figma, aligning business goals with intuitive experiences.',
    },
    {
        icon: IconOwnership,
        title: 'Full Product Ownership',
        description:
            'Contributed across frontend, backend (Python), databases, AI integrations and product iteration.',
    },
    {
        icon: IconMentor,
        title: 'Mentoring & Onboarding',
        description:
            'Onboarded and supported a junior intern by assigning tasks, reviewing work and helping them grow.',
    },
    {
        icon: IconBrand,
        title: 'Design & Branding',
        description:
            'Redesigned the Zano company website and contributed to visual identity and brand consistency.',
    },
];

const cardVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
};

export default function ImpactAtZano() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const buttonsRef = useRef([]);
    const shouldReduceMotion = useReducedMotion();

    const panelVariant = {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        // ensure refs array length matches skills
        buttonsRef.current = buttonsRef.current.slice(0, skills.length);
    }, []);

    function toggleIndex(i) {
        setSelectedIndex(prev => (prev === i ? -1 : i));
    }
    return (
        <section className="section impact-at-zano" aria-labelledby="impact-zano-title">
            <div className="container">
                <div className="impact-at-zano__top">
                    <div className="impact-at-zano__intro">
                        <div className="kicker">Experience</div>
                        <h2 id="impact-zano-title">Experience</h2>
                        <p>
                            A focused overview of my professional experience across product engineering, design, client
                            collaboration and delivery.
                        </p>
                    </div>

                    <motion.aside
                        className="impact-at-zano__card"
                        aria-label="Zano summary"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariant}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="impact-at-zano__card-top">
                            <div className="impact-at-zano__meta-left">
                                <div className="impact-at-zano__left-head">
                                    <div className="impact-at-zano__company">Zano</div>
                                </div>
                                <div className="impact-at-zano__role">Product Engineer</div>
                            </div>

                            <div className="impact-at-zano__meta-sep" aria-hidden="true" />

                            <div className="impact-at-zano__meta-mid">
                                <div className="impact-at-zano__dates">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span>Nov 2024 – Jun 2025</span>
                                </div>
                                <div className="impact-at-zano__location">Remote</div>
                            </div>
                        </div>

                        <p className="impact-at-zano__card-excerpt">
                            Worked across product design, frontend engineering, backend development (Python) and client
                            collaboration. Contributed to AI-assisted systems, internal platforms and client-facing products
                            while supporting a junior team member and helping them grow.
                        </p>
                    </motion.aside>
                </div>

                <div className="impact-at-zano__skills-card" role="tablist" aria-label="Capabilities">
                    {skills.map((skill, idx) => (
                        <motion.button
                            key={skill.title}
                            ref={el => (buttonsRef.current[idx] = el)}
                            className="impact-skill"
                            type="button"
                            role="tab"
                            aria-selected={selectedIndex === idx}
                            aria-controls={`impact-skill-panel-${idx}`}
                            aria-expanded={selectedIndex === idx}
                            aria-label={`Toggle ${skill.title} details`}
                            onClick={() => toggleIndex(idx)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariant}
                            transition={shouldReduceMotion ? {} : { duration: 0.45, delay: idx * 0.06 }}
                        >
                            <div className="impact-skill__icon" aria-hidden="true">
                                <img src={skill.icon} alt="" />
                            </div>

                            <div className="impact-skill__content">
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Revealed panel for mobile: only one open at a time */}
                {selectedIndex >= 0 && (
                    <motion.div
                        id={`impact-skill-panel-${selectedIndex}`}
                        className="impact-at-zano__skill-panel"
                        role="region"
                        aria-live="polite"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={panelVariant}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22 }}
                    >
                        <h4>{skills[selectedIndex].title}</h4>
                        <p>{skills[selectedIndex].description}</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

ImpactAtZano.propTypes = {};
