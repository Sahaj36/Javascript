
function MyName() {
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("J");
}

// MyName()


// function addToNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addToNumber(number1, number2) {
    // let result = (number1 + number2)
    // return result
    return number1 + number2
}
const result = addToNumber(3,6)

// console.log("result :", result);


function loginUserMessage(username = "Priyang"){
    if(!username) {
        console.log("Please enter your name");
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Sahaj"));
// console.log(loginUserMessage("Sahaj"));

// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(100, 300, 500, 109));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 100));


const user = {
    username : "Sahaj",
    fees : 1999
}

function handleObject(anyobject) {
    console.log(`The Name is a ${anyobject.username} and fees is a ${anyobject.fees}`);
}

// handleObject(user)
handleObject({
    username : "Priyang",
    fees: 999
})

const MyAarray = [200, 4000, 109, 100]

function getSecondValue(getarray) {
    return getarray[2]
}

// console.log(getSecondValue(MyAarray));
console.log(getSecondValue([100, 500, 3600, 400]));