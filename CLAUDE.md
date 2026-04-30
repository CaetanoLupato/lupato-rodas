# CLAUDE.md — Contexto do Projeto Lupato Rodas

Este arquivo contém o histórico de decisões, estado atual e próximos passos do projeto para continuidade no Claude Code.

---

## Sobre o Projeto

Site institucional da **Lupato Rodas** — empresa familiar com 5 gerações de tradição em recondicionamento e venda de rodas para caminhões, máquinas agrícolas, tratores e empilhadeiras. Localizada em Ribeirão Preto, SP.

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

## Paleta de Cores Atual ✅ Aprovada

Baseada nas cores do Instagram do cliente (#f6c30a, #242424, #ffffff) e referências visuais (Cris Rodas, Notion, Loom).

```css
--gold: #f6c30a
--gold-dark: #c9a008     /* apenas para hover de botões */
--dark: #242424
--dark-2: #2e2e2e
--gray: #5a5a5a
--gray-light: #f5f5f5
--white: #ffffff
```

> O azul foi **removido completamente** do projeto. O ouro é o único brand color de destaque.

---

## Fontes Atuais ✅ Aprovadas (Opção A)

- Display/títulos: `Plus Jakarta Sans` (400, 500, 600, 700, 800)
- Body/texto corrido: `Inter` (300, 400, 500, 600, 700)

> Importadas via Google Fonts no `index.css`.

---

## Padrão de Hover dos Botões ✅ Definido

Todos os botões CTA seguem o mesmo padrão de hover:
- **Normal:** fundo dourado + texto escuro
- **Hover:** fundo escuro + texto dourado (inversão)

Aplicado em: navbar CTA, botão "Conheça nossos serviços", botão de envio do formulário.

---

## Estado Atual — O que foi feito

### Concluído
- ✅ Design tokens no `index.css` (paleta + fontes atualizadas)
- ✅ Navbar com blur (`backdrop-filter`), menu hamburguer funcional, hover com outline dourado no CTA
- ✅ Carousel responsivo
- ✅ Seção Sobre com animações laterais (framer-motion)
- ✅ Cards "Soluções Lupato" — emojis substituídos por react-icons, fundo azul removido, animação stagger
- ✅ Diferenciais com hover animado e stagger de entrada
- ✅ Carrossel de avaliações com scroll automático e fade lateral
- ✅ Formulário de localização + mapa, hover do botão atualizado
- ✅ Footer reestruturado
- ✅ Seção "Entenda nosso Processo" (Etapas) **removida** da página de Serviços
- ✅ Coloração azulada removida dos heroes da página de Serviços
- ✅ Animações de scroll (framer-motion whileInView) aplicadas em: Sobre, Diferenciais, Soluções Lupato, Depoimentos
- ✅ Diferenciais — cards sobem juntos simultaneamente (sem stagger)
- ✅ Paleta e fontes aprovadas pelo cliente (Plus Jakarta Sans + Inter, ouro/preto/branco)

---

## Pendências — Home

| Item | Status | Observação |
|------|--------|------------|
| Seção "Sobre Nós" — conteúdo | ⏳ Futuramente | Adicionar mais texto para evidenciar a história da família |
| Cards "Soluções Lupato" — estética | ⏳ Futuramente | Manter layout atual, possível redesenho em outro momento |
| Carousel/Hero | ⏳ Futuramente | Será revisado em outro momento |
| Hover dos Diferenciais | ⏳ A fazer | Transition ainda está rápida, deixar mais suave |
| Seção de Números (Stats) | ⏳ Revisar conteúdo | Componente criado com valores placeholder. Cliente precisa confirmar os números reais. Sugestão de campos: Gerações de tradição, Anos de mercado, Rodas recondicionadas, Profissionais especializados. Ver lista completa de opções na conversa. |

---

## Pendências — Página de Serviços (pausada)

| Item | Status |
|------|--------|
| Seção de Recondicionamento + Modificações | ⏳ Layout a repensar |
| Seção Comércio de Rodas | ⏳ Layout a repensar |
| Cards "Linhas que Atendemos" | ⏳ Visual a atualizar |

> A página de Serviços está **pausada** — foco atual é finalizar a home.

---

## Decisões Tomadas

- ✅ Paleta: ouro + preto + branco (cores do Instagram do cliente)
- ✅ Fontes: Plus Jakarta Sans + Inter
- ✅ Seção "Entenda nosso Processo" removida
- ✅ Emojis nos cards substituídos por ícones (react-icons)
- ✅ Coloração azulada nas imagens de fundo removida
- ✅ Padrão de hover dos botões: inversão escuro/dourado
- ✅ Navbar com blur glassmorphism
- ✅ Animações de scroll com framer-motion (whileInView, once: true)

---

## Observações Importantes

- O cliente quer **participação ativa** nas decisões visuais — não fazer mudanças sem aprovação prévia
- Abordagem: mostrar opções/referências → cliente escolhe → implementar
- Preservar sempre a pasta `node_modules` e arquivos de configuração Vite (`vite.config.js`, `package.json`, etc.)
- O ZIP de entrega deve conter apenas `src/`, `public/`, `index.html`, `vite.config.js`, `package.json`, `package-lock.json`
