import React from "react";
import "./review.css";

// import das imagens dos clientes
import cliente1 from "../../assets/clientes/cliente1.png";
import M from "../../assets/clientes/M.jpg";

const reviews = [
  {
    id: 1,
    nome: "Leirison Marcel Garbin",
    cargo: "",
    comentario:
      "Encontra-se tudo em rodas agricolas, rodoviarias e linha amarela.",
    estrelas: 5,
    imagem: cliente1,
  },
  {
    id: 2,
    nome: "Moacir Galvao",
    cargo: "",
    comentario: "Uma empresa focada na solução em rodas grandes ou pequenas ..leve sua nessecidade a eles e juntos acharão uma solução com preços dentro de um parâmetro adequado....não sei da idade da empresa ...mas conhecem muito sobre rodas....pode confiar",
    estrelas: 5,
    imagem: M,
  },
  {
    id: 3,
    nome: "Marina Costa",
    cargo: "Coordenadora de TI • SoftSolutions",
    comentario:
      "Soluções inovadoras e suporte ágil. Eles não apenas entregaram o que prometeram, mas foram além, trazendo insights valiosos que melhoraram nossos processos internos.",
    estrelas: 5,
    imagem: "https://i.pravatar.cc/80?img=7",
  },
  {
    id: 4,
    nome: "Ana Paula",
    cargo: "Diretora de Marketing • VisionX",
    comentario:
      "Atendimento excepcional! Sempre dispostos a ajudar e propor novas ideias. Com certeza uma parceria de longo prazo.",
    estrelas: 5,
    imagem: "https://i.pravatar.cc/80?img=10",
  },
];

const renderStars = (qtd) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star ${i < qtd ? "filled" : ""}`}>
      ★
    </span>
  ));
};

function Review({ speed = 30, direction = "left" }) {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Avaliações de Clientes</h2>

      <div className="reviews-container">
        <div
          className={`reviews-track ${direction}`}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >

          {reviews.map((review) => (
            <div key={`first-${review.id}`} className="review-card">
              <div className="review-stars">{renderStars(review.estrelas)}</div>
              <p className="review-text">"{review.comentario}"</p>
              <div className="review-user">
                <img src={review.imagem} alt={review.nome} />
                <div>
                  <h4>{review.nome}</h4>
                  <span>{review.cargo}</span>
                </div>
              </div>
            </div>
          ))}

          {reviews.map((review) => (
            <div key={`second-${review.id}`} className="review-card">
              <div className="review-stars">{renderStars(review.estrelas)}</div>
              <p className="review-text">"{review.comentario}"</p>
              <div className="review-user">
                <img src={review.imagem} alt={review.nome} />
                <div>
                  <h4>{review.nome}</h4>
                  <span>{review.cargo}</span>
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
