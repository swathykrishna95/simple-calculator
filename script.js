let add =(num1, num2) => {
    console.log(num1 + num2);
}

let subtract =(num1, num2) => {
    console.log(num1 - num2);
}

let multiply =(num1, num2) => {
    console.log(num1 * num2);
}

let divide =(num1, num2) => {
    console.log(num1 / num2);
}

let operate = (num1, operator, num2) => {
    switch(operator){
        case '+':
            add(num1, num2);
            
            break;
        case '-':
            subtract(num1, num2);
            
            break;
        case '*':
            multiply(num1, num2);
            
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

operate(23, '+', 45);