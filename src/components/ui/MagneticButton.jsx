import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function MagneticButton({ as: Tag = 'button', children, className = '', strength = 18, ...rest }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate3d(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px, 0)`;
    };

    const reset = () => {
        if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)';
    };

    return (
        <motion.div
            className={`magnet ${className}`}
            onMouseMove={handleMove}
            onMouseLeave={reset}
        >
            <Tag ref={ref} data-cursor="magnet" {...rest}>
                {children}
            </Tag>
        </motion.div>
    );
}

MagneticButton.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node,
    className: PropTypes.string,
    strength: PropTypes.number,
};
