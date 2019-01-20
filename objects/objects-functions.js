let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 324
}

let myBookTwo = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.pageCount} for ${book.title}`
    }
}

let bookSum = getSummary(myBook)
let bookTwoSum = getSummary(myBookTwo)

console.log(bookTwoSum.pageCountSummary)

//challenge

let temperatureObject = function (farenheit) {
    let celcius = (farenheit - 32)*(5 / 9)
    let kelvin = celcius + 273.15
    return{
        farenheitoutput: farenheit,
        celcTemp: celcius,
        kelvTemp: kelvin
    }
}

let tempToday = temperatureObject(68)

console.log(`It is ${tempToday.farenheitoutput}F and ${tempToday.celcTemp}C and ${tempToday.kelvTemp}K`)
