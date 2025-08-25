import React from "react";
import "./servicoContent.css";

function ServicoContent({ topics, image }) {
  return (
    <section className="servico-content">
      <div className="servico-text">
        {topics.map((topic, index) => (
          <div key={index} className="topic">
            <h2>{topic.title}</h2>
            {Array.isArray(topic.description) ? (
              <ul>
                {topic.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{topic.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="servico-image">
        <img src={image} alt="Serviço ilustrativo" />
      </div>
    </section>
  );
}

export default ServicoContent;