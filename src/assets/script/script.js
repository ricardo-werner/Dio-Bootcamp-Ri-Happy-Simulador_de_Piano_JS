const pianoKeys = document.querySelectorAll('.piano-keys .key');

const volumeSlider = document.querySelector('.volume-slider input');

const keysCheck = document.querySelector('.keys-check input');

let audio = new Audio('src/assets/audios/a.wav')

const playTune = (key) => {
  audio.src = `src/assets/audios/${key}.wav`
  audio.play();

  const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
  clickedKey.classList.add('active');
  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
}

pianoKeys.forEach((key) => {

  key.addEventListener('click', () => playTune(key.dataset.key));

});

document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (key) {
    key.classList.add("active");
    playTune(key.dataset.key);
  }
});

const handleVolume = (e) => {
  console.log(e);
  audio.volume = e.target.value;
};

volumeSlider.addEventListener('input', handleVolume);

const showHideKeys = (e) => {
  pianoKeys.forEach((key) => {
    key.classList.toggle('hide');
  });
};

keysCheck.addEventListener('click', showHideKeys);
