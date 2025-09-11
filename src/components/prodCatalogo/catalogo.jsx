import React, { useState, useEffect, useRef } from "react";
import "./catalogo.css";
import rodasNovas from "../../assets/rodas-novas.jpg";

const rodas = [
  {
    id: 1,
    nome: "Roda Esportiva Aro 17",
    imagem: rodasNovas,
    descricao:
      "Roda esportiva leve, aro 17, acabamento em liga leve e pintura preta.",
  },
  {
    id: 2,
    nome: "Roda Clássica Aro 15",
    imagem: rodasNovas,
    descricao:
      "Modelo clássico, aro 15, ideal para veículos de passeio com estilo retrô.",
  },
  {
    id: 3,
    nome: "Roda Off-road Aro 18",
    imagem: rodasNovas,
    descricao:
      "Roda reforçada para trilhas e uso off-road, aro 18 em alumínio resistente.",
  },
  {
    id: 4,
    nome: "Roda Teste",
    imagem: rodasNovas,
    descricao: "Roda de teste para demonstração do catálogo.",
  },
  {
    id: 5,
    nome: "Roda Teste 2",
    imagem: rodasNovas,
    descricao: "Roda de teste 2 para demonstração do catálogo.",
  },
  {
    id: 6,
    nome: "Roda Teste 3",
    imagem: rodasNovas,
    descricao: "Roda de teste 3 para demonstração do catálogo.",
  },
];

function Catalogo() {
  const [selectedRoda, setSelectedRoda] = useState(null);
  const modalRef = useRef(null);

  // Fechar modal com ESC
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedRoda(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focar no modal quando abrir
  useEffect(() => {
    if (selectedRoda && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedRoda]);

  return (
    <div className="catalogo-container">
      <h2 className="catalogo-title">Catálogo de Rodas</h2>
      <div className="catalogo-grid" role="list">
        {rodas.map((roda) => (
          <article
            key={roda.id}
            className="roda-card"
            role="listitem"
            tabIndex={0}
            aria-label={`Produto: ${roda.nome}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedRoda(roda);
              }
            }}
          >
            <img src={roda.imagem} alt={roda.nome} className="roda-img" />
            <h3 className="roda-nome">{roda.nome}</h3>
            <button
              onClick={() => setSelectedRoda(roda)}
              className="roda-btn"
              aria-haspopup="dialog"
              aria-expanded={selectedRoda?.id === roda.id}
            >
              Ver mais
            </button>
          </article>
        ))}
      </div>

      {selectedRoda && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRoda(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          ref={modalRef}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <h2 id="modal-title">{selectedRoda.nome}</h2>
            <img src={selectedRoda.imagem} alt={selectedRoda.nome} />
            <p>{selectedRoda.descricao}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedRoda(null)}
              aria-label="Fechar modal"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;