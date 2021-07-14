const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');

let seconds = 00;
let tens = 00;
let Interval;
let isRunning = 0;

function startTimerHandler() {
  if (isRunning == 0) {
  isRunning++;
  Interval = setInterval(startTimer, 10);
  } else {
    // do nothing
  };

}

function startTimer() {
  tens++
  if (tens <= 9) {
    appendTens.innerHTML = '0' + tens;
  } else if (tens >= 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    tens = 00;
    appendTens.innerHTML = '00';
    seconds++;
    if (seconds <= 9){
      appendSeconds.innerHTML = '0' + seconds;
    } else if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}

function pauseTimer() {
  clearInterval(Interval);
  isRunning = 0;
}

function resetTimer() {
  pauseTimer();

  tens = 00;
  appendTens.innerHTML = "00";

  seconds = 00;
  appendSeconds.innerHTML = "00";
}

startBtn.addEventListener('click', startTimerHandler);
stopBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);