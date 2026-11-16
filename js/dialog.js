/* ==========================================================
   dialog.js — ventana de "caso de estudio" con vídeo,
   galería de imágenes y visor de diapositivas
   ========================================================== */
(function (A) {
  const $ = (s) => document.querySelector(s);
  const dlg = $("#dlg");
  let current = null;
  let slide = 1;

  /* ----- textos (se repintan al cambiar de idioma) ----- */
  function renderText(p) {
    const tx = A.TEXT[p.id];
    $("#d-top").style.background = p.color;
    const mk = $("#d-mark"); if (p.mark) { mk.src = p.mark; mk.hidden = false; } else mk.hidden = true;
    $("#d-kicker").textContent = `${p.kind === "case" ? A.t("case") : A.t("exp_label")} · ${p.n}`;
    $("#d-title").textContent = tx.title ? A.pick(tx.title) : p.title;
    $("#d-sum").textContent = A.pick(tx.sum);
    $("#d-meta").innerHTML = `<span>${A.t("role")} · ${A.pick(tx.role)}</span><span>${A.t("scope")} · ${A.pick(tx.scope)}</span>`;
    $("#d-txt").innerHTML = A.pick(tx.body);
    renderStats(tx);
    renderSteps(p, tx);
  }

  /* ----- cifras clave (opcional: TEXT[id].stats) ----- */
  function renderStats(tx) {
    $("#d-stats").innerHTML = (tx.stats || [])
      .map((s) => `<div><b>${s[0]}</b><span>${A.pick(s[1])}</span></div>`).join("");
  }

  /* ----- proceso por versiones con imágenes grandes (opcional: p.steps + TEXT[id].steps) ----- */
  function renderSteps(p, tx) {
    if (!p.steps || !tx.steps) { $("#d-steps").innerHTML = ""; return; }
    const label = tx.process ? A.pick(tx.process) : A.t("process");
    $("#d-steps").innerHTML = `<div class="label">${label}</div>` + p.steps.map((st, i) => {
      const T = tx.steps[i];
      const figs = st.imgs.map((src, j) => {
        const cap = T.caps && T.caps[j] ? A.pick(T.caps[j]) : "";
        return `<figure><a href="${src}" target="_blank" rel="noopener" title="${A.t("zoom")}"><img src="${src}" alt="${cap || A.pick(T.title)}" loading="lazy"></a>${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
      }).join("");
      return `<section class="step">
        <div class="step-head"><span class="step-tag">${T.tag}</span><h3>${A.pick(T.title)}</h3></div>
        <p>${A.pick(T.text)}</p>
        ${figs ? `<div class="step-imgs cols-${st.cols}"${st.max ? ` style="max-width:${st.max}px"` : ""}>${figs}</div>` : ""}</section>`;
    }).join("");
  }

  /* ----- medios (se construyen una sola vez al abrir) ----- */
  function mediaHTML(m) {
    if (m.type === "video") {
      return `<figure><figcaption data-i="${m.cap}"></figcaption>
        <video controls preload="metadata" poster="${m.poster}" src="${m.src}"></video></figure>`;
    }
    if (m.type === "gallery") {
      return `<figure><figcaption data-i="${m.cap}"></figcaption>
        <div class="gallery${m.wide ? " wide" : ""}">${m.images.map((i) => `<img src="${i.src}" alt="${i.alt}" loading="lazy">`).join("")}</div></figure>`;
    }
    if (m.type === "slides") {
      return `<figure class="slides" data-dir="${m.dir}" data-count="${m.count}" tabindex="0">
        <figcaption data-i="${m.cap}"></figcaption>
        <img alt="">
        <div class="slides-bar"><button type="button" data-go="-1" data-i="prev"></button>
        <span class="counter"></span><button type="button" data-go="1" data-i="next"></button></div></figure>`;
    }
    return "";
  }

  function renderLinks(p) {
    const links = p.links.filter((l) => l.url);   // los enlaces vacíos no se muestran
    $("#d-links").innerHTML = links
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener" data-i="${l.key}"></a>`)
      .join("");
  }

  /* ----- visor de diapositivas ----- */
  function updateSlide() {
    const box = dlg.querySelector(".slides");
    if (!box) return;
    const count = +box.dataset.count;
    box.querySelector("img").src = `${box.dataset.dir}${String(slide).padStart(2, "0")}.jpg`;
    box.querySelector("img").alt = `${A.t("slide")} ${slide}`;
    box.querySelector(".counter").textContent = `${A.t("slide")} ${slide} / ${count}`;
    box.querySelector('[data-go="-1"]').disabled = slide <= 1;
    box.querySelector('[data-go="1"]').disabled = slide >= count;
  }

  function go(step) {
    const box = dlg.querySelector(".slides");
    if (!box) return;
    slide = Math.min(+box.dataset.count, Math.max(1, slide + step));
    updateSlide();
  }

  /* ----- abrir / cerrar ----- */
  A.openProject = function (id) {
    const p = A.PROJECTS.find((x) => x.id === id);
    if (!p) return;
    current = id;
    slide = 1;
    $("#d-media").innerHTML = p.media.map(mediaHTML).join("");
    renderLinks(p);
    renderText(p);
    A.setLang(A.LANGS[A.lang]);       // traduce los data-i recién creados
    updateSlide();
    dlg.showModal();
    dlg.scrollTop = 0;
  };

  A.initDialog = function () {
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open]");
      if (opener) A.openProject(opener.dataset.open);
      const nav = e.target.closest("[data-go]");
      if (nav) go(+nav.dataset.go);
      if (e.target === dlg) dlg.close();               // clic fuera de la ventana
    });
    dlg.addEventListener("keydown", (e) => {
      if (e.target.tagName === "VIDEO") return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    });
    dlg.addEventListener("close", () => {
      dlg.querySelectorAll("video").forEach((v) => v.pause());
      $("#d-media").innerHTML = "";   // detiene también los vídeos de YouTube
      current = null;
    });
    $("#close").onclick = () => dlg.close();

    // al cambiar de idioma con la ventana abierta, repintamos textos sin perder el vídeo
    A.onLangChange.push(() => {
      if (!current) return;
      renderText(A.PROJECTS.find((x) => x.id === current));
      updateSlide();
    });
  };
})(window.App);
