// Skill / capability data. Icons are React-icons names resolved in the UI.

export const SKILL_TABS = [
    {
        id: 'frontend',
        labelKey: 'skills.tabs.frontend',
        items: [
            { name: 'React', icon: 'SiReact' },
            { name: 'Next.js', icon: 'SiNextdotjs' },
            { name: 'TypeScript', icon: 'SiTypescript' },
            { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
            { name: 'Framer Motion', icon: 'SiFramer' },
            { name: 'Zustand', icon: 'TbBrandReactNative' },
            { name: 'TanStack Query', icon: 'SiReactquery' },
            { name: 'shadcn/ui', icon: 'TbBrandStorybook' },
            { name: 'Storybook', icon: 'SiStorybook' },
            { name: 'Figma', icon: 'SiFigma' },
        ],
    },
    {
        id: 'backend',
        labelKey: 'skills.tabs.backend',
        items: [
            { name: 'Python', icon: 'SiPython' },
            { name: 'Django', icon: 'SiDjango' },
            { name: 'FastAPI', icon: 'SiFastapi' },
            { name: 'Node.js', icon: 'SiNodedotjs' },
            { name: 'PostgreSQL', icon: 'SiPostgresql' },
            { name: 'REST APIs', icon: 'TbApi' },
            { name: 'GraphQL', icon: 'SiGraphql' },
            { name: 'Redis', icon: 'SiRedis' },
        ],
    },
    {
        id: 'ai-data',
        labelKey: 'skills.tabs.aiData',
        items: [
            { name: 'AI Integrations', icon: 'TbSparkles' },
            { name: 'LLM Workflows', icon: 'TbBrain' },
            { name: 'RAG Systems', icon: 'TbDatabaseSearch' },
            { name: 'Vector Search', icon: 'TbVectorTriangle' },
            { name: 'Data Pipelines', icon: 'TbBinaryTree' },
            { name: 'OpenAI / Anthropic', icon: 'TbRobot' },
        ],
    },
    {
        id: 'design-ux',
        labelKey: 'skills.tabs.designUx',
        items: [
            { name: 'Figma', icon: 'SiFigma' },
            { name: 'UX Thinking', icon: 'TbAtom2' },
            { name: 'Interaction Design', icon: 'TbCursorText' },
            { name: 'Accessibility', icon: 'TbAccessible' },
            { name: 'Design Systems', icon: 'TbComponents' },
        ],
    },
    {
        id: 'tools-devops',
        labelKey: 'skills.tabs.tools',
        items: [
            { name: 'Docker', icon: 'SiDocker' },
            { name: 'AWS', icon: 'TbBrandAws' },
            { name: 'Git', icon: 'SiGit' },
            { name: 'GitHub Actions', icon: 'SiGithubactions' },
            { name: 'Vite', icon: 'SiVite' },
            { name: 'Vercel', icon: 'SiVercel' },
        ],
    },
    {
        id: 'other',
        labelKey: 'skills.tabs.other',
        items: [
            { name: 'SCSS', icon: 'SiSass' },
            { name: 'HTML5', icon: 'SiHtml5' },
            { name: 'CSS3', icon: 'SiCss' },
            { name: 'Jest', icon: 'SiJest' },
            { name: 'Playwright', icon: 'TbBrandCypress' },
        ],
    },
];

// Marquee uses a flat list distributed over two rows.
export const MARQUEE_ROWS = [
    ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Python', 'Django', 'FastAPI', 'PostgreSQL'],
    ['Docker', 'AWS', 'Git', 'Figma', 'Storybook', 'Zustand', 'TanStack Query', 'Node.js', 'AI Integrations'],
];

export const ICON_MAP_NAMES = SKILL_TABS.flatMap(t => t.items).reduce((acc, i) => {
    acc[i.name] = i.icon;
    return acc;
}, {});
