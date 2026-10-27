/* ==========================================================
   flower.js — logo de entrada: la flor hecha de puntitos.
   Los datos (posición, tamaño y color de cada punto) están en
   flower-data.js. Aquí solo está la animación e interacción:
   - los puntos se ensamblan solos al cargar
   - el ratón (o el dedo) los aparta y vuelven a su sitio
   - un clic/toque lanza una pequeña explosión
   ========================================================== */
(function (A) {
  A.initFlower = function () {
    const D = A.FLOWER;
    const sec = document.getElementById("intro");
    const cv = document.getElementById("flower");
    if (!D || !sec || !cv) return;
    const ctx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = D.dots.length / 6;

    // estado de cada punto
    const hx = new Float32Array(N), hy = new Float32Array(N);   // posición "casa"
    const x = new Float32Array(N), y = new Float32Array(N);     // posición actual
    const vx = new Float32Array(N), vy = new Float32Array(N);   // velocidad
    const rad = new Float32Array(N), ph = new Float32Array(N), delay = new Float32Array(N);
    const col = new Array(N);
    for (let i = 0; i < N; i++) {
      const j = i * 6;
      rad[i] = D.dots[j + 2];
      col[i] = `rgb(${D.dots[j + 3]},${D.dots[j + 4]},${D.dots[j + 5]})`;
      ph[i] = Math.random() * 6.283;
      delay[i] = Math.random() * 0.9;
    }

    let W = 0, H = 0, dpr = 1, scale = 1, ox = 0, oy = 0, first = true;
    const mouse = { x: -9999, y: -9999, on: false };
    let visible = true, raf = 0, t0 = performance.now();

    function layout() {
      const r = sec.getBoundingClientRect();
      W = r.width; H = r.height; dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = Math.min(W / D.w, H / D.h) * 0.84;
      ox = (W - D.w * scale) / 2; oy = (H - D.h * scale) / 2 - H * 0.02;
      for (let i = 0; i < N; i++) {
        const nx = ox + D.dots[i * 6] * scale, ny = oy + D.dots[i * 6 + 1] * scale;
        if (first) {                                   // arranque: puntos dispersos alrededor
          const a = Math.random() * 6.283, d = Math.max(W, H) * (0.35 + Math.random() * 0.45);
          x[i] = W / 2 + Math.cos(a) * d; y[i] = H / 2 + Math.sin(a) * d;
        } else { x[i] += nx - hx[i]; y[i] += ny - hy[i]; }
        hx[i] = nx; hy[i] = ny;
      }
      first = false;
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const a = Math.min(1, Math.max(0, (t - delay[i]) / 0.6));
        if (a <= 0) continue;
        const sp = Math.min(Math.abs(vx[i]) + Math.abs(vy[i]), 12);
        const r = rad[i] * scale * (1 + sp * 0.07);
        ctx.globalAlpha = a;
        ctx.fillStyle = col[i];
        ctx.beginPath(); ctx.arc(x[i], y[i], r, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function step(now) {
      if (!visible) { raf = 0; return; }
      const t = (now - t0) / 1000;
      const R = Math.max(80, Math.min(W, H) * 0.16), R2 = R * R;
      const sway = scale * 0.9;
      for (let i = 0; i < N; i++) {
        if (t < delay[i]) continue;
        const tx = hx[i] + Math.sin(t * 0.9 + ph[i]) * sway;
        const ty = hy[i] + Math.cos(t * 0.8 + ph[i] * 1.3) * sway;
        if (mouse.on) {
          const dx = x[i] - mouse.x, dy = y[i] - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const d = Math.sqrt(d2) || 1, f = (1 - d / R) * (1 - d / R);
            vx[i] += (dx / d) * f * 2.6 - (dy / d) * f * 0.9;   // empuja y gira un poco
            vy[i] += (dy / d) * f * 2.6 + (dx / d) * f * 0.9;
          }
        }
        vx[i] = (vx[i] + (tx - x[i]) * 0.045) * 0.87;
        vy[i] = (vy[i] + (ty - y[i]) * 0.045) * 0.87;
        x[i] += vx[i]; y[i] += vy[i];
      }
      draw(t);
      raf = requestAnimationFrame(step);
    }

    function burst(px, py) {
      const R = Math.max(160, Math.min(W, H) * 0.34);
      for (let i = 0; i < N; i++) {
        const dx = x[i] - px, dy = y[i] - py, d = Math.sqrt(dx * dx + dy * dy) || 1;
        if (d < R) { const f = (1 - d / R) * 22 * (0.6 + Math.random() * 0.6); vx[i] += (dx / d) * f; vy[i] += (dy / d) * f; }
      }
    }

    layout();
    if (reduce) {                                       // sin animación: la flor quieta
      for (let i = 0; i < N; i++) { x[i] = hx[i]; y[i] = hy[i]; delay[i] = 0; }
      draw(10);
      window.addEventListener("resize", () => { layout(); for (let i = 0; i < N; i++) { x[i] = hx[i]; y[i] = hy[i]; } draw(10); });
      return;
    }

    const pos = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    cv.addEventListener("pointermove", (e) => { [mouse.x, mouse.y] = pos(e); mouse.on = true; });
    cv.addEventListener("pointerleave", () => (mouse.on = false));
    cv.addEventListener("pointerdown", (e) => { const [px, py] = pos(e); mouse.x = px; mouse.y = py; mouse.on = true; burst(px, py); });
    cv.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") mouse.on = false; });
    window.addEventListener("resize", layout);

    // se pausa cuando el logo no se ve (ahorra batería)
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(step);
    }, { threshold: 0.01 }).observe(sec);

    raf = requestAnimationFrame(step);
  };
})(window.App);
