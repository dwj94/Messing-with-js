//multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScore = function (name = 'No Name', score = 0) { // the equals only means a default, it will be overwritten by arg in the call
    // template string, easier to read than using ' ' + something + ' @'
    return `${name} has score ${score}` // ${ }, you can inject variable into template string
}

let textScore = getScore(undefined, 100)
console.log(textScore)

//make a tip calculator
let getTip = function (total, perc = 20) { // default is 20 percent
    return `The tip for $${total} with ${perc}% tip will be $${total*(perc / 100)}`
}

let tip = getTip(87, 15)
console.log(tip)