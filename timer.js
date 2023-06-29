// Stopwatch
let stopwatchInterval; // Variable to store the interval ID for the stopwatch
let stopwatchRunning = false; // Variable to track if the stopwatch is running

function startStopwatch() {
  if (!stopwatchRunning) {
    let stopwatchElement = document.getElementById("stopwatch");
    let time = stopwatchElement.innerHTML.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    stopwatchInterval = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      stopwatchElement.innerHTML =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);

    stopwatchRunning = true;
  }
}

function stopStopwatch() {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }
}

function resetStopwatch() {
  let stopwatchElement = document.getElementById("stopwatch");
  stopwatchElement.innerHTML = "00:00:00";
  stopStopwatch();
}

// Timer
let timerInterval; // Variable to store the interval ID for the timer
let timerRunning = false; // Variable to track if the timer is running

function startTimer() {
  if (!timerRunning) {
    let timerElement = document.getElementById("timer");
    let timerInput = document.getElementById("timerInput");
    let time = timerInput.value.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      alert("Invalid time format. Please enter time in HH:MM:SS format.");
      return;
    }

    timerInterval = setInterval(function () {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        alert("Timer has finished!");
        timerRunning = false;
        return;
      }

      if (seconds === 0) {
        if (minutes !== 0) {
          minutes--;
          seconds = 59;
        } else if (hours !== 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      timerElement.innerHTML =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);

    timerRunning = true;
  }
}

function stopTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function resetTimer() {
  let timerElement = document.getElementById("timer");
  let timerInput = document.getElementById("timerInput");
  timerElement.innerHTML = "00:00:00";
  timerInput.value = "";
  stopTimer();
}
