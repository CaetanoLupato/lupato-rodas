import React, { useState } from "react";
import "./etapas.css";

import image from "../../assets/rodas-velhas.jpg";
import image2 from "../../assets/roda-serra.png";
import image3 from "../../assets/rodas-novas.jpg";

const etapas = [
  {
    id: 1,
    title: "Recebimento",
    desc: "Coletamos/recebemos rodas de várias medidas e modelos.",
    image: image,
  },
  {
    id: 2,
    title: "Seleção",
    desc: "Separamos o que pode ser recuperado, reutilizado ou destinado apenas à sucata.",
    image: image3,
  },
  {
    id: 3,
    title: "Recondicionamento",
    desc: "As rodas que passam no processo são totalmente recondicionadas e revisadas.",
    image: image2,
  },
  
  {
    id: 4,
    title: "Finalização",
    desc: "Após a revisão, as rodas são pintadas e ficam prontas para retorno ao mercado.",
    image: image3,
  },
];

export default function Etapas() {
  
  const [hoveredStep, setHoveredStep] = useState(-1);

  return (
    <section className="etapas-section">
      <h2 className="etapas-title">Entenda nosso Processo</h2>

      <div
        className="etapas-container"
      >
        <div
          className="etapas-line"
          style={{
            "--line-progress":
              hoveredStep >= 0
                ? `${((hoveredStep + 1) / etapas.length) * 100}%`
                : "0%",
          }}

        ></div>

        {etapas.map((etapa) => (
          <div
            key={etapa.id}
            className="etapas-step"
            onMouseEnter={() => setHoveredStep(etapa.id - 1)}
            onMouseLeave={() => setHoveredStep(-1)}
          >
            <div className="etapas-circle">{etapa.id}</div>

            {etapa.id < etapas.length && (
              <div className="etapas-arrow">➝</div>
            )}

            <div className="etapas-content">
              <img src={etapa.image} alt={etapa.title} className="etapas-img" />
              <h3>{etapa.title}</h3>
              <p>{etapa.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}