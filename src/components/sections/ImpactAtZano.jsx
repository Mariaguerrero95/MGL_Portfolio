import { motion } from 'framer-motion';

const cardVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
};

export default function ImpactAtZano() {
    return (
        <section className="section impact-at-zano" aria-label="Experience">
            <div className="container">
                <div className="impact-at-zano__top">
                    <div className="impact-at-zano__intro">
                        <div className="kicker impact-at-zano__kicker">Experience</div>
                    </div>

                    <motion.aside
                        className="impact-at-zano__card"
                        aria-label="Zano summary"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariant}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="impact-at-zano__card-top">
                            <div className="impact-at-zano__meta-left">
                                <div className="impact-at-zano__left-head">
                                    <div className="impact-at-zano__company">Zano</div>
                                </div>
                                <div className="impact-at-zano__role">Product Engineer</div>
                            </div>

                            <div className="impact-at-zano__meta-sep" aria-hidden="true" />

                            <div className="impact-at-zano__meta-mid">
                                <div className="impact-at-zano__dates">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span>November 2024 – July 2025</span>
                                </div>
                                <div className="impact-at-zano__location">Remote</div>
                            </div>
                        </div>

                        <p className="impact-at-zano__card-excerpt">
                            Worked across product design, frontend engineering, backend development (Python) and client
                            collaboration. Contributed to AI-assisted systems, internal platforms and client-facing products
                            while supporting a junior team member and helping them grow.
                        </p>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
