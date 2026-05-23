import { motion } from 'framer-motion';
import ContactCTA from '../components/sections/ContactCTA.jsx';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingTop: 'var(--header-h)' }}
        >
            <ContactCTA />
        </motion.div>
    );
}
