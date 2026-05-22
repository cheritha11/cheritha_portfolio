/* ============================================
   kpopgame.js — Magic Shop 🎤
   BTS & TXT meme guessing game
   5 rounds per session → auto-reset
   ============================================ */

const KPOP_DATA = [

  /* ════════════ BTS ════════════ */
  {
    meme: "🐱 *exists quietly in the corner judging everyone*\n\"I'm not cold. I'm just observing.\"",
    answer: "Suga (BTS)",
    options: ["Suga (BTS)", "Jin (BTS)", "Yeonjun (TXT)", "RM (BTS)"],
  },
  {
    meme: "💪 *spends 3 hours at the gym*\n\"Worldwide Handsome has entered the chat.\"",
    answer: "Jin (BTS)",
    options: ["Jungkook (BTS)", "Jin (BTS)", "Taehyung (BTS)", "Beomgyu (TXT)"],
  },
  {
    meme: "📚 *reads philosophy at 2am*\n\"I need to destroy everything and rebuild it intellectually.\"",
    answer: "RM (BTS)",
    options: ["RM (BTS)", "Suga (BTS)", "Huening Kai (TXT)", "Taehyun (TXT)"],
  },
  {
    meme: "🐰 *blinks once*\n*the entire internet collectively combusts*",
    answer: "Jungkook (BTS)",
    options: ["Jimin (BTS)", "Taehyung (BTS)", "Jungkook (BTS)", "Taehyun (TXT)"],
  },
  {
    meme: "🦊 *does literally anything*\n\"Sorry, I was just born this way.\" 🎨",
    answer: "Taehyung (BTS)",
    options: ["Taehyung (BTS)", "Jimin (BTS)", "Yeonjun (TXT)", "J-Hope (BTS)"],
  },
  {
    meme: "☀️ *walks into the room*\n*everyone immediately feels happier*\n\"I'm your hope!\"",
    answer: "J-Hope (BTS)",
    options: ["Jimin (BTS)", "J-Hope (BTS)", "Beomgyu (TXT)", "Jin (BTS)"],
  },
  {
    meme: "🌙 *dances softly*\n*accidentally breaks 7 world records*\n\"Oh this? Just a Tuesday.\"",
    answer: "Jimin (BTS)",
    options: ["Jimin (BTS)", "Taehyung (BTS)", "Soobin (TXT)", "J-Hope (BTS)"],
  },
  {
    meme: "🐱 *drops a mixtape at midnight with zero warning*\n\"I wasn't sleeping anyway. Neither should you.\"",
    answer: "Suga (BTS)",
    options: ["Suga (BTS)", "RM (BTS)", "Taehyun (TXT)", "Yeonjun (TXT)"],
  },
  {
    meme: "🎤 *cracks a dad joke mid-concert*\n*entire stadium groans but also screams with love*",
    answer: "Jin (BTS)",
    options: ["Jin (BTS)", "J-Hope (BTS)", "Soobin (TXT)", "Jungkook (BTS)"],
  },
  {
    meme: "🏃 *accidentally breaks a priceless artefact at a museum*\n*apologises eloquently in three languages*",
    answer: "RM (BTS)",
    options: ["RM (BTS)", "Taehyung (BTS)", "Huening Kai (TXT)", "Jin (BTS)"],
  },
  {
    meme: "🎨 *shows up to an interview wearing a full museum curator outfit*\n\"It's giving art. Because it IS art.\"",
    answer: "Taehyung (BTS)",
    options: ["Taehyung (BTS)", "Jimin (BTS)", "Yeonjun (TXT)", "RM (BTS)"],
  },
  {
    meme: "✨ *performs a 4-minute routine*\n*still not breathing hard*\n\"Cardio? Never heard of her.\"",
    answer: "Jungkook (BTS)",
    options: ["Jungkook (BTS)", "Taehyun (TXT)", "J-Hope (BTS)", "Yeonjun (TXT)"],
  },
  {
    meme: "🌸 *cries at a butterfly meme*\n*also the most precise dancer on the planet*\n\"Duality is my whole thing.\"",
    answer: "Jimin (BTS)",
    options: ["Jimin (BTS)", "J-Hope (BTS)", "Beomgyu (TXT)", "Taehyung (BTS)"],
  },
  {
    meme: "🎉 *choreographs an entire routine just for fun*\n*it becomes the most streamed video of the year*",
    answer: "J-Hope (BTS)",
    options: ["J-Hope (BTS)", "Jimin (BTS)", "Yeonjun (TXT)", "Jungkook (BTS)"],
  },

  /* ════════════ TXT ════════════ */
  {
    meme: "🦋 *is 6'1\" and still acts like the youngest*\n\"I'm the leader of our chaotic little family.\"",
    answer: "Soobin (TXT)",
    options: ["Soobin (TXT)", "RM (BTS)", "Huening Kai (TXT)", "Yeonjun (TXT)"],
  },
  {
    meme: "🔥 *was literally a backup dancer and said: watch me*\n\"Main dancer. Main vocalist. Main threat.\"",
    answer: "Yeonjun (TXT)",
    options: ["Yeonjun (TXT)", "Taehyun (TXT)", "Jungkook (BTS)", "Beomgyu (TXT)"],
  },
  {
    meme: "🎸 *plays guitar aggressively at 3am*\n*also the most chaotic online presence in TXT*",
    answer: "Beomgyu (TXT)",
    options: ["Beomgyu (TXT)", "Yeonjun (TXT)", "J-Hope (BTS)", "Huening Kai (TXT)"],
  },
  {
    meme: "💎 *trains insanely hard*\n*arrives with a vocal range that ends careers*\n\"I came to compete.\"",
    answer: "Taehyun (TXT)",
    options: ["Taehyun (TXT)", "Jungkook (BTS)", "Soobin (TXT)", "Jin (BTS)"],
  },
  {
    meme: "🌈 *half German, half Korean*\n*brings chaotic fairy energy to every single room*\n\"Hueningkai.exe has stopped working 🤍\"",
    answer: "Huening Kai (TXT)",
    options: ["Huening Kai (TXT)", "Taehyun (TXT)", "Jimin (BTS)", "Beomgyu (TXT)"],
  },
  {
    meme: "🐰 *hosts a game show with zero preparation*\n*somehow the most entertaining thing all week*",
    answer: "Soobin (TXT)",
    options: ["Soobin (TXT)", "Jin (BTS)", "Beomgyu (TXT)", "Huening Kai (TXT)"],
  },
  {
    meme: "🕺 *does a street dance challenge at 6am*\n\"I don't sleep. I just perform.\"",
    answer: "Yeonjun (TXT)",
    options: ["Yeonjun (TXT)", "J-Hope (BTS)", "Jungkook (BTS)", "Taehyun (TXT)"],
  },
  {
    meme: "😈 *logs into bubble*\n*types something completely unhinged*\n*logs off immediately*",
    answer: "Beomgyu (TXT)",
    options: ["Beomgyu (TXT)", "Suga (BTS)", "Huening Kai (TXT)", "Yeonjun (TXT)"],
  },
  {
    meme: "🏋️ *posts a gym selfie*\n*accidentally breaks the internet*\n\"I was just working out???\"",
    answer: "Taehyun (TXT)",
    options: ["Taehyun (TXT)", "Jungkook (BTS)", "Yeonjun (TXT)", "Jin (BTS)"],
  },
  {
    meme: "🎹 *plays piano beautifully*\n*then immediately does something chaotic*\n\"The duality? Intentional.\"",
    answer: "Huening Kai (TXT)",
    options: ["Huening Kai (TXT)", "RM (BTS)", "Beomgyu (TXT)", "Soobin (TXT)"],
  },
];

