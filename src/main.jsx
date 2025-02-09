import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import App from './App.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Logement from './Components/Logement/Logement.jsx'
import Propos from "./Components/A propos/Propos.jsx"
import Page from "../src/Components/Page/Page.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/propos" element={<Propos/>} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/page" element={<Page />} />
        </Routes>
    </BrowserRouter>
)
