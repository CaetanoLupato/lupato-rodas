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
│   ├── hero/                # Hero.jsx + Hero.css  ← hero da home (usa card-img.png)
│   ├── carousel/            # heroCarousel.jsx + heroCarousel.css  ← mantido, não usado no momento
│   ├── cards/               # cards.jsx + cards.css (Seção "Soluções Lupato")
│   ├── sobre/               # sobre.jsx + sobre.css
│   ├── diferenciais/        # Diferenciais.jsx + Diferenciais.css
│   ├── avaliacoes/          # reviews.jsx + review.css
│   ├── localizacao/         # localizacaoForm.jsx + localizacaoForm.css
│   ├── footer/              # footer.jsx + footer.css
│   ├── galeria/             # GaleriaBento.jsx + GaleriaBento.css
│   ├── ctaFlutuante/        # CtaFlutuante.jsx + CtaFlutuante.css
│   ├── servicoHero/         # servicoHero.jsx + servicoHero.css  ← hero único da página de serviços
│   ├── servicoContent/      # servicoContent.jsx + servicoContent.css
│   ├── servicoCards/        # servicoCards.jsx + servicoCards.css
│   ├── porQueRecondicionar/ # PorQueRecondicionar.jsx + .css  ← 3 pilares (Economia/Segurança/Sustentabilidade)
│   ├── beforeAfter/         # BeforeAfter.jsx + BeforeAfter.css  ← antes/depois do recondicionamento
│   └── faq/                 # Faq.jsx + Faq.css  ← accordion animado
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

## Padrão de Cabeçalho de Seção

A maioria das seções segue este padrão de header:
```
<label pequeno uppercase dourado>
<divider dourado 44–48px>
<h2 grande>
<subtítulo opcional>
```
Exceção: seção de Avaliações mantém label em cinza (`var(--gray)`) com `font-display`.

## Padrão de Botões CTA

Hover padrão do site: `background: var(--dark)` + `color: var(--gold)` + `translateY(-2px)`.  
**Efeito glow dourado** aplicado em: navbar (.nav-cta), Diferenciais (.diferenciais-cta__btn), localizacaoForm (.submit-btn).  
`box-shadow` no hover: `0 0 18px 7px rgba(246,195,10,0.45), 0 4px 22px rgba(246,195,10,0.25)`  
Estado padrão: `box-shadow: none` (explícito para evitar artefatos visuais).

---

## Componentes — Estado Atual

### Navbar (`navbar/`)
- Links: Início · Sobre Nós · Serviços
- Botão CTA: **"Fale com a gente"** (dourado, `nav-cta`) separado dos links por um divisor vertical `border-left`
- Hover do CTA: fundo escuro + texto dourado + glow dourado
- **Desktop:** botão fica dentro do `<ul>` como `nav-cta-item` com padding-left e border-left
- **Mobile:** separador some (border-left: none), botão centralizado no dropdown

### Hero da Home (`hero/Hero.jsx`)
- **Novo componente** que substitui o HeroCarousel na home
- Imagem de fundo: `card-img.png` (imagem que estava na seção Soluções Lupato)
- Overlay: `linear-gradient(160deg, rgba(10,12,18,0.82)...)`
- Conteúdo: label "Ribeirão Preto — SP" + divider + h1 + subtítulo + 2 botões + seta bounce
- Botões: "Ver Serviços" (dourado → dark no hover) + "Fale com a gente" (outline branco → gold no hover)
- Estilo dos botões: idêntico ao ServicoHero (`sh__anchor`)
- HeroCarousel: **mantido no código**, apenas não renderizado — trocar `<Hero />` por `<HeroCarousel />` no App.jsx para reverter

### Seção Cards — Soluções Lupato (`cards/`)
- Ordem: Recondicionamento → Adaptações de Medidas → Rodas Novas → Rodas Recuperadas
- **Fundo: `var(--dark)` puro** (antes usava `card-img.png` com parallax)
- Faixa decorativa dourada de 120px no topo via `::before` (igual ao PorQueRecondicionar)
- Cards: glassmorphism + hover com borda superior dourada + ícone vira fundo dourado

### Seção Diferenciais (`diferenciais/`)
- 4 cards com conteúdo real da empresa:
  1. **40 Anos de Referência** (`FaAward`) — tradição familiar e referência no mercado
  2. **Garantia no Serviço** (`FaShieldAlt`) — todo recondicionamento tem garantia
  3. **Sistema de Troca** (`FaTruck`) — buscamos e entregamos com frota própria
  4. **Variação de Medidas** (`FaCogs`) — diferentes medidas, modelos e configurações
- Botão CTA "Solicite um orçamento" com glow dourado no hover → `/#localizacao`

### Seção Galeria (`galeria/GaleriaBento`)
- **Desktop:** Bento grid 4 colunas × 3 linhas com 8 fotos (grid-template-areas)
- **Mobile (≤768px):** Swiper horizontal com paginação por pontos dourados
- Lightbox ao clicar: navega com setas, teclado (←→ Esc) e clique fora para fechar

