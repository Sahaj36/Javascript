//  for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let s = 1; s <= 10; s++) {
        // console.log(`Inner loop value: ${s} Outer loop value: ${i}`);
        // console.log(i + "*" + s + "=" + i*s );
        // console.log(`${i} * ${s} = ${i*s}`);
    }
}

let myarray = ["Sahaj", "Priyang", "Lalu"]
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

//  break and continue

for (let index = 31; index <= 40; index++) {
    if (index == 36) {
        // console.log("Detected 36");
        break
    }
    // console.log(`index value is ${index}`)
    
}


for (let index = 31; index <= 40; index++) {
    if (index == 36) {
        console.log("Detected 36");
        continue
    }
    console.log(`index value is ${index}`)
    
}