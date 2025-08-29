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
Há quatro gerações, a família Lupato recondiciona rodas com qualidade, confiança e tecnologia. De rodas de carroça às mais modernas sem câmara, evoluímos com o tempo para oferecer sempre o melhor. Qualidade de verdade tem história!
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
            Na Lupato Rodas, cada detalhe importa. Somos especialistas na recuperação e venda de rodas e aros para caminhões, transbordos, máquinas agrícolas, tratores e empilhadeiras — novas, usadas ou revisadas. Nossa estrutura conta com linha de produção completa, equipamentos de ponta e processos que garantem eficiência tanto na restauração quanto na fabricação sob medida, inclusive para modelos fora de padrão.

Com uma frota própria de caminhões, atendemos Ribeirão Preto e região com agilidade: trabalhamos com sistema de troca rápida, entregando e recolhendo no mesmo serviço, para que o cliente ganhe tempo e confiança.
          </p>
          <p>Reconhecida e respeitada por sua atuação no mercado, visa sempre a melhoria contínua de seus processos de serviços, resultando na completa satisfação de seus clientes e a constante ampliação de seus negócios.</p>
        </div>
        <div className="coluna imagem">
          <img src={sobreImg2} alt="Fachada" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
