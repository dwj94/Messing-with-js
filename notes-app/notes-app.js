// if your require any more packages, browserify notes-app.js -o bundle.js
const uuidv4 = require('uuid/v4')
const moment = require('moment')

let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


const now = moment()
console.log(now.toString())
console.log(now.minute())
now.add(4, 'years').subtract(15, 'day')
console.log(now.format('MMMM Do, YYYY'))

console.log(now.toString())
console.log(now.fromNow())
