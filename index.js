// Write your code here!

document.querySelector('main#main').remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = `Aude is the champion`