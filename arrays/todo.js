const todo = ['Todo1', 'Todo2', 'Todo3', 'Todo4', 'Todo5']

// todo.splice(2 ,1)
// console.log(todo)
// todo.push('New to do')
// console.log(todo)
// todo.shift()
// console.log(todo)


// console.log(`You have ${todo.length} todos`)
// console.log(todo[0])
// console.log(todo[todo.length-2])

// todo.forEach(function (item, index) { // print a nice to do list
//     console.log(`${index + 1}. ${item}`)
// })

// for (let i = 0; i < todo.length; i++) {
//     console.log(`${i+1}. ${todo[i]}`)
// }

// turns todo array into array of objects with random choice whether it has been completed or not
todo.forEach(function(item, index) {
    todo.splice(index, 1, {text: item, completed: (Math.random() < 0.5)})
})
console.log(todo)

// deletes a todo that matches the text
const deleteTodo = function (todo, texts) {
    const indexs = todo.findIndex(function (item, index) {
        return item.text.toLowerCase() === texts.toLowerCase()
    })
    if (indexs > -1){
        todo.splice(indexs, 1)
    } else {
        console.log('Item does not exist')
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todo))
