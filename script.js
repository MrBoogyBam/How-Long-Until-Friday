let timer = document.getElementById("timer");
let video = document.getElementById("bedcam");
let audio = document.getElementById("week-song");

let now;
let nextFridate;
let msTillFriday;
let msTillFridayStr;

let days;
let hours;
let minutes;
let seconds;
let milliseconds;

let wokeUp = false;

let timerFunc = setInterval(function() {
  now = new Date();
  nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getUTCMonth() + 1) + "-" + (now.getDate() - now.getDay() + 5) + "T00:00");
  msTillFriday = nextFridate.getTime() - now.getTime();
  msTillFridayStr = msTillFriday.toString();

  if (msTillFriday <= 0) {
    msTillFriday = 0;
    msTillFridayStr = "000";

    if(wokeUp == false) {
      WakeUp(true);
      wokeUp = true;
    }
  }

  // We'll have this segment of code to you by friday

  days = ('0' + Math.floor(msTillFriday / (1000 * 60 * 60 * 24))).slice(-2);
  hours = ('0' + Math.floor((msTillFriday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  minutes = ('0' + Math.floor((msTillFriday % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  seconds = ('0' + Math.floor((msTillFriday % (1000 * 60)) / 1000)).slice(-2);
  milliseconds = msTillFridayStr.slice(msTillFridayStr.length - 3);

  timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}.${milliseconds}`;
}, 1);

function WakeUp(isFriday) {
  if(isFriday == true) {
    video.src = "./Media/Friday.mp4";
    video.play();
    audio.src = "./Media/Full-Friday-Song.webm"
    audio.play();
  } else {
    video.src = "./Media/otherday.mp4";
    video.play();
    audio.src = "./Media/otherday.m4a"
    audio.play();
  }
}
