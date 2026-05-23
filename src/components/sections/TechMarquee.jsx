import { MARQUEE_ROWS } from '../../lib/skills-data.js';

export default function TechMarquee() {
    return (
        <section className="marquee" aria-hidden="true">
            {MARQUEE_ROWS.map((row, idx) => (
                <div key={idx} className={`marquee__row marquee__row--${idx % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="marquee__track">
                        {[...row, ...row, ...row].map((item, i) => (
                            <span key={i} className="marquee__item">
                                {item}
                                <span className="marquee__sep" aria-hidden="true">★</span>
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
