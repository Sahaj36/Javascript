const number = [1, 2, 3, 4]

// const Num = number.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval} `);
//     return acc + currval
// }, 0)

// const Num = number.reduce( (acc, currval) => acc + currval, 0)

// console.log(Num);

const CustomerOrder = [
    {
        itemName : "Buger",
        price: 199
    },
    {
        itemName : "Cheese Buger",
        price: 299
    },
    {
        itemName : "Pizza",
        price: 399
    },
    {
        itemName : "CheeseBuzz Pizza",
        price: 499
    },
    {
        itemName : "Thumbs Up",
        price: 99
    },
]

const Bill = CustomerOrder.reduce( (acc, item) => acc + item.price, 0)

console.log(Bill);