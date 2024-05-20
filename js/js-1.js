
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



// const age = 20;
// console.log(age);

// const username = 'Mango';
// console.log(username);



// let productName = "Droid";
// productName = "Repair droid";

// let pricePerItem = 2000;
// pricePerItem = 3500;



// let username = 'Mando';
// console.log(username);
// username = 'Poly';
// console.log(username);



// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem;
// console.log(totalPrice);




                         
                         // HW-1
                            
// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));



// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     return `Shipping to ${country} will cost ${totalPrice} credits`;
// }
// console.log(getShippingMessage('Australia', 120, 50));
// console.log(getShippingMessage('Germany', 80, 20));
// console.log(getShippingMessage('Sweden', 100, 20));



function getElementWidth(content, padding, border) {
   const contentWidth = parseFloat(content);
   const paddingWidth = parseFloat(padding);
   const borderWidth = parseFloat(border);

    const allWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    return allWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));
