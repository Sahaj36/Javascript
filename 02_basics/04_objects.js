// const tinderUser = new Object() this is singaleton

const tinderUser = {} // this non-singalton

tinderUser.id = "123acd"
tinderUser.name = "Sinu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const ragularUser = {
    email: "sahajkhalasi109@gmail.com",
    userfullname: {
        fullname: {
            firstname: "Sahaj",
            lastname: "Khalasi"
        }
    }
}

// console.log(ragularUser.userfullname.fullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const user = [
    {
        id: 1,
        name: "Sahaj",
    },
    {
        id: 2,
        name: "Priyang",
    },
    {
        id: 3,
        name: "Lalu",
    },
    {
        id: 4,
        name: "sinu",
    }
]

// user[1].id
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("firstname"));