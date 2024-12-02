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