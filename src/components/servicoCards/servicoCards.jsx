import React from "react";
import "./servicoCards.css";

const ServicoCards = ({ title, items }) => (
  <section className="servico-cards-section">
    <h2 className="servico-cards-title">{title}</h2>
    <p className="servico-cards-subtitle">Soluções para cada segmento do agronegócio e transporte</p>
    <div className="servico-cards-container">
      {items.map((item, i) => (
        <div className="servico-card" key={i}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicoCards;
