import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero.jsx';
import FeaturedCaseStudies from '../components/sections/FeaturedCaseStudies.jsx';
import SkillsTabs from '../components/sections/SkillsTabs.jsx';
import Experience from '../components/sections/Experience.jsx';
import About from '../components/sections/About.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <Hero />
            <FeaturedCaseStudies />
            <SkillsTabs />
            <Experience />
            <About />
            <Testimonials />
        </motion.div>
    );
}
