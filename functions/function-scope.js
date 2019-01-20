let convert = function(farenheit) {
    let celcius = (farenheit-32)*(5/9)

    if (celcius === 0) {
        console.log('It is freezing')
    }

    return celcius
}
// cannot access celcius

console.log(convert(32))
console.log(convert(68))
