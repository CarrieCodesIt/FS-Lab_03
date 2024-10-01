let num1 = prompt('Enter a number')
let num2 = prompt('Enter another number')

if (num1 > num2) {
    document.write(`${num1} is larger`)
} else if (num2 > num1) {
    document.write(`${num2} is larger`)
} else if (num1 == num2) {
    document.write(`${num1} equals ${num2}`)
} else {
    document.write('Something went wrong. Try again')
}