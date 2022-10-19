let timer = document.getElementById("timer");
let video = document.getElementById("week-guy");

let now;
let nextFridate;
let msTillFriday;
let msTillFridayStr;

let timerFunc = setInterval(function() {
  now = new Date();
  nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getUTCMonth() + 1) + "-" + (now.getDate() - now.getDay() + 5));
  msTillFriday = nextFridate.getTime() - now.getTime();
  msTillFridayStr = msTillFriday.toString();

  if (msTillFriday <= 0) {
    msTillFriday = 0;
  }

  let days = ('0' + Math.floor(msTillFriday / (1000 * 60 * 60 * 24))).slice(-2);
  let hours = ('0' + Math.floor((msTillFriday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  let minutes = ('0' + Math.floor((msTillFriday % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((msTillFriday % (1000 * 60)) / 1000)).slice(-2);
  let milliseconds = msTillFridayStr.slice(msTillFridayStr.length - 3);

  timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}.${milliseconds}`;
}, 1);