// console.log('Jacob Mercer');
// console.log(26);

// let age = 25;
// age = age + 1;
// console.log(age);

// const priceitem = 3500;
// const orderedQuantity = 4;

// const totalprice = priceitem * orderedQuantity;
// console.log(totalprice);


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a = a + 2;
// console.log(a);
// b = b - 4;
// console.log(b);
// c = c * 3;
// d = d / 10;


// const username = 'Poly';
// const message = "Welcome " + username + '!';
// console.log(message);


// let username = "Poly";
// let message = `Username ${username} is ${username.length} characters long`;
// console.log(message);
// username = "Harambe";
// message = `Username ${username} is ${username.length} characters long`;
// console.log(message);



// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;



// const age = 16;
// let isAdult = age <= 18;
// console.log(isAdult);


// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);


// const value = '24.5px';
// const numerical = Number.parseFloat(value);
// console.log(numerical);


// console.log(Math.ceil(1.1));


// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();


// function add(a, b, c) {
// console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function add(a, b, c) {
//     return a + b + c;
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function makeMessage(name, price) {
//     return `You picked ${name}, price per item is ${price} credits`
// }
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000)
// makeMessage('Engine', 4070);

function calculateTotalPrice(orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);
