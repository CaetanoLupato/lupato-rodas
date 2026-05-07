import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./CtaFlutuante.css";

const WA_LINK = "https://wa.me/5516981672009";
const TEL_LINK = "tel:+5516981672009";

export default function CtaFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const fn = () => setVisivel(window.scrollY > 300);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Botão flutuante WhatsApp — desktop e mobile */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className={`wa-flutuante ${visivel ? "wa-flutuante--visivel" : ""}`}
        aria-label="Falar pelo WhatsApp"
      >
        <FaWhatsapp />
        <span className="wa-flutuante__tooltip">Falar pelo WhatsApp</span>
      </a>

    </>
  );
}
