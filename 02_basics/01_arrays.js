// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hulk", "Ironman", "Spiderman"]

const myArray2 = new Array(1,2,3,4,5)
// console.log(myArray[0]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(109)
// myArray.shift()

// console.log(myArray);

// console.log(myArray.includes(109));
// console.log(myArray.indexOf(36));
// console.log(myArray.indexOf(5));

const newarray = myArray.join()
// console.log(myArray);
// console.log(newarray); // convert in string


// slice & splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C ", myArray);