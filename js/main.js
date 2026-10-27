/* ==========================================================
   main.js — punto de entrada: arranca todo en orden
   ========================================================== */
(function (A) {
  A.initFlower();   // logo de entrada
  A.initUI();       // tarjetas, filtros, tema…
  A.initDialog();   // ventana de proyecto
  A.initLang();     // idioma (traduce toda la página)
})(window.App);
