import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Faq.css";

const questions = [
  {
    q: "Quanto tempo leva o processo de recondicionamento?",
    a: "O prazo varia conforme o tipo de serviço solicitado. Em geral, entre 1 e 5 dias úteis. Serviços mais simples, como endireitamento e pintura, podem ter prazo ainda menor. Consulte-nos para uma estimativa precisa.",
  },
  {
    q: "Quais tipos de roda vocês atendem?",
    a: "Trabalhamos com rodas para caminhões, tratores, colheitadeiras, empilhadeiras, carretas, ônibus e demais máquinas agrícolas e industriais de todos os portes e marcas.",
  },
  {
    q: "Toda roda pode ser recondicionada?",
    a: "Fazemos uma inspeção técnica antes de qualquer serviço. Se a roda apresentar danos estruturais graves que comprometam a segurança, comunicamos ao cliente e oferecemos alternativas, como rodas seminovas ou novas.",
  },
  {
    q: "Vocês atendem fora de Ribeirão Preto?",
    a: "Sim! Atendemos clientes de toda a região de Ribeirão Preto e cidades vizinhas. Entre em contato pelo WhatsApp para verificar a logística de coleta e entrega.",
  },
  {
    q: "Como solicito um orçamento?",
    a: "Basta entrar em contato pelo WhatsApp com foto da roda e descrição do serviço desejado. O orçamento é gratuito e sem compromisso — respondemos com agilidade!",
  },
];

function Faq() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq">
      <motion.div
        className="faq__header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="faq__label">Dúvidas</p>
        <div className="faq__divider" />
        <h2 className="faq__title">Perguntas Frequentes</h2>
        <p className="faq__sub">Respondemos as dúvidas mais comuns sobre os nossos serviços.</p>
      </motion.div>

      <div className="faq__list">
        {questions.map((item, i) => (
          <motion.div
            key={i}
            className={`faq__item${open === i ? " faq__item--open" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              className="faq__question"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="faq__icon">
                {open === i ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="faq__answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
