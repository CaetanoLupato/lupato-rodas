import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import "./Diferenciais.css";
import { FaTruck, FaShieldAlt, FaCogs, FaAward } from "react-icons/fa";

const cards = [
  {
    icon: <FaAward />,
    title: "40 Anos de Referência",
    text: "Empresa familiar com mais de quatro décadas de atuação, somos referência em recondicionamento e venda de rodas em Ribeirão Preto e região."
  },
  {
    icon: <FaShieldAlt />,
    title: "Garantia no Serviço",
    text: "Todo recondicionamento tem garantia. Você sai com a roda pronta e com segurança respaldada."
  },
  {
    icon: <FaTruck />,
    title: "Sistema de Troca",
    text: "Trabalhamos com sistema à base de troca, buscamos e entregamos com frota própria, sem você parar a operação."
  },
  {
    icon: <FaCogs />,
    title: "Variação de Medidas",
    text: "Trabalhamos com diferentes medidas, modelos e configurações de rodas, oferecendo soluções personalizadas para atender as mais diversas necessidades."
  },
];

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const Diferenciais = () => (
  <section className="diferenciais-section">
    <motion.div
      className="diferenciais-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="diferenciais-label">Nossos Diferenciais</p>
      <div className="diferenciais-divider"></div>
      <h2>Por que trabalhar com a gente?</h2>
    
    </motion.div>

    <motion.div
      className="diferenciais-cards"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {cards.map((card, i) => (
        <motion.div className="diferencial-card" key={i} variants={cardItem}>
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      className="diferenciais-cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Link smooth to="/#localizacao" className="diferenciais-cta__btn">
        Solicite um orçamento
      </Link>
    </motion.div>
  </section>
);

export default Diferenciais;
