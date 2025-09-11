import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import HeroCarousel from './components/carousel/heroCarousel';
import Cards from './components/cards/cards';
import Sobre from './components/sobre/sobre';
import Diferenciais from './components/diferenciais/Diferenciais';
import LocalizacaoForm from './components/localizacao/localizacaoForm';
import Produtos from './pages/produtos/produtos';
import Servicos from './pages/servicos/servicos';
import Footer from './components/footer/footer';
import Review from './components/avaliacoes/reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <Cards /> 
                <Sobre />
                <Diferenciais />
                <Review />
                <LocalizacaoForm />
                <Footer />
              </>
            }
          />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Produtos" element={<Produtos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;