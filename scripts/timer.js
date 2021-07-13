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

function addOneMin() {
    minRemain++;
    if (minRemain <= 9) {
        appendMinutes.innerHTML = '0' + minRemain;
    } else if (minRemain > 9) {
        appendMinutes.innerHTML = minRemain;
    }
}

function addFiveMin() {
    minRemain += 5;
    if (minRemain <= 9) {
        appendMinutes.innerHTML = '0' + minRemain;
    } else if (minRemain > 9) {
        appendMinutes.innerHTML = minRemain;
    }
}

function addOneSec() {
    secRemain++;
    if (secRemain <= 59) {
        if (secRemain <= 9) {
            appendSeconds.innerHTML = '0' + secRemain;
        } else if (secRemain > 9) {
            appendSeconds.innerHTML = secRemain;
        }
    } else if (secRemain >= 59) {
        secRemain = '00';
        minRemain++;
        if (minRemain <= 9) {
                appendMinutes.innerHTML = '0' + minRemain;
            } else {
            appendMinutes.innerHTML = minRemain;
            }
        appendSeconds.innerHTML = secRemain;
    }
}

function addFiveSec() {
    secRemain += 5;
    if (secRemain <= 9) {
        appendSeconds.innerHTML = '0' + secRemain;
    } else if (secRemain > 9) {
        appendSeconds.innerHTML = secRemain;
    }
}

function startHandler() {
    if (isRunning == 0) {
        isRunning++;
        Interval = 0;
        Interval = setInterval(startTimer, 1000);
    } else {
        // do nothing
    }
}

function startTimer() {
    secRemain--
    if (secRemain >= 10) {
        appendSeconds.innerHTML = secRemain;
    } else if (secRemain < 10) {
        appendSeconds.innerHTML = '0' + secRemain;
    }

    console.log('interval ' + Interval);
}

function resetTimer() {
    minRemain = 00;
    secRemain = 00;

    appendMinutes.innerHTML = '00';
    appendSeconds.innerHTML = '00';

    stopTimer();
}

function stopTimer() {
    clearInterval(Interval);
    isRunning = 0;
}

oneMinBtn.addEventListener('click', addOneMin);
fiveMinBtn.addEventListener('click', addFiveMin);
oneSecBtn.addEventListener('click', addOneSec);
fiveSecBtn.addEventListener('click', addFiveSec);
resetBtn.addEventListener('click', resetTimer);
startBtn.addEventListener('click', startHandler);