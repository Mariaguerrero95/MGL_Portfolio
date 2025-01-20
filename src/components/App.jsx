import "../scss/App.scss";
import Landing from "./Landing.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Landing />} /> 
                    <Route path="/portfolio" element={<Main />} />
                </Routes> 
        </>
);
}

export default App

