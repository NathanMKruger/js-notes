/* 
    ? Loops
    allow us to execute block of code repeatedly
    they stop once an exit condition has been met
*/

/* 
    ? For loop
    iterates over any data type that's iterable
    iterator = placeholder value
    iterable = data type we can count through

    Syntax:

    for (start; stop; step) {
        code block to execute for each iteration
        until stop/exit condition is true
    }
*/

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let longWordEN = "supercalifragilistiexpialidocious";
for (count = 0; count < longWordEN.length; count++) {
    console.log(`Index: ${count}, Letter: ${longWordEN[count]}`);
}

/* 
    ? For-in loop
    allows us to seek an index value of an iterable
    for-in does not require an index number
    for-in does not require a stop statement
*/

let longWordDE = "kraftfahrzeug-hafplifchtversicherung";
for (i in longWordDE) {
    console.log(`Index ${i} Letter ${longWordDE[i]}`);
}

/* 
    ? For-of Loop
    allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka";

for (i of longWordPL) {
    console.log(i)
}

/* 
    ? Difference between for-in and for-of in terms of use
    for-in allows us to loop over items that are not an array
    for-of only works if an item is indexed linked an array or string
*/

/* 
    ? While Loop
    executes a statement inside of a code block
    it does so as long as a while condition evaluates to true

    Syntax:

    while (true) {
        do this until true
    }
*/

let loopCount = 0;

while (loopCount <= 10) {
    console.log(loopCount);
    loopCount++;
}

/* 
    ? Challenge

    * Using a traditional for loop, set an index to 2.
    * Make a condition where if that number is greater than -100
    * You will be substracting 4
    * Console log each iteration
    
    HINT: step can be i++ i-- i = i + 1 or i += 1
*/

for (let chalIndex = 2; chalIndex  >= -100; chalIndex -= 4) {
    console.log(chalIndex);
}

/* 
    ? Challenge 2

    * Loop over an array with for-in or for-of
    * Console log each animal's respective "sound" (ex: meow for a cat)
    * EXTRA: use a ternary
*/
let animalArray = ["pig", "cat", "mouse", "dog", "bird"];

for (i in animalArray) {
    switch(animalArray[i]) {
        case "pig":
            console.log("oink");
            break;
        case "cat":
            console.log("meow");
            break;
        case "mouse":
            console.log("squeak");
            break;
        case "dog":
            console.log("bark");
            break;
        case "bird":
            console.log("tweet");
            break;
        default:
            console.log("what kinda animal is that");
    }
}

/* 
    ? Do while Loop 
    executes code in the do section while a condition remains true
*/

let doCount = 0;

do {
    console.log(doCount);
    doCount++;
} while (doCount <= 10);

/* 
    ! Fizzbuzz Challenge
    print the numbers from 1-100
    if a number is a multiple of 3, print "Fizz"
    if a number is a multiple of 5, print "Buzz"
    multiple of both. print "Fizz Buzz"
    otherwise, print the number
*/

// let lineNumber = 1;

// while (lineNumber <= 100) {
//   lineNumber % 15 === 0 ? console.log("Fizz Buzz")
//     : lineNumber % 5 === 0 ? console.log("Buzz")
//     : lineNumber % 3 === 0 ? console.log("Fizz")
//     : console.log(lineNumber);

//   lineNumber++;
// }

for (let a = 1; a <= 100; a++) {
    a % 15 === 0 ? console.log("Fizz Buzz")
    : a % 5 === 0 ? console.log("Buzz")
    : a % 3 === 0 ? console.log("Fizz")
    : console.log(a);
}