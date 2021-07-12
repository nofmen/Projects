const oneMinBtn = document.getElementById('1-min')
const fiveMinBtn = document.getElementById('5-min')
const oneSecBtn = document.getElementById('1-sec')
const fiveSecBtn = document.getElementById('5-sec')
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');

let minRemaining = 00;
let secRemaining = 00;

function addOneMin() {
    minRemaining++;
    if (minRemaining <= 9) {
        appendMinutes.innerHTML = '0' + minRemaining;
    } else if (minRemaining > 9) {
        appendMinutes.innerHTML = minRemaining;
    }
}

function addFiveMin() {
    minRemaining += 5;
    if (minRemaining <= 9) {
        appendMinutes.innerHTML = '0' + minRemaining;
    } else if (minRemaining > 9) {
        appendMinutes.innerHTML = minRemaining;
    }
}

function addOneSec() {
    secRemaining++;
    if (secRemaining <= 9) {
        appendSeconds.innerHTML = '0' + secRemaining;
    } else if (secRemaining > 9) {
        appendSeconds.innerHTML = secRemaining;
    }
}

function addFiveSec() {
    secRemaining += 5;
    if (secRemaining <= 9) {
        appendSeconds.innerHTML = '0' + secRemaining;
    } else if (secRemaining > 9) {
        appendSeconds.innerHTML = secRemaining;
    }
}

//function startPauseHandler() {
//
//}

function resetTimer() {
    minRemaining = 00;
    secRemaining = 00;

    appendMinutes.innerHTML = '00';
    appendSeconds.innerHTML = '00';
}

oneMinBtn.addEventListener('click', addOneMin);
fiveMinBtn.addEventListener('click', addFiveMin);
oneSecBtn.addEventListener('click', addOneSec);
fiveSecBtn.addEventListener('click', addFiveSec);
resetBtn.addEventListener('click', resetTimer);
//startPauseBtn.addEventListener('click', startPauseHandler);