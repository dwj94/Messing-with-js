let name

if (name === undefined) {
    console.log('This is undefined')
} else {
    console.log(name)
}


//undefined is absence of value
let square = function (num) {
    console.log(num)
}

square() //didnt pass the argument, so returns undefined


let age = 27 //null purposefully set to clear value
age = null
console.log(age)
