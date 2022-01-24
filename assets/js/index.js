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
                alert('you clicked submit');
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
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

runGame();

function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function intcrementWrongAnswer() {

}
function displayAdditionQuestion(operand1, operand2) {
    document.querySelector('#operand1').textContent = operand1;
    document.querySelector('#operand2').textContent = operand2;
    document.querySelector('#operator').textContent = '+';
}
function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}