import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import '@fontsource-variable/inter/index.css';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';

import './Languages_library/i18n.js';
import './scss/index.scss';

import { ThemeProvider } from './lib/theme.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </StrictMode>,
);
