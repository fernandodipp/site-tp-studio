---
name: TP Studio Labs
description: Tecnologia para quem vive a música. Do ensaio ao culto, do estúdio ao palco.
colors:
  violet-ink: "#6847f0"
  violet-hover: "#5a3be0"
  violet: "#7c5cff"
  lavender: "#b9b3ff"
  on-violet: "#ffffff"
  night-0: "#070817"
  night-1: "#0b0d1f"
  night-2: "#12143a"
  night-3: "#1a1d4a"
  text: "#eeedf6"
  text-2: "#b4b2d4"
  text-3: "#8d8ab8"
  line: "rgba(185, 179, 255, 0.14)"
  line-strong: "rgba(185, 179, 255, 0.28)"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.8vw, 4.875rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 700
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "32px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(88px, 12vw, 160px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.violet-ink}"
    textColor: "{colors.on-violet}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.violet-hover}"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.02)"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-sm:
    padding: "0 16px"
    height: "40px"
  button-lg:
    padding: "0 28px"
    height: "56px"
  tile:
    backgroundColor: "{colors.night-2}"
    rounded: "{rounded.lg}"
    padding: "clamp(28px, 3.4vw, 44px)"
  nav:
    backgroundColor: "rgba(11, 13, 31, 0.72)"
    textColor: "{colors.text-2}"
    height: "68px"
  chip-chord:
    backgroundColor: "rgba(124, 92, 255, 0.1)"
    textColor: "{colors.lavender}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
---

# Design System: TP Studio Labs

## Overview

**Creative North Star: "O Estúdio à Noite"**

O padrão da categoria escolhido de propósito: uma landing escura de estúdio de apps, com o celular como prova, executada com o rigor de Linear e Raycast. Nada de ironia nem de excentricidade escondida; a convenção vira compromisso, e a qualidade está na execução: bordas de 1px translúcidas, tipografia geométrica pesada, cantos generosos e um único brilho violeta que acende a cena atrás do produto.

