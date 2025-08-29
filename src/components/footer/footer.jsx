import React from "react";
import { FaInstagram, FaFacebookF, FaCommentDots, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-title">Lupato Rodas</h3>
          <p className="footer-text">
            Há cinco gerações recuperando rodas com excelência e dedicação. Qualidade, agilidade e segurança são nossos maiores compromissos.
          </p>
          <h3 className="footer-title redes-sociais">Redes Sociais</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/lupatorodas/" target="blank"><FaInstagram /></a>
            <a href="https://wa.me/5516981672009" target="blank"><FaCommentDots /></a>
            <a href="https://www.facebook.com/lupatorodas/?locale=pt_BR" target="blank"><FaFacebookF /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Empresa</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="produtos">Produtos</a></li> 
            <li><a href="#cards">Serviços</a></li>
            <li><a href="#localizacao">Como chegar</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title contato">Contato</h3>
          <p><FaMapMarkerAlt /> Marginal Rodovia Anhanguera, 319<br />Ribeirão Preto, SP - 14070-730</p>
          <p><FaPhone /> (16) 98167-2009</p>
          <p><FaEnvelope /> lupato@terra.com.br</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>©Lupato Peças e Serviços Ltda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
