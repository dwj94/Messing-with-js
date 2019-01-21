let num = 321.926

// to fixed, rounds to that many dp
console.log(num.toFixed(2))

// there is a math method
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//generating a random number
console.log(Math.random()*100 + 100) // between 100 and 200, math.random()*(max-min) + min

//challenge
// guess, generate a number in a range, true if correct flase if not
let makeGuess = function (number) {
    if (Math.round(Math.random()*5) == number) {
        return `You guessed it ${number}`
    } else {
        return false
    }
} 

console.log(makeGuess(4))
