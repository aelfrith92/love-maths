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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {
    
}
function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function intcrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}