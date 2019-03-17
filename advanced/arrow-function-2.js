const add = function (a, b) {
    console.log(arguments)
}

add(1, 2, 3)
// arguments do not work with arrow functions

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())
// 'this' can't be used in arrow functions