O mundo é azul-noite (do quase preto #070817 ao índigo #12143a), com o violeta reservado para o que se clica e a lavanda para o que se destaca. A densidade é baixa e respirada: seções altas, títulos grandes, parágrafos curtos. As telas de app são ilustrativas e sempre rotuladas como tal; a interface desenhada no celular e no tile "No altar" é a peça de assinatura e conversa com o resto da página (o momento ativo avança e o painel acompanha).

O movimento é contido: uma entrada única do hero em sequência curta, revelação discreta por seção e o pulso do pad. Tudo desliga com `prefers-reduced-motion`, e o conteúdo é visível sem JavaScript.

**Key Characteristics:**
- Fundo azul-noite em camadas tonais, nunca preto puro.
- Violeta sólido só em ações; lavanda nos destaques de texto e ícones.
- Poppins 700–800 com tracking negativo nos títulos, Inter no corpo.
- Bordas de 1px em lavanda translúcida separando superfícies e seções.
- Cantos grandes (16–28px) em superfícies, pílula em botões.
- Interface de app ilustrativa como prova visual, sempre rotulada.

## Colors

Noite azulada em quatro degraus, um violeta de ação e uma lavanda de destaque; a paleta é quase monocromática e a cor aparece pouco, por isso pesa.

### Primary
- **Violeta de Ação** (violet-ink): fundo de todo botão primário, do link de pular conteúdo e da seleção de texto. Com texto branco dá 5,6:1. No hover escurece para **Violeta Profundo** (violet-hover), nunca clareia.
- **Violeta Luz** (violet): não aparece como superfície sólida. Vive em transparência baixa (0,1–0,34) como tinta de cena: o brilho radial atrás do celular, o brilho no canto do tile "No altar", o gradiente do topo da caixa de CTA e as tintas de estado da interface ilustrada (linha ativa da ordem do culto, chips de cifra, selo "Ao vivo").

### Secondary
- **Lavanda** (lavender): a cor de destaque não clicável. A palavra realçada no título do hero, os ícones de linha ao lado dos títulos, os valores do painel de sincronia, as cifras, o anel de foco e o hover do botão fantasma. Contraste de 10:1 sobre o fundo.

### Neutral
- **Noite Profunda** (night-0): o degrau mais escuro; topo do gradiente da seção de história, trilho da barra de rolagem, fundo das células do painel de sincronia.
- **Azul-Noite** (night-1): fundo da página e cor do tema do navegador.
- **Índigo Noturno** (night-2): superfícies elevadas por tom: tiles, caixa de CTA, moldura das imagens do feed.
- **Índigo Fundo** (night-3): polegar da barra de rolagem; o degrau mais claro da noite.
- **Branco-Lavanda** (text): títulos e texto principal (16,6:1).
- **Lavanda Acinzentada** (text-2): parágrafos de apoio, subtítulos, links de navegação (9,4:1).
- **Lavanda Apagada** (text-3): legendas, rótulos de dados, rodapé, notas "Ilustração" (5,9:1).
- **Fio** (line) e **Fio Forte** (line-strong): todas as bordas de 1px; o forte só em botão fantasma, caixa de CTA e divisores internos da marca.

### Named Rules
**The Violeta Só Clica Rule.** Violeta sólido (#6847f0) é exclusivo de ações. Destaque decorativo é lavanda. Se não é clicável e precisa de cor, é lavanda ou violeta translúcido como tinta de luz, nunca um bloco violeta cheio. A única exceção é o estado ativo dentro da interface ilustrada (a tecla de tom da linha ativa), que representa a seleção do próprio app.

**The Noite em Camadas Rule.** Profundidade vem do degrau tonal da noite (night-0 → night-3) e de fios de 1px, não de cores novas. Não existe cinza neutro; todo neutro puxa para o azul-lavanda.

## Typography

**Display Font:** Poppins (com system-ui, sans-serif), pesos 600, 700 e 800
**Body Font:** Inter (com system-ui, sans-serif), pesos 400, 500 e 600

**Character:** Poppins pesada e fechada nos títulos, herdada dos posts da marca, dá a voz geométrica e confiante; Inter no corpo mantém a leitura neutra e técnica. O contraste é de peso e tamanho, não de estilo.

### Hierarchy
- **Display** (800, clamp(2.75rem → 4.875rem), 1,02, -0,035em): título do hero e o título da história ("Nascemos entre o estúdio e o altar.", que sobe até 5,5rem). A palavra-chave pode vir em lavanda.
- **Headline** (700, clamp(2rem → 3.25rem), 1,08, -0,03em): títulos de seção. A caixa de CTA usa a mesma família em 800, até 3,5rem.
- **Title** (700, clamp(1.5rem → 2rem), -0,02em): títulos dos tiles de cenário; o tile principal sobe até 3rem.
- **Title pequeno** (600, 1.375rem, -0,01em): títulos da grade de serviços.
- **Lead** (400, clamp(1.0625rem → 1.25rem), 1,6): subtítulo do hero, em text-2, máximo de 34em.
- **Body** (400, 1.0625rem, 1,6): texto corrido; parágrafos de seção em 1.125rem, até 32em de largura.
- **Label** (0.75rem, 0,12em, maiúsculas): só rótulos de dado dentro da interface ilustrada (Momento, Tom, Pad, Luz).

### Named Rules
**The Título Pesado Rule.** Todo h1/h2/h3 é Poppins com tracking negativo proporcional ao tamanho (-0,035em no display, -0,01em no menor) e `text-wrap: balance`. Corpo nunca usa Poppins.

**The Rótulo É Dado Rule.** Caixa-alta espaçada rotula um valor dentro da interface ilustrada (ou o "LABS" do logotipo). Nunca aparece como etiqueta acima de um título de seção.

## Layout

Contêiner único de 1200px com respiro lateral fluido (16px no celular, até 40px). Seções têm padding vertical fluido de 88px a 160px e são separadas por um fio de 1px no topo. Cabeçalhos de seção usam grade de duas colunas (título à esquerda, apoio à direita, alinhados pela base) que vira uma coluna abaixo de 960px; quando não há texto de apoio, o título fica sozinho.

O hero é uma grade 1,35fr / 0,85fr: texto à esquerda, celular à direita, empilhando abaixo de 960px. Os cenários formam um bento de 1,25fr / 1fr com o tile "No altar" ocupando duas linhas, colapsando para uma coluna abaixo de 720px. Serviços são uma grade de 3 → 2 → 1 colunas separada só por fios, sem cartões. O feed é 4 → 2 colunas.

Ritmo de espaçamento interno: 8, 12, 16, 20 e 32px. Pontos de quebra observados: 960, 860 (navegação some, fica o botão), 720 e 560px (botões do hero ocupam a largura toda).

## Elevation & Depth

Sistema plano com camadas tonais. A profundidade vem do degrau da noite, de fios de 1px em lavanda translúcida e de brilhos radiais de fundo. Sombras existem em dois lugares apenas, ambas neutras e escuras: o botão primário (sombra curta e um brilho interno de 1px no topo, como uma tecla) e o celular (sombra longa e difusa que o descola da página). A navegação usa vidro: fundo azul-noite a 72% com desfoque de 14px.

### Shadow Vocabulary
- **Tecla** (`box-shadow: 0 6px 16px -6px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18)`): botão primário em repouso; no hover desce para `0 10px 22px -8px rgba(0,0,0,0.6)` com brilho interno de 0,22.
- **Objeto** (`box-shadow: 0 40px 80px -24px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.08)`): só o celular do hero.

### Named Rules
**The Sombra Sem Cor Rule.** Sombras são sempre pretas e neutras. Cor violeta entra como luz de fundo (gradiente radial atrás do objeto), nunca como sombra projetada ou brilho em volta de botão.

## Shapes

Cantos generosos e consistentes por escala: 10px em chips, passos e link de pular; 16px em painéis internos e imagens do feed; 28px nos tiles; 36px na caixa de CTA; botões e selos são pílulas. Dentro da interface ilustrada a escala encolhe (linhas de 12px, teclas de tom de 7px) e o celular tem 48px por fora e 37px na tela. Bordas são sempre de 1px, em `line` ou `line-strong`. O monograma TP é sempre circular.

## Components

### Buttons
Pílulas firmes, com ícone à esquerda quando a ação leva a um canal (WhatsApp, Instagram).
- **Shape:** pílula (999px), altura mínima de 48px, ícone de 20px com 10px de espaço.
- **Primary:** violeta de ação com texto branco, Inter 600, sombra Tecla. Reservado à ação principal: chamar no WhatsApp.
- **Hover / Focus:** hover escurece para violeta profundo (só em dispositivos com hover); pressionar reduz para 0,97; foco é um anel lavanda de 2px com 3px de afastamento. Transições de 0,2s.
- **Ghost:** fio forte, fundo branco a 2%, texto principal; no hover a borda vira lavanda e o fundo ganha lavanda a 6%. Ação secundária (Instagram).
- **Tamanhos:** pequeno (40px, padding 16px) na navegação; grande (56px, padding 28px) na caixa de CTA.

### Chips
- **Cifra:** blocos de acorde em lavanda sobre violeta a 10% com borda violeta a 30%, cantos de 10px, Inter 600.
- **Passos:** rótulos neutros (branco a 5%, fio) ligados por traços de 18px em fio forte.
- **Selo "Ao vivo":** pílula em violeta a 18% com ponto e texto em lavanda.

### Cards / Containers
- **Corner Style:** 28px (tiles), 36px (CTA).
- **Background:** gradiente vertical de night-2 para night-2 a 60%; a caixa de CTA soma um gradiente radial violeta no topo.
- **Shadow Strategy:** nenhuma; ver Elevation & Depth.
- **Border:** 1px `line` nos tiles, `line-strong` na CTA.
- **Internal Padding:** fluido, de 28px a 44px.
- **Cabeçalho do tile:** ícone de linha em lavanda (30px; 40px no tile principal) inline ao lado do título, sem moldura.

### Navigation
Barra fixa de 68px em vidro azul-noite com fio inferior. Monograma circular de 36px com "TP Studio" em Poppins 700 e "LABS" em Inter 500 maiúsculo espaçado (0,24em) após um divisor. Âncoras em text-2, 0.9375rem, viram text no hover. Abaixo de 860px as âncoras somem e fica só o botão de WhatsApp pequeno.

### Interface ilustrada (Signature Component)
O celular inclinado 4° (2° no celular pequeno) mostrando a ordem do culto: linhas que avançam a cada 2,6s (ativa com tinta violeta e borda violeta a 45%, concluídas em text-3), tecla de tom que fica violeta na linha ativa, e o pad com barras que pulsam. O tile "No altar" espelha o mesmo estado num trilho de cinco segmentos lavanda e numa grade de quatro valores em Poppins 600 lavanda com números tabulares. Toda interface desse tipo leva a legenda "Tela ilustrativa" ou "Ilustração".

### Motion
Curva única `cubic-bezier(0.16, 1, 0.3, 1)`. Estados em 0,2s; mudanças de dado na interface ilustrada em 0,5s; revelação de seção em 0,8s (subida de 24px e opacidade, escalonada em 60ms); entrada do hero em 0,9s com desfoque de 6px e atrasos de 80ms. Com movimento reduzido, nada anima e nada fica escondido.

## Do's and Don'ts

### Do:
- **Do** usar violeta sólido (#6847f0, hover #5a3be0) só em botões e links de ação.
- **Do** usar lavanda (#b9b3ff) para destacar uma palavra do título, ícones e valores.
- **Do** separar superfícies e seções com fios de 1px em lavanda a 14% (28% para ênfase).
- **Do** colocar ícones de linha inline, à esquerda do título, sem moldura nem fundo.
- **Do** rotular toda tela de app como ilustrativa.
- **Do** manter o conteúdo visível sem JavaScript e desligar todo movimento com `prefers-reduced-motion`.

### Don't:
- **Don't** pintar elementos decorativos com violeta sólido; decoração é lavanda ou luz violeta translúcida.
- **Don't** usar sombra colorida ou brilho violeta em volta de botões e cartões.
- **Don't** colocar ícones dentro de quadrados ou círculos coloridos (ícone em tile).
- **Don't** pôr etiqueta em caixa-alta (kicker/eyebrow) acima de títulos de seção.
- **Don't** usar preto puro ou cinza neutro; os neutros são azul-noite e lavanda.
- **Don't** usar Poppins em texto corrido nem Inter em títulos.
