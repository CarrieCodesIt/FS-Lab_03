let userNum = prompt('Enter a number between 1 - 100')

if (userNum < 1 || userNum > 100) {
    alert('The number you enter must be between 1 - 100. Try again')
} else if (userNum >= 60 && userNum < 70) {
    // document.write('You received a D')
    console.log('You received a D')
} else if (userNum >= 70 && userNum < 80) {
    // document.write('You received a C')
    console.log('You received a C')
} else if (userNum >= 80 && userNum < 90) {
    // document.write('You received a B')
    console.log('You received a B')
} else if (userNum >= 90 && userNum <= 100) {
    // document.write('You received a A')
    console.log('You received a A')
} else {
    // document.write('You received a F')
    console.log('You received a F')
}
