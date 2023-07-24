let add =(num1, num2) => {
    display.innerText+=(num1 + num2);
}

let subtract =(num1, num2) => {
    display.innerText+=(num1 - num2);}

let multiply =(num1, num2) => {
    display.innerText+=(num1 * num2);}

let divide =(num1, num2) => {
    display.innerText+=(num1 / num2);}

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

//operate(23, '+', 45);
let displayValue = "";
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('#clear');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.textContent == 'C'){
            //console.log(e.target.textContent);
            display.innerText = '';
            displayValue = '';
        }
        else{
            displayValue += e.target.textContent;
            display.innerText = displayValue;
            if(e.target.textContent === '='){
            let temp = displayValue.slice(0,-1);
            if(displayValue.includes('+')){
                let nums = temp.split('+');
                operate(parseInt(nums[0]),'+', parseInt(nums[1]));
            }
            if(displayValue.includes('-')){
                let nums = temp.split('-');
                operate(parseInt(nums[0]),'-', parseInt(nums[1]));
            }
            if(displayValue.includes('*')){
                let nums = temp.split('*');
                operate(parseInt(nums[0]),'*', parseInt(nums[1]));
            }
            if(displayValue.includes('/')){
                let nums = temp.split('/');
                operate(parseInt(nums[0]),'/', parseInt(nums[1]));
            }
        }
        
        }
    });
});

