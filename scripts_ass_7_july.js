let workTime = 25 * 60;
let shortBreakTime = 5 * 60;
let longBreakTime = 15 * 60;
let cyclesBeforeLongBreak = 4;
let cycleCount = 0;
let currentSession = 'Work';
let timeLeft = workTime;
let timer = null;

const countdownEl = document.getElementById('countdown');
const sessionTypeEl = document.getElementById('sessionType');
const cycleIndicatorEl = document.getElementById('cycleIndicator');

function updateSettings() {
  workTime = +document.getElementById('workDuration').value * 60;
  shortBreakTime = +document.getElementById('shortBreak').value * 60;
  longBreakTime = +document.getElementById('longBreak').value * 60;
  cyclesBeforeLongBreak = +document.getElementById('cycles').value;

  if (currentSession === 'Work') timeLeft = workTime;
  updateDisplay();
}

function updateDisplay() {
  let min = Math.floor(timeLeft / 60);
  let sec = timeLeft % 60;
  countdownEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  sessionTypeEl.textContent = currentSession;
  renderCycleIndicator();
}

function renderCycleIndicator() {
  let indicators = '';
  for (let i = 0; i < cyclesBeforeLongBreak; i++) {
    indicators += i < cycleCount ? '🔴 ' : '⚪ ';
  }
  cycleIndicatorEl.textContent = indicators;
}

function switchSession() {
  if (currentSession === 'Work') {
    cycleCount++;
    if (cycleCount >= cyclesBeforeLongBreak) {
      currentSession = 'Long Break';
      timeLeft = longBreakTime;
      cycleCount = 0;
    } else {
      currentSession = 'Short Break';
      timeLeft = shortBreakTime;
    }
  } else {
    currentSession = 'Work';
    timeLeft = workTime;
  }
  updateDisplay();
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      switchSession();
      startTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  updateSettings();
  currentSession = 'Work';
  cycleCount = 0;
  timeLeft = workTime;
  updateDisplay();
}

document.getElementById('startBtn').addEventListener('click', () => {
  updateSettings();
  startTimer();
});

document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

updateDisplay();
