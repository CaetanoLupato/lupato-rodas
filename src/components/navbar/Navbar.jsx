import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // <-- Import HashLink
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar-container">
            <div className="navbar-logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo Lupato Rodas" />
                </Link>
            </div>

            <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    
                    <li>
                        <Link smooth to="/#inicio" onClick={() => setMenuOpen(false)}>
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link smooth to="/#sobre" onClick={() => setMenuOpen(false)}>
                            Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicos" onClick={() => {setMenuOpen(false);
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}
                        >
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to="/produtos" onClick={() => setMenuOpen(false)}>
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link smooth to="/#localizacao" onClick={() => setMenuOpen(false)}>
                            Como Chegar
                        </Link>
                    </li>
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
