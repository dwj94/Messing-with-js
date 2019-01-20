let greetUser = function () { //brackets are args, then code block
    console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num**2
    return result
}


let valueOne = square(3)
let valueTwo = square(10)

console.log(valueOne)
console.log(valueTwo)

// challenge, convert farenhirt to celcius 32, 68

let convert = function(farenheit) {
    let celcius = (farenheit-32)*(5/9)
    return celcius
}

console.log(convert(32))
console.log(convert(68))
