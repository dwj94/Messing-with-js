// comment this file

let todo = []

const todoJSON = localStorage.getItem('todo')

if (todoJSON !== null) {
    todo = JSON.parse(todoJSON)
}

const filters = {
    searchText: '',
    hideCompleted: ''
}

let remainingCount = 0
todo.forEach(function (item, index) {
    if (!item.completed) {
        remainingCount += 1
    }
})

const remaining = document.createElement('h4')
remaining.textContent = `You have ${remainingCount} todo's to complete`
document.querySelector('body').appendChild(remaining)

const renderSearch = function (toDos, filter) {
    const filteredToDos = toDos.filter(function (todo) {
        let show = !filters.hideCompleted || !todo.completed
        const matchedToDo = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        return matchedToDo && show
    })

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach(function (item, index) {
        const toDoSearch = document.createElement('p')
        toDoSearch.textContent = item.text
        document.querySelector('#todos').appendChild(toDoSearch)
    })
}

renderSearch(todo, filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderSearch(todo, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todo.push({text: e.target.elements.toDo.value, completed: false})
    localStorage.setItem('todo', JSON.stringify(todo))
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
    filters.hideCompleted = e.target.checked
    renderSearch(todo, filters)
})
