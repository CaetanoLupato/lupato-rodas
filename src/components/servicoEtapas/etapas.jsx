import React from "react";
import "./etapas.css";
import image from "../../assets/rodas-velhas.jpg";
import image2 from "../../assets/roda-serra.png";
import image3 from "../../assets/rodas-novas.jpg";

const etapas = [
  { id: 1, title: "Recebimento", desc: "Coletamos/recebemos rodas de várias medidas e modelos.", image },
  { id: 2, title: "Seleção", desc: "Separamos o que pode ser recuperado, reutilizado ou destinado à sucata.", image: image3 },
  { id: 3, title: "Recondicionamento", desc: "As rodas aprovadas são totalmente recondicionadas e revisadas.", image: image2 },
  { id: 4, title: "Finalização", desc: "Após a revisão, as rodas são pintadas e ficam prontas para o cliente.", image: image3 },
];

export default function Etapas() {
  return (
    <section className="etapas-section">
      <div className="etapas-header">
        <p className="etapas-label">Processo</p>
        <div className="etapas-divider"></div>
        <h2 className="etapas-title">Entenda nosso Processo</h2>
      </div>

      <div className="etapas-container">
        {etapas.map((etapa) => (
          <div key={etapa.id} className="etapas-step">
            <div className="etapas-circle">{etapa.id}</div>
            <div className="etapas-content">
              <img src={etapa.image} alt={etapa.title} className="etapas-img" />
              <div className="etapas-text">
                <h3>{etapa.title}</h3>
                <p>{etapa.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
