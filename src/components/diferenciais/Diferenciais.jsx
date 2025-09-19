import React from "react";
import "./Diferenciais.css";
import { FaChartLine, FaCheckCircle, FaUsers, FaCogs } from "react-icons/fa";

const Diferenciais = () => {
  const cards = [
    {
      icon: <FaChartLine />,
      title: "Controle de QUALIDADE",
      text: "Gerido pelo nosso sistema de gestão de qualidade, seguimos princípios que orientam todas as nossas atividades."
    },
    {
      icon: <FaCheckCircle />,
      title: "Eficiência CONSTANTE",
      text: "Atuamos com precisão na recuperação e venda de rodas e aros para caminhões, máquinas, tratores e empilhadeiras."
    },
    {
      icon: <FaUsers />,
      title: "Nossos VALORES",
      text: "Respeito, comprometimento, profissionalismo, honestidade, responsabilidade, integridade e excelência."
    },
    {
      icon: <FaCogs />,
      title: "Equipe ESPECIALIZADA",
      text: "Profissionais qualificados para entender sua necessidade e oferecer a melhor solução para cada caso."
    }
  ];

  return (
    <section className="diferenciais-section">
      <div className="diferenciais-header">
        <h2>Por que trabalhar com a gente?</h2>
        <p>
          Contando com uma frota de 3 caminhões atendemos Ribeirão e região, 
          trabalhamos com o sistema à base de troca, já levando a mercadoria 
          e o serviço com extrema rapidez e eficiência.

        </p>
      </div>

      <div className="diferenciais-cards">
        {cards.map((card, index) => (
          <div className="diferencial-card" key={index}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diferenciais;