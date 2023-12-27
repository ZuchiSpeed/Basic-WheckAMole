const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 15

let timerId = null

function randomSquare() {
    //Remove the mole from any position within the squares
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    //Randomly assign a mole to any position within the squares
    let randomSquare = squares[Math.floor(Math.random() * 8)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

//Each time the mole has been touched add score to the user
squares.forEach(square => {
    square.addEventListener('mousedown', () => {

        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

//timer for mole to move in any random square
function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

//Counter timing down till 0, stop game alert user
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        //clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
