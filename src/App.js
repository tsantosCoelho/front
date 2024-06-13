import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "../src/components/Home";
import About from "../src/components/About";
import Servicess from "./components/Servicess";
import Location from "./components/Location";
import LoginPage from "./components/Login";
import ManagementPage from "./pages/ManagementPage/";
import ServicosPage from './pages/ServicosPage/index'



import "./SCSS/style.scss";

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Helmet>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
      </Routes>

      <Home />
      <About />
      <Servicess />
      <Location />
    </Router>
  );
}

export default App;
