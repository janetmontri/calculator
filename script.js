var GlobalObj = {};
GlobalObj.eqWasPressed = true;
GlobalObj.useNextNum = true;
GlobalObj.startNewNum = true;

// subtract
function subtract(p_a, p_b) {
    return p_a - p_b;
}

// add
function add(p_a, p_b) {
    return p_a + p_b;
}  


function displayNum(p_a, p_b) {
    const l_inputDiv = document.querySelector(".input-div");

    if (GlobalObj.startNewNum) {
        l_inputDiv.textContent = "" + p_b;
        GlobalObj.startNewNum = false;
       } else {
       l_inputDiv.textContent = p_a + p_b;
       }
}

// minusBtn
function minusWasPressed(p_a) {
    const l_inputDiv = document.querySelector(".input-div");

    if (GlobalObj.eqWasPressed === false) {
        let l_result = subtract(p_a, parseFloat(l_inputDiv.textContent));
        l_inputDiv.textContent = l_result;
    } 
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum = true;
    GlobalObj.eqWasPressed = false;
    return parseFloat(l_inputDiv.textContent);
}

function plusWasPressed(p_a) {
    const l_inputDiv = document.querySelector(".input-div");

    if (GlobalObj.eqWasPressed === false) {
        let l_result = add(p_a, parseFloat(l_inputDiv.textContent));
        l_inputDiv.textContent = l_result;
    }
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum = true;
    GlobalObj.eqWasPressed = false;
    return parseFloat(l_inputDiv.textContent);
}

// operator
function operate(p_a, p_b, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    let l_result;
    
    if (p_op === 3) {
        if (GlobalObj.useNextNum === true) {
            p_b = parseFloat(l_inputDiv.textContent);
        } else {
            p_a = parseFloat(l_inputDiv.textContent);
        }
        console.log("num1 is " + p_a + ", and num2 is " + p_b + ".")
        l_result = subtract(p_a, p_b);

    GlobalObj.useNextNum = false;
    GlobalObj.eqWasPressed = true;
    GlobalObj.startNewNum = true;
    l_inputDiv.textContent = l_result;
    return p_b;
    }

    if (p_op === 4) {
        if (GlobalObj.useNextNum === true) {
            p_b = parseFloat(l_inputDiv.textContent);
        } else {
            p_a = parseFloat(l_inputDiv.textContent);
        }
        l_result = add(p_a, p_b);

    GlobalObj.useNextNum = false;
    GlobalObj.eqWasPressed = true;
    GlobalObj.startNewNum = true;
    l_inputDiv.textContent = l_result;
    return p_b;
    }
}


//   Main

function main() {
    //let num1 = 0;
    const l_clrBtn = document.querySelector("#clear-btn");
    const l_inputDiv = document.querySelector(".input-div");
    const l_numBtn = document.querySelectorAll(".num-btn");
    const l_eqBtn = document.querySelector("#equal-btn");
    const l_minusBtn = document.querySelector("#minus-btn"); 
    const l_plusBtn = document.querySelector("#plus-btn"); 

    let l_num1 = 0;
    let l_num2 = 0;
    let l_currentOp = 0;

    // 0 = none; 1 = divide; 2 = multiply; 3 = subtract; 4 = add
    l_clrBtn.addEventListener("click", function() {
        l_inputDiv.textContent = 0;
        l_num1 = 0;
        GlobalObj.startNewNum = true;
    });

    l_numBtn.forEach(l_numBtn => {
        l_numBtn.addEventListener("click", function () {
            displayNum(l_inputDiv.textContent, l_numBtn.value, GlobalObj.startNewNum)
        });
    });

    l_minusBtn.addEventListener("click", function () {
        l_num1 = minusWasPressed(l_num1);
        l_currentOp = 3;
    });

    l_plusBtn.addEventListener("click", function () {
        l_num1 = plusWasPressed(l_num1);
        l_currentOp = 4;
    });

    l_eqBtn.addEventListener("click", function() {console.log(l_num1 + "and" + l_num2 + " " + l_currentOp);
        l_num2 = operate(l_num1, l_num2, l_currentOp);
    });
}




// RUN SCRIPT

main();