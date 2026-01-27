import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = () => {
    return (
        <section id="cards" className="cards-section">
            <h2 className="cards-title">SOLUÇÕES LUPATO!</h2>
            <div className  ="cards-container">
                <div className="card">
                    <h3>Recondicionamento de Rodas</h3>
                    <p>Problemas com suas rodas? Restauramos com qualidade e segurança, deixando como novas!</p>
                </div>
                <div className="card">
                    <h3>Rodas Novas</h3>
                    <p>Trabalhamos com a venda de rodas novas de alto padrão, oferecendo um produto de qualidade e confiança.</p>
                </div>
                <div className="card">
                    <h3>Rodas Seminovas</h3>
                    <p>Quer economizar sem abrir mão da qualidade e segurança? Confira nossas rodas seminovas!</p>
                </div>
            </div>

            <div className="cards-button-container">
           <Link
  to="/servicos" className="cards-main-button" onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  Ver mais
</Link>   
            </div>
        </section>
    );
};

export default Cards;