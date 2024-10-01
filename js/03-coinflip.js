
//random number will be between 1 - 100; greater than or equal to 50 will be heads, less then will be tails
let randomNum = Math.floor(Math.random() * 101); 
let choice = prompt('Enter Heads or Tails').toLowerCase()

if (randomNum >= 50) {  //if app chooses heads
    if (choice == 'heads') {
        alert('The flip was heads and you chose heads...you win! ' + randomNum)
    }
    else {
        alert('The flip was heads but you chose tails...you lose!' + randomNum)
    }
} else {                //if app chooses tails
    if (choice == 'heads') {
        alert('The flip was tails but you chose heads...you lose!' + randomNum)
    }
    else {
        alert('The flip was tails and you chose tails...you win!' + randomNum)
    }
}