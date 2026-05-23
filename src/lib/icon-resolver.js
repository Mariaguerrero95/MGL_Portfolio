// Statically resolve only the icons we actually reference so bundlers can
// tree-shake the rest of react-icons. Importing * from react-icons/si pulls
// in thousands of icons (~8MB). This keeps the bundle lean.
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiReactquery,
    SiStorybook, SiFigma, SiPython, SiDjango, SiFastapi, SiNodedotjs,
    SiPostgresql, SiGraphql, SiRedis, SiDocker, SiGit, SiGithubactions,
    SiVite, SiVercel, SiSass, SiHtml5, SiCss, SiJest,
} from 'react-icons/si';
import {
    TbBrandReactNative, TbBrandStorybook, TbApi, TbSparkles, TbBrain,
    TbDatabaseSearch, TbVectorTriangle, TbBinaryTree, TbRobot, TbAtom2,
    TbCursorText, TbAccessible, TbComponents, TbBrandAws, TbBrandCypress,
    TbCircleDot,
} from 'react-icons/tb';

const REGISTRY = {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiReactquery,
    SiStorybook, SiFigma, SiPython, SiDjango, SiFastapi, SiNodedotjs,
    SiPostgresql, SiGraphql, SiRedis, SiDocker, SiGit, SiGithubactions,
    SiVite, SiVercel, SiSass, SiHtml5, SiCss, SiJest,
    TbBrandReactNative, TbBrandStorybook, TbApi, TbSparkles, TbBrain,
    TbDatabaseSearch, TbVectorTriangle, TbBinaryTree, TbRobot, TbAtom2,
    TbCursorText, TbAccessible, TbComponents, TbBrandAws, TbBrandCypress,
};

export function resolveIcon(name) {
    return REGISTRY[name] || TbCircleDot;
}
