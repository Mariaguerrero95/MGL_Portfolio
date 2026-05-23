// Smooth scrolling via Lenis, integrated with GSAP ScrollTrigger.
// Respects prefers-reduced-motion.

import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

let lenis = null;

export function initSmoothScroll() {
    if (typeof window === 'undefined') return null;
    if (lenis) return lenis;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return null;

    lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return lenis;
}

export function destroySmoothScroll() {
    if (lenis) {
        lenis.destroy();
        lenis = null;
    }
}

export function scrollToTop(immediate = false) {
    if (lenis) {
        lenis.scrollTo(0, { immediate });
    } else {
        window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
    }
}

export function getLenis() {
    return lenis;
}
