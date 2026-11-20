// Número do WhatsApp com DDI e DDD, só dígitos (ex.: "5511999999999").
const WHATSAPP = "5581985638840";
const WHATSAPP_MSG = "Olá, TP Studio Labs! Vim pelo site e quero conversar.";

if (WHATSAPP) {
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((a) => { a.href = href; });
}

// Formulário rápido antes do WhatsApp: perguntas de toque que montam a mensagem.
// Tudo é opcional; nada é gravado, só vira o texto do link wa.me.
const ZAP = {
  titulo: "Antes de abrir o WhatsApp",
  subtitulo: "Três perguntas opcionais, cerca de 20 segundos. A mensagem chega pronta à nossa equipe.",
  pedirNome: true,
  perguntas: [
    { id: "servico", rotulo: "Qual é a sua necessidade?", msg: "Interesse",
      opcoes: ["Sistema para órgão público", "Segurança digital e LGPD", "Sistema sob medida",
        "App desktop ou web", "Automação de rotinas", "Tecnologia para igreja, estúdio ou evento",
        "Um dos aplicativos da TP Studio Labs"], outro: true },
    { id: "perfil", rotulo: "Para qual tipo de organização?", msg: "Para",
      opcoes: ["Órgão público ou conselho", "Empresa", "Igreja ou ministério", "Estúdio ou músico", "Uso pessoal"], outro: true },
    { id: "momento", rotulo: "Qual é o prazo previsto?", msg: "Prazo",
      opcoes: ["Imediato", "Nos próximos meses", "Em fase de pesquisa"] },
  ],
};

