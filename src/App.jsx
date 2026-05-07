import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import HeroCarousel from './components/carousel/heroCarousel';
import Cards from './components/cards/cards';
import Stats from './components/stats/stats';
import Sobre from './components/sobre/sobre';
import Diferenciais from './components/diferenciais/Diferenciais';
import GaleriaBento from './components/galeria/GaleriaBento';
import CtaFlutuante from './components/ctaFlutuante/CtaFlutuante';
import LocalizacaoForm from './components/localizacao/localizacaoForm';
import Servicos from './pages/servicos/servicos';
import Footer from './components/footer/footer';
import Review from './components/avaliacoes/reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <CtaFlutuante />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Cards />
                <Sobre />
                <Stats />
                <Diferenciais />
                <GaleriaBento />
                <Review />
                <LocalizacaoForm />
                <Footer />
              </>
            }
          />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;