import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';
import "./Languages_library/i18n.js";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>     
    </StrictMode>,
);
