const user = {
    username: "Sahaj",
    Price: 2999,

    welcomeMassage: function() {
        console.log(`Dear, ${this.username} Welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMassage()
// user.username = "SK"
// user.welcomeMassage()
// console.log(this);

// function SK() {
//     let username = "Sahaj"
//     console.log(this.username);
// }

    // const SK = function() {
    //     let username = "Sahaj"
    //     console.log(this.username);
    // }

//     const SK = () => {
//         let username = "Sahaj"
//         console.log(this.username);
//     }

// SK()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

   const addTwo = (num1, num2) => ({username : "Sahaj"})

console.log(addTwo(100, 9));