import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Home() {
    return (
        <div className="bg-home" id="inicio">
            <header>
                <nav className="header-content container">
                    <div className="header-icons">
                        <a id="iconsI" href="https://www.instagram.com/">
                            <FaInstagram className="fa-brands Fa-Instagram fa-2x" />
                        </a>
                        <a id="iconsI" href="https://www.facebook.com/?locale=pt_BR">
                            <FaFacebook className="fa-brands Fa-Facebook fa-2x" />
                        </a>
                    </div>
                    <div className="header-logo">
                        <img src={logo} alt="Logo barbearia" />
                    </div>
                    <div>
                        <Link to="/login" className="header-button">
                            Login
                        </Link>
                    </div>
                </nav>
                <main className="hero container">
                    <h1>Bem-vindo à T-BarberShop, onde estilo e excelência se encontram para transformar o seu visual.</h1>
                    <p>Horário de funcionamento: 09:00 às 19:00</p>
                    <div className="hero-button">
                        <Link className="hero-button2" to="/">Início</Link>
                        <Link className="hero-button3" to="/about">Sobre</Link>
                        <Link className="hero-button4" to="/services">Serviços</Link>
                        <Link className="hero-button5" to="/location">Localização</Link>
                    </div>
                </main>
            </header>
        </div>
    );
}

export default Home;
