/* ============================================
   floral.js — Generates floating petals,
   sparkles and ribbon decorations
   ============================================ */

(function () {
  const bg = document.getElementById('floralBg');
  if (!bg) return;

  const petals  = ['🌸', '🌺', '✿', '❀', '🌷', '💜', '⋆', '✦'];
  const ribbons = ['🎀'];

  /* --- Petals --- */
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'petal';
    el.textContent = petals[i % petals.length];
    el.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `top: ${Math.random() * -20}%`,
      `font-size: ${10 + Math.random() * 14}px`,
      `animation-duration: ${9 + Math.random() * 14}s`,
      `animation-delay: ${Math.random() * 12}s`,
    ].join(';');
    bg.appendChild(el);
  }

  /* --- Sparkles --- */
  const sparkleColors = ['#C8C2F0', '#ED93B1', '#EF9F27'];
  for (let i = 0; i < 16; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    const size = 4 + Math.random() * 5;
    el.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `top: ${Math.random() * 100}%`,
      `width: ${size}px`,
      `height: ${size}px`,
      `background: ${sparkleColors[i % 3]}`,
      `animation-delay: ${Math.random() * 4}s`,
      `animation-duration: ${2 + Math.random() * 2.5}s`,
    ].join(';');
    bg.appendChild(el);
  }

  /* --- Ribbon decorations --- */
  for (let i = 0; i < 5; i++) {
    const el = document.createElement('div');
    el.className = 'ribbon-deco';
    el.textContent = ribbons[0];
    el.style.cssText = [
      `left: ${5 + Math.random() * 90}%`,
      `top: ${10 + Math.random() * 80}%`,
      `font-size: ${14 + Math.random() * 10}px`,
      `animation-delay: ${Math.random() * 3}s`,
      `animation-duration: ${3.5 + Math.random() * 2}s`,
    ].join(';');
    bg.appendChild(el);
  }
})();
