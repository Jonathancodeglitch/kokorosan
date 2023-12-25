const playMusic = () => {
  let audio = new Audio('audio1.mp3');
  audio.play();
};

/* ---------- */
const dom = (() => {
  const displayApologyCard = () => {
    playMusic();
    document.querySelector('.intro-card').classList.remove('active');

    setTimeout(() => {
      const apologyCard = document.getElementById('apology-card');
      apologyCard.classList.add('active');
    }, 1500);
  };

  const displayFinalCard = () => {
    document.getElementById('apology-card').classList.remove('active');
    setTimeout(() => {
      const finalCard = document.getElementById('final-card');
      finalCard.classList.add('active');
    }, 1500);
  };

  return {
    displayApologyCard,
    displayFinalCard,
  };
})();

/* ---------- */
const fadeInIntroCard = () => {
  setTimeout(() => {
    document.querySelector('.intro-card').classList.add('active');
  }, 1300);
};

fadeInIntroCard();

// events
let introBtn = document.getElementById('intro-btn');
if (introBtn) {
  introBtn.addEventListener('click', dom.displayApologyCard);
}

let outroBtn = document.getElementById('outro-btn');
if (outroBtn) {
  outroBtn.addEventListener('click', dom.displayFinalCard);
}
