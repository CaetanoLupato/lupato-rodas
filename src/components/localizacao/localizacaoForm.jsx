import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logoMaps from "../../assets/logo-area-maps.png";
import "./localizacaoForm.css";

export default function LocalizacaoForm() {
  const [nome, setNome] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `*Novo contato pelo site!*%0A*Nome:* ${nome}%0A*Cidade/Estado:* ${cidadeEstado}%0A*Email:* ${email}%0A*Mensagem:* ${mensagem}`;
    window.open(`https://wa.me/5516981672009?text=${texto}`, "_blank");
    setNome(""); setCidadeEstado(""); setEmail(""); setMensagem("");
  };

  return (
    <section id="localizacao" className="localizacao-wrapper">
      <div className="localizacao-inner">
        <div className="form-section">
          <div className="form-header">
            <div className="icon-circle">
              <img src={logoMaps} alt="Ícone localização" />
            </div>
            <h2>Vamos Conversar?</h2>
            <p>Estamos aqui para ajudar você</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Seu nome completo" value={nome}
                onChange={e => setNome(e.target.value)} required />
            </div>

            <div className="input-row">
              <div className="input-group">
                <FaMapMarkerAlt className="input-icon" />
                <input type="text" placeholder="Cidade / Estado" value={cidadeEstado}
                  onChange={e => setCidadeEstado(e.target.value)} required />
              </div>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Seu melhor e-mail" value={email}
                  onChange={e => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="input-group">
              <textarea placeholder="Qual produto ou serviço você procura?"
                value={mensagem} onChange={e => setMensagem(e.target.value)} required />
            </div>

            <button type="submit" className="submit-btn">Enviar via WhatsApp</button>
          </form>
        </div>

        <div className="map-section">
          <iframe
            title="Mapa Lupato Rodas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2265507418366!2d-47.81048368503477!3d-21.176639985915173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b8d0a3e21bb1%3A0x5f9eac1e534a4f89!2sMarginal%20Rodovia%20Anhanguera%2C%20319%20-%20Parque%20Industrial%20Avelino%20Alves%20Palma%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1697058421987!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
