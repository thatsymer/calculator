const calculator = document.querySelector('.calculator');
const allBtns = calculator.querySelector('.all__buttons');
const displayTwo = calculator.querySelector('.display__2');
const displayOne = calculator.querySelector('.display__1');

const previousKeyType = calculator.dataset.previousKeyType;


allBtns.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const display2 = displayTwo.textContent
    const display1 = displayOne.textContent
    // if a number key is pressed
    if (key.dataset.type === "number") {
        if (display2 === "0") {
            displayTwo.textContent = keyValue
            calculator.dataset.secondNumber = keyValue
        }

        else{ 
            displayTwo.textContent = display2 + keyValue
            calculator.dataset.secondNumber = display2
        }
    }

    // if a operator key is pressed
    if (key.dataset.type === "operator") {
        displayOne.textContent = display2 + " " + keyValue
        calculator.dataset.firstNumber = display2
        displayTwo.textContent = "0"
        calculator.dataset.operator = keyValue
    }


    if (key.dataset.type === "clear") {
        displayOne.textContent = '0'
        displayTwo.textContent = '0'
        result = 0
    }

    if (key.dataset.type === "del") {
        displayTwo.textContent = '0'
        calculator.dataset.secondNumber = null
    }

    if (key.dataset.type === "ptn") {
        
    }

    

    if (key.dataset.type === "equal") {
        const firstNumber = parseInt(calculator.dataset.firstNumber)
        const secondNumber = parseInt(calculator.dataset.secondNumber)
        const operator = calculator.dataset.operator
        let result = ''
        
        if(operator === 'x'){
            result = firstNumber * secondNumber
            displayTwo.textContent = (+result.toFixed(5))
            displayOne.textContent = '0'

            result= '0'  
            
        }

        else if(operator === '+'){
            result = firstNumber + secondNumber
            displayTwo.textContent = result
            displayOne.textContent = '0'
            prevResult = result
            result= '0'  
            
        }

        else if(operator === '÷'){
            result = firstNumber / secondNumber
            displayTwo.textContent = (+result.toFixed(5))
            displayOne.textContent = '0'
            prevResult = result
            result= '0'  
            
        }
    }

    calculator.dataset.previousKeyType = key.dataset.type;

})