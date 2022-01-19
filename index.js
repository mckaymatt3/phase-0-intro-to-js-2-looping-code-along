// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapgifts(gifts) {
    for(let i=0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts
}

// wrapgifts(gifts);



function writeCards(names,event) {
    console.log("names",names)
    console.log("event",event)
    let newArray = []
    for (let i = 0; i < names.length; i++) {   
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
    return newArray
}

function countDown(number) {
    while (number>= 0) {   
        console.log(number);
        number--;
}
}


