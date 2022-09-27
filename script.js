// let timerFunc = setInterval(function() {
//     let friday = new Date()

//     let now = new Date().getTime();

//     if(dayCurr == 6) {
//         console.log(`There are 6 days until friday`);
//         return;
//     }

//     for(i=0; i < 5; i++) {
//         if(i + dayCurr == 5) {
//             console.log(`There are ${i} days until friday.`);
//             return;
//         }
//     }
// }, 1);

let timerFunc = setInterval(function() {
    let now = new Date();

    let nextFridate;

    if (now.getDay() > 5) {
        nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getMonth() + 1) + "-" + (now.getDate() + 1 + 5));
    } else {
        nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getMonth() + 1) + "-" + (now.getDate() - now.getDay() + 5));
    }

    let daysTillFriday = nextFridate.getDate() - now.getDate();

    let millisTillFriday = nextFridate - now;

    if (daysTillFriday == 0) {
        console.log("WOOOO FRIDAY");
    } else {
        console.log(`There are ${daysTillFriday} days until friday.`);
    }

    console.log(`There are ${millisTillFriday} milliseconds until friday.`);
}, 1);