### Seção Avaliações (`avaliacoes/reviews`)
- Scroll infinito via `requestAnimationFrame` (SPEED = 0.5)
- Mouse drag + touch drag com detecção de direção (não bloqueia scroll vertical)
- Array duplicado `[...reviews, ...reviews]` para loop seamless
- Fade nas laterais via `::before`/`::after` no container

### BeforeAfter (`beforeAfter/`)
- Duas imagens lado a lado com badges "Antes" (dark) e "Depois" (dourado)
- Imagem "Antes": `rodasVelhas.jpg`; imagem "Depois": `servico1.png`
- **Lightbox** ao clicar: abre imagem em tela cheia, fecha com Esc / clique fora / botão X
- Ícone de zoom aparece no hover (sempre visível no mobile)

### Footer (`footer/`)
- Telefone clicável: `<a href="tel:+5516981672009">`
- Hover dourado no telefone via `.footer-contact-item a:hover { color: var(--gold) }`
- Textos: `0.95rem` | Ícones sociais: `1.2rem` em container `42px`

### CTA Flutuante (`ctaFlutuante/CtaFlutuante`)
- Botão WhatsApp flutuante — aparece após 300px de scroll, canto inferior direito, animação pulse
- Tooltip "Falar pelo WhatsApp" ao hover (desktop)
- Mobile: posicionado em `bottom: 1.5rem`, tooltip oculto

---

## Página de Serviços — Estado Atual

### Estrutura e ritmo de fundos

```
ServicoHero           → dark (88vh, hero único com âncoras)
ServicoContent        → branco   } id="recondicionamento"
PorQueRecondicionar   → dark     }
BeforeAfter           → cinza claro (#f5f5f5)
ServicoCards          → dark + parallax (Linhas que Atendemos)
ServicoContent        → branco   } id="comercio"
CTA WhatsApp          → dark
Faq                   → cinza claro
Footer                → dark
```

Os `id="recondicionamento"` e `id="comercio"` ficam em `<div className="servicos-anchor">` com `scroll-margin-top: var(--navbar-h)`. Os botões do hero fazem HashLink smooth para esses IDs.

### ServicoHero (`servicoHero/`)
- Hero único da página de serviços
- Props: `heroImage` (imagem de fundo)
- Conteúdo: label + divider + h1 "Nossos Serviços" + subtítulo + dois botões âncora + seta bounce
- Imagem de fundo atual: `roda1.jpg`
- Botões: `sh__anchor--primary` (dourado) e `sh__anchor--outline` (border branco → gold no hover)
- Sem animação de entrada — conteúdo estático

### PorQueRecondicionar (`porQueRecondicionar/`)
- 3 cards: **Economia**, **Segurança**, **Sustentabilidade**
- Ícones: `FaCoins`, `FaShieldAlt`, `FaLeaf`
- Fundo `var(--dark)`; cards glassmorphism; hover: borda superior dourada
- Faixa dourada de 120px no topo via `::before`

### ServicoContent (`servicoContent/`)
- Props: `topics` (array), `image`, `reverse` (boolean)
- `topic.description` como array → chips pill dourados
- Animação framer-motion: texto entra do lado oposto à imagem (`x: ±50`)

### BeforeAfter (`beforeAfter/`)
- Imagem "Antes": `rodasVelhas.jpg`; "Depois": `servico1.png`
- Lightbox funcional (Esc / clique fora / botão X)

### Faq (`faq/`)
- 5 perguntas em accordion com `AnimatePresence`
- Ícone +/- em círculo dourado; item aberto: borda dourada + sombra
- Fundo: `var(--gray-light)`

---

## Pendências — Home

| Item | Status | Observação |
|------|--------|------------|
| Hero — conteúdo e foto | ⏳ Em teste | Novo Hero com card-img.png aprovado para teste; conteúdo textual pode ser ajustado |
| Seção "Sobre Nós" — conteúdo | ⏳ Futuramente | Adicionar mais texto para evidenciar a história da família |
| Seção de Números (Stats) | ⏳ Revisar conteúdo | Aguardando números reais da empresa (clientes, rodas/mês, cidades) |
| Galeria — fotos reais | ✅ Concluído | Fotos reais já inseridas |

---

## Pendências — Página de Serviços

| Item | Status | Observação |
|------|--------|------------|
| Fotos BeforeAfter | ✅ Concluído | Fotos reais aplicadas |
| FAQ — conteúdo | ✅ Concluído | Perguntas aprovadas |
| FAQ — cor da resposta | ⏳ Ajustar | Queixa sobre cor da fonte das respostas (`var(--gray)` #5a5a5a) |
| Seção de Comércio | ⏳ Revisar visual | Layout funcional; cliente pode querer mais detalhes |

---

## Observações Importantes

- O cliente quer **participação ativa** nas decisões visuais — não fazer mudanças sem aprovação prévia
- Abordagem: mostrar opções/referências → cliente escolhe → implementar
- Preservar sempre a pasta `node_modules` e arquivos de configuração Vite (`vite.config.js`, `package.json`, etc.)
- O ZIP de entrega deve conter apenas `src/`, `public/`, `index.html`, `vite.config.js`, `package.json`, `package-lock.json`
