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

let nextFriday = new Date(
    now.setDate(
        now.getDate() + ((7 - now.getDay() + 5) % 7 || 7)
    )
);

nextFriday.setHours(0, 0, 0, 0);

console.log(nextFriday);