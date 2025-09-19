import React from 'react';
import './sobre.css';
import sobreImg1 from '../../assets/roda-serra.png';
import sobreImg2 from '../../assets/fachada.png';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-container">
      <div className="linha">
        <div className="coluna imagem">
          <img src={sobreImg1} alt="Nossa empresa" />
        </div>
        <div className="coluna texto">
          <h2>Nossa História</h2>
          <p>
            Tradição que gira com o tempo!
        Há cinco gerações, a família Lupato recondiciona rodas com qualidade, confiança e tecnologia. Desde as rodas de carroça às mais modernas, evoluímos com o tempo para oferecer sempre o melhor. Qualidade de verdade tem história!
          </p>
          <p>
            Cada roda que passa por nossas mãos carrega uma história — a sua. Por isso, cuidamos de cada detalhe, aplicando tecnologia de ponta e a dedicação que só quem tem tradição entende.
Do pequeno produtor rural ao grande transportador, todos recebem o mesmo cuidado: a certeza de que sua roda vai girar mais, melhor e com total segurança. Porque para nós, rodar é mais do que movimento: é confiança em cada quilômetro.
          </p>
        </div>
      </div>

      <div className="linha">
        <div className="coluna texto">
          <h2>A Lupato Rodas</h2>
          <p>
            Reconhecida pela qualidade, tradição e respeito ao cliente, a Lupato Rodas atua no mercado de rodas e aros para caminhões, transbordos, tratores, máquinas agrícolas e diferentes segmentos do transporte e agronegócio. Somos especialistas em recuperação e venda de rodas novas, usadas e recondicionadas, sempre com foco em eficiência, segurança e durabilidade.
            Com frota própria e sistema de troca rápida, atendemos Ribeirão Preto e região garantindo confiança e agilidade.</p> 
            <p>Nossa missão é oferecer soluções que unam desempenho e segurança, fortalecendo parcerias e contribuindo para o crescimento dos negócios de nossos clientes.
          </p>
        </div>
        <div className="coluna imagem">
          <img src={sobreImg2} alt="Fachada" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;

