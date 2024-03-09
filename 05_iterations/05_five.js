const frds = ["Sahaj", "Priyang", "Lalu"]

frds.forEach( function (value) {
    // console.log(value);
});

frds.forEach( (items) => {
    // console.log(items);
});


// function printMe(items) {
//     console.log(items);
// }

// frds.forEach(printMe)

frds.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
});


const bff = [
    {
        firstName : "Sahaj",
        lastName : "Khalasi"
    },
    {
        firstName : "Priyang",
        lastName : "Khalasi"
    },
    {
        firstName : "Dharmik",
        lastName : "Khalasi"
    },
]

bff.forEach( (items) => {
    console.log(items.firstName);
} )