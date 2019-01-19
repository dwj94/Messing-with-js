// let name = 'Dan'

if (true) {
    // let name = 'Mike' // variable shadowing, this is reassigned later
    if(true) {
        let name = 'Jen' //reassign mike to jen
        console.log(name)
    }
}


if (true) {
    console.log(name)
}