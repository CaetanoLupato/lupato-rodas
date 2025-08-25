import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar-container">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo Lupato Rodas" />
                </Link>
            </div>

            <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
                    <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Nós</a></li>
                    <li><a href="servicos" onClick={() => setMenuOpen(false)}>Serviços</a></li>
                    <li><a href="/" onClick={() => setMenuOpen(false)}>Produtos</a></li>
                    <li><a href="#localizacao" onClick={() => setMenuOpen(false)}>Como chegar</a></li>
                </ul>
            </nav>
            
            <div 
                className={`menu-icon ${menuOpen ? "open" : ""}`} 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </header>
    );
}

export default Navbar;
