const oneMinBtn = document.getElementById('1-min')
const fiveMinBtn = document.getElementById('5-min')
const oneSecBtn = document.getElementById('1-sec')
const fiveSecBtn = document.getElementById('5-sec')
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const beep = new Audio('sound_effects/beep.wav');

let minRemain = 00;
let secRemain = 00;
let Interval;
let isRunning = 0;

function udpateMinutes() {
    if (minRemain <= 9) {
        appendMinutes.innerHTML = '0' + minRemain;
    } else if (minRemain > 9) {
        appendMinutes.innerHTML = minRemain;
    }
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
        udpateMinutes();
        appendSeconds.innerHTML = '00';
    }
}

function addOneMin() {
    minRemain++;
    udpateMinutes();
}

function addFiveMin() {
    minRemain += 5;
    udpateMinutes();
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

function decreaseSeconds() {
    secRemain--;
    if (secRemain >= 10) {
        appendSeconds.innerHTML = secRemain;
    } else if (secRemain < 10) {
        appendSeconds.innerHTML = '0' + secRemain;
    }
}

function startTimer() {
    if (minRemain > 00) {
        if (secRemain >= 01){
            decreaseSeconds();
        } else if (secRemain == 00) {
            minRemain--
            udpateMinutes();
            secRemain = 59;
            appendSeconds.innerHTML = secRemain;
        }
    } else if (minRemain == 00) {
        if (secRemain == 01) {
            pauseTimer();
            resetTimer();
            beep.play();
            document.getElementById('timer-page-body').style.backgroundColor = "red";
            setTimeout(() => {
                document.getElementById('timer-page-body').style.backgroundColor = "white";
            }, 1000);
        } else if (secRemain > 01) {
            decreaseSeconds();
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
