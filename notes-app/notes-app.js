// DOM is Document Object Model

// const p = document.querySelector('p')
// p.remove()
const notes = [{
    title: 'Bote 1', 
    body: 'body1'
}, {
    title: 'Aote 2', 
    body: 'body2',
}, {
    title: 'aote3',
    body: 'body3'
}]

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

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})