// for of 

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`Number is ${num}`);
}


const name = "Sahaj Khalasi"

for (const sk of name) {
    // console.log(`${sk}`);
}

// Map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    "game1" : "Cricket",
    "game2" : "Football"
}

// for (const [key , value] of myObject) {
//     console.log(key, ":-", value);
// } 
