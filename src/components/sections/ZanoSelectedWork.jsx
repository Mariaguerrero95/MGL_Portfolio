import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TbArrowRight, TbExternalLink } from 'react-icons/tb';

const projects = [
    {
        number: '01',
        title: 'Life Sciences Intelligence Workspace',
        role: 'Product Engineer · Frontend · Backend · AI-assisted Systems',
        description: 'A secure workspace for turning scattered market, therapy and research data into usable intelligence.',
        highlights: [
            'AI-assisted workflows',
            'frontend architecture',
            'Python backend development',
            'dashboard systems',
            'research operations',
        ],
        cta: 'View Case Study',
        href: '/work/life-sciences',
        visual: 'life-sciences',
    },
    {
        number: '02',
        title: 'Event Data Automation',
        role: 'Product Engineer · Frontend · Backend',
        description: 'A planning platform that transforms conference websites into structured, actionable planning data.',
        highlights: [
            'conference data automation',
            'workflow design',
            'Python backend services',
            'frontend implementation',
            'export systems',
        ],
        cta: 'View Case Study',
        href: '/work/conference-platform',
        visual: 'conference',
    },
    {
        number: '03',
        title: 'Volleyball Platform',
        badge: 'Coming Soon',
        role: 'Frontend Engineer · Product Designer',
        description:
            'An Irish volleyball platform designed for players, teams and communities. Designed and developed with a focus on usability, performance and modern product experience.',
        highlights: ['UI design', 'frontend development', 'responsive interfaces', 'sports platform'],
        cta: 'Coming Soon',
        visual: 'setpoint',
        disabled: true,
    },
    {
        number: '04',
        title: 'Zano Website & Brand Refresh',
        badge: 'Live Product',
        role: 'Product Designer · Frontend Engineer',
        description:
            "Led the redesign and frontend implementation of Zano's public website, helping create a clearer visual identity, stronger information hierarchy and a more polished digital presence.",
        highlights: [
            'website redesign',
            'frontend implementation',
            'information architecture',
            'responsive design',
            'brand refinement',
        ],
        cta: 'Visit Website',
        href: 'https://zano.ie/',
        visual: 'zano',
        live: true,
    },
];

function ProjectVisual({ type, title }) {
    const mapping = {
        'life-sciences': '/previews/intelli-photo.png',
        conference: '/previews/event-data.png',
        setpoint: '/previews/setpoint-desktop.png',
        'ai-governance': '/previews/ai-governance-desktop.svg',
        zano: '/previews/zano-live-homepage.png',
    };

    const src = mapping[type] || mapping['zao'] || '/previews/zano-live-homepage.png';
    const imageClassName = `selected-card__img${type === 'life-sciences' ? ' selected-card__img--contain' : ''}`;
    return (
        <img className={imageClassName} src={src} alt={`${title} screenshot`} loading="lazy" />
    );
}

ProjectVisual.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function ProjectCta({ project }) {
    const icon = project.live ? <TbExternalLink /> : <TbArrowRight />;

    if (project.disabled) {
        return (
            <span className="selected-work-card__cta selected-work-card__cta--disabled" aria-disabled="true">
                {project.cta}
            </span>
        );
    }

    if (project.live) {
        return (
            <a
                className="selected-work-card__cta"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.cta}: ${project.title}`}
            >
                <span>{project.cta}</span>
                {icon}
            </a>
        );
    }

    return (
        <Link className="selected-work-card__cta" to={project.href} aria-label={`${project.cta}: ${project.title}`}>
            <span>{project.cta}</span>
            {icon}
        </Link>
    );
}

const projectShape = PropTypes.shape({
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    cta: PropTypes.string.isRequired,
    href: PropTypes.string,
    visual: PropTypes.string.isRequired,
    badge: PropTypes.string,
    disabled: PropTypes.bool,
    live: PropTypes.bool,
});

ProjectCta.propTypes = {
    project: projectShape.isRequired,
};

function SelectedWorkCard({ project }) {
    return (
        <article className={`selected-work-card${project.live ? ' selected-work-card--live' : ''}`}>
            <div className="selected-work-card__visual">
                <ProjectVisual type={project.visual} title={project.title} />
            </div>
            <div className="selected-work-card__body">
                <div className="selected-work-card__meta">
                    <span>{project.number}</span>
                    {project.badge && (
                        <span className={`selected-work-card__badge${project.live ? ' selected-work-card__badge--live' : ''}`}>
                            {project.badge}
                        </span>
                    )}
                </div>
                <h3>{project.title}</h3>
                <p className="selected-work-card__role">{project.role}</p>
                <p className="selected-work-card__description">{project.description}</p>
                <div className="selected-work-card__highlights" aria-label={`${project.title} highlights`}>
                    {project.highlights.map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                    ))}
                </div>
                <ProjectCta project={project} />
            </div>
        </article>
    );
}

SelectedWorkCard.propTypes = {
    project: projectShape.isRequired,
};

export default function ZanoSelectedWork() {
    return (
        <section className="section zano-selected-work" id="work" aria-labelledby="selected-work-title">
            <div className="container">
                <div className="zano-selected-work__head">
                    <h2 id="selected-work-title">Latest projects I have worked on at Zano</h2>
                </div>

                <div className="zano-selected-work__grid">
                    {projects.map((project) => (
                        <article key={project.number} className={`selected-card ${project.live ? 'is-live' : ''}`}>
                            <div className="selected-card__image">
                                <ProjectVisual type={project.visual} title={project.title} />
                            </div>

                            <div className="selected-card__body selected-card__content">
                                <div className="selected-card__top">
                                    <span className="selected-card__index">{project.number}</span>
                                    {project.badge && (
                                        <span className={`selected-card__badge ${project.live ? 'live' : ''}`}>{project.badge}</span>
                                    )}
                                </div>

                                <h3 className="selected-card__title">{project.title}</h3>

                                <div className="selected-card__roles">
                                    {project.role.split(' · ').slice(0, 3).map((r) => (
                                        <span key={r} className="chip chip--small">{r}</span>
                                    ))}
                                </div>

                                <p className="selected-card__excerpt">{project.description}</p>

                                <div className="selected-card__cta-wrap">
                                    <ProjectCta project={project} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
