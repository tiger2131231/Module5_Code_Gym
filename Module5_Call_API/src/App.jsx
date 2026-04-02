import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home.jsx";
import PlayerAdd from "./pages/PlayerAdd.jsx";
import {Route, Routes, Navigate} from "react-router-dom"; // ✅ FIX
import Header from "./components/Header.jsx";
import PlayerList from "./pages/PlayerList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/player" element={<PlayerList/>}/>
                <Route path="/player/add" element={<PlayerAdd/>}/>

                {/* optional */}
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <ToastContainer/>
            <Footer/>
        </>
    )
}

export default App