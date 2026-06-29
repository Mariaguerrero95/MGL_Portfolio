import { useEffect, useRef, useState } from 'react';
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

export default function ImpactAtZanoCapabilities() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const buttonsRef = useRef([]);
    const shouldReduceMotion = useReducedMotion();

    const panelVariant = {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        buttonsRef.current = buttonsRef.current.slice(0, skills.length);
    }, []);

    function toggleIndex(index) {
        setSelectedIndex((previousIndex) => (previousIndex === index ? -1 : index));
    }

    return (
        /* Se añade style={{ marginBottom: '100px' }} para forzar la separación con la palabra Capabilities */
       // REEMPLAZA LA LÍNEA 49 CON ESTO:
<section 
    className="section impact-at-zano impact-at-zano--capabilities" 
    aria-label="Zano capabilities" 
    style={{ paddingTop: '0px', marginBottom: '0px' }}
>
            <div className="container">
                <div className="impact-at-zano__skills-card" role="tablist" aria-label="Capabilities">
                    {skills.map((skill, index) => (
                        <motion.button
                            key={skill.title}
                            ref={(element) => (buttonsRef.current[index] = element)}
                            className="impact-skill"
                            type="button"
                            role="tab"
                            aria-selected={selectedIndex === index}
                            aria-controls={`impact-skill-panel-${index}`}
                            aria-expanded={selectedIndex === index}
                            aria-label={`Toggle ${skill.title} details`}
                            onClick={() => toggleIndex(index)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariant}
                            transition={shouldReduceMotion ? {} : { duration: 0.45, delay: index * 0.06 }}
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