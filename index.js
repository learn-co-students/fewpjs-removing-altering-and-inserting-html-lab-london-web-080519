// Write your code here!
document.getElementById('main').remove();

const h = document.createElement("h1")

h.id = "victory";
document.body.appendChild(h);

const newHeader = document.querySelector("h1#victory");

newHeader.innerHTML = "Oliver is the champion";
