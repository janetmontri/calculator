// add
function add(a, b) {
    return a + b;
  }  

// subtract
function subtract(a, b) {
    return a - b;
  }

// multiply
function multiply(a, b) {
    return a * b;
}

// divide
function divide(a, b) {
    return a / b;
}

// percent
function percent(a) {
    return a * 100;
}

// +/-
function plusMinus(a) {
    return a * -1
}

// identify the operation and find the right function
// function idOp(numInDisplay, op) {
//     var num1 = numInDisplay;

//     if (op ==="div-btn") {
//         return div = true;
//     }
//     if (op ==="mult-btn") {
//         return mult = true;
//     }
//     if (op === "minus-btn") {
//         return minus = true;
//     }
//     if (op === "plus-btn") {
//         return plus = true;
//     }

//     console.log(num1);
//     console.log(plus);
// }

// operator
function operate(a, b) {
    let num1 = a;


}

// send value to display
function displayValue(a,b) {
    if (inputDiv.textContent === "0") {
        return inputDiv.textContent = "" + b;
    } 
    return inputDiv.textContent = a + b;
}

// clear


// backspace


// Logic Flow
const clrBtn = document.querySelector("#clear-btn");
const inputDiv = document.querySelector(".input-div");
const numBtn = document.querySelectorAll(".num-btn");

const divBtn = document.querySelector("#div-btn");
const multBtn = document.querySelector("#mult-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");

clrBtn.addEventListener("click", function() {inputDiv.textContent = " ";})

numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", function () {displayValue(inputDiv.textContent, numBtn.value)}
    );
  });


divBtn.addEventListener("click", function() {
    var num1 = inputDiv.textContent;
    div = true;
    inputDiv.textContent = "";
}
);

multBtn.addEventListener("click", function() {
    var num1 = inputDiv.textContent;
    mult = true;
    inputDiv.textContent = "";
}
);

minusBtn.addEventListener("click", function() {
    var num1 = inputDiv.textContent;
    minus = true;
    inputDiv.textContent = "";
}
);

plusBtn.addEventListener("click", function() {
    var num1 = inputDiv.textContent;
    plus = true;
    inputDiv.textContent = "";
}
);



