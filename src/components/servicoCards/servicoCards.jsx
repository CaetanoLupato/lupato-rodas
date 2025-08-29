import React from "react";
import "./servicoCards.css";

const ServicoCards = ({ title, items, buttonText, buttonLink }) => {
  return (
    <section className="servico-cards-section">
      <h2 className="servico-cards-title">{title}</h2>
      <div className="servico-cards-container">
        {items.map((item, index) => (
          <div className="servico-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicoCards;
