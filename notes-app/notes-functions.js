// read existing notes from local storage
const getSavedNotes = () => {
    // Check for existing saved data
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove a note from list
const removeNote = (id, notes) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}


// generate the dom structure for a note

const generateNoteDom = (note, notes, filters) => {
    const newNote = document.createElement('div')
    const textEl = document.createElement('a')
    const newButton = document.createElement('button')

    // setup the delete note button
    newButton.textContent = 'x'
    newButton.setAttribute('id', 'delete-note')
    newButton.addEventListener('click',  (e) => {
        removeNote(note.id, notes)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    newNote.appendChild(newButton)

    // Make note unamed if no content
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    // add the text element to the new note
    textEl.setAttribute('href', `edit.html#${note.id}`)
    newNote.appendChild(textEl)

    return newNote
}

// render application notes, set unique id on note
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    if (notes.length >= 0) {
        document.querySelector('#notes').innerHTML = '' 
    }

    filteredNotes.forEach((item, index) => {
        const newNote = generateNoteDom(item, notes, filters)
        document.querySelector('#notes').appendChild(newNote)
    })
}

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })

    } else if (sortBy === 'byDate') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabet') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}
