// var c = 3600
let a = 3690;

if (true) {
  let a = 369;
  const b = 36;
  // var c = 109
//   console.log("INNER :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sahaj";

  function two() {
    const website = "Github";
    console.log(username);
  }

  // console.log(website);

  two();
}

// one();


if (true) {
    const username = "Sahaj"
    if (username === "Sahaj") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

// ========================================== Interesting ===========================================


console.log(addone(10));

function addone(num) {
    return num + 1
}

// console.log(addtwo(10));

const addtwo = function(num) {
    return num + 2
}
