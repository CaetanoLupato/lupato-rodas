import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Catalogo from "../../components/prodCatalogo/catalogo";
import Footer from "../../components/footer/footer";

function Produtos() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Catálogo de Rodas
      </h1>
      <Catalogo />
      <Footer />
    </>
  );
}

export default Produtos;
