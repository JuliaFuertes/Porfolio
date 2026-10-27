/* ==========================================================
   ui.js — titular, listas de proyectos y experiencia,
   menú activo, modo oscuro y botón de copiar correo
   ========================================================== */
(function (A) {
  const $ = (s) => document.querySelector(s);

  /* Titular palabra por palabra (solo se anima en la primera carga) */
  function renderTitle(animate) {
    $("#h1").innerHTML = A.t("h1").split(" ")
      .map((w, i) => `<span style="${animate ? `animation-delay:${i * 55}ms` : "animation:none;opacity:1;transform:none"}">${w}</span>`)
      .join(" ");
  }

  /* Una fila de la lista. kind "case" = proyecto, kind "exp" = prácticas */
  function rowHTML(p, index) {
    const isExp = p.kind === "exp";
    const media = `<div class="work-media fit-${p.cover.fit}" style="background:${p.color}"><img src="${p.cover.img}" alt="${p.cover.alt}" loading="lazy"></div>`;
    const head = isExp
      ? `<span class="badge" data-i="badge_exp"></span>`
      : `<span class="work-num">${String(index + 1).padStart(2, "0")}</span>`;
    const sub = isExp ? `data-i="exp_h"` : `data-sub="${p.id}"`;
    const sum = isExp ? `data-i="exp_p"` : `data-sum="${p.id}"`;
    return `
      <article class="work${isExp ? " exp" : ""}" data-open="${p.id}" style="animation-delay:${index * 80}ms">
        ${media}
        <div class="work-info">
          ${head}
          <h3>${p.title}</h3>
          <p class="work-sub" ${sub}></p>
          <p class="work-sum" ${sum}></p>
          <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          <button type="button" class="work-link" data-open="${p.id}" data-i="${isExp ? "full_exp" : "full_project"}"></button>
        </div>
      </article>`;
  }

  /* Baldosa del mosaico (solo proyectos). El tamaño de cada una lo define el CSS (.bento .tile:nth-child) */
  function tileHTML(p, index) {
    return `
      <article class="tile" data-open="${p.id}" tabindex="0" role="button" style="--tile:${p.color};--tfg:${p.fg || "#fff"};animation-delay:${index * 90}ms">
        <span class="tile-num">${String(index + 1).padStart(2, "0")}</span>
        <span class="tile-arrow" aria-hidden="true">↗</span>
        <div class="tile-mark"><img src="${p.cover.img}" alt="${p.cover.alt}" draggable="false"></div>
        <div class="tile-info">
          <h3>${p.title}</h3>
          <p class="tile-sub" data-sub="${p.id}"></p>
          <div class="tile-more"><div>
            <p class="tile-sum" data-sum="${p.id}"></p>
            <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div></div>
        </div>
      </article>`;
  }

  function renderLists() {
    $("#projects").innerHTML = A.PROJECTS.filter((p) => p.kind === "case").map(tileHTML).join("");
    $("#experiences").innerHTML = A.PROJECTS.filter((p) => p.kind === "exp").map(rowHTML).join("");
  }

  /* Resalta en el menú la sección visible */
  function initNavSpy() {
    const links = [...document.querySelectorAll(".nav a")];
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    ["work", "experience", "profile", "contact"].forEach((id) => io.observe(document.getElementById(id)));
  }

  /* Modo claro / oscuro */
  function initTheme() {
    const root = document.documentElement;
    try { const s = localStorage.getItem("theme"); if (s) root.dataset.theme = s; } catch (e) {}
    $("#theme").onclick = () => {
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    };
  }

  /* Botón "copiar correo" */
  function initCopy() {
    $("#copy").onclick = async (e) => {
      const btn = e.currentTarget;
      try { await navigator.clipboard.writeText("juliafc2006@gmail.com"); btn.textContent = A.t("copied"); }
      catch { btn.textContent = A.t("failed"); }
      setTimeout(() => (btn.textContent = A.t("copy")), 1800);
    };
  }

  /* Teclado: Enter o espacio abren la baldosa enfocada */
  function initTileKeys() {
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".tile")) { e.preventDefault(); e.target.click(); }
    });
  }

  A.initUI = function () {
    renderLists();
    initTileKeys();
    initNavSpy();
    initTheme();
    initCopy();
    let first = true;
    A.onLangChange.push(() => { renderTitle(first); first = false; });
  };
})(window.App);
