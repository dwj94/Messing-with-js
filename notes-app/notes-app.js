// DOM is Document Object Model

// const p = document.querySelector('p')
// p.remove()


const ps = document.querySelectorAll('p')
ps.forEach(function (item, index){
    item.textContent = '**'
    // item.remove()
})
