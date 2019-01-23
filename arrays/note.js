const notes = ['Note 1', 'Note 2', 'Note 3']

notes.pop() // removes the last item in the array
notes.push('MyNote3') // adds an item to the end of array

notes.shift() // remove first item
notes.unshift('MyNote1')

notes.splice(1, 1, 'MyNote2','MyNoteExtra') // removes one item from position 1

console.log(notes)

notes[2] = 'This is the new extra note' // replaces item at that position

notes.forEach(function (item, index) { // loops each item in the array and we are given arguments of the item in the array and the index of the item
    console.log(`${item} ${index}`)
})

console.log(notes.length) // length of array
console.log(notes)
console.log(notes[0])// first item
console.log(notes[notes.length-1]) // item in array at position 0

// Connecting...
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = notes.length - 1 ; count >= 0; count--) {
    console.log(notes[count])
}
