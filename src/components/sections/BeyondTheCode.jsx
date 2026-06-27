import { resolveIcon } from '../../lib/icon-resolver.js';
import SectionLabel from '../ui/SectionLabel.jsx';

const CARDS = [
    {
        id: 'client-collaboration',
        title: 'Client Collaboration',
        body: 'Worked directly with clients, gathered requirements and translated ideas into products.',
        icon: 'TbAccessible',
    },
    {
        id: 'product-thinking',
        title: 'Product Thinking',
        body: 'Participated in discovery, UX decisions and feature prioritization.',
        icon: 'TbBrain',
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        body: 'Built AI-assisted workflows, integrations and productivity systems.',
        icon: 'TbRobot',
    },
    {
        id: 'mentoring',
        title: 'Mentoring & Leadership',
        body: 'Supported and onboarded a junior intern, reviewing work and helping them grow.',
        icon: 'TbBrandStorybook',
    },
];

export default function BeyondTheCode() {
    return (
        <section className="beyond-the-code section" id="beyond-the-code">
            <div className="container">
                <header className="section-head">
                    <SectionLabel>BEYOND THE CODE</SectionLabel>
                </header>

                <div className="beyond-the-code__grid">
                    {CARDS.map((c) => {
                        const Icon = resolveIcon(c.icon);
                        return (
                            <article key={c.id} className="beyond-card" aria-labelledby={`btc-${c.id}`}>
                                <div className="beyond-card__icon" aria-hidden="true">
                                    <Icon />
                                </div>
                                <div className="beyond-card__body">
                                    <h3 id={`btc-${c.id}`} className="beyond-card__title">{c.title}</h3>
                                    <p className="beyond-card__text">{c.body}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
