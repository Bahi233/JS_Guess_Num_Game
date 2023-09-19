'use strict';

// Guessed number range
const min = 0; 
const max = 20;

let score = 20;
let highscore = 0;

// Gnerate Random Number[1 , 20]
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// update message
function showMessage(message){
    document.querySelector('.message').textContent = message;
}

// update score
function showScore(score){
    document.querySelector('.score').textContent = score;
}

// Creat eventlistener when click the chick button
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When no input
    if(!guess || guess > max || guess < min){
        showMessage('Error, Enter Number Between 0 - 20 😑!');
        --score;
        showScore(score);
    }

    // When guessing correct
    else if(guess === secretNumber){
        showMessage('🎉 You Win!');
        document.querySelector('body').style.backgroundColor = '#099e00';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        // Handling highScore
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }

    // When guessing wrong
    else if(guess !== secretNumber){
        if (score > 1) {
            --score;
            showScore(score);
            showMessage(guess > secretNumber ? '📉 Too High!' : '📉 Too Low!');
        } else {
            showMessage('❄ Unfortunately you lose');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset the Game
document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    // Regnerate New Random Number[1 , 20]
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Reset number
    document.querySelector('.number').textContent = '?';
    // Reset message
    showMessage('Guess My Number!');
    // Reset the socre
    showScore(score);
    // Reset backgrounColor
    document.querySelector('body').style.backgroundColor = '#222';
    // Reset the guessed number
    document.querySelector('.guess').value = '';
});