if (WHATSAPP) {
  const el = (tag, attrs = {}, ...filhos) => {
    const n = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    filhos.forEach((f) => n.append(f));
    return n;
  };
  const resp = {};
  let nome = "";
  const link = (t) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
  const bubble = el("div", { class: "zap-bubble" });
  const enviar = el("a", { class: "btn btn--primary btn--lg zap-enviar", target: "_blank", rel: "noopener" });
  enviar.innerHTML = '<svg aria-hidden="true"><use href="#i-whatsapp"/></svg><span>Enviar pelo WhatsApp</span>';
  const direto = el("a", { class: "zap-direto", target: "_blank", rel: "noopener", href: link(WHATSAPP_MSG), text: "Prefiro chamar direto, sem preencher" });

  const montar = () => {
    const det = ZAP.perguntas.filter((q) => resp[q.id]).map((q) => `${q.msg}: ${resp[q.id]}`);
    let linhas = [WHATSAPP_MSG];
    if (det.length) linhas = linhas.concat([""], det);
    if (nome) linhas = linhas.concat(["", `Meu nome é ${nome}.`]);
    return linhas.join("\n");
  };
  const atualizar = () => { const t = montar(); bubble.textContent = t; enviar.href = link(t); };

  const campoEscolha = (q) => {
    const grupo = el("div", { class: "zap-chips" });
    const outro = el("input", { type: "text", maxlength: "40", placeholder: "Qual?", "aria-label": `${q.rotulo} Outro`, class: "zap-input zap-oculto" });
    q.opcoes.concat(q.outro ? ["Outro"] : []).forEach((o) => {
      const r = el("input", { type: "radio", name: `zap-${q.id}`, value: o });
      r.addEventListener("change", () => {
        const ehOutro = o === "Outro";
        outro.classList.toggle("zap-oculto", !ehOutro);
        resp[q.id] = ehOutro ? (outro.value.trim() || "outro") : o;
        if (ehOutro) outro.focus();
        atualizar();
      });
      grupo.append(el("label", { class: "zap-chip" }, r, el("span", { text: o })));
    });
    outro.addEventListener("input", () => { resp[q.id] = outro.value.trim() || "outro"; atualizar(); });
    return [grupo, outro];
  };

  const form = el("form", { autocomplete: "off" });
  form.addEventListener("submit", (e) => e.preventDefault());
  ZAP.perguntas.forEach((q) => form.append(el("fieldset", {}, el("legend", { text: q.rotulo }), ...campoEscolha(q))));
  if (ZAP.pedirNome) {
    const n = el("input", { type: "text", maxlength: "40", placeholder: "Nome e, se quiser, organização", "aria-label": "Seu nome", class: "zap-input" });
    n.addEventListener("input", () => { nome = n.value.trim(); atualizar(); });
    form.append(el("fieldset", {}, el("legend", { text: "Seu nome (opcional)" }), n));
  }
  form.append(
    el("div", { class: "zap-previa", "aria-live": "polite" }, el("span", { text: "Mensagem que será enviada" }), bubble),
    enviar,
    direto,
  );

  const fechar = el("button", { type: "button", class: "zap-x", "aria-label": "Fechar", text: "×" });
  const painel = el("div", { class: "zap-painel", role: "dialog", "aria-modal": "true", "aria-labelledby": "zap-titulo", "aria-hidden": "true" },
    el("div", { class: "zap-topo" }, el("h2", { id: "zap-titulo", text: ZAP.titulo }), fechar),
    el("p", { class: "zap-sub", text: ZAP.subtitulo }),
    form);
  painel.inert = true;
  const fundo = el("div", { class: "zap-fundo" });
  document.body.append(fundo, painel);

  let ultimoFoco = null;
  const abrir = (e) => {
    e.preventDefault();
    ultimoFoco = document.activeElement;
    painel.inert = false;
    painel.classList.add("aberto"); fundo.classList.add("aberto");
    painel.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("zap-travado");
    fechar.focus();
  };
  const fecharPainel = () => {
    painel.classList.remove("aberto"); fundo.classList.remove("aberto");
    painel.setAttribute("aria-hidden", "true");
    painel.inert = true;
    document.documentElement.classList.remove("zap-travado");
    if (ultimoFoco) ultimoFoco.focus();
  };
  // Os botões de chamada abrem o painel; sem JavaScript, o link wa.me continua valendo.
  document.querySelectorAll("[data-whatsapp]").forEach((b) => b.addEventListener("click", abrir));
  fechar.addEventListener("click", fecharPainel);
  fundo.addEventListener("click", fecharPainel);
  document.addEventListener("keydown", (e) => {
    if (!painel.classList.contains("aberto")) return;
    if (e.key === "Escape") fecharPainel();
    if (e.key === "Tab") {
      const foc = [...painel.querySelectorAll("button, a[href], input:not(.zap-oculto)")].filter((x) => !x.disabled);
      const [pri, ult] = [foc[0], foc[foc.length - 1]];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    }
  });
  [enviar, direto].forEach((a) => a.addEventListener("click", () => setTimeout(fecharPainel, 300)));
  atualizar();
}

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Ordem do culto: o momento ativo avança e o pad acompanha o tom.
const rows = [...document.querySelectorAll(".setlist li")];
const padKey = document.querySelector("[data-pad-key]");
let current = 0;
// Painel do tile "No altar" acompanha a ordem do culto do celular.
const LUZ = ["Plena", "Quente", "Baixa", "Média", "Baixa"];
const track = [...document.querySelectorAll(".sync__track li")];
const sync = (k) => document.querySelector(`[data-sync="${k}"]`);
function syncAltar(i, nome, key) {
  track.forEach((t, n) => {
    t.classList.toggle("is-done", n < i);
    t.classList.remove("is-active");
    // Força o recálculo para o preenchimento recomeçar do zero a cada momento.
    if (n === i) { void t.offsetWidth; t.classList.add("is-active"); }
  });
  // Cada valor que muda sai subindo e o novo entra de baixo (cerca de 0,4 s),
  // com um pequeno escalonamento entre os campos. Com movimento reduzido, troca direto.
  let ordem = 0;
  const set = (k, v) => {
    const el = sync(k);
    if (!el || el.textContent === v) return;
    if (reduce || !el.animate) { el.textContent = v; return; }
    const atraso = 45 * ordem++;
    el.getAnimations().forEach((a) => a.cancel());
    el.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-0.35em)" }],
      { duration: 150, delay: atraso, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" })
      .finished.then(() => {
        el.textContent = v;
        el.animate([{ opacity: 0, transform: "translateY(0.35em)" }, { opacity: 1, transform: "none" }],
          { duration: 260, easing: "cubic-bezier(0.16, 1, 0.3, 1)" });
        el.getAnimations().forEach((a) => { if (a.effect && a.effect.getComputedTiming().fill === "forwards") a.cancel(); });
      })
      .catch(() => { el.textContent = v; });
  };
  set("momento", nome); set("tom", key); set("pad", key); set("luz", LUZ[i] || "");
}
function setActive(i) {
  rows.forEach((r, n) => {
    r.classList.toggle("is-active", n === i);
    r.classList.toggle("is-done", n < i);
  });
  const key = rows[i].querySelector(".key").textContent;
  if (padKey) padKey.textContent = key;
  syncAltar(i, rows[i].querySelector(".setlist__name").textContent, key);
}
if (rows.length) {
  setActive(0);
  if (!reduce) {
    const ETAPA = 2600;
    const trilha = document.querySelector(".sync__track");
    if (trilha) trilha.style.setProperty("--etapa", `${ETAPA}ms`);
    setActive(0);
    setInterval(() => { current = (current + 1) % rows.length; setActive(current); }, ETAPA);
  }
}

