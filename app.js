// var display = document.getElementById("inputBox");
// // console.log(display);


// var buttons = document.querySelectorAll("button");
// // console.log(buttons);

// var nodesButtonsTOArray = Array.from(buttons);
// // console.log(nodesButtonsTOArray);

// var screen = "";

// nodesButtonsTOArray.forEach(function(btn){
//     // console.log(btn);

//     btn.addEventListener("click", function(event){
//     // console.log(event.target.innerHTML);

//     if(event.target.innerHTML == "DEL"){
//         screen = screen.substring(0, screen.length-1);
//         display.value = screen;
//     }else if(event.target.innerHTML == "AC"){
//         screen = "";
//         display.value = screen;
//     }else if(event.target.innerHTML == "="){
//         screen = eval(screen);
//         display.value = screen;
//     }else{
//         screen += event.target.innerHTML;
//         display.value = screen;
        

//     }



//     });

    
// });



























var display = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");
var nodesButtonsTOArray = Array.from(buttons);
var screen = "";

// Function to evaluate the expression without eval
function calculateExpression(expression) {
    try {
        var numbers = [];
        var operators = [];
        var number = "";

        // Separate numbers and operators
        for (var i = 0; i < expression.length; i++) {
            var char = expression[i];
            if ("+-*/".includes(char)) {
                numbers.push(parseFloat(number));
                operators.push(char);
                number = "";
            } else {
                number += char;
            }
        }
        numbers.push(parseFloat(number));

        // Perform calculations
        var result = numbers[0];
        for (var i = 0; i < operators.length; i++) {
            var operator = operators[i];
            var nextNumber = numbers[i + 1];
            
            if (operator === "+") {
                result += nextNumber;
            } else if (operator === "-") {
                result -= nextNumber;
            } else if (operator === "*") {
                result *= nextNumber;
            } else if (operator === "/") {
                result /= nextNumber;
            }
        }
        return result;
    } catch (error) {
        return "Error";
    }
}

// Event listener for buttons
nodesButtonsTOArray.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        var value = event.target.innerHTML;
        
        if (value == "DEL") {
            screen = screen.substring(0, screen.length - 1);
            display.value = screen;
        } else if (value == "AC") {
            screen = "";
            display.value = screen;
        } else if (value == "=") {
            screen = calculateExpression(screen).toString();
            display.value = screen;
        } else {
            screen += value;
            display.value = screen;
        }
    });
});
