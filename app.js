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

  const displayMood = () => {
    let finalCard = document.getElementById('final-card');
    if (getSelectedRadioBtn() === 'yes') {
      finalCard.innerHTML = '';
      finalCard.style.backgroundImage =
        'url("https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif")';
    } else if (getSelectedRadioBtn() === 'no') {
      finalCard.innerHTML = '';
      finalCard.style.backgroundImage =
        'url("https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif")';
    }
  };

  return {
    displayApologyCard,
    displayFinalCard,
    displayMood,
  };
})();

/* ---------- */
const animation = (() => {
  /* fade down */
  setTimeout(() => {
    document.querySelector('.intro-card').classList.add('active');
  }, 1300);

  /* fade in apology later */
})();

function getSelectedRadioBtn() {
  let radioBtns = document.querySelectorAll('.radio-btn');
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      let selectedValue = radioBtns[i].value;
      return selectedValue;
    }
  }
}

const sendMessage = (() => {})();

// events
let introBtn = document.getElementById('intro-btn');
introBtn.addEventListener('click', dom.displayApologyCard);

let outroBtn = document.getElementById('outro-btn');
outroBtn.addEventListener('click', dom.displayFinalCard);

let finalBtn = document.getElementById('final-btn');
finalBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  // dom.displayMood();
});
