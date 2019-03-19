const moment = require('moment')

const noteId = location.hash.substring(1) // find the note id from the url
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (note === undefined) {
    location.assign('/')
}

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const lastEdited = document.querySelector('#time')

titleElement.value = note.title
bodyElement.value = note.body
lastEdited.textContent = `Updated ${moment.unix(note.updatedAt).fromNow()}`

titleElement.addEventListener('input', (e) => {
    const now = moment()

    note.title = e.target.value
    note.updatedAt = now.unix()
    saveNotes(notes)
    lastEdited.textContent = `Updated ${moment.unix(note.updatedAt).fromNow()}`
})

bodyElement.addEventListener('input', (e) => {
    const now = moment()

    note.body = e.target.value
    note.updatedAt = now.unix()
    saveNotes(notes)
    lastEdited.textContent = `Updated ${moment.unix(note.updatedAt).fromNow()}`
})

document.querySelector('#remove-note').addEventListener('click', (e) => {
    removeNote(note.id, notes)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)
        
        if (note === undefined) {
            location.assign('/')
        }
        titleElement.value = note.title
        bodyElement.value = note.body
    }
})
