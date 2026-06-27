import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero.jsx';
import ImpactAtZano from '../components/sections/ImpactAtZano.jsx';
import ZanoSelectedWork from '../components/sections/ZanoSelectedWork.jsx';
import ProductPhilosophy from '../components/sections/ProductPhilosophy.jsx';
import BeyondTheCode from '../components/sections/BeyondTheCode.jsx';
import CapabilitiesTabs from '../components/sections/CapabilitiesTabs.jsx';
import WhatPeopleValue from '../components/sections/WhatPeopleValue.jsx';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <Hero />
            <ImpactAtZano />
            <ZanoSelectedWork />
            <ProductPhilosophy />
            <BeyondTheCode />
            <CapabilitiesTabs />
            <WhatPeopleValue />
        </motion.div>
    );
}
