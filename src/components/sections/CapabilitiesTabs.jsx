import React, { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const TABS = [
    {
        id: 'frontend-engineering',
        title: 'Frontend Engineering',
        skills: [
            'HTML5', 'CSS3', 'SCSS / Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Vite', 'Responsive Design', 'Accessibility (WCAG)', 'Framer Motion', 'Component Architecture'
        ],
    },
    {
        id: 'backend-data',
        title: 'Backend & Data',
        skills: [
            'Python', 'SQL', 'PostgreSQL', 'REST APIs', 'Authentication', 'Data Modelling', 'API Integrations', 'Backend Logic', 'Automation Scripts'
        ],
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        skills: [
            'OpenAI Integrations', 'AI-Assisted Features', 'Prompt Engineering', 'Workflow Automation', 'AI Productivity Systems', 'LLM Integrations'
        ],
    },
    {
        id: 'design-branding-product',
        title: 'Product Design & Branding',
        skills: [
            'Figma', 'Canva', 'Lovable', 'UX Thinking', 'Product Discovery', 'Wireframing', 'Feature Prioritisation', 'Design Systems', 'User Flows', 'Brand Identity', 'Logo Design', 'Visual Communication'
        ],
    },
    {
        id: 'collaboration-delivery',
        title: 'Product Delivery',
        skills: [
            'Jira', 'Slack', 'Git', 'GitHub', 'Agile / Scrum', 'Client Collaboration', 'Requirements Gathering', 'Documentation', 'Mentoring', 'Cross-functional Teams'
        ],
    },
    {
        id: 'web-platforms',
        title: 'Web Platforms',
        skills: [
            'WordPress', 'Elementor', 'CMS Management', 'Website Configuration', 'Content Architecture', 'SEO Fundamentals'
        ],
    },
];

function useKeyboardNavigation(tabsCount, setActive) {
    const listRef = useRef(null);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;

        function onKey(e) {
            const { key } = e;
            const active = Number(el.getAttribute('data-active')) || 0;
            if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(key)) {
                e.preventDefault();
                let next = active;
                if (key === 'ArrowRight') next = (active + 1) % tabsCount;
                if (key === 'ArrowLeft') next = (active - 1 + tabsCount) % tabsCount;
                if (key === 'Home') next = 0;
                if (key === 'End') next = tabsCount - 1;
                setActive(next);
                const btn = el.querySelectorAll('[role="tab"]')[next];
                if (btn) btn.focus();
            }
        }

        el.addEventListener('keydown', onKey);
        return () => el.removeEventListener('keydown', onKey);
    }, [tabsCount, setActive]);

    return listRef;
}

export default function CapabilitiesTabs() {
    const [active, setActive] = useState(0);
    const tabListRef = useKeyboardNavigation(TABS.length, setActive);
    const reduceMotion = useReducedMotion();

    // Ensure mobile devices get a horizontally scrollable tab bar
    useEffect(() => {
        function updateScrollMode() {
            const el = tabListRef.current;
            if (!el || typeof window === 'undefined') return;
            if (window.innerWidth <= 600) {
                el.classList.add('tabs--scroll');
            } else {
                el.classList.remove('tabs--scroll');
            }
        }

        // schedule initial check after mount to ensure ref is populated
        const t = setTimeout(updateScrollMode, 50);
        window.addEventListener('resize', updateScrollMode);
        return () => {
            clearTimeout(t);
            window.removeEventListener('resize', updateScrollMode);
        };
    }, [tabListRef]);

    useEffect(() => {
        if (tabListRef.current) tabListRef.current.setAttribute('data-active', String(active));
    }, [active, tabListRef]);

    return (
        <section className="capabilities-section" aria-labelledby="capabilities-heading" data-reduce-motion={reduceMotion}>
            <div className="capabilities-inner container">
                <div className="capabilities-header">
                    <p className="kicker">Capabilities</p>
                    <p className="capabilities-intro">Building great products requires more than writing code. 
                        These are the technologies, tools and practices I use across engineering, design and product delivery.</p>
                </div>

                <div className="capabilities-panel">
                    <div className="capabilities-tabs-bar">
                        <div
                            className="tabs"
                            role="tablist"
                            aria-label="Capabilities tabs"
                            ref={tabListRef}
                        >
                            {TABS.map((t, i) => (
                                <button
                                    key={t.id}
                                    role="tab"
                                    aria-selected={active === i}
                                    aria-controls={`panel-${t.id}`}
                                    id={`tab-${t.id}`}
                                    tabIndex={active === i ? 0 : -1}
                                    className={`tab ${active === i ? 'tab--active' : ''}`}
                                    onClick={() => setActive(i)}
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="skills-panel">
                        {/* Render a single tabpanel for the active tab for simpler DOM and smoother transitions */}
                        {(() => {
                            const t = TABS[active];
                            return (
                                <div
                                    role="tabpanel"
                                    id={`panel-${t.id}`}
                                    aria-labelledby={`tab-${t.id}`}
                                    className={`tab-panel tab-panel--active`}
                                >
                                    <div className="skills-grid">
                                        {t.skills.map((s) => (
                                            <div
                                                key={s}
                                                className="skill-chip"
                                                tabIndex={0}
                                                aria-label={s}
                                            >
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </section>
    );
}
