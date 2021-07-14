const oneMinBtn = document.getElementById('1-min')
const fiveMinBtn = document.getElementById('5-min')
const oneSecBtn = document.getElementById('1-sec')
const fiveSecBtn = document.getElementById('5-sec')
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');

let minRemain = 00;
let secRemain = 00;
let Interval;
let isRunning = 0;

function increaseMinutes() {
    if (minRemain <= 9) {
        appendMinutes.innerHTML = '0' + minRemain;
    } else if (minRemain > 9) {
        appendMinutes.innerHTML = minRemain;
    }
}

function addOneMin() {
    minRemain++;
    increaseMinutes();
}

function addFiveMin() {
    minRemain += 5;
    increaseMinutes();
}

function increaseSeconds() {
    if (secRemain <= 59) {
        if (secRemain <= 9) {
            appendSeconds.innerHTML = '0' + secRemain;
        } else {
            appendSeconds.innerHTML = secRemain;
        }
    } else if (secRemain >= 59) {
        secRemain = 00;
        minRemain++;
        increaseMinutes();
        appendSeconds.innerHTML = '00';
    }
    console.log(secRemain + ' ' + minRemain);
}

function addOneSec() {
    secRemain++;
    increaseSeconds();
}

function addFiveSec() {
    secRemain += 5;
    increaseSeconds();
}

function startHandler() {
    if (isRunning == 0) {
        isRunning++;
        Interval = 0;
        Interval = setInterval(startTimer, 1000);
    }
}

function startTimer() {
    if (minRemain === 00 && secRemain === 00) {
        pauseTimer();
        resetTimer();
    } else {
        secRemain--
        if (secRemain >= 10) {
            appendSeconds.innerHTML = secRemain;
        } else if (secRemain < 10) {
            appendSeconds.innerHTML = '0' + secRemain;
        }
    }
}

function resetTimer() {
    pauseTimer();
    
    minRemain = 00;
    secRemain = 00;

    appendMinutes.innerHTML = '00';
    appendSeconds.innerHTML = '00';
}

function pauseTimer() {
    clearInterval(Interval);
    isRunning = 0;
}

startBtn.addEventListener('click', startHandler);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
oneMinBtn.addEventListener('click', addOneMin);
fiveMinBtn.addEventListener('click', addFiveMin);
oneSecBtn.addEventListener('click', addOneSec);
fiveSecBtn.addEventListener('click', addFiveSec);
