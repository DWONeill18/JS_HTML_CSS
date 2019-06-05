const num1 = 4;
const num2 = 5;

function addition(num1, num2) {

    return num1 + num2; // the function returns the addtion of two nums

}



console.log(addition(4, 5));


function sum(a, b, c) {

    let n = arguments.length;
    total = 0;

    for (let i = 0; i < n; i++) {

        total += arguments[i];

    }

    return total;

}

console.log(sum(1, 2));


//functions

function logger(multipliedNum) {

    console.log(multipliedNum)

}

function multiply(a, b) {

    return a * b;
}

logger(multiply(5, 7));

// Arrow equiv

var nlogger = (a, b) => a * b;
console.log(nlogger(5, 6));


function doThing(){
    console.log("hello again");
}

var outputProduct = (a, b) => a * b;
console.log(outputProduct(a, b));

 