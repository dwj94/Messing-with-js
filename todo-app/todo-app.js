const uuidv4 = require('uuid/v4')

let todo = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: ''
}

document.querySelector('body').appendChild(countTodos(todo))

renderSearch(todo, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderSearch(todo, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todo.push({
        id: uuidv4(), 
        text: e.target.elements.toDo.value, 
        completed: false
    })
    saveTodos(todo)
    renderSearch(todo, filters)
    e.target.elements.toDo.value = ''
    document.querySelector('h4').replaceWith(countTodos(todo))
})

document.querySelector('#hide').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderSearch(todo, filters)
})
