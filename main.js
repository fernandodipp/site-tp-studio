// Número do WhatsApp com DDI e DDD, só dígitos (ex.: "5511999999999").
const WHATSAPP = "5581985638840";
const WHATSAPP_MSG = "Olá, TP Studio Labs! Vim pelo site e quero conversar.";

if (WHATSAPP) {
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((a) => { a.href = href; });
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
  track.forEach((t, n) => { t.classList.toggle("is-active", n === i); t.classList.toggle("is-done", n < i); });
  const set = (k, v) => { const el = sync(k); if (el) el.textContent = v; };
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
    setInterval(() => { current = (current + 1) % rows.length; setActive(current); }, 2600);
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
