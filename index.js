// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const cards = (["Guadalupe", "Ollie", "Aki"], "birthday");

function writeCards(name, event) {
    let thankYouMessage = [];
    for(let i = 0; i < name.length; i++) {
        thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

}
return thankYouMessage;

}
writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

//Count down
function countDown(i){
while (i > 0){
    console.log(i);
    i--;
}
console.log(i);

}
