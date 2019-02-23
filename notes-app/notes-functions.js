// read existing notes from local storage
const getSavedNotes = function () {
    // Check for existing saved data
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove a note from list
const removeNote = function (id, notes) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}


// generate the dom structure for a note

const generateNoteDom = function (note, notes, filters) {
    const newNote = document.createElement('div')
    const textEl = document.createElement('a')
    const newButton = document.createElement('button')

    // setup the delete note button
    newButton.textContent = 'x'
    newButton.setAttribute('id', 'delete-note')
    newButton.addEventListener('click', function (e) {
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
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    if (notes.length >= 0) {
        document.querySelector('#notes').innerHTML = '' 
    }

    filteredNotes.forEach(function (item, index) {
        const newNote = generateNoteDom(item, notes, filters)
        document.querySelector('#notes').appendChild(newNote)
    })
}
