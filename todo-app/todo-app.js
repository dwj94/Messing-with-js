// const ps = document.querySelectorAll('p')

// ps.forEach(function (item, index) {
//     // console.log(index)
//     if (item.textContent.includes('the')){
//         item.remove()
//     }
// })

const todo = ['Clean the car', 'Was the dishes', 'Take out rubbish', 'Finish course', 'Clean floor']

todo.forEach(function (item, index) {
    todo.splice(index, 1, {text: item, completed: (Math.random() < 0.5)})
})
// you have x todos left
// add a p value

let remainingCount = 0
todo.forEach(function (item, index) {
    if (!item.completed) {
        remainingCount += 1
        const remainingTodo = document.createElement('p')
        remainingTodo.textContent = item.text
        document.querySelector('body').appendChild(remainingTodo)
    }
})

const remaining = document.createElement('h4')
remaining.textContent = `You have ${remainingCount} todo's remaining`
document.querySelector('body').appendChild(remaining)

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log(e)
    if (e.target.textContent === 'Button clicked'){
        e.target.textContent = 'Add Todo'
    } else{
        e.target.textContent = 'Button clicked'
    }
})

