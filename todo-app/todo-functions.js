// fetch existing todos from locatstorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// save todos
const saveTodos = (todo) => {
    localStorage.setItem('todo', JSON.stringify(todo))
}

const removeTodo = (id, todo) => {
    const todoIndex = todo.findIndex((e) => e.id === id)
    if (todoIndex > -1) {
        todo.splice(todoIndex, 1)
    }
}

// render application todos based on filters
const renderSearch = (toDos, filter) => {
    const filteredToDos = toDos.filter((todo) => {
        let show = !filter.hideCompleted || !todo.completed
        const matchedToDo = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        return matchedToDo && show
    })

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach((item, index) => {
        const toDoSearch = getDomElem(item, toDos, filter)
        document.querySelector('#todos').appendChild(toDoSearch)
    })
}

// generate the dom elements for individual todos
const getDomElem = (item, todoList, filter) => {
    const todoItem = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const removeItem = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.completed
    checkbox.addEventListener('change', (e) => {
        item.completed = e.target.checked
        saveTodos(todoList)
        document.querySelector('h4').replaceWith(countTodos(todoList))
        renderSearch(todoList, filter)
    })
    todoItem.appendChild(checkbox)

    text.textContent = item.text
    todoItem.appendChild(text)

    removeItem.textContent = 'x'
    removeItem.addEventListener('click', (e) => {
        removeTodo(item.id, todoList)
        saveTodos(todoList)
        document.querySelector('h4').replaceWith(countTodos(todoList))
        renderSearch(todoList, filter)
    })
    todoItem.appendChild(removeItem)

    return todoItem
}

// count remaining todos and return summary
const countTodos = (todo) => {
    let remainingCount = 0
    todo.forEach((item, index) => {
        if (!item.completed) {
            remainingCount += 1
        }
    })
    const remaining = document.createElement('h4')
    remaining.textContent = `You have ${remainingCount} todo's to complete`
    return remaining
}

