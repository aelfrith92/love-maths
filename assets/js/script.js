//Waiting for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

/*The following Event Listener contains an anonymous function which executes when the event occurs*/
document.addEventListener('DOMContentLoaded', function() {
    //recupera HTML collection di bottoni in formato array
    let buttons = document.querySelectorAll('button');
    //iterazione nell'array appena recuperato
    for (let button of buttons) {
        //button è la variabile che andremo a controllare, una per una, per due ragioni:
        // 1. le verra' associata un listener; 2. ne verra' estrapolato l'attributo personalizzato
        // per controllare quale sia stato effettivamente premuto.
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    //Il gioco parte con l'operazione di addizione di default
    //la stringa passata sarà utilizzabile nella funzione
    runGame('addition');
});

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed 
 */
function runGame(gameType) {
    //Genera 2 numeri interi casuali
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'divide') {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.querySelector('#answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert('Right!');
        incrementScore();
    } else {
        alert(`Wrong! Correct answer was ${calculatedAnswer[0]}!`);
        intcrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the resulting HTML (the DOM) and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.querySelector('#operand1').innerText);
    let operand2 = parseInt(document.querySelector('#operand2').innerText);
    let operator = document.querySelector('#operator').innerText;

    // Determining the gameType by the operator used. Passing variables is unnecessary
    if (operator === '+') {
        let result = operand1 + operand2;
        return [result, 'addition'];
    } else if (operator === 'x') {
        let result = operand1 * operand2;
        return [result, 'multiply'];
    } else if (operator === '-') {
        let result = operand1 - operand2;
        return [result, 'subtract'];
    } else if (operator === '÷') {
        let result = parseInt(operand1 / operand2);
        return [result, 'divide'];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let score = parseInt(document.querySelector('#score').innerText);
    document.querySelector('#score').innerText = ++score;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function intcrementWrongAnswer() {
    let incorrectScore = parseInt(document.querySelector('#incorrect').innerText);
    document.querySelector('#incorrect').innerText = ++incorrectScore;
}
function displayAdditionQuestion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '+';
}
function displaySubtractQuestion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = 'x';
}

function displayDivideQuestion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '÷';
}