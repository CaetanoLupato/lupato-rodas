import React from "react";
import { motion } from "framer-motion";
import { FaCoins, FaShieldAlt, FaLeaf } from "react-icons/fa";
import "./PorQueRecondicionar.css";

const pilares = [
  {
    icon: <FaCoins />,
    title: "Economia",
    description:
      "Recondicionar pode custar até 60% menos do que adquirir uma roda nova, mantendo a eficiência da sua operação.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Segurança",
    description:
      "Cada roda passa por rigorosa inspeção técnica antes de ser liberada, garantindo integridade estrutural.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustentabilidade",
    description:
      "Reaproveitar o material metálico reduz o descarte industrial e diminui o impacto ambiental.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function PorQueRecondicionar() {
  return (
    <section className="pqr">
      <motion.div
        className="pqr__header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="pqr__label">Vantagens</p>
        <div className="pqr__divider" />
        <h2 className="pqr__title">Por que recondicionar?</h2>
        <p className="pqr__sub">
          O recondicionamento é a escolha inteligente para quem busca resultado com responsabilidade.
        </p>
      </motion.div>

      <motion.div
        className="pqr__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {pilares.map((p, i) => (
          <motion.div className="pqr__card" key={i} variants={cardVariant}>
            <div className="pqr__icon">{p.icon}</div>
            <h3 className="pqr__card-title">{p.title}</h3>
            <p className="pqr__card-desc">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PorQueRecondicionar;
