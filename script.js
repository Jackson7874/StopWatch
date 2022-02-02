const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timerHolder = document.getElementById('time');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startBtn.onclick = timer;

function timer() {
    milliseconds += 1;

    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);

    if (milliseconds == 1000) {
        seconds += 1;
        milliseconds = 0;
    }

    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
    }

    if (minutes == 60) {
        hours += 1;
        minutes = 0;
    }

    seconds = timeFix(seconds);
    minutes = timeFix(minutes);
    hours = timeFix(hours);

    timerHolder.textContent = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

    setTimeout(timer, 0.1)
}

function timeFix(t) {
    if (t < 10) {
        t = '0' + t;
        return t;
    }
    return t;
}