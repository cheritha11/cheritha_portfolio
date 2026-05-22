/* ============================================
   numbergame.js — Guess My Number (1–21)
   Cryptic, mixed-vibe hints + Restart button
   ============================================ */

const NUMBER_HINTS = [
  {
    n: 1,
    clues: [
      "Smaller than a byte, larger than nothing. Literally the loneliest number 🙃",
      "The answer when you divide anything by itself. Humble king.",
      "Prime? Debatable. Unique? Always. The only number that is its own square, cube, and best friend.",
    ],
  },
  {
    n: 2,
    clues: [
      "The only even prime. Literally the rarest of its kind 👀",
      "Pairs with everything. Committed to no one.",
      "Binary basics — 0 and... this. The foundation of every computer ever made.",
    ],
  },
  {
    n: 3,
    clues: [
      "Odd, prime, and fully convinced it's the protagonist. Triangle energy.",
      "Third time's the charm. Also a very dramatic number.",
      "The first odd prime. Also the number of members in a cursed idol group.",
    ],
  },
  {
    n: 4,
    clues: [
      "Feared in East Asian cultures for sounding like 'death' ☠️ Seasons. Directions. Limbs.",
      "Even, not prime, but very reliable energy. The dependable middle child.",
      "2 squared. Stable. Grounded. Absolutely not skipping leg day.",
    ],
  },
  {
    n: 5,
    clues: [
      "TXT has exactly this many members 🎵 Coincidence? I think not.",
      "Fingers on one hand. Petals on a cherry blossom. A perfectly odd prime.",
      "Divisible by nothing except 1 and itself. Unbothered. Moisturised. Thriving.",
    ],
  },
  {
    n: 6,
    clues: [
      "The first perfect number. Every divisor it has adds up to itself. Overachiever. 🌟",
      "Half a dozen. Also the number of sides on a snowflake. Symmetry obsessed.",
      "Even, not prime, but deeply wholesome. The golden ratio's distant cousin.",
    ],
  },
  {
    n: 7,
    clues: [
      "BTS members. Need I say more? 💜",
      "Lucky number, also the number of days you'll spend debugging one single error.",
      "Prime, odd, and absolutely eating in every dataset it appears in. Rainbow flag colours. Days of the week.",
    ],
  },
  {
    n: 8,
    clues: [
      "Turn it sideways — it becomes ∞. Dramatic much? 🙃",
      "Perfect cube of 2. An overachiever with solid foundations.",
      "Soft, even, and strangely satisfying. Like bubble wrap. Also the number of legs a spider has.",
    ],
  },
  {
    n: 9,
    clues: [
      "Three squared. Generational wealth but make it math.",
      "The highest single digit. Peak before the fall.",
      "Multiply anything by this — its digits always sum back to... this. The number that keeps coming back.",
    ],
  },
  {
    n: 10,
    clues: [
      "The base of our entire number system. The original main character 👑",
      "Two hands. Perfect score. The thing your parents expected on every exam.",
      "1 followed by 0. Sounds simple. Built civilisation.",
    ],
  },
  {
    n: 11,
    clues: [
      "Twin prime — lives next to 13. Bad neighbourhood tbh.",
      "Looks like two 1s standing awkwardly close at a party.",
      "A repunit. That's a real word. This number knows it, and it's smug about it.",
    ],
  },
  {
    n: 12,
    clues: [
      "Months in a year. Signs of the zodiac. Eggs in a carton. This number is everywhere. 🥚",
      "A dozen. Highly divisible. The opposite of antisocial.",
      "3 × 4. Also the number of hours on a clock face. Time flies.",
    ],
  },
  {
    n: 13,
    clues: [
      "Prime, odd, and mostly screams danger 🚨 Skipped in hotel floors. Worshipped in K-pop.",
      "Considered unlucky by some. A girlboss number by others.",
      "Taylor Swift's favourite number. Also the answer your instincts were telling you first.",
    ],
  },
  {
    n: 14,
    clues: [
      "Valentine's Day. Also the atomic number of Silicon. Love and technology, iconic duo. 💻",
      "Even, not prime, and perpetually overshadowed by 13 and 15. The middle child energy is real.",
      "2 × 7. Combines the luck of 7 with the reliability of 2. Balanced.",
    ],
  },
  {
    n: 15,
    clues: [
      "Quarter of an hour. Also the number of minutes of fame everyone supposedly gets. ⏱️",
      "Odd, not prime — divisible by 3 and 5. An overachiever in the factors department.",
      "3 × 5. Sweet spot between teenage awkward and almost-adult chaos.",
    ],
  },
  {
    n: 16,
    clues: [
      "Sweet sixteen. Also 2 to the power of 4. Power of two with main character energy.",
      "Even, composite, and lowkey iconic. The age when things get complicated.",
      "Perfect square of 4. Hexadecimal's favourite number. 0x10 if you speak computer.",
    ],
  },
  {
    n: 17,
    clues: [
      "Another prime. This one has main character energy with a villain arc.",
      "Between sweet 16 and legal 18 — the awkward middle child of numbers.",
      "Odd, prime, and would 100% ghost you on read. No remorse.",
    ],
  },
  {
    n: 18,
    clues: [
      "Almost legal. The number that thinks it's grown but still asks parents for wifi password. 📶",
      "Even, not prime. 2 × 9 or 3 × 6. Very flexible. Very indecisive.",
      "The legal voting age in most countries. Democracy's favourite number.",
    ],
  },
  {
    n: 19,
    clues: [
      "The last teen number. Maximum teenage angst packed into prime form. 😤",
      "Prime, odd, and deeply aware that 20 is coming and everything is about to change.",
      "Also a Adele album title. Iconic. Emotional. Slightly chaotic.",
    ],
  },
  {
    n: 20,
    clues: [
      "The score you needed. The age that ends the teen era. A round number that judges you. 👀",
      "4 × 5. Even, composite, suspiciously neat.",
      "Twenty — the number that shows up on every 'things to do before you turn...' list.",
    ],
  },
  {
    n: 21,
    clues: [
      "The max. The ceiling. The boss level 👑",
      "Blackjack calls it perfect. This game calls it the boundary. You can't go higher.",
      "Odd, not prime, but acts like it owns the place. 3 × 7 — two powerful numbers in a trenchcoat.",
    ],
  },
];

