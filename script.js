let timer = document.getElementById("timer");

let now;
let nextFridate;

let timerFunc = setInterval(function() {
    now = new Date();
    nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getUTCMonth() + 1) + "-" + (now.getDate() - now.getDay() + 5));
    let msTillFriday = nextFridate.getTime() - now.getTime();

    let days = Math.floor(msTillFriday / (1000 * 60 * 60 * 24));
    let hours = Math.floor((msTillFriday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((msTillFriday % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((msTillFriday % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1);