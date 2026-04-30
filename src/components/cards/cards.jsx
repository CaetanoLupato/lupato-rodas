import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTools, FaAward, FaRecycle, FaRulerCombined } from "react-icons/fa";
import "./cards.css";

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const Cards = () => {
  const items = [
    {
      icon: <FaTools />,
      title: "Recondicionamento de Rodas",
      desc: "Problemas com suas rodas? Restauramos com qualidade e segurança, deixando como novas!",
    },
    {
      icon: <FaAward />,
      title: "Rodas Novas",
      desc: "Trabalhamos com a venda de rodas novas de alto padrão, oferecendo qualidade e confiança.",
    },
    {
      icon: <FaRecycle />,
      title: "Rodas Recuperadas",
      desc: "Quer economizar sem abrir mão da qualidade e segurança? Confira nossas rodas recuperadas!",
    },
    {
      icon: <FaRulerCombined />,
      title: "Adaptações de Medidas",
      desc: "Seja sua necessidade, realizamos adaptações e modificações sob medida.",
    },
  ];

  return (
    <section id="cards" className="cards-section">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="cards-title">Soluções Lupato</h2>
        <p className="cards-subtitle">Tradição, qualidade e segurança em cada roda</p>
      </motion.div>

      <motion.div
        className="cards-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => (
          <motion.div className="card" key={i} variants={cardItem}>
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="cards-button-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          to="/servicos"
          className="cards-main-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Conheça nossos serviços
        </Link>
      </motion.div>
      <div className="cards-wave">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C300,0 900,0 1200,80 L1200,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Cards;
