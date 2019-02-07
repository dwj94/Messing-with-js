// const ps = document.querySelectorAll('p')

// ps.forEach(function (item, index) {
//     // console.log(index)
//     if (item.textContent.includes('the')){
//         item.remove()
//     }
// })

const todo = ['Clean the car', 'Wash the dishes', 'Take out rubbish', 'Finish course', 'Clean floor']

todo.forEach(function (item, index) { // just seeding the todo array of objects with some random todos
    todo.splice(index, 1, {text: item, completed: (Math.random() < 0.5)})
})

const filters = {
    searchText: '',
    completed: ''
}

let remainingCount = 0
todo.forEach(function (item, index) {
    if (!item.completed) {
        remainingCount += 1
    }
    const remainingTodo = document.createElement('p')
    remainingTodo.textContent = item.text
    document.querySelector('#todos').appendChild(remainingTodo)
})

const remaining = document.createElement('h4')
remaining.textContent = `You have ${remainingCount} todo's to complete`
document.querySelector('body').appendChild(remaining)

const renderSearch = function (toDos, filter) {
    const filteredToDos = toDos.filter(function (todo) {
        let showAll = true
        if (filter.completed === false) {
            showAll = todo.completed === filter.completed
        }
        const matchedToDo = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        return matchedToDo && showAll
    })

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach(function (item, index) {
        const toDoSearch = document.createElement('p')
        toDoSearch.textContent = item.text
        document.querySelector('#todos').appendChild(toDoSearch)
    })
}


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderSearch(todo, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todo.push({text: e.target.elements.toDo.value, completed: false})
    e.target.elements.toDo.value = ''
    renderSearch(todo, filters)
    
    let remainingCount = 0
    todo.forEach(function (item, index) {
        if (!item.completed) {
            remainingCount += 1
        }
    })

    const remaining = document.querySelector('h4')
    remaining.textContent = `You have ${remainingCount} todo's to complete`
})

document.querySelector('#hide').addEventListener('change', function (e) {
    if (e.target.checked) {
        filters.completed = false
    } else {
        filters.completed = ''
    }
    renderSearch(todo, filters)
})
