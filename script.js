var GlobalObj = {};
GlobalObj.eqWasPressed = true;
GlobalObj.useNextNum = true;
GlobalObj.startNewNum = true;

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(p_a, p_b) {
    return p_a - p_b;
}

function add(p_a, p_b) {
    return p_a + p_b;
}  


function displayNum(p_a, p_b) {
    const l_inputDiv = document.querySelector(".input-div");
    if (GlobalObj.startNewNum) {
        l_inputDiv.textContent = "" + p_b;
        GlobalObj.startNewNum  = false;
    } else {
        l_inputDiv.textContent = p_a + p_b;
    }
}

function divideWasPressed(p_a, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum  = true;
    if (GlobalObj.eqWasPressed === false) {
        if (p_op === 1) {
            let l_result = divide(p_a, parseFloat(l_inputDiv.textContent));
            l_inputDiv.textContent = makeNumFit(l_result);
            return parseFloat(l_inputDiv.textContent);
        }
        if (p_op === 2) {
            return multiply(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 3) {
            return subtract(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 4) {
            return add(p_a, parseFloat(l_inputDiv.textContent));
        }
    }
    else {
        GlobalObj.eqWasPressed = false;
        return parseFloat(l_inputDiv.textContent);
    }
}

function multiplyWasPressed(p_a, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum  = true;
    if (GlobalObj.eqWasPressed === false) {
        if (p_op === 2) {
            let l_result = multiply( p_a, parseFloat(l_inputDiv.textContent) );
            l_inputDiv.textContent = makeNumFit(l_result);
            return parseFloat(l_inputDiv.textContent);
        }
        if (p_op === 1) {
            return divide(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 3) {
            return subtract(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 4) {
            return add(p_a, parseFloat(l_inputDiv.textContent));
        }
    }
    else {
        GlobalObj.eqWasPressed = false;
        return parseFloat(l_inputDiv.textContent);
    }
}

function minusWasPressed(p_a, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum  = true;
    if (GlobalObj.eqWasPressed === false) {
        if (p_op === 3) {
            let l_result = subtract(p_a, parseFloat(l_inputDiv.textContent));
            l_inputDiv.textContent = makeNumFit(l_result);
            return parseFloat(l_inputDiv.textContent);
        }
        if (p_op === 2) {
            return multiply(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 1) {
            return divide(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 4) {
            return add(p_a, parseFloat(l_inputDiv.textContent));
        }
    }
    else {
        GlobalObj.eqWasPressed = false;
        return parseFloat(l_inputDiv.textContent);
    }
}


function plusWasPressed(p_a, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    GlobalObj.startNewNum = true;
    GlobalObj.useNextNum  = true;
    if (GlobalObj.eqWasPressed === false) {
        if (p_op === 4) {
            let l_result = add(p_a, parseFloat(l_inputDiv.textContent));
            l_inputDiv.textContent = makeNumFit(l_result);
            return parseFloat(l_inputDiv.textContent);
        }
        if (p_op === 2) {
            return multiply(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 3) {
            return subtract(p_a, parseFloat(l_inputDiv.textContent));
        }
        if (p_op === 1) {
            return divide(p_a, parseFloat(l_inputDiv.textContent));
        }
    }
    else {
        GlobalObj.eqWasPressed = false;
        return parseFloat(l_inputDiv.textContent);
    }
}


function eqWasPressed(p_a, p_b, p_op) {
    const l_inputDiv = document.querySelector(".input-div");
    let l_result;
    if (GlobalObj.useNextNum === true) {
        p_b = parseFloat(l_inputDiv.textContent);
    } else {
        p_a = parseFloat(l_inputDiv.textContent);
    }
    if (p_op === 1) {
        l_result = divide(p_a, p_b);
    }
    if (p_op === 2) {
        l_result = multiply(p_a, p_b);
    }
    if (p_op === 3) {
        l_result = subtract(p_a, p_b);
    }
    if (p_op === 4) {
        l_result = add(p_a, p_b);
    }
    GlobalObj.useNextNum   = false;
    GlobalObj.eqWasPressed = true;
    GlobalObj.startNewNum  = true;
    l_inputDiv.textContent = makeNumFit(l_result);
    return p_b;
}


function makeNumFit(p_num) {
    let l_length = ("" + p_num).length;
    if (l_length > 12) {
        return p_num.toExponential(5);
    }
    else {
        return p_num;
    }
}

function tooManyDec(p_str) {
    if (p_str.includes(".") === true) {
        alert("Oops!  That's too many decimal points!")
    };
}


//   Main
function main() {
    //let num1 = 0;
    const l_clrBtn   = document.querySelector("#clear-btn");
    const l_inputDiv = document.querySelector(".input-div");
    const l_numBtn   = document.querySelectorAll(".num-btn");
    const l_eqBtn    = document.querySelector("#equal-btn");
    const l_divBtn   = document.querySelector("#div-btn"); 
    const l_multBtn  = document.querySelector("#mult-btn"); 
    const l_minusBtn = document.querySelector("#minus-btn"); 
    const l_plusBtn  = document.querySelector("#plus-btn"); 
    const l_decBtn   = document.querySelector("#dec-btn");
    let l_num1      = 0;
    let l_num2      = 0;
    let l_currentOp = 0;
    // 0 = none; 1 = divide; 2 = multiply; 3 = subtract; 4 = add
    l_clrBtn.addEventListener("click", function() {
        l_inputDiv.textContent = 0;
        l_num1 = 0;
        l_num2 = 0;
        l_currentOp = 0;
        GlobalObj.eqWasPressed = true;
        GlobalObj.useNextNum = true;
        GlobalObj.startNewNum = true;
    });

    l_numBtn.forEach(l_numBtn => {
        l_numBtn.addEventListener("click", function () {
            displayNum(l_inputDiv.textContent, l_numBtn.value, GlobalObj.startNewNum)
        });
    });

    l_divBtn.addEventListener("click", function () {
        l_num1 = divideWasPressed(l_num1, l_currentOp);
        l_currentOp = 1;
    });

    l_multBtn.addEventListener("click", function () {
        l_num1 = multiplyWasPressed(l_num1, l_currentOp);
        l_currentOp = 2;
    });

    l_minusBtn.addEventListener("click", function () {
        l_num1 = minusWasPressed(l_num1, l_currentOp);
        l_currentOp = 3;
    });

    l_plusBtn.addEventListener("click", function () {
        l_num1 = plusWasPressed(l_num1, l_currentOp);
        l_currentOp = 4;
    });

    l_decBtn.addEventListener("click", function() {
        tooManyDec(l_inputDiv.textContent);
    })

    l_eqBtn.addEventListener("click", function() {
        l_num2 = eqWasPressed(l_num1, l_num2, l_currentOp);
    });
}

// RUN SCRIPT

main();