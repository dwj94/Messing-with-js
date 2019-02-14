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


// generate the dom structure for a note

const generateNoteDom = function (note) {
    const newNote = document.createElement('p')

    if (note.title.length > 0) {
        newNote.textContent = note.title
    } else {
        newNote.textContent = 'Unnamed note'
    }
    return newNote
}

// render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    if (notes.length > 0) {
        document.querySelector('#notes').innerHTML = '' 
    }

    filteredNotes.forEach(function (item, index) {
        const newNote = generateNoteDom(item)
        document.querySelector('#notes').appendChild(newNote)
    })
}
