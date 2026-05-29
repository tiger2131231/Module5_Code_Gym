import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home.jsx";
import List from "./pages/List.jsx";
import Add from "./pages/Add.jsx";
import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/songs" replace />} />
                <Route path="home" element={<Home/>}/>
                <Route path="songs" element={<List/>}/>
                <Route path="add" element={<Add/>}/>
            </Route>
        </Routes>
        <ToastContainer/>
    </>
    )
}

export default App;
