const myAge = 20
let message = myAge >= 18 ? 'You can vote' : 'You cant vote'

console.log(message)

const showPage = () => {
    console.log('Show page')
}

const showErrorPage = () => {
    console.log('Show error page')
}

myAge >= 18 ? showPage() : showErrorPage()
