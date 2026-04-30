import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./stats.css";

const items = [
  { value: 5,   suffix: "",  label: "Gerações de tradição" },
  { value: 40,  suffix: "+", label: "Anos de mercado" },
  { value: 500, suffix: "+", label: "Clientes atendidos" },
  { value: 50,  suffix: "+", label: "Cidades atendidas" },
];

function Counter({ value, suffix, duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Stats() {
  return (
    <section className="stats-section">
      <motion.div
        className="stats-inner"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {items.map((item, i) => (
          <motion.div className="stat-item" key={i} variants={fadeUp}>
            <p className="stat-number">
              <Counter value={item.value} suffix={item.suffix} />
            </p>
            <p className="stat-label">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;
