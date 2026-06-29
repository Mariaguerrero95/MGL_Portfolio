import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { TbExternalLink } from 'react-icons/tb';
import SectionLabel from '../ui/SectionLabel.jsx';

const EXPERIENCES = [
    {
        variant: 'hero',
        company: 'Zano',
        role: 'Full Stack Developer',
        dates: '2024 — Present',
        location: 'Remote',
        intro:
            'Over the past few years I\'ve evolved from building websites for clients to developing modern full-stack applications. Most of my growth as a software engineer has come from my work at Zano, where I\'ve been building production-ready software with modern web technologies.',
        summary:
            'I worked across product design, frontend engineering and backend development to help ship modern production applications, internal tools and client-facing experiences.',
        badges: ['React', 'Next.js', 'TypeScript', 'Node', 'Supabase', 'PostgreSQL', 'Docker'],
        achievements: [
            'Shipped product features across the full stack with a focus on reliability, clarity and production readiness.',
            'Helped design and refine interfaces that balanced business goals with clean, usable product flows.',
            'Contributed to backend services, data handling and integrations that supported modern application delivery.',
            'Worked closely with the team to iterate quickly on product details while keeping the experience polished.',
            'Helped raise the overall quality bar through thoughtful implementation and strong ownership.',
        ],
        link: {
            label: 'Visit Zano',
            href: 'https://zano.ie/',
        },
        visual: '/previews/zano-live-homepage.png',
        visualAlt: 'Screenshot of the Zano website',
    },
    {
        variant: 'compact',
        company: 'Freelance Web Developer',
        role: 'Client Projects',
        dates: '2023 — 2024',
        location: 'Remote',
        summary:
            'Built websites and landing pages for clients using WordPress, Elementor, custom CSS and JavaScript. This experience helped me develop client communication, project ownership and UI implementation skills before transitioning into full-stack software engineering.',
        badges: ['WordPress', 'Elementor', 'PHP', 'CSS', 'JavaScript'],
    },
];

function ExperienceCard({ experience }) {
    const shouldReduceMotion = useReducedMotion();
    const isHero = experience.variant === 'hero';

    return (
        <motion.article
            className={`experience-card card experience-card--${experience.variant}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
            {isHero && (
                <div className="experience-card__visual" aria-hidden="true">
                    <img src={experience.visual} alt={experience.visualAlt} loading="lazy" />
                </div>
            )}

            <div className="experience-card__body">
                <div className="experience-card__top">
                    <div className="experience-card__identity">
                        <h3 className="experience-card__company">{experience.company}</h3>
                        <p className="experience-card__role">{experience.role}</p>
                    </div>

                    <div className="experience-card__meta">
                        <span className="experience-card__dates">{experience.dates}</span>
                        <span className="experience-card__location">{experience.location}</span>
                    </div>
                </div>

                {isHero && <p className="experience-card__intro">{experience.intro}</p>}

                <p className="experience-card__summary">{experience.summary}</p>

                <div className="experience-card__chips" aria-label={`${experience.company} technologies`}>
                    {experience.badges.map((badge) => (
                        <span key={badge} className="chip experience-card__chip">
                            {badge}
                        </span>
                    ))}
                </div>

                {isHero && (
                    <>
                        <div className="experience-card__achievements-wrap">
                            <h4 className="experience-card__section-title">Key achievements</h4>
                            <ul className="experience-card__achievements">
                                {experience.achievements.map((achievement) => (
                                    <li key={achievement}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        {experience.link && (
                            <a
                                className="experience-card__link"
                                href={experience.link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${experience.link.label}: ${experience.company}`}
                            >
                                <span>{experience.link.label}</span>
                                <TbExternalLink aria-hidden="true" />
                            </a>
                        )}
                    </>
                )}
            </div>
        </motion.article>
    );
}

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        variant: PropTypes.oneOf(['hero', 'compact']).isRequired,
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        dates: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        intro: PropTypes.string,
        summary: PropTypes.string.isRequired,
        badges: PropTypes.arrayOf(PropTypes.string).isRequired,
        achievements: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        }),
        visual: PropTypes.string,
        visualAlt: PropTypes.string,
    }).isRequired,
};

export default function ProfessionalExperience() {
    return (
        <section className="section professional-experience" id="experience" aria-labelledby="professional-experience-title">
            <div className="container">
                <header className="professional-experience__head">
                    <SectionLabel>Experience</SectionLabel>
                    <h2 id="professional-experience-title">Professional Experience</h2>
                    <p>
                        My path has moved from building websites for clients to shipping modern full-stack applications.
                        The largest part of that growth came from Zano, where I worked on production software and learned
                        how to build with more depth, ownership and consistency.
                    </p>
                </header>

                <div className="professional-experience__cards">
                    {EXPERIENCES.map((experience) => (
                        <ExperienceCard key={experience.company} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}