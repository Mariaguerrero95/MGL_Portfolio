import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { TbArrowLeft, TbArrowRight, TbQuote } from 'react-icons/tb';
import SectionLabel from '../ui/SectionLabel.jsx';

const KEYS = ['zanoClient', 'zanoColleague1', 'zanoColleague2'];

export default function Testimonials() {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const items = KEYS.map((k) => t(`testimonials.items.${k}`, { returnObjects: true }));

    const go = (dir) => {
        setIndex((i) => (i + dir + items.length) % items.length);
    };

    const current = items[index];

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <header className="section-head">
                    <SectionLabel>{t('testimonials.kicker')}</SectionLabel>
                </header>

                <div className="testimonials__stage">
                    <AnimatePresence mode="wait">
                        <motion.figure
                            key={index}
                            className="testimonials__card card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TbQuote className="testimonials__quote-icon" />
                            <blockquote className="testimonials__quote serif">
                                “{current.quote}”
                            </blockquote>
                            <figcaption className="testimonials__author">
                                <span className="testimonials__author-avatar" aria-hidden="true">
                                    {current.author.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                                </span>
                                <span>{current.author}</span>
                            </figcaption>
                        </motion.figure>
                    </AnimatePresence>

                    <div className="testimonials__controls">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => go(-1)}
                            data-cursor="magnet"
                        >
                            <TbArrowLeft />
                        </button>
                        <div className="testimonials__dots">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    aria-current={i === index}
                                    className={i === index ? 'is-active' : ''}
                                    onClick={() => setIndex(i)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => go(1)}
                            data-cursor="magnet"
                        >
                            <TbArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
