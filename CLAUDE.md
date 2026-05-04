# CLAUDE.md — Contexto do Projeto Lupato Rodas

Este arquivo contém o histórico de decisões, estado atual e próximos passos do projeto para continuidade no Claude Code.

---

## Sobre o Projeto

Site institucional da **Lupato Rodas** — empresa familiar com 5 gerações de tradição em recondicionamento e venda de rodas para caminhões, máquinas agrícolas, tratores e empilhadeiras e outros. Localizada em Ribeirão Preto, SP.

**Stack:** React + Vite  
**Bibliotecas em uso:** react-router-dom, react-router-hash-link, swiper, react-icons, framer-motion

---

## Estrutura do Projeto

```
src/
├── assets/                  # Imagens e mídias
│   └── clientes/            # Fotos dos clientes para avaliações
├── components/
│   ├── navbar/              # Navbar.jsx + navbar.css
│   ├── carousel/            # heroCarousel.jsx + heroCarousel.css
│   ├── cards/               # cards.jsx + cards.css (Seção "Soluções Lupato")
│   ├── sobre/               # sobre.jsx + sobre.css
│   ├── diferenciais/        # Diferenciais.jsx + Diferenciais.css
│   ├── avaliacoes/          # reviews.jsx + review.css
│   ├── localizacao/         # localizacaoForm.jsx + localizacaoForm.css
│   ├── footer/              # footer.jsx + footer.css
│   ├── servicoHero/         # servicoHero.jsx + servicoHero.css
│   ├── servicoContent/      # servicoContent.jsx + servicoContent.css
│   └── servicoCards/        # servicoCards.jsx + servicoCards.css
├── pages/
│   └── servicos/            # servicos.jsx + servicos.css
├── App.jsx
├── App.css
├── index.css                # Design tokens globais (variáveis CSS)
└── main.jsx
```

---

## Paleta de Cores Atual

Baseada nas cores (#f6c30a, #242424, #ffffff) e referências visuais (Cris Rodas, Notion, Loom).

```css
--gold: #f6c30a
--gold-dark: #c9a008     /* apenas para hover de botões */
--dark: #242424
--dark-2: #2e2e2e
--gray: #5a5a5a
--gray-light: #f5f5f5
--white: #ffffff
```


---

## Fontes Atuais

- Display/títulos: `Plus Jakarta Sans` (400, 500, 600, 700, 800)
- Body/texto corrido: `Inter` (300, 400, 500, 600, 700)

> Importadas via Google Fonts no `index.css`.

---

## Pendências — Home

| Item | Status | Observação |
|------|--------|------------|
| Seção "Sobre Nós" — conteúdo | ⏳ Futuramente | Adicionar mais texto para evidenciar a história da família |
| Carousel/Hero | ⏳ Futuramente | Será revisado em outro momento |
| Seção de Números (Stats) | ⏳ Revisar conteúdo | Componente criado com valores placeholder.

---

## Pendências — Página de Serviços (pausada)

| Item | Status |
|------|--------|
| Seção de Recondicionamento + Modificações | ⏳ Layout a repensar |
| Seção Comércio de Rodas | ⏳ Layout a repensar |

> A página de Serviços está **pausada** — foco atual é finalizar a home.

---

## Observações Importantes

- O cliente quer **participação ativa** nas decisões visuais — não fazer mudanças sem aprovação prévia
- Abordagem: mostrar opções/referências → cliente escolhe → implementar
- Preservar sempre a pasta `node_modules` e arquivos de configuração Vite (`vite.config.js`, `package.json`, etc.)
- O ZIP de entrega deve conter apenas `src/`, `public/`, `index.html`, `vite.config.js`, `package.json`, `package-lock.json`
