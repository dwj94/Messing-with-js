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

const team = ['Tyler', 'Dan']
team.length <= 4 ? console.log(`Team is ${team.length}`) : console.log('Team is too big')