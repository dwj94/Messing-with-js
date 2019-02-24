// if your require any more packages, browserify notes-app.js -o bundle.js
const uuidv4 = require('uuid/v4')

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

const yesterday = new Date('23 February 2019')
const lastYear = new Date ('24 February 2018')

const timeYest = yesterday.getTime()
const timeYear = lastYear.getTime()

if (timeYest < timeYear) {
    console.log(yesterday.toString())
} else {
    console.log(lastYear.toString())
}
