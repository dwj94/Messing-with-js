let var1 = 'var1'


// Global scope var1
    //Local scope var2
        //Local scope var4
    //Local scope var3

if (true) {
    console.log(var1)
    let var2 = 'var2' // variable defined only in if, cannot be used outside
    console.log(var2)

    if (true) {
        let var4 = 'var4'
    }
}

// global scope, everything defined outside of code blocks
// local scope, everything defied inside of code blocks


if (true) {
    let var3 = 'var3'
}

console.log(var2) // was never defined in the global scope