// Revelação ao rolar.
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-in"));
}

// Paralaxe: cada elemento com data-parallax="velocidade" se desloca em relação ao
// próprio bloco. Usa a propriedade `translate`, que não briga com os `transform`
// das animações de entrada e revelação. Desligado com movimento reduzido.
const layers = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
  el,
  speed: parseFloat(el.dataset.parallax) || 0,
  // Referência do deslocamento: um ancestral indicado em data-parallax-ref ou a seção.
  ref: (el.dataset.parallaxRef && el.closest(el.dataset.parallaxRef)) || el.closest("section") || el.parentElement,
}));
if (layers.length && !reduce) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    layers.forEach((l) => {
      const r = l.ref.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const y = -(r.top + r.height / 2 - vh / 2) * l.speed;
      l.el.style.translate = `0 ${y.toFixed(1)}px`;
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

// Notebook 3D do hero: pausa as animações quando sai da tela, para poupar bateria.
const device = document.querySelector(".device");
if (device && "IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => device.classList.toggle("is-paused", !e.isIntersecting)).observe(device);
}

// Tela do notebook: o código é digitado no editor, os testes rodam no terminal
// e o ciclo recomeça. Sem JS ou com movimento reduzido, fica o código completo (HTML).
const codeEl = document.querySelector("[data-code]");
const termEl = document.querySelector("[data-term]");
if (codeEl && termEl && !reduce) {
  const CODE = [
    [["c", "// checklist de cada entrega"]],
    [["k", "entrega"], ["", "."], ["f", "verificar"], ["", "({"]],
    [["", "  entradas: "], ["s", "'validadas'"], ["", ","]],
    [["", "  segredos: "], ["s", "'fora do código'"], ["", ","]],
    [["", "  acessos:  "], ["s", "'mínimo necessário'"], ["", ","]],
    [["", "  dados:    "], ["s", "'LGPD'"], ["", ","]],
    [["", "  testes:   "], ["s", "'passando'"], ["", ","]],
    [["", "  versao:   "], ["s", "'numerada e reversível'"], ["", ","]],
    [["", "})"]],
  ];
  const TERM = [["$ npm test", ""], ["✓ testes passando", "ok"], ["$ npm run verificar", ""], ["✓ verificações ok", "ok"], ["▶ pronto para publicar", "run"]];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  // Espera enquanto o notebook estiver fora da tela.
  const tick = async (ms) => { await sleep(ms); while (device && device.classList.contains("is-paused")) await sleep(300); };
  const caret = document.createElement("span");
  caret.className = "caret";

  (async function loop() {
    for (;;) {
      codeEl.textContent = ""; termEl.textContent = "";
      for (const tokens of CODE) {
        const ln = document.createElement("span");
        ln.className = "ln";
        codeEl.append(ln);
        ln.append(caret);
        for (const [cls, text] of tokens) {
          const sp = document.createElement("span");
          if (cls) sp.className = cls;
          ln.insertBefore(sp, caret);
          for (const ch of text) { sp.textContent += ch; await tick(ch === " " ? 18 : 38); }
        }
        if (!tokens.length) ln.insertBefore(document.createTextNode(" "), caret);
        await tick(220);
      }
      await tick(500);
      for (const [text, cls] of TERM) {
        const p = document.createElement("p");
        if (cls) p.className = cls;
        p.textContent = text;
        termEl.append(p);
        await tick(cls ? 450 : 750);
      }
      await tick(4200);
    }
  })();
}
