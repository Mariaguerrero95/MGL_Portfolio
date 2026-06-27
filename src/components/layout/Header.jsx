import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../lib/theme.jsx';
import { scrollToSection } from '../../lib/smooth-scroll.js';
import { TbSun, TbMoon, TbMenu2, TbX } from 'react-icons/tb';

export default function Header() {
    const { t, i18n } = useTranslation();
    const { theme, toggle } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setOpen(false); }, [location.pathname]);

    const navItems = [
        { id: 'work', href: '/#work' },
        { id: 'experience', href: '/#experience' },
        { id: 'skills', href: '/#skills' },
        { id: 'testimonials', href: '/#testimonials' },
        { id: 'contact', href: '/contact', route: true },
    ];

    const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');

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
        <motion.header
            className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="site-header__inner container">
                <Link to="/" className="site-header__brand" aria-label="Home">
                    <span className="site-header__logo">M</span>
                    <span className="site-header__brand-name">{t('header.brand')}</span>
                </Link>
                

                <nav className="site-header__nav" aria-label="Primary">
                    {navItems.map((item) =>
                        item.route ? (
                            <NavLink key={item.id} to={item.href} className="site-header__link">
                                {t(`header.${item.id}`)}
                            </NavLink>
                        ) : (
                            <a
                                key={item.id}
                                href={item.href}
                                className="site-header__link"
                                onClick={(event) => handleSectionLink(event, item.id)}
                            >
                                {t(`header.${item.id}`)}
                            </a>
                        )
                    )}
                </nav>

                <div className="site-header__actions">
                    <button
                        type="button"
                        onClick={toggleLang}
                        className="site-header__lang"
                        aria-label={t('header.toggleLanguage')}
                    >
                        {i18n.language === 'en' ? 'EN' : 'ES'}
                    </button>

                    <button
                        type="button"
                        onClick={toggle}
                        className="site-header__theme"
                        aria-label={t('header.toggleTheme')}
                        data-cursor="magnet"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                {theme === 'dark' ? <TbSun /> : <TbMoon />}
                            </motion.span>
                        </AnimatePresence>
                    </button>

                    {/* avatar removed: photo icon next to theme toggle removed per request */}

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="site-header__menu-btn"
                        aria-label="Menu"
                        aria-expanded={open}
                    >
                        {open ? <TbX /> : <TbMenu2 />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="site-header__mobile"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map((item) =>
                            item.route ? (
                                <NavLink key={item.id} to={item.href} onClick={() => setOpen(false)}>
                                    {t(`header.${item.id}`)}
                                </NavLink>
                            ) : (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={(event) => {
                                        setOpen(false);
                                        handleSectionLink(event, item.id);
                                    }}
                                >
                                    {t(`header.${item.id}`)}
                                </a>
                            )
                        )}
                        <NavLink to="/playground" onClick={() => setOpen(false)}>Playground</NavLink>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
