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