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

const generateNoteDom = function (note, countNote, notes) {
    const newNote = document.createElement('div')
    const textEl = document.createElement('span')
    const newButton = document.createElement('button')

    // setup the delete note button
    newButton.textContent = 'x'
    newButton.setAttribute('id', 'delete-note'+countNote)
    newButton.addEventListener('click', function (e) {
        const id = e.target.id
        const elem = document.getElementById(id).parentNode
        
        
        const idNum = id.substring(11, id.length)
    
        // delete from browser and list
        notes.splice(idNum, 1)
        saveNotes(notes)
        elem.parentNode.removeChild(elem)
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

    let countNote = 0
    filteredNotes.forEach(function (item, index) {
        const newNote = generateNoteDom(item, countNote, notes)
        countNote += 1
        document.querySelector('#notes').appendChild(newNote)
    })
}
