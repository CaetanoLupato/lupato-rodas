import React from "react";
import { FaInstagram, FaFacebookF, FaCommentDots, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <p className="footer-brand-name">Lupato Rodas</p>
        <p className="footer-text">
          Há cinco gerações oferecendo soluções em rodas com experiência e confiança.
          Qualidade, rapidez e segurança em cada serviço.
        </p>
        <p className="footer-title" style={{ marginBottom: '0.75rem' }}>Redes Sociais</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/lupatorodas/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://wa.me/5516981672009" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaCommentDots /></a>
          <a href="https://www.facebook.com/lupatorodas/?locale=pt_BR" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-section">
        <p className="footer-title">Empresa</p>
        <ul>
          <li><Link smooth to="/#inicio">Início</Link></li>
          <li><Link smooth to="/#sobre">Sobre Nós</Link></li>
          <li><Link to="/servicos" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Serviços</Link></li>
          <li><Link smooth to="/#localizacao">Como Chegar</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <p className="footer-title">Contato</p>
        <div className="footer-contact-item"><FaMapMarkerAlt /><span>Marginal Rodovia Anhanguera, 319<br />Ribeirão Preto, SP — 14070-730</span></div>
        <div className="footer-contact-item"><FaPhone /><span>(16) 98167-2009</span></div>
        <div className="footer-contact-item"><FaEnvelope /><span>lupato@terra.com.br</span></div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© Lupato Peças e Serviços Ltda. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
