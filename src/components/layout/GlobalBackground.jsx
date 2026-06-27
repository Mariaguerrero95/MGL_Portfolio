import { useEffect, useRef } from 'react';

function getCSSVar(name) {
    try { return getComputedStyle(document.body).getPropertyValue(name).trim(); } catch { return null; }
}

export default function GlobalBackground() {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const canvas = canvasRef.current;
        if (!canvas || prefersReduced || !canvas.getContext) return;

        const ctx = canvas.getContext('2d');
        let width = 0; let height = 0;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.max(300, Math.floor(width * dpr));
            canvas.height = Math.max(200, Math.floor(height * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        const blobs = [
            { x: 0.2, y: 0.15, r: 0.6, speed: 0.00005, px: 0, py: 0 },
            { x: 0.85, y: 0.25, r: 0.45, speed: 0.00004, px: 0, py: 0 },
            { x: 0.5, y: 0.8, r: 0.9, speed: 0.00003, px: 0, py: 0 },
        ];

        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const base = getCSSVar('--canvas-base') || '#07111F';
            const glow = getCSSVar('--ambient-glow') || 'rgba(168,164,255,0.22)';
            const haze = getCSSVar('--ambient-haze') || 'rgba(168,164,255,0.06)';
            const warm = getCSSVar('--ambient-warm') || 'rgba(244,237,224,0.05)';

            // subtle base fill to help low-contrast areas
            ctx.fillStyle = base;
            ctx.globalAlpha = 1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            blobs.forEach((b, i) => {
                // animate slowly
                const t = time * b.speed * (i + 1);
                const cx = (b.x + Math.sin(t) * 0.02) * width;
                const cy = (b.y + Math.cos(t * 0.8) * 0.02) * height;
                const radius = Math.min(width, height) * b.r * 0.6;

                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
                grad.addColorStop(0, glow);
                grad.addColorStop(0.45, haze);
                grad.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = grad;
                ctx.globalAlpha = 0.95;
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // warm subtle layer
            ctx.globalCompositeOperation = 'screen';
            const grad2 = ctx.createLinearGradient(0, 0, width, height);
            grad2.addColorStop(0, warm);
            grad2.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.globalAlpha = 0.06;
            ctx.fillStyle = grad2;
            ctx.fillRect(0, 0, width, height);

            rafRef.current = requestAnimationFrame(draw);
        }

        function start() {
            resize();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(draw);
        }

        start();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // render canvas (absolute, behind content). If reduced-motion or no canvas, CSS fallback will show.
    return (
        <div aria-hidden="true" style={{position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none'}}>
            <canvas ref={canvasRef} style={{width: '100%', height: '100%', display: 'block'}} />
        </div>
    );
}
