export const ROUTES = {
    home: '/',
    contact: '/contact',
    work: {
        lifeSciences: '/work/life-sciences',
        conference: '/work/conference-platform',
        aiGovernance: '/work/ai-governance',
    },
    playground: '/playground',
    notFound: '*',
};

export const CASE_STUDIES = [
    {
        slug: 'life-sciences',
        path: ROUTES.work.lifeSciences,
        i18nKey: 'caseStudies.lifeSciences',
        accent: '#A8A4FF',
        tech: ['Next.js', 'Python', 'AI', 'PostgreSQL'],
    },
    {
        slug: 'conference-platform',
        path: ROUTES.work.conference,
        i18nKey: 'caseStudies.conference',
        accent: '#6B7BC9',
        tech: ['React', 'Django', 'Celery', 'PostgreSQL'],
    },
    {
        slug: 'ai-governance',
        path: ROUTES.work.aiGovernance,
        i18nKey: 'caseStudies.aiGovernance',
        accent: '#F4EDE0',
        tech: ['Next.js', 'Python', 'AI', 'FastAPI'],
    },
];
