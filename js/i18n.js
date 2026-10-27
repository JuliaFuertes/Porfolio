/* ==========================================================
   i18n.js — cambio de idioma (EN / CA / ES)
   Cualquier elemento con data-i="clave" se traduce solo.
   ========================================================== */
(function (A) {
  const $ = (s) => document.querySelector(s);

  A.lang = 0;                       // índice dentro de A.LANGS
  A.onLangChange = [];              // funciones que se ejecutan al cambiar de idioma

  A.t = (key) => A.UI[A.LANGS[A.lang]][key];
  A.pick = (arr) => arr[A.lang];    // elige el texto del idioma activo en [en, ca, es]

  A.setLang = function (code) {
    A.lang = Math.max(0, A.LANGS.indexOf(code));
    const lang = A.LANGS[A.lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i]").forEach((el) => (el.innerHTML = A.t(el.dataset.i)));
    document.querySelectorAll("[data-sub]").forEach((el) => (el.textContent = A.pick(A.TEXT[el.dataset.sub].sub)));
    document.querySelectorAll("[data-sum]").forEach((el) => (el.textContent = A.pick(A.TEXT[el.dataset.sum].sum)));
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === lang));

    $("#theme").setAttribute("aria-label", A.t("theme"));
    $("#theme").title = A.t("theme");
    $("#flower").setAttribute("aria-label", A.t("intro_alt"));
    $("#projects").setAttribute("aria-label", A.t("sec_projects"));
    $("#close").setAttribute("aria-label", A.t("close"));
    $(".lang").setAttribute("aria-label", A.t("lang"));

    A.onLangChange.forEach((fn) => fn());
    try { localStorage.setItem("lang", lang); } catch (e) {}
  };

  A.initLang = function () {
    document.querySelectorAll(".lang button").forEach((b) => (b.onclick = () => A.setLang(b.dataset.l)));
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    A.setLang(saved || (navigator.language || "en").slice(0, 2));
  };
})(window.App);
