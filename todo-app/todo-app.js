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
    saveTodos(todo, e)
    e.target.elements.toDo.value = ''
    renderSearch(todo, filters)
    document.querySelector('h4').replaceWith(countTodos(todo))
})

document.querySelector('#hide').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderSearch(todo, filters)
})
