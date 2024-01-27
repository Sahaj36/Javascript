// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createDate = new Date(2024, 9, 25)
// let myCreateDate = new Date(2024, 9, 25, 12, 30)
// let myCreateDate = new Date("2024-01-28")
let myCreateDate = new Date("01-28-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.round(Date.now() / 1000)); // miliseconds to convert in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in Javascript month start is 0.
console.log(newDate.getDate());

// ` ${newDate.getDate()} and the month is ${newDate.getMonth()}`

newDate.toLocaleString('default', {
    weekday: "long"
})