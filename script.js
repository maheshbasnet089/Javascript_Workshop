
const h1 = document.querySelector('.thisish1')
const button = document.getElementsByTagName('button')[0]

// h1.innerHTML = "<mark>Bye world</mark>"

button.addEventListener('mouseover',()=>{
    h1.textContent = "Bye world"
    var newParagraph = document.createElement('p')
    newParagraph.textContent = "Learning DOM"
    document.body.appendChild(newParagraph)
})

