import PropTypes from 'prop-types';

export default function SectionLabel({ children, className = '' }) {
    return (
        <span className={`section-label ${className}`}>
            <span className="section-label__dot" />
            <span>{children}</span>
        </span>
    );
}

SectionLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
