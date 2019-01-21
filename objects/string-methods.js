let name = ' Dan Jones'

//length property

console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//lower case
console.log(name.toLowerCase())

//includes
console.log(name.toLowerCase().includes('dan'))

//trim
console.log(name.trim())

//challenge, is valid password, return true if valid legnth > 8 and no word password

let validPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(validPassword('123w'))
console.log(validPassword('mypassword'))
console.log(validPassword('sdsadsa2wesad'))