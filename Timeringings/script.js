const minutesInput = document.getElementById('minis');
const secondsInput = document.getElementById('seccy');
const startBtn = document.getElementById('str-pau');
const resetBtn = document.getElementById('res-abrt');

let timerInterval = null;
let isRunning = false;
let totalSeconds = 0;


function updateDisplay(){
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60;
  minutesInput.value = String(mins).padStart(2, '0');
  secondsInput.value = String(secs).padStart(2, '0');
}

function getTotalSeconds(){
  const mins = parseInt(minutesInput.value) || 0;
  const secs = parseInt(secondsInput.value) || 0;
  return mins * 60 + secs;
}

function startTimer(){
  if (isRunning) return;
  totalSeconds = getTotalSeconds();
  if (totalSeconds <= 0) return;
  
  isRunning = true;
  startBtn.textContent = '⏸️'

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning = false;
      startBtn.textContent = '▶️';
      alert ('timess uppp');
      return
    }
    totalSeconds--;
    updateDisplay();
  }, 1000);  
}

function pauseTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;
  startBtn.textContent = '▶️';
}

function resetTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;
  startBtn.textContent = '▶️';
  totalSeconds = 0;
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if(isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);

// i think i would have to use js for that, a timer that i click, then i get the option to change the time from it directly either via typing or scrolling
// also a way to swap the buttons, make it either start button, which would sawp to a stop button when timer starts


updateDisplay();
