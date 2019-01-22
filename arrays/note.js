const notes = ['Note 1', 'Note 2', 'Note 3']

notes.pop() // removes the last item in the array
notes.push('MyNote3') // adds an item to the end of array

notes.shift() // remove first item
notes.unshift('MyNote1')

notes.splice(1, 1) // removes one item from position 1

console.log(notes.length)
console.log(notes[0])
console.log(notes[notes.length-1]) // item in array at position 0
