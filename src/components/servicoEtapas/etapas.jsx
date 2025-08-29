import React from "react";
import "./etapas.css";

// Imagens
import image from "../../assets/rodas-velhas.jpg";
import image2 from "../../assets/roda-serra.png";
import image3 from "../../assets/rodas-novas.jpg";


const etapas = [
  {
    id: 1,
    title: "Recebimento",
    desc: "Coletamos ou recebemos cascos e sucatas de rodas de ferro de várias medidas e modelos.",
    image: image,
  },
  {
    id: 2,
    title: "Seleção",
    desc: "Separação do que pode ser recuperado, reutilizado ou destinado apenas à sucata.",
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
    image: image,
  },
];

export default function Etapas() {
  return (
    <section className="etapas-section">
      <h2 className="etapas-title">Entenda nosso Processo</h2>

      <div className="etapas-container">
        {/* Linha que vai até o final */}
        <div className="etapas-line"></div>

        {etapas.map((etapa, index) => (
          <div key={etapa.id} className="etapas-step">
            <div className="etapas-circle">{etapa.id}</div>

            {/* Colocar a seta no meio da linha, entre os círculos */}
            {index < etapas.length - 1 && (
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
