import React from "react";
import { motion } from "framer-motion";
import "./Diferenciais.css";
import { FaChartLine, FaCheckCircle, FaUsers, FaCogs } from "react-icons/fa";

const cards = [
  {
    icon: <FaChartLine />,
    title: "Controle de Qualidade",
    text: "Gerido pelo nosso sistema de gestão de qualidade, seguimos princípios que orientam todas as nossas atividades."
  },
  {
    icon: <FaCheckCircle />,
    title: "Eficiência e Segurança",
    text: "Atuamos com precisão na recuperação e venda de rodas e aros para caminhões, máquinas, tratores e empilhadeiras."
  },
  {
    icon: <FaUsers />,
    title: "Compromisso e Ética",
    text: "Parceria de confiança. Atuamos com integridade, profissionalismo, respeito mútuo e excelência no serviço prestado."
  },
  {
    icon: <FaCogs />,
    title: "Equipe Especializada",
    text: "Profissionais qualificados para entender sua necessidade e oferecer a melhor solução para cada caso."
  }
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
      <p>
        Atendemos Ribeirão Preto e região. Trabalhamos com sistema à base de troca,
        levando o produto e o serviço com rapidez e eficiência.
      </p>
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
  </section>
);

export default Diferenciais;
