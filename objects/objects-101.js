//JSON, key: value
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 324
}

console.log(`This book has title ${myBook.title}, written by ${myBook.author} and has ${myBook.pageCount} pages`)

myBook.title = 'Animal Farm' // change a single key's value

console.log(`This book has title ${myBook.title}, written by ${myBook.author} and has ${myBook.pageCount} pages`)

// challenge, name, area, age age + 1 then print

let profile = {
    name: 'Roger',
    age: 28,
    area: 'UK'
}

console.log(`This person ${profile.name} is ${profile.age} and is from ${profile.area}`)

profile.age += 1

console.log(`This person ${profile.name} is ${profile.age} and is from ${profile.area}`)
