// "use strict";

function someFunction() {
    // DOM
    document.getElementById("myparagraph").innerHTML = "Changing paragraph from JavaScript"
    console.log(document.getElementById("myparagraph").innerHTML)
}


// compiled vs interpreted

console.log(document.getElementById("myparagraph").innerHTML)

// variables => <var, let or const> identifier = <value>

// var, let, const, automatic variable creation

var myVar = 10;
let myLetVar;
const myConstVar = 10000;

// const PI = 3.14;

const constVar = 100;

// myConstVar = 10000;


myLetVar = 1000;

console.log(myVar);

// let variables

let letVariable;
letVariable = 1000;
console.log(letVariable);


myVarVariable = 1000;
console.log(myVarVariable);
var myVarVariable;

console.log(myVarVariable);

var myVarVariable = "10000";

// const variables
const PI = 3.14;
// PI = 1000;


// scopes = block, function, global

{
    let x = 1000;
    console.log(x);
}

// console.log(x);

function myNewFunction() {
    var xFuncVar = "inside of function";

    console.log(xFuncVar);
}


// console.log(xFuncVar);


// automatic global variables

function automaticGlobalVariable() {
    autoGlobal = "AUtomatic global variable demo";
    console.log("Invoked the automaticGlobalVariable function");
}

automaticGlobalVariable();

console.log("Outside of the automaticGlobalVariable function: " + autoGlobal);


myNewVar = "myNewVar";

console.log(myNewVar);

var myNewVar;
