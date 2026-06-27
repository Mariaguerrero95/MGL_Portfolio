import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel.jsx';

export default function ProductPhilosophy() {
    const shouldReduce = useReducedMotion();

    return (
        <section className="section product-philosophy" id="product-philosophy" aria-labelledby="product-philosophy-heading">
            <div className="container">
                <motion.div
                    className="product-philosophy__inner"
                    initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="product-philosophy__lead">
                        <SectionLabel className="section-label--no-dot">PHILOSOPHY</SectionLabel>
                        <h2 id="product-philosophy-heading" className="section-title">Building products beyond code.</h2>
                    </div>

                    <div className="product-philosophy__copy">
                        <p>I enjoy building products where design, engineering and business goals align.</p>
                        <p>My focus is not only writing code, but understanding problems, simplifying workflows and creating experiences that users genuinely enjoy using.</p>
                        <p>I believe the best products come from collaboration, ownership and attention to detail.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
