let accountOpen = true
let userRole = 'ADMIN'


if (!accountOpen) { // if the account is locked don't let them in
    console.log('Your account is locked')
} else if (userRole == 'ADMIN') { // if they are admin show them admin welcom
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// challenge
let temp = 23
let isFreezing = temp <= 32
let isHot = temp >= 110

if (isFreezing) { // it's too cold to go outside
    console.log('Cold')  
} else if (isHot) {
    console.log('Too hot') // too hot for outside
} else {
    console.log('Go outside') // just right
}
