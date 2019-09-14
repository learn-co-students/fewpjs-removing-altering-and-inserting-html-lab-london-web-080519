// Write your code here!

let element = document.querySelector('body');
element.removeChild(document.querySelector("main#main"));

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Erin is the champion";

