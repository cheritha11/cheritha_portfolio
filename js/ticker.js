/* ============================================
   ticker.js — Scrolling marquee
   ============================================ */

(function () {
  const track = document.getElementById('ticker');
  if (!track) return;

  const items = [
    'DATA SCIENCE 🌸', 'MACHINE LEARNING ✦', 'PYTHON 💜',
    'PANDAS 🐼', 'ML ENGINEER 🎀', 'OPEN TO INTERNSHIPS ✿',
    'HYDERABAD 🌺', 'CLASS OF 2027 ⋆', 'FLASK & FASTAPI ✦',
    'CHART.JS 🌸', 'SCIKIT-LEARN 💜', 'DATA. MODELS. RESULTS. ✦',
  ];

  /* Duplicate for seamless loop */
  [...items, ...items].forEach(text => {
    const span = document.createElement('span');
    span.className = 'ticker-item';
    span.textContent = text;
    track.appendChild(span);
  });
})();
