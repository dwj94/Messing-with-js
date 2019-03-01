const moment = require('moment')

const noteId = location.hash.substring(1) // find the note id from the url
let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/')
}

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    const now = moment()

    note.title = e.target.value
    note.updatedAt = now.unix()
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    const now = moment()
    
    note.body = e.target.value
    note.updatedAt = now.unix()
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function (e) {
    removeNote(note.id, notes)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/')
        }
        titleElement.value = note.title
        bodyElement.value = note.body
    }
})
