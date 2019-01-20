let temp = 50

if (temp >= 60 && temp <=90) {
    console.log('Nice day')
} else if (temp <= 32 || temp >= 110) {
    console.log('Woah, stay inside')
} else {
    console.log('Do whatever')
}

// challenge

let isGuest1Vegan = false
let isGuest2Vegan = false

if (isGuest1Vegan && isGuest2Vegan) {
    console.log('Here are vegan dishes')
} else if (!isGuest1Vegan && !isGuest2Vegan) {
    console.log('Meatmeatmeat')
} else {
    console.log('ave whatever you want')
}
