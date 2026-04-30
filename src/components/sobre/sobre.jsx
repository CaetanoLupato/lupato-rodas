import React from 'react';
import { motion } from 'framer-motion';
import './sobre.css';
import sobreImg1 from '../../assets/roda-serra.png';
import sobreImg2 from '../../assets/fachada.png';

const fadeX = (x) => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
});

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-container">
      <div className="sobre-inner">
        <div className="linha">
          <motion.div
            className="coluna imagem"
            variants={fadeX(-50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={sobreImg1} alt="Recondicionamento de rodas" />
          </motion.div>
          <motion.div
            className="coluna texto"
            variants={fadeX(50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="sobre-label">Quem Somos</p>
            <div className="sobre-divider"></div>
            <h2>Nossa <span>História</span></h2>
            <p>
              Tradição que gira com o tempo! Há cinco gerações, a família Lupato recondiciona rodas com
              qualidade, confiança e tecnologia. Desde as rodas de carroça às mais modernas, evoluímos
              com o tempo para oferecer sempre o melhor.
            </p>
            <p>
              Cada roda que passa por nossas mãos carrega uma história — a sua. Por isso, cuidamos de
              cada detalhe, aplicando tecnologia de ponta e a dedicação que só quem tem tradição entende.
            </p>
          </motion.div>
        </div>

        <div className="linha reverse">
          <motion.div
            className="coluna imagem"
            variants={fadeX(50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={sobreImg2} alt="Fachada Lupato Rodas" />
          </motion.div>
          <motion.div
            className="coluna texto"
            variants={fadeX(-50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="sobre-label">A Empresa</p>
            <div className="sobre-divider"></div>
            <h2>Lupato <span>Rodas</span></h2>
            <p>
              Reconhecida pela qualidade, tradição e respeito ao cliente, a Lupato Rodas atua no mercado
              de rodas e aros para caminhões, transbordos, tratores, máquinas agrícolas e diferentes
              segmentos do transporte e agronegócio.
            </p>
            <p>
              Com frota própria e sistema de troca rápida, atendemos Ribeirão Preto e região garantindo
              confiança e agilidade. Nossa missão é oferecer soluções que unam desempenho e segurança.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
