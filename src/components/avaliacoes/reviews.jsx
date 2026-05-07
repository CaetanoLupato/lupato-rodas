import React, { useRef, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./review.css";

import cliente1 from "../../assets/clientes/cliente1.png";
import M from "../../assets/clientes/M.jpg";
import D from "../../assets/clientes/D.png";
import A from "../../assets/clientes/Á.png";
import Guilherme from "../../assets/clientes/Guilherme.png";

const reviews = [
  { id: 1, nome: "Leirison Marcel Garbin", comentario: "Encontra-se tudo em rodas agrícolas, rodoviárias e linha amarela. Excelente empresa!", estrelas: 5, imagem: cliente1 },
  { id: 2, nome: "Moacir Galvão",          comentario: "Uma empresa focada na solução em rodas grandes ou pequenas. Levei minha necessidade a eles e juntos achamos uma solução com preços adequados. Pode confiar!", estrelas: 5, imagem: M },
  { id: 3, nome: "Daniel Dorazzi",          comentario: "Recomendo a empresa, serviço com qualidade e atendimento top!", estrelas: 5, imagem: D },
  { id: 4, nome: "Álvaro Oliveira",         comentario: "Recomendo! Ótimo atendimento e muita qualidade no serviço.", estrelas: 5, imagem: A },
  { id: 5, nome: "Guilherme Gouveia",       comentario: "Atendimento e serviço excelentes. Recomendo sem hesitar.", estrelas: 5, imagem: Guilherme },
];

const renderStars = (qtd) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star ${i < qtd ? "filled" : ""}`}>★</span>
  ));

const SPEED = 0.5;

function Review() {
  const containerRef  = useRef(null);
  const trackRef      = useRef(null);
  const animRef       = useRef(null);
  const posRef        = useRef(0);
  const isHovered     = useRef(false);
  const isDragging    = useRef(false);

  // mouse drag state
  const dragStartX    = useRef(0);
  const dragStartPos  = useRef(0);

  // touch drag state
  const touchStartX   = useRef(0);
  const touchStartY   = useRef(0);
  const touchStartPos = useRef(0);
  const isHorizontal  = useRef(null); // null = undecided, true/false after first move

  // animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!isDragging.current && !isHovered.current) {
        const half = track.scrollWidth / 2;
        posRef.current = (posRef.current + SPEED) % half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // touch listeners — passive: false para poder bloquear scroll lateral no mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e) => {
      isDragging.current  = true;
      isHovered.current   = true;
      isHorizontal.current = null;
      touchStartX.current  = e.touches[0].clientX;
      touchStartY.current  = e.touches[0].clientY;
      touchStartPos.current = posRef.current;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;

      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;

      // determina direção predominante na primeira movimentação significativa
      if (isHorizontal.current === null && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        isHorizontal.current = Math.abs(dx) > Math.abs(dy);
      }

      if (!isHorizontal.current) return; // deixa o scroll vertical acontecer normalmente

      e.preventDefault(); // bloqueia o scroll lateral da página

      const half = trackRef.current.scrollWidth / 2;
      const newPos = ((touchStartPos.current - dx) % half + half) % half;
      posRef.current = newPos;
      trackRef.current.style.transform = `translateX(-${newPos}px)`;
    };

    const onTouchEnd = () => {
      isDragging.current   = false;
      isHovered.current    = false;
      isHorizontal.current = null;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove",  onTouchMove,  { passive: false });
    container.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove",  onTouchMove);
      container.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  // mouse handlers
  const onMouseEnter = () => { isHovered.current = true; };
  const onMouseLeave = () => { isHovered.current = false; isDragging.current = false; };

  const onMouseDown = (e) => {
    isDragging.current  = true;
    dragStartX.current  = e.clientX;
    dragStartPos.current = posRef.current;
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const half = trackRef.current.scrollWidth / 2;
    const newPos = ((dragStartPos.current + (dragStartX.current - e.clientX)) % half + half) % half;
    posRef.current = newPos;
    trackRef.current.style.transform = `translateX(-${newPos}px)`;
  };

  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Avaliações de Clientes</h2>

      <div
        ref={containerRef}
        className="reviews-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div ref={trackRef} className="reviews-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              <FaQuoteLeft className="review-quote" />
              <div className="review-stars">{renderStars(review.estrelas)}</div>
              <p className="review-text">"{review.comentario}"</p>
              <div className="review-user">
                <img src={review.imagem} alt={review.nome} draggable={false} loading="lazy" />
                <div>
                  <h4>{review.nome}</h4>
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
