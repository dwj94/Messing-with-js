// DOM is Document Object Model

// const p = document.querySelector('p')
// p.remove()
const notes = [{
    title: 'Is this a fun course', 
    body: 'I think it is'
}, {
    title: 'Weather on saturday is windy', 
    body: 'Yeah, 25mph or more'
}, {
    title: 'Rugby on Sunday',
    body: 'Lets watch it'
}]

// const nameUser = {
//     name: 'Dan',
//     age: 27
// }

// const userJson = JSON.stringify(nameUser) // only strings can be stored in localstorage
// console.log(userJson)
// localStorage.setItem('user', userJson)

const userJson = localStorage.getItem('user')
const user = JSON.parse(userJson)
console.log(`${user.name} is ${user.age}`)

// const ps = document.querySelectorAll('p')
// ps.forEach(function (item, index){
//     item.textContent = '**'
//     // item.remove()
// })

// const newPar = document.createElement('p')
// newPar.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newPar)

const filters = {
    searchText: ''
}

notes.forEach(function (item, index) {
    const newNote = document.createElement('p')
    newNote.textContent = item.title
    document.querySelector('#notes').appendChild(newNote)
})


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    if (notes.length > 0) {
        document.querySelector('#notes').innerHTML = '' 
    }

    filteredNotes.forEach(function (item, index) {
        const newNote = document.createElement('p')
        newNote.textContent = item.title
        document.querySelector('#notes').appendChild(newNote)
    })
}

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log(e)
    if (e.target.textContent === 'Button clicked'){
        e.target.textContent = 'Add note'
    } else{
        e.target.textContent = 'Button clicked'
    }
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
