const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const days = document.querySelector(".days");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let CountdownTimer = null;

startBtn.addEventListener("click", function () {
  if (hour.value == 0 && minute.value && second.value == 0 && days.value == 0) {
    return;
  }
  function startInterval() {
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    CountdownTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});
function stopInterval(state) {
  (startBtn.innerHTML = state === "pause" ? "continue" : "start"),
    (startBtn.style.display = "initial"),
    (stopBtn.style.display = "none"),
    clearInterval(CountdownTimer);
}
function timer() {
  if (second.value > 60) {
    minute.value++;
    second.value = parseInt(second.value) - 59;
  }
  if (minute.value > 60) {
    hour.value++;
    minute.value = parseInt(minute.value) - 59;
  }
  if (hour.value > 24) {
    days.value++;
    hour.value = parseInt(hour.value) - 24;
  }
  if (hour.value == 0 && minute.value == 0 && second.value == 0) {
    (second.value = ""), (hour.value = ""), (minute.value = "");
    stopInterval();
  } else if (second.value != 0) {
    second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
  } else if (minute.value != 0 && second.value == 0) {
    second.value = 59;
    minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
  } else if (days.value != 0 && hour.value == 0) {
    hour.value = 24;
    days.value = `${days.value <= 10 ? "0" : ""}${days.value - 1}`;
  }
}

stopBtn.addEventListener("click", function () {
  stopInterval("pause");
});

resetBtn.addEventListener("click", function () {
  (second.value = ""),
    (minute.value = ""),
    (hour.value = ""),
    stopInterval(CountdownTimer);
});
