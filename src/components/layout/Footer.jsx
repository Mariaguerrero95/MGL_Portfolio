import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../lib/smooth-scroll.js';

export default function Footer() {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSectionLink = (event, id) => {
        event.preventDefault();
        const scroll = () => requestAnimationFrame(() => scrollToSection(id));

        if (location.pathname !== '/') {
            navigate('/');
            window.setTimeout(scroll, 80);
            return;
        }

        scroll();
    };

    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div className="site-footer__brand">
                    <div className="site-footer__brand-row">
                        <span className="site-footer__logo">M</span>
                        <div>
                            <p className="site-footer__brand-name">MARÍA GUERRERO LOBO</p>
                            <p className="site-footer__role">{t('footer.role')}</p>
                        </div>
                    </div>
                </div>

                <div className="site-footer__col">
                    <p className="eyebrow">{t('footer.navigation')}</p>
                    <ul>
                        <li><a href="/#work" onClick={(event) => handleSectionLink(event, 'work')}>{t('header.work')}</a></li>
                        <li><a href="/#experience" onClick={(event) => handleSectionLink(event, 'experience')}>{t('header.experience')}</a></li>
                        <li><a href="/#skills" onClick={(event) => handleSectionLink(event, 'skills')}>{t('header.skills')}</a></li>
                        
                        <li><a href="/#testimonials" onClick={(event) => handleSectionLink(event, 'testimonials')}>{t('header.testimonials')}</a></li>
                        <li><Link to="/contact">{t('header.contact')}</Link></li>
                    </ul>
                </div>

                <div className="site-footer__col">
                    <p className="eyebrow">{t('footer.more')}</p>
                    <ul>
                        <li><a href="https://github.com/Mariaguerrero95" target="_blank" rel="noreferrer">{t('footer.links.github')}</a></li>
                        <li><a href="https://www.linkedin.com/in/mariaguerrero-developer/" target="_blank" rel="noreferrer">{t('footer.links.linkedin')}</a></li>
                        <li><a href="mailto:mariaguerrero1995@outlook.es">{t('footer.links.email')}</a></li>
                        <li><Link to="/playground">Playground</Link></li>
                    </ul>
                </div>

                <div className="site-footer__col">
                    <p className="eyebrow site-footer__availability">
                        <span className="dot" /> {t('footer.availability')}
                    </p>
                    <ul>
                        {t('contact.availability.items', { returnObjects: true }).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container site-footer__legal">
                <p>{t('footer.rights')}</p>
            </div>
        </footer>
    );
}
