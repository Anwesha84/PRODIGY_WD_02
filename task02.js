let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const format = (unit) => (unit < 10 ? '0' + unit : unit);
  document.getElementById('display').innerText = 
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (timer === null) return;
  const lapTime = document.getElementById('display').innerText;
  const lapEntry = document.createElement('li');
  lapEntry.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(lapEntry);
}

updateDisplay();
