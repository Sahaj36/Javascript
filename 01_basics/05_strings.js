const name = "Sahaj"
const repoCount = 109

// console.log(name + repoCount + " Value");

console.log(`Hello My Name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String("Sahaj-Khalasi-109")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt("3"));
// console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-1, 5) // pahela slice ne nagetive value aapi sakati pan have nagetive value aape to kai show karse nathi 
console.log(anotherString);

const newStringOne = "  Sahaj  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim ae aapri string ni vache je space hoy tene hatavi dey chhe

const url = "https://sahaj.com/sahaj%20khalasi"

console.log(url.replace('%20', '-'));

console.log(url.includes('109'));

console.log(gameName.split('-'));