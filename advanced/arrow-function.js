const square = (num) => num*num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Dan',
    age: 24
}, {
    name: 'Bob',
    age: 22
}, {
    name: 'Jerry',
    age: 54
}]

const under30 = people.filter( (person) => person.age < 30)

console.log(under30)
