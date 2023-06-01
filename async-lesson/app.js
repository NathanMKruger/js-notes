console.log("Async Lesson Notes");

/* 
    ? Promises
    an object that may produce a singular value in the future
    Three States
        Pending (unfinished)
        Fulfilled (complete with result)
        Rejected (error)
    allow code to execute without having to wait for its completion
*/

let myPromise = new Promise((resolve, reject) => {
    let sum = 1 + 2;
    // sum == 4 ? resolve("Success") : reject("Failed");

    // Pending promise example
    setTimeout(() => {
        sum == 3 ? resolve("Success") : reject("Failed");
    }, 4000);
});

// Returns a promise. It does not allow us to see information
console.log(myPromise);

// In order to get tangible data out of a Promise object, we must resolve it
myPromise
    .then(msg => console.log(msg))
    // resolver that executes a fx when promise has been fulfilled
    .catch(msg => console.log(`Error, ${msg}`))
    // executes a fx when a promise has been rejected (error handling)
    .finally(() => console.log("This code runs after promise is done"))
    // runs only once the promise has been completed

console.log("Code is running in gloabal scope")

/* 
    ? Asynchronous Functions
    introduced in ES7
    alternative to writing promises
    a function that returns a promise object
    allows us to resolve or reject a promise

    Syntax:
    async function myFx() {}
    const myFx = async function() {}
    const myFx = async () => {}
*/

function getData() {
    setTimeout(() => {
        return "some data";
    }, 3000)
}

let data = getData();
console.log(data);
// Returns undefined because return statement happen 3s after invocation

async function asyncFunction() {
    return "Async Function Value";
}
// returns a promise that must be resolved
console.log(asyncFunction());

asyncFunction().then(result => console.log(result));

// ? How can we use the result of a promise object in another function?

/* 
    ? Await keyword
    can be utilized only inside of asynchronous functions
*/

function first() {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve("SUCCESS"), 3000)
        } else {
            reject("Promise rejected");
        }
    })
}

async function pepTalk() {
    let result = await first();
    // The await forces this function to wait out the timeout before continuing
    console.log(`It's all about ${result}`);
    console.log("Code after the promise");
}

console.log("Code after pepTalk function");
pepTalk();