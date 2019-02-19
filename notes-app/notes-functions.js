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
    const newNote = document.createElement('div')
    const textEl = document.createElement('span')
    const newButton = document.createElement('button')

    // setup the delete note button
    newButton.textContent = 'x'
    newButton.setAttribute('id', 'delete-note')
    newButton.addEventListener('click', function (e) {
        console.log(note)
    })
    newNote.appendChild(newButton)

    // Make note unamed if no content
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    // add the text element to the new note
    newNote.appendChild(textEl)

    return newNote
}

// render application notes, set unique id on note
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
