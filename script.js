const secretNumber = Math.floor(Math.random()*100) + 1;
console.log(secretNumber);
let attempts = 0;
function checkGuess(){
    const guess = Number(document.getElementById("guessInput").value);
    attempts++;
    if(guess==secretNumber){
        document.getElementById("message").textContent = `Felicidades encontraste el numero 🤠🥳 ${secretNumber}. Lo lograste en ${attempts} intentos.`
    }else if(guess>secretNumber){
        document.getElementById("message").textContent = `Sigue intentado. Pista👀, el numero es menor🤔.`

    }
    else{
        document.getElementById("message").textContent ="📈 Demasiado bajo. Intenta un número mayor."
    }
    console.log(guess)

}

//@alejandromcht

