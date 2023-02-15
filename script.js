let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("secretNumber: ", secretNumber);
let score = 20
let highScore = 0

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value)

    //This is when the input is invalid
    if (!guess) {
        document.querySelector(".message").textContent = "Invalid Input ⛔"

    }

    //This is for when the player wins 
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number 🥳"
        document.querySelector(".number").textContent = secretNumber
        document.querySelector("body").style.backgroundColor = " #60b347"
        document.querySelector(".number").style.width = "40rem" // Whenever we are manipulating the styles we always need to specify a string and not a number. 
        //This doesn't change the  css sheet it just provides an inline styling  to the elements
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    }

    //This is for when the guess is too high 
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too High"
            score--
            document.querySelector(".score").textContent = score
        } else {
            document.querySelector(".message").textContent = "💥 You have lost the game "
            document.querySelector(".score").textContent = 0
        }

    }

    //This is for when the guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low"
            score--
            document.querySelector(".score").textContent = score

        } else {
            document.querySelector(".message").textContent = "💥 You  have lost the game "
            document.querySelector(".score").textContent = 0

        }

    }
})

//Restarting the game 
document.querySelector(".again").addEventListener("click", function () {
    score = 20
    document.querySelector(".score").textContent = score
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".number").style.width = "15rem"
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""

})