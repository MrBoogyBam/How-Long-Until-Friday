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

let now = new Date();

let nextFridate;

if (now.getDay() > 5) {
    nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getMonth() + 1) + "-" + (now.getDate() + 1 + 5));
} else {
    nextFridate = new Date(now.getUTCFullYear().toString() + "-" + (now.getMonth() + 1) + "-" + (now.getDate() - now.getDay() + 5));
}

// We don't actually want the utc hours to be at 0, because then for the timer it's going to say that it's friday when for EDT it will actually be 8 pm thursday for you...
// So this is already the localized next friday time
// nextFridate.setUTCHours(0, 0, 0, 0);

console.log(nextFridate);
console.log(now);