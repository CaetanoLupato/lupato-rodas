import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./GaleriaBento.css";

import img1 from "../../assets/roda9.jpg";
import img2 from "../../assets/roda1.jpg";
import img3 from "../../assets/fachada.png";
import img4 from "../../assets/roda2.jpg";
import img5 from "../../assets/servico1.png";
import img6 from "../../assets/roda10.jpg";
import img7 from "../../assets/roda6.jpg";
import img8 from "../../assets/roda5.png";

const fotos = [
  { src: img1,  area: "a", alt: "Rodas pintadas Lupato" },
  { src: img2,  area: "b", alt: "Rodas novas para caminhão" },
  { src: img3,  area: "c", alt: "Fachada Lupato Rodas" },
  { src: img4,  area: "d", alt: "Roda 295 recondicionada" },
  { src: img5,  area: "e", alt: "Roda serra recondicionada" },
  { src: img6,  area: "f", alt: "Rodas para caminhão" },
  { src: img7,  area: "g", alt: "Roda 275 nova" },
  { src: img8,  area: "h", alt: "Rodas 295 recondicionadas" },
];

const fadeUp = {
  hidden: { opacity: 0, scale: 0.97 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.07 },
  }),
};

export default function GaleriaBento() {
  const [lightbox, setLightbox] = useState(null); // índice da foto aberta

  const fechar = useCallback(() => setLightbox(null), []);

  const anterior = useCallback(() =>
    setLightbox((i) => (i - 1 + fotos.length) % fotos.length), []);

  const proximo = useCallback(() =>
    setLightbox((i) => (i + 1) % fotos.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const fn = (e) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proximo();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox, fechar, anterior, proximo]);

  // bloqueia scroll do body enquanto lightbox aberto
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className="galeria-section">
      <motion.div
        className="galeria-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="galeria-label">Nosso trabalho</p>
        <div className="galeria-divider" />
        <h2>Qualidade que você pode ver</h2>
        <p className="galeria-hint-mobile">Deslize para ver mais • toque para ampliar</p>
      </motion.div>

      {/* Desktop — Bento Grid */}
      <div className="bento-grid">
        {fotos.map(({ src, alt, area }, i) => (
          <motion.button
            key={i}
            className={`bento-item bento-${area}`}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            onClick={() => setLightbox(i)}
            aria-label={`Ampliar: ${alt}`}
          >
            <img src={src} alt={alt} loading="lazy" />
            <div className="bento-overlay">
              <span className="bento-zoom">&#x2b;</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Mobile — Swiper horizontal */}
      <div className="galeria-mobile">
        <Swiper
          modules={[Pagination, FreeMode]}
          pagination={{ clickable: true }}
          freeMode
          slidesPerView={1.25}
          spaceBetween={12}
          className="galeria-swiper"
        >
          {fotos.map(({ src, alt }, i) => (
            <SwiperSlide key={i}>
              <button
                className="galeria-slide-btn"
                onClick={() => setLightbox(i)}
                aria-label={`Ampliar: ${alt}`}
              >
                <img src={src} alt={alt} loading="lazy" />
                <div className="bento-overlay">
                  <span className="bento-zoom">&#x2b;</span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={fechar}
          >
            {/* painel central — clique aqui NÃO fecha */}
            <motion.div
              className="lightbox-panel"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fotos[lightbox].src}
                alt={fotos[lightbox].alt}
                className="lightbox-img"
              />

              <button className="lightbox-close" onClick={fechar} aria-label="Fechar">
                <FiX />
              </button>

              <button className="lightbox-prev" onClick={anterior} aria-label="Anterior">
                <FiChevronLeft />
              </button>

              <button className="lightbox-next" onClick={proximo} aria-label="Próxima">
                <FiChevronRight />
              </button>

              <p className="lightbox-caption">{fotos[lightbox].alt}</p>
              <span className="lightbox-counter">
                {lightbox + 1} / {fotos.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