/* --- State --- */
let _ngSecret   = null;
let _ngHintIdx  = 0;
let _ngClues    = [];
let _ngWins     = 0;
let _ngPlayed   = 0;

/* --- DOM helpers --- */
function $id(id) { return document.getElementById(id); }

function ngSetFeedback(msg, ok) {
  const el = $id('ng-feedback');
  if (!el) return;
  el.textContent = msg;
  el.style.color = ok === true ? '#1a6b3c' : ok === false ? '#c0392b' : 'inherit';
}

function ngUpdateStats() {
  const el = $id('ng-stats');
  if (el) el.textContent = `Wins: ${_ngWins} / ${_ngPlayed}`;
}

/* --- Restart (full reset) --- */
function ngRestart() {
  _ngSecret  = null;
  _ngHintIdx = 0;
  _ngClues   = [];
  _ngWins    = 0;
  _ngPlayed  = 0;

  const hintBox = $id('hint-box');
  if (hintBox) hintBox.textContent = 'Game reset! Press "New Game" to start fresh ✨';
  const hintsLeft = $id('ng-hints-left');
  if (hintsLeft) hintsLeft.textContent = '';
  const input = $id('ng-input');
  if (input) input.value = '';
  ngSetFeedback('');
  ngUpdateStats();
}

/* --- New Game --- */
function ngNewGame() {
  const pick = NUMBER_HINTS[Math.floor(Math.random() * NUMBER_HINTS.length)];
  _ngSecret  = pick.n;
  _ngClues   = pick.clues;
  _ngHintIdx = 0;
  _ngPlayed++;

  $id('hint-box').textContent      = _ngClues[0];
  $id('ng-hints-left').textContent = `Hints used: 1 / ${_ngClues.length}`;
  $id('ng-input').value            = '';
  ngSetFeedback('');
  ngUpdateStats();
}

/* --- Reveal next hint --- */
function ngNextHint() {
  if (!_ngSecret) { ngSetFeedback('Start a game first!', false); return; }
  if (_ngHintIdx >= _ngClues.length - 1) {
    ngSetFeedback('No more hints — trust your gut 🤞', null);
    return;
  }
  _ngHintIdx++;
  $id('hint-box').textContent      = _ngClues[_ngHintIdx];
  $id('ng-hints-left').textContent = `Hints used: ${_ngHintIdx + 1} / ${_ngClues.length}`;
}

/* --- Guess --- */
function ngGuess() {
  if (!_ngSecret) { ngSetFeedback('Start a game first!', false); return; }
  const g = parseInt($id('ng-input').value, 10);

  if (!g || g < 1 || g > 21) {
    ngSetFeedback('Enter a number between 1 and 21 👀', false);
    return;
  }

  if (g === _ngSecret) {
    _ngWins++;
    ngSetFeedback(`✅ YES! It was ${_ngSecret}! You're basically psychic 🔮`, true);
    _ngSecret = null;
    ngUpdateStats();
  } else {
    ngSetFeedback('❌ Nope. Keep thinking... 🌸', false);
  }
}

/* --- Enter key support --- */
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ng-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') ngGuess();
    });
  }
});