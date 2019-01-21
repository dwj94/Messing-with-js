// we should actively avoid using this now!

// var name = 'Dan'
// var name = 'Mike' // aah, without complaining you've created a variable that already exists

// console.log(name) // var does not error

// if (10 == 10) {
//     var name = 'Dan' // the scope of this is global
// }

// console.log(name)

// const setName = function () {
//         var name = 'Dan' // var is function scoped, so cannot access name outside function
//     }
    
// console.log(name)

console.log(age)
var age = 10 // the decleration (not value) hoisted to the top of the program, so it doesn't error when it is called before declaration
