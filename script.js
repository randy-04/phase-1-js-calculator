const button = document.getElementById("calc");

button.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const operator = document.getElementById("operator").value
    let result;

    if (operator === "+") {
        result = num1+num2;
    }

    else if (operator === "-") {
        result = num1-num2;
    }
    else if (operator === "*") {
        result = num1*num2;
    }
    else if (operator === "/") {
        result = num1/num2;
    }

    

    document.getElementById("result").textContent = result
    

    
})

alert("just")

