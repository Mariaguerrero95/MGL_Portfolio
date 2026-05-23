import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Playground from './pages/Playground.jsx';
import NotFound from './pages/NotFound.jsx';
import LifeSciences from './pages/case-studies/LifeSciences.jsx';
import Conference from './pages/case-studies/Conference.jsx';
import AIGovernance from './pages/case-studies/AIGovernance.jsx';

import { initSmoothScroll } from './lib/smooth-scroll.js';
import { scrollToTop } from './lib/smooth-scroll.js';

export default function App() {
    const location = useLocation();

    useEffect(() => {
        initSmoothScroll();
    }, []);

    useEffect(() => {
        scrollToTop(true);
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/work/life-sciences" element={<LifeSciences />} />
                    <Route path="/work/conference-platform" element={<Conference />} />
                    <Route path="/work/ai-governance" element={<AIGovernance />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}
