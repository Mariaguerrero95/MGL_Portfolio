import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({ theme: 'dark', toggle: () => {}, setTheme: () => {} });

const STORAGE_KEY = 'mgl-theme';

function applyTheme(theme) {
    const body = document.body;
    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(`theme-${theme}`);
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    useEffect(() => {
        applyTheme(theme);
        try { window.localStorage.setItem(STORAGE_KEY, theme); } catch { /* ignore */ }
    }, [theme]);

    const setTheme = useCallback((next) => setThemeState(next), []);
    const toggle = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), []);

    return (
        <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = { children: PropTypes.node };

export function useTheme() {
    return useContext(ThemeContext);
}
