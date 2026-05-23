import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TbArrowLeft } from 'react-icons/tb';

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <motion.div
            className="not-found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="container not-found__inner">
                <span className="not-found__code serif">404</span>
                <h1>{t('notFound.title')}</h1>
                <p>{t('notFound.body')}</p>
                <Link to="/" className="btn btn--primary" data-cursor="magnet">
                    <TbArrowLeft /> {t('notFound.cta')}
                </Link>
            </div>
        </motion.div>
    );
}
