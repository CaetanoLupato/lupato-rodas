import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ServicoHero from "../../components/servicoHero/servicoHero";
import ServicoContent from "../../components/servicoContent/servicoContent";
import ServicoCards from "../../components/servicoCards/servicoCards";
import Review from "../../components/avaliacoes/reviews";
import Footer from "../../components/footer/footer";
import heroImage from "../../assets/rodas-velhas.jpg";
import heroImage2 from "../../assets/rodas-novas.jpg";
import "./servicos.css";

const topics = [
  {
    title: "Recondicionamento de Rodas",
    description:
      "Na Lupato Rodas, oferecemos serviços especializados de recondicionamento e adaptação de rodas. Restauramos rodas usadas ou danificadas, devolvendo funcionalidade, aparência original e, o mais importante, segurança. Contamos com modernos processos, maquinários e mão de obra experiente e especializada."
  },
  {
    title: "Modificações disponíveis:",
    description: [
      "Troca de centro",
      "Troca de aro",
      "Furação / Preenchimento",
      "Alteração de OFF SET de roda",
      "Endireitamento",
      "Restauração / Pintura",
    ]
  }
];

const linhaAtendemos = [
  { title: "Linha Agrícola", description: "Serviços especializados para tratores e implementos agrícolas." },
  { title: "Linha Rodoviária", description: "Soluções para transporte pesado e rodoviário de cargas." },
  { title: "Linha de Transbordo", description: "Atendimento completo para equipamentos de transbordo." },
];

const comercioTopics = [
  {
    title: "Comércio de Rodas",
    description: (
      <>
        Além de nos destacarmos no recondicionamento, oferecemos também a venda de{" "}
        <span className="negrito">rodas novas</span> e{" "}
        <span className="negrito">seminovas</span>, garantindo qualidade e confiança em cada produto.
      </>
    )
  },
  {
    title: "Rodas Seminovas",
    description: (
      <>
        Nossas rodas seminovas passam por rigoroso processo de recondicionamento — inspecionadas e tratadas,
        entregando a mesma segurança e confiabilidade de uma roda nova, mas com excelente custo-benefício.
      </>
    )
  },
  {
    title: "Rodas Novas",
    description: (
      <>
        Trabalhamos com a venda de rodas e aros novos, nacionais e importados, para caminhões, máquinas
        agrícolas, tratores e empilhadeiras, atendendo as mais diversas necessidades com qualidade e confiança.
      </>
    )
  },
];

function Servicos() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--navbar-h)' }}>
        <ServicoHero title="Recondicionamento de Rodas" image={heroImage} />
        <ServicoContent topics={topics} image={heroImage} />
        <ServicoHero title="Comércio de Rodas" image={heroImage2} />
        <ServicoContent topics={comercioTopics} image={heroImage2} />
        <ServicoCards title="Linhas que Atendemos" items={linhaAtendemos} />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default Servicos;
