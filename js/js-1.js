
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



// function getElementWidth(content, padding, border) {
//    const contentWidth = parseFloat(content);
//    const paddingWidth = parseFloat(padding);
//    const borderWidth = parseFloat(border);

//     const allWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

//     return allWidth;
// }
// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px")); 
// console.log(getElementWidth("200px", "0px", "0px"));


// let st = 100;
// st = st + 50;
// st += 50;
// console.log(st);


// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisibility(true));



// function getSubstring(string, length) {
//  return string.slice(0, length);

// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));




// function normalizeInput(input, to) {
//     if (to === "lower") {      
//     return input.toLowerCase() 
// } else if (to === "upper"){
//     return input.toUpperCase()
// }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));




// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase())
//     }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));


// function checkForName(fullName, firstName) {
//     const fullNameLower = fullName.toLowerCase();
//     const firstNameLower = firstName.toLowerCase();
//     return  fullNameLower.includes(firstNameLower);
//   } 
//   console.log(checkForName('Jason Neis', 'Jason'));
//   console.log(checkForName('Jason Neis', 'jAsOn'));
//   console.log(checkForName('Jason Neis', 'Jacob'));
//   console.log(checkForName('Caty Stars', 'Caty'));
//   console.log(checkForName('Caty Stars', 'cAtY'));
//   console.log(checkForName('Caty Stars', 'Andromeda'));




// let count = 0;

// while (count < 10) {
//  console.log(`Count: ${count}`);
//  count += 1;
// }


// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);





// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = pricePerDroid * quantity;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits`;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));



// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     return `"Shiping to ${country} will cost ${totalPrice}"`;
// }

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));




// function getSubstring(string, length) {
//     return string.slice(0, length);

//    }

//    console.log(getSubstring("Hello world", 3));
//    console.log(getSubstring("Hello world", 5));
//    console.log(getSubstring("Hello world", 8));
//    console.log(getSubstring("Hello world", 11));
//    console.log(getSubstring("Hello world", 0));




// function getFileName(file) {
// const index = file.lastIndexOf('.');
// if (index === -1) {
//     return file;
//     }
//     return file.slice(0, index);
// }


// console.log(getFileName("style.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));




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

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));



// function getElementWidth(content, padding, border) {
//     const contentWidth = Number.parseFloat(content);
//     const paddingWidth = Number.parseFloat(padding) * 2;
//     const borderWidth = Number.parseFloat(border) * 2;

//     const totalWidth = contentWidth + paddingWidth + borderWidth;

//     return totalWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200




// function getElementWidth(content, padding, border) {
//     const contentWidth = Number.parseFloat(content);
//     const paddingWidth = Number.parseFloat(padding) * 2;
//     const borderWidth = Number.parseFloat(border) * 2;

//     const totalWidth = contentWidth + paddingWidth + borderWidth;

//     return totalWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px")); // 4R}<;D]D6,2ZI^"WJ&*d
// console.log(getElementWidth("200px", "0px", "0px")); 



// const fulName = 'Hallo JS';
// const lastName = fulName.slice(6)
// console.log(lastName);



// function getSubstring(string, length) {
//     return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 5));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));




// function normalizeInput(input, to) {
//     if (to === "lower") {
//         return input.toLowerCase();
//     } else 
//         return input.toUpperCase();

// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));






// let start = 6;
// let end = 17;
// let number;

// for (let i = start; i <= end; i++) {

//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }
// console.log(number);





// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
//         }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8,17,3));
// console.log(findNumber(6,9,4));
// console.log(findNumber(16,35,7));
// console.log(findNumber());



// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;

//     if (customerCredits < totalPrice) {
//         return "Insufficient funds!";
//     } 
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(3, 1000, 15000));
// console.log(makeTransaction(10, 5000,8000));
// console.log(makeTransaction(8, 2000, 10000));
// console.log(makeTransaction(10, 5000, 50000));




// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength) + '...';
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"




// function checkForSpam(message) {
//     const lowerCaseMessage = message.toLowerCase();

//     return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');

// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true




// function getShippingCost(country) {
//     let price = 0;

//     switch (country) {
//         case "Australia":
//             price = 170;
//             break;
//         case "China":
//             price = 100;
//             break;
//         case "Chile":
//             price = 250;
//             break;
//         case "Jamaica":
//             price = 120;
//             break;

//         default:
//             return "Sorry, there is no delivery to your country";
//         }
//         return `Shipping to ${country} will cost ${price} credits`;        
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"




// function getOrderQuantity(order) {
//     return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana"]));
// console.log(getOrderQuantity(["apple", "pear", "banana"]));
// console.log(getOrderQuantity([]));



// const planet = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planet.length - 1;
// console.log(planet[lastElementIndex]);



// function getLastElementMeta(array) {
//     const lastIndex = array.length - 1;
//     const lastElement = array.at(-1); 
//     return `${lastIndex}, ${lastElement}`
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
// console.log(getLastElementMeta(["apple"]));




// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//     return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
// console.log(getLastElementMeta(["apple"]));




// function getExtrimeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     return [firstElement, lastElement];
// }

// console.log(getExtrimeElements([1, 2, 3, 4, 5]));
// console.log(getExtrimeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtrimeElements(["apple", "peach", "pear", "banana"]));


// function getLengt(array) {
//    array = array.join("");
//     return array.length;

// }

// console.log(getLengt(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLengt(["M", "a", "n", "g", "o"]));
// console.log(getLengt(["top", "picks", "for", "you"]));



// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const lengthWords = words.length;

//     return lengthWords * pricePerWord;
//     }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));





// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   const lengthWords = words.length;
//   const totalPrice = lengthWords * pricePerWord;

//   return totalPrice;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));




// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);

// const nonExtremeels = fruits.slice(1, 4);
// console.log(nonExtremeels);

// const lastThreEls = fruits.slice(-3);
// console.log(lastThreEls);




// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);




// function getSlice(array, value) {
//     const index = array.indexOf(value)
//     if (index === -1) {
//         return [];
//     } else {
//         return array.slice(0, index + 1); 
//     }   
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Caesey"));




// function createArrayOfNumbers(min, max) {
//     const tags = [];
//     for (let i = min; i <= max; i ++) {
//         tags.push(i);
//     }
//     return tags;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());





// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);




// function sayHi() {
//     console.log('Hello, this is my first function!');

// }
// sayHi();



// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);   
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);



// function makeMessage(username) {
//     //   console.log(`Hello ${username}`);
//     return username;
// }

// makeMessage("Jacob");




// function getElementWidth(content, padding, border) {
//     const parseContent = parseFloat(content);
//     const parsePadding = parseFloat(padding);
//     const parseBorder = parseFloat(border);

//     return parseContent + (parsePadding * 2) + (parseBorder * 2)


// }

// console.log ( getElementWidth ( "50px" , "8px" , " 4px" )); // 74
//  console.log ( getElementWidth ( " 60px" , "12px" , "8.5px" )); // 101 
// console.log (getElementWidth( "200px" , "0px" , "0px" )); // 200




// function getprice(subscription) {
//     let price = 0;

//     if (subscription === 'pro') {
//         price = 100;
//     }
//     return price;
// }

// console.log(getprice('free'));
// console.log(grtprice('pro'));




