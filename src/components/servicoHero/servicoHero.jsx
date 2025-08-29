import React from "react";
import "./servicoHero.css";

function ServicoHero({ title, image }) {
  return (
    <section className="servico-hero">
      <img src={image} alt={title} className="servico-hero-image" />
      <div className="servico-hero-overlay">
        <h1 className="servico-hero-title">{title}</h1>
      </div>
    </section>
  );
}

export default ServicoHero;