/* --- Constants --- */
const MAX_ROUNDS = 5;

/* --- State --- */
let _kpopOrder    = [];
let _kpopIdx      = 0;
let _kpopScore    = 0;
let _kpopRound    = 0;   // current round (1–5)
let _kpopAnswered = false;

/* --- Shuffle --- */
function _kpopShuffle() {
  _kpopOrder = [...KPOP_DATA].sort(() => Math.random() - 0.5);
  _kpopIdx   = 0;
}

/* --- Update round display --- */
function _kpopUpdateRound() {
  const el = document.getElementById('kpop-score');
  if (el) {
    el.textContent = _kpopRound === 0
      ? 'Score: 0 / 0'
      : `Score: ${_kpopScore} / ${_kpopRound}  ·  Round ${_kpopRound} / ${MAX_ROUNDS}`;
  }
}

/* --- Full restart --- */
function kpopRestart() {
  _kpopScore    = 0;
  _kpopRound    = 0;
  _kpopAnswered = false;
  _kpopShuffle();

  document.getElementById('kpop-meme').textContent     = 'Game reset! Press "Next →" to play again ✿';
  document.getElementById('kpop-options').innerHTML    = '';
  document.getElementById('kpop-feedback').textContent = '';
  _kpopUpdateRound();
}

/* --- Show final result screen --- */
function _kpopShowResult() {
  const memeEl = document.getElementById('kpop-meme');
  const optsEl = document.getElementById('kpop-options');
  const fbEl   = document.getElementById('kpop-feedback');

  const perfect  = _kpopScore === MAX_ROUNDS;
  const great    = _kpopScore >= 4;
  const decent   = _kpopScore >= 2;

  const msg = perfect ? `PERFECT SCORE! ${_kpopScore}/${MAX_ROUNDS} — you're a certified ARMY + MOA 💜`
            : great   ? `${_kpopScore}/${MAX_ROUNDS} — very impressive. Stan Twitter would be proud 🌸`
            : decent  ? `${_kpopScore}/${MAX_ROUNDS} — not bad! More hours of content research needed 📚`
                      : `${_kpopScore}/${MAX_ROUNDS} — we need to talk about your idol knowledge 😭`;

  memeEl.textContent  = `🎤 Round over!\n\n${msg}`;
  optsEl.innerHTML    = '';
  fbEl.textContent    = 'Press "Restart 🔄" to play again!';
  fbEl.style.color    = '#534AB7';
  _kpopUpdateRound();
}

