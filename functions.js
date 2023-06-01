/* 
    ? Functions
    a block of usable code; it can:
        take in arguments through its parameters (doors to inside fx)
        perform an action
        and return a result
    
    ? There are two types of functions:
    function declaration
        hoisted
    function expression
        not hoisted
    
    ? Functions
    need to be invoked (called) to run
    can have none, one, or many parameters
    data coming thru the parameter is called an argumant
    cant only have one return statement value
    if no return is provided, it defaults to undefined

    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }
*/

// Function definition
function sayHello() {
    return "Hello May Cohort";
}

// Function invokation (calling)
let catchVariableForFunction = sayHello();
console.log(catchVariableForFunction)

function greetSudent(student) {
    return `Hello, ${student}`;
}

console.log(greetSudent("Paul"));
console.log(greetSudent("Nathan"));
console.log(greetSudent("Cyrus"));

// Take a string and return an array

function strToArr(str) {
    let arr = [];
    for (i of str) {
        arr.push(i);
    }
    return arr;
}

let result = strToArr("nathan kruger");
console.log(result);

/* 
    ? Function Expression
    utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params) {
        code block
        return statement
    }
*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old`;
}

console.log(nameAge("Nathan", 25));

/* 
    ? Challenge
    create a function that will give you a result of a quadratic
    formula based on all of the necessary factors
    check if the data type is Number. If not, return, "Please
    use whole numbers only"
    Please return the result but also the value of the top
    and bottom seperately

    -b+-sqrt(b**2 -4ac)/2a
*/

function quadraticFormula(a, b, c) {
    let sqrtResult = Math.sqrt(b ** 2 - 4 * a * c);
    if (isNaN(sqrtResult)) {
        return "Use whole numbers which result in a positive discriminant"
    } else {
        let addResult = (-b + sqrtResult) / 2 * a;
        let subResult = (-b - sqrtResult) / 2 * a;
        return `${addResult} ${subResult}`;
    }
}

console.log(quadraticFormula(1, -11, 24));

/* 
    ? Pthagoream Theorem Challenge
    rigth triangle has three sides
    the longest side c is calculated by taking the sum of:
    a**2 and b**2
    c = sqrt(a**2 + b**2)
    create function expression that takes two triangles sides
    return the hypotenuse (c)
    Math object has a .sqrt() method
*/

let pythagAnswer = function pythagChallenge (a, b) {
    return Math.sqrt(a**2 + b**2);
}

console.log(pythagAnswer(5, 7));

/* 
    ? Arrow Functions
    introduced in ES6
    concise way of writing functions
    part of function expression family
    do not bind to .this ot super
*/

/* 
    ? Concise Body Arrow Function
    can have none or one parameter only
    code block must not have { }
    return statement must be implicit
*/

let greetEveryone = () => "Hello everyone";

let greetDoctor = drName => `Hello, Dr. ${drName}`;

console.log(greetDoctor("Nathan"));

// ? Block Body Arrow Functions

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2;
    } else {
        return "only pass string arguments";
    }
}

console.log(concatenateString("peepee", 800800));
console.log(concatenateString());

// ? Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("I'm an IIFE")
}) ()

/* 
    ! Fizzbuzz Challenge
    print the numbers from 1-100
    if a number is a multiple of 3, print "Fizz"
    if a number is a multiple of 5, print "Buzz"
    multiple of both. print "Fizz Buzz"
    otherwise, print the number
    invoke your function to make sure it works
*/
let fizzBuzzFunc = (minInput, maxInput) => {
    for (minInput; minInput <= maxInput; minInput++) {
        minInput % 15 === 0 ? console.log("Fizz Buzz")
        : minInput % 5 === 0 ? console.log("Buzz")
        : minInput % 3 === 0 ? console.log("Fizz")
        : console.log(minInput);
    }
    return;
}

fizzBuzzFunc(4, 95);


/* 
    Reverse Words in a String

    write a function that takes a string as input and 
    returns the same string with the order of words reversed

    for example, if the input string is "Hello World!", the function
    should return "!World Hello".

    Your task is to implement the reverseWords function and test it
    with different inputs
*/

//let greetDoctor = drName => `Hello, Dr. ${drName}`;

// function reverseStrWords(strReverse) {
//     return strReverse.split(" ").reverse().join(" ");
// }

//let reverseStrWords = strReverse => strReverse.split(" ").reverse().join(" ");

let reverseStrWords = strReverse => {
    let reversed = "";
    for (i = strReverse.length - 1; i >= 0; i--) {
        reversed += strReverse[i];
    }
    return reversed;
}

console.log(reverseStrWords("Kruger Nathan"));