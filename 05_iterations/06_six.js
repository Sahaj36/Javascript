const frds = ["Sahaj", "Priyang", "Lalu"];

// const values = frds.forEach( (items) => {
//     // console.log(items);
//     return items
// } )

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.filter( (nums) => {
//     return nums > 4
// } );

// const newNums = []

// nums.forEach( (nums) => {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// } );

// console.log(newNums);

const friendsDetails = [
  {
    name: "Sahaj Khalasi",
    birth: 2002,
    city: "Surat",
    village: "Gabheni",
  },
  {
    name: "Priyang Khalasi",
    birth: 2001,
    city: "Surat",
    village: "Gabheni",
  },
  {
    name: "Dharmik Khalasi",
    birth: 2000,
    city: "Surat",
    village: "Budiya",
  },
  {
    name: "Pavu Khalasi",
    birth: 1997,
    city: "Surat",
    village: "Gabheni",
  },
  {
    name: "Sugney Khalasi",
    birth: 1999,
    city: "Surat",
    village: "Gabheni",
  },
  {
    name: "Sen Khalasi",
    birth: 1995,
    city: "Surat",
    village: "Gabheni",
  },
];

let friends = friendsDetails.filter((frd) => frd.village === "Gabheni");

friends = friendsDetails.filter((frd) => {
  return frd.birth >= 2000 && frd.village === "Gabheni";
});

friends = friendsDetails.filter((frd) => frd.birth < 2000);

friends = friendsDetails.filter((frd) => frd.village === "Budiya");

console.log(friends);
