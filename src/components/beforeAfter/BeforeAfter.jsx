import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaSearchPlus, FaTimes } from "react-icons/fa";
import beforeImg from "../../assets/roda11.jpg";
import afterImg from "../../assets/roda5.png";
import "./BeforeAfter.css";

function BeforeAfter() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section className="ba">
      <motion.div
        className="ba__header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="ba__label">Resultados</p>
        <div className="ba__divider" />
        <h2 className="ba__title">Antes e Depois</h2>
        <p className="ba__sub">
          Do desgaste à renovação: veja a transformação que nossos especialistas realizam em cada roda.
        </p>
      </motion.div>

      <div className="ba__wrapper">
        <motion.div
          className="ba__card"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="ba__img-wrap ba__img-wrap--clickable"
            onClick={() => setLightbox({ src: beforeImg, alt: "Rodas antes do recondicionamento" })}
          >
            <img src={beforeImg} alt="Rodas antes do recondicionamento" />
            <span className="ba__badge ba__badge--before">Antes</span>
            <span className="ba__zoom-icon"><FaSearchPlus /></span>
          </div>
          <div className="ba__card-info">
            <h4>Estado original</h4>
            <p>Rodas com desgaste, corrosão e danos estruturais recebidas para análise técnica.</p>
          </div>
        </motion.div>

        <motion.div
          className="ba__arrow"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaArrowRight />
        </motion.div>

        <motion.div
          className="ba__card"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="ba__img-wrap ba__img-wrap--clickable"
            onClick={() => setLightbox({ src: afterImg, alt: "Roda após o recondicionamento" })}
          >
            <img src={afterImg} alt="Roda após o recondicionamento" />
            <span className="ba__badge ba__badge--after">Depois</span>
            <span className="ba__zoom-icon"><FaSearchPlus /></span>
          </div>
          <div className="ba__card-info">
            <h4>Resultado final</h4>
            <p>Roda recondicionada, pintada e inspecionada — pronta para uso com total segurança.</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="ba__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className="ba__lightbox-img"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="ba__lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BeforeAfter;