/* --- Next question --- */
function kpopNext() {
  /* If already completed 5 rounds, show result instead */
  if (_kpopRound >= MAX_ROUNDS) {
    _kpopShowResult();
    return;
  }

  if (_kpopOrder.length === 0) _kpopShuffle();
  if (_kpopIdx >= _kpopOrder.length) _kpopShuffle();

  const q = _kpopOrder[_kpopIdx++];
  _kpopRound++;
  _kpopAnswered = false;

  document.getElementById('kpop-meme').textContent     = q.meme;
  document.getElementById('kpop-feedback').textContent = '';
  _kpopUpdateRound();

  const optsEl = document.getElementById('kpop-options');
  optsEl.innerHTML = '';

  [...q.options].sort(() => Math.random() - 0.5).forEach(opt => {
    const btn       = document.createElement('button');
    btn.className   = 'kpop-opt';
    btn.textContent = opt;

    btn.onclick = () => {
      if (_kpopAnswered) return;
      _kpopAnswered = true;

      const fb = document.getElementById('kpop-feedback');

      if (opt === q.answer) {
        _kpopScore++;
        btn.classList.add('correct');
        fb.style.color  = '#1a6b3c';
        fb.textContent  = '✅ Correct! You really know your idols 💜';
      } else {
        btn.classList.add('wrong');
        optsEl.querySelectorAll('.kpop-opt').forEach(b => {
          if (b.textContent === q.answer) b.classList.add('correct');
        });
        fb.style.color = '#c0392b';
        fb.textContent = `❌ It was ${q.answer}! Study harder 📚`;
      }

      _kpopUpdateRound();

      /* Auto-show result after last round answer */
      if (_kpopRound >= MAX_ROUNDS) {
        setTimeout(_kpopShowResult, 1400);
      }
    };

    optsEl.appendChild(btn);
  });
}

/* --- Init on load --- */
document.addEventListener('DOMContentLoaded', () => _kpopShuffle());