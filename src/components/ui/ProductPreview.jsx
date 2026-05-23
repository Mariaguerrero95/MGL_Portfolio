import PropTypes from 'prop-types';
import { TbArrowRight } from 'react-icons/tb';

// Icon mock for project preview cards (no real screenshots yet).
// Renders an editorial SVG dashboard that matches dark/light theme.
export default function ProductPreview({ variant = 'default', accent = 'var(--accent)' }) {
    return (
        <svg viewBox="0 0 320 200" role="img" aria-label="Product preview" className="preview-svg">
            <defs>
                <linearGradient id={`bg-${variant}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="var(--surface-2)" />
                    <stop offset="1" stopColor="var(--surface)" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="320" height="200" rx="10" fill={`url(#bg-${variant})`} />
            {/* sidebar */}
            <rect x="10" y="10" width="64" height="180" rx="6" fill="var(--bg-elev)" opacity="0.7" />
            <circle cx="42" cy="32" r="6" fill={accent} opacity="0.9" />
            <rect x="22" y="50" width="40" height="6" rx="3" fill="var(--border-strong)" />
            <rect x="22" y="64" width="32" height="6" rx="3" fill="var(--border)" />
            <rect x="22" y="78" width="36" height="6" rx="3" fill="var(--border)" />
            <rect x="22" y="92" width="28" height="6" rx="3" fill="var(--border)" />
            {/* main */}
            <rect x="84" y="10" width="226" height="42" rx="6" fill="var(--bg-elev)" opacity="0.7" />
            <rect x="94" y="22" width="100" height="8" rx="4" fill="var(--text-faint)" opacity="0.6" />
            <rect x="94" y="36" width="60" height="6" rx="3" fill="var(--border)" />
            {/* table rows */}
            {[0,1,2,3,4].map((i) => (
                <g key={i} transform={`translate(84, ${64 + i * 24})`}>
                    <rect x="0" y="0" width="226" height="18" rx="4" fill="var(--bg-elev)" opacity="0.5" />
                    <rect x="8" y="6" width="70" height="6" rx="3" fill="var(--text-faint)" opacity="0.55" />
                    <rect x="86" y="6" width="40" height="6" rx="3" fill="var(--border)" />
                    <rect x="134" y="6" width="50" height="6" rx="3" fill="var(--border)" />
                    <rect x="192" y="4" width="28" height="10" rx="5" fill={accent} opacity={i === 0 ? 0.5 : 0.18} />
                </g>
            ))}
        </svg>
    );
}

ProductPreview.propTypes = {
    variant: PropTypes.string,
    accent: PropTypes.string,
};

export function PreviewArrow() {
    return (
        <span className="preview-arrow" data-cursor="magnet">
            <TbArrowRight />
        </span>
    );
}
