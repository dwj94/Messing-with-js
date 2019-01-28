// DOM is Document Object Model

// const p = document.querySelector('p')
// p.remove()
const notes = [{
    title: 'Bote 1', 
    body: 'body1'
}, {
    title: 'Aote 2', 
    body: 'body2',
}, {
    title: 'aote3',
    body: 'body3'
}]

const ps = document.querySelectorAll('p')
ps.forEach(function (item, index){
    item.textContent = '**'
    // item.remove()
})

const newPar = document.createElement('p')
newPar.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newPar)
