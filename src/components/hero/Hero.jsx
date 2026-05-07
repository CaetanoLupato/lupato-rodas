import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Hero.css";
import heroBg from "../../assets/card-img.png";

function Hero() {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__label">Ribeirão Preto — SP</p>
        <div className="hero__divider" />
        <h1 className="hero__title">
          Recondicionamento<br />e Venda de Rodas
        </h1>
        <p className="hero__sub">
          40 anos de tradição familiar. Buscamos e entregamos com frota própria,<br />
          sem você parar a operação.
        </p>
        <div className="hero__actions">
          <Link
            to="/servicos"
            className="hero__btn hero__btn--primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Ver Serviços
          </Link>
          <HashLink smooth to="/#localizacao" className="hero__btn hero__btn--outline">
            Fale com a gente
          </HashLink>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  );
}

export default Hero;
