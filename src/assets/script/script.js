const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio('src/assets/audios/a.wav')

const playTune = (key) => {
  audio.src = `src/assets/audios/${key}.wav`
  audio.play();
}

pianoKeys.forEach((key) => {
  console.log(key.dataset.key)

  key.addEventListener('click', () => playTune(key.dataset.key));

});

document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (key) {
    key.classList.add("active");
    playTune(key.dataset.key);
  }
});