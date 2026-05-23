import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import Cursor from '../components/ui/Cursor.jsx';

export default function RootLayout() {
    return (
        <>
            <Cursor />
            <Header />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
