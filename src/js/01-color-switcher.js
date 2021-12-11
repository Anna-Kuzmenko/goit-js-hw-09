
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}
let timerId = null;

refs.stopBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', startCangeColor);

refs.stopBtn.addEventListener("click", stopCangeColor);


function startCangeColor() {
    refs.stopBtn.removeAttribute('disabled');
    timerId = setInterval(() => {
   const bgcColor = getRandomHexColor();
      document.body.style.backgroundColor = bgcColor;
      refs.startBtn.setAttribute('disabled', true);
  }, 1000);
}

function stopCangeColor() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}