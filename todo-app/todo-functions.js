// fetch existing todos from locatstorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// save todos
const saveTodos = function (todo, e) {
    todo.push({text: e.target.elements.toDo.value, completed: false})
    localStorage.setItem('todo', JSON.stringify(todo))
}

// render application todos based on filters
const renderSearch = function (toDos, filter) {
    const filteredToDos = toDos.filter(function (todo) {
        let show = !filters.hideCompleted || !todo.completed
        const matchedToDo = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        return matchedToDo && show
    })

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach(function (item, index) {
        const toDoSearch = getDomElem(item)
        document.querySelector('#todos').appendChild(toDoSearch)
    })
}

// generate the dom elements for individual todos
const getDomElem = function (item) {
    const toDoSearch = document.createElement('p')
    toDoSearch.textContent = item.text
    return toDoSearch
}

// count remaining todos and return summary
const countTodos = function (todo) {
    let remainingCount = 0
    todo.forEach(function (item, index) {
        if (!item.completed) {
            remainingCount += 1
        }
    })
    const remaining = document.createElement('h4')
    remaining.textContent = `You have ${remainingCount} todo's to complete`
    return remaining
}

