/* 
    ?Conditionals and Logic Gates
    conditional statements check if an expression is truthy
    the expression must always resolve to true
    if it's truthy. code block executes
    if an expression is falsey, code block does not run    
*/

/* 
    ? if statement
    checks if an expression is true and executes code    
*/

let lightSwitch = false;
console.log(Boolean(lightSwitch));
if (lightSwitch) {
    console.log("The light is on");
}

/* 
    ? else if statement
    allows us to add additional expression to check for
    executes when prior condition has not been satisfied
    once satisfied, interpreter exits the conditional chain    
*/

let grade = 82;

// Chained and exits when first condition satisfied
if (grade >= 90) {
    console.log("You got an A");
} else if (grade >= 80) {
    console.log("You got a B");
}

// Fire in sequence if satisfied
if (grade >= 80) {
    console.log("B");
}
if (grade >= 81) {
    console.log("Another B");
}

/* 
    ? Else statement
    if all else fails, execute this code    
*/

lightSwitch = "potato";

if (lightSwitch == true) {
    console.log("The light is on");
} else if (lightSwitch == false) {
    console.log("The light is off");
} else {
    console.log("bruh moment");
}

/* 
    ? Syntax
    
    if (condition is true) {
        execute this code block
    } else if (condition is true) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT, AND, OR
    OR operator ( || )
        true  if one of the conditions is true
        ex: I will be happy if I do laundry or clean the house
        (clean & laundry) == true
        (clean or laundry) == true
        (no clean or yes laundry) == true
        (yes clean or no laundry) == true
        (no clean or no laundry) == false
    AND operator ( && )
        true if both conditions are true
        ex: I will be happy if I do laundry and clean the house
        (clean & laundry) == true
        (no clean & laundry) == false
        (clean & no laundry) == false
        (no clean & no laundry) == false
    NOT operator ( ! )
        opposite of the logical expression
        flips it
*/

let laundry = false;
let cleaning = true;

// AND example
if (laundry && cleaning) {
    console.log("All of my chores done");
}

// OR example
if (laundry || cleaning) {
    console.log("I got one of the tasks done");
}

// NOT example

if (!laundry) {
    console.log("The laundry is not done");
}

if (laundry != true) {
    console.log("!= or !==");
    console.log("The laundry is not done");
}

/* 
    ? Ternaries
    a quick way of creating if/else conditional
    commonly used to check a flag
    they work on expressions (they do not return values)
*/

let ignition = true;

if (ignition) {
    console.log("The car is on");
} else {
    console.log("The car is off");
}

ignition ? console.log("Car is on") : console.log("Car is off");

// Chaining Ternaries

let season = 2;

if (season == 1) {
    console.log("spring");
} else if (season == 2) {
    console.log("summer");
} else if (season == 3) {
    console.log("autumn");
} else if (season == 4) {
    console.log("winter")
} else {
    console.log(`${season} is not an appropriate input`);
}

season == 1 ? console.log("spring")
    : season == 2 ? console.log("summer")
    : season == 3 ? console.log("autumn")
    : season == 4 ? console.log("winter")
    : console.log(`${season} is not an appropriate input`)
/* 
    ? Ternery Syntax
    conditional ? code block if true : code block if false

    conditional ? code block if true
        : else if statement ? code block if true
        : else if statement ? code block if true
        : else statement OR null

    ! you MUST have an else statement
*/