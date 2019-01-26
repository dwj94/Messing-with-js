const notes = [{
    title: 'Note 1', 
    body: 'body1'
}, {
    title: 'Note 2', 
    body: 'body2',
}, {
    title: 'Note3',
    body: 'body3'
}]

// notes.pop() // removes the last item in the array
// notes.push('MyNote3') // adds an item to the end of array

// notes.shift() // remove first item
// notes.unshift('MyNote1')

// notes.splice(1, 1, 'MyNote2','MyNoteExtra') // removes one item from position 1

// console.log(notes)

// notes[2] = 'This is the new extra note' // replaces item at that position

// notes.forEach(function (item, index) { // loops each item in the array and we are given arguments of the item in the array and the index of the item
//     console.log(`${item} ${index}`)
// })

// console.log(notes.length) // length of array
// console.log(notes)
// console.log(notes[0])// first item
// console.log(notes[notes.length-1]) // item in array at position 0

// // Connecting...
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length - 1 ; count >= 0; count--) {
//     console.log(notes[count])
// }

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'note3')
console.log(note)

// console.log(notes.indexOf('MyNote1'))

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Note 2'
// })

// console.log(index)

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isBodyMatch || isTitleMatch
    })
}


console.log(findNotes(notes, '2'))
