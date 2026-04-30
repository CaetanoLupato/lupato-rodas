import React from "react";
import { motion } from "framer-motion";
import "./review.css";

import cliente1 from "../../assets/clientes/cliente1.png";
import M from "../../assets/clientes/M.jpg";
import D from "../../assets/clientes/D.png";
import Guilherme from "../../assets/clientes/Guilherme.png";

const reviews = [
  { id: 1, nome: "Leirison Marcel Garbin", comentario: "Encontra-se tudo em rodas agrícolas, rodoviárias e linha amarela. Excelente empresa!", estrelas: 5, imagem: cliente1 },
  { id: 2, nome: "Moacir Galvão", comentario: "Uma empresa focada na solução em rodas grandes ou pequenas. Levei minha necessidade a eles e juntos achamos uma solução com preços adequados. Pode confiar!", estrelas: 5, imagem: M },
  { id: 3, nome: "Daniel Dorazzi", comentario: "Recomendo a empresa, serviço com qualidade e atendimento top!", estrelas: 5, imagem: D },
  { id: 4, nome: "Álvaro Oliveira", comentario: "Recomendo! Ótimo atendimento e muita qualidade no serviço.", estrelas: 5, imagem: cliente1 },
  { id: 5, nome: "Guilherme Gouveia", comentario: "Atendimento e serviço excelentes. Recomendo sem hesitar.", estrelas: 5, imagem: Guilherme },
];

const renderStars = (qty) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star${i < qty ? " filled" : ""}`}>★</span>
  ));

function Review({ speed = 32 }) {
  return (
    <section className="reviews-section">
      <motion.div
        className="reviews-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="reviews-label">Depoimentos</p>
        <div className="reviews-divider"></div>
        <h2 className="reviews-title">O que nossos clientes dizem</h2>
      </motion.div>

      <div className="reviews-container">
        <div
          className="reviews-track"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{renderStars(r.estrelas)}</div>
              <p className="review-text">"{r.comentario}"</p>
              <div className="review-user">
                <img src={r.imagem} alt={r.nome} />
                <div>
                  <h4>{r.nome}</h4>
                  <span>Cliente verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
