import { useEffect, useRef, useState } from 'react';

// Custom magnetic cursor. Disabled on touch & reduced-motion.
export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const touch = window.matchMedia('(hover: none)').matches;
        if (reduce || touch) return;
        setEnabled(true);

        const dot = dotRef.current;
        const ring = ringRef.current;
        let mx = window.innerWidth / 2, my = window.innerHeight / 2;
        let rx = mx, ry = my;
        let raf;

        const move = (e) => { mx = e.clientX; my = e.clientY; };
        const enterMagnet = () => ring?.classList.add('is-active');
        const leaveMagnet = () => ring?.classList.remove('is-active');

        const onOver = (e) => {
            const target = e.target;
            if (target?.closest?.('[data-cursor="magnet"], a, button')) enterMagnet();
            else leaveMagnet();
        };

        const loop = () => {
            rx += (mx - rx) * 0.18;
            ry += (my - ry) * 0.18;
            if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
            if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', onOver);
        raf = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', onOver);
            cancelAnimationFrame(raf);
        };
    }, []);

    if (!enabled) return null;
    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
}
