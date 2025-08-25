import React from "react";
import './cards.css';

const Cards = () => {
    return (
        <section id="cards" className="cards-section">
            <h2 className="cards-title">SOLUÇÕES LUPATO!</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Recondicionamento de Rodas</h3>
                    <p>Sua roda sofreu danos? A gente resolve! Reparos com segurança e confiabilidade.</p>
                </div>
                <div className="card">
                    <h3>Rodas Novas</h3>
                    <p>Oferecemos uma ampla variedade de rodas novas das principais marcas do mercado!</p>
                </div>
                <div className="card">
                    <h3>Rodas Seminovas</h3>
                    <p>Quer economizar sem abrir mão da qualidade? Confira nossas rodas seminovas com garantia!</p>
                </div>
            </div>

            <div className="cards-button-container">
                <a href="/servicos" className="cards-main-button">Ver todos os serviços</a>
            </div>
        </section>
    );
};

export default Cards;