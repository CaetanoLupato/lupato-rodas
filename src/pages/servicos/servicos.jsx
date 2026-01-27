import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ServicoHero from "../../components/servicoHero/servicoHero";
import ServicoContent from "../../components/servicoContent/servicoContent";
import ServicoCards from "../../components/servicoCards/servicoCards";
import Etapas from "../../components/servicoEtapas/etapas";
import Review from "../../components/avaliacoes/reviews";   // <--- importamos aqui
import Footer from "../../components/footer/footer";
import heroImage from "../../assets/rodas-velhas.jpg";
import heroImage2 from "../../assets/rodas-novas.jpg";

const topics = [
  {
    title: "Recondicionamento de Rodas",
    description:
      "Na Lupato Rodas, oferecemos serviços especializados de recondicionamento e adaptação de rodas. Restauramos rodas usadas ou danificadas, devolvendo-lhes funcionalidade, aparência original e o mais importante, segurança para continuar rodando. Contamos com os mais modernos processos e maquinários para executar todo tipo de reparo ou alterações nas rodas. Além de uma experiente e especializada mão-de-obra."
  },
  {
    title: "Modificações:",
    description: [
      "Troca de centro;",
      "Troca de aro;",
      "Furação/Preenchimento;",
      "Alteração de OFF SET de roda;",
      "Endireitamento;",
      "Restauração/Pintura;",
      "Entrega e coleta dos nossos produtos e serviços;"
    ]
  }
];

const linhaAtendemos = [
  {
    title: "Linha Agrícola",
    description: "Serviços especializados para tratores e implementos agrícolas."
  },
  {
    title: "Linha Rodoviária",
    description: "Soluções para transporte pesado e rodoviário de cargas."
  },
  {
    title: "Linha de Transbordo",
    description: "Atendimento completo para equipamentos de transbordo."
  }
];

const comercioTopics = [
  {
    title: "Comércio de Rodas",
    description: (
      <>
        Além de nos destacarmos no recondicionamento de rodas, oferecemos também a venda de <span className="negrito">rodas novas</span> e <span className="negrito">seminovas</span>, garantindo qualidade e confiança em cada produto.
      </>
    )
  },
  {
    title: "Rodas Seminovas",
    description: (
      <>
        Nossas rodas seminovas passam por um rigoroso processo de recondicionamento, onde são inspecionadas e tratadas, entregando a mesma segurança, resistência e confiabilidade de uma roda nova, mas com excelente custo-benefício.
      </>
    )
  },
  {
    title: "Rodas Novas",
    description: (
      <>
       Trabalhamos com a venda de rodas e aros novos, nacionais e importados, para caminhões, máquinas agrícolas, tratores e empilhadeiras, atendendo as mais diversas necessidades do setor e garantindo qualidade, resistência e confiança em cada produto. 
      </>
    )
  },
];

function Servicos() {
  return (
    <>
      <Navbar />

      <ServicoHero title="RECONDICIONAMENTO DE RODAS" image={heroImage} />
      <ServicoContent topics={topics} image={heroImage} />
      <ServicoCards title="LINHAS QUE ATENDEMOS" items={linhaAtendemos} />
      <Etapas />

      <ServicoHero title="COMÉRCIO DE RODAS" image={heroImage2} />
      <ServicoContent topics={comercioTopics} image={heroImage2} />
    
      <Review />
      <Footer />
    </>
  );
}

export default Servicos;
