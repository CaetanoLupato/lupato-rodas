import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ServicoHero from "../../components/servicoHero/servicoHero";
import ServicoContent from "../../components/servicoContent/servicoContent";
import ServicoCards from "../../components/servicoCards/servicoCards";
import Etapas from "../../components/servicoEtapas/etapas";
import Footer from "../../components/footer/footer";
import heroImage from "../../assets/rodas-velhas.jpg";  

const topics = [
  {
    title: "Recondicionamento de Rodas",
    description:
      "Na Lupato Rodas, oferecemos serviços especializados de recondicionamento e adaptação de rodas. Restauramos rodas usadas ou danificadas, devolvendo-lhes funcionalidade, aparência original e o mais importante, seguraça para continuar rodando. Contamos com os mais modernos processos e maquinários para executar todo tipo de reparo ou alterações nas rodas. Além de uma experiente e especializada mão-de-obra."
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

function Servicos() {
  return (
    <>
      <Navbar />
      <ServicoHero title="RECONDICIONAMENTO DE RODAS" image={heroImage} />
      <ServicoContent topics={topics} image={heroImage} />
      <ServicoCards
        title="LINHAS QUE ATENDEMOS"
        items={linhaAtendemos}
      />
      <Etapas />
      <Footer />
    </>
  );
}

export default Servicos;