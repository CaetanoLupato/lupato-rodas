import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);
  const closeAndTop = () => { close(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <header className={`navbar-container${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={close}>
          <img src={logo} alt="Logo Lupato Rodas" />
        </Link>
      </div>

      <nav className={`navbar-links${menuOpen ? ' active' : ''}`} aria-label="Menu principal">
        <ul>
          <li><Link smooth to="/#inicio" onClick={close}>Início</Link></li>
          <li><Link smooth to="/#sobre" onClick={close}>Sobre Nós</Link></li>
          <li><Link to="/servicos" onClick={closeAndTop}>Serviços</Link></li>
          <li className="nav-cta-item">
            <Link smooth to="/#localizacao" onClick={close} className="nav-cta">
              Fale com a gente
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className={`menu-icon${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
    </header>
  );
}

export default Navbar;
