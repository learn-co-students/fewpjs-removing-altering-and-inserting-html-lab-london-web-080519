// Write your code here!

//let gone = document.getElementsByTagName('div');
//gone.remove();


function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

removeElement('main');

// function addElement {
//     let element = document.querySelector("p#greeting");
//  element.innerHTML = 'Hello, DOM!'
// } 

// function addElement(parentId, elementTag, elementId, html) {
//     // Adds an element to the document
//     var h1 = document.getElementById(parentId);
//     var newHeader = document.createElement(elementTag);
//     newHeader.setAttribute('id', elementId);
//     newHeader.innerHTML = html;
//     h1.appendChild(newElement);
// }


// var victory = document.createElement("h1");
// var newHeader = document.createTextNode("YOUR-NAME is the champion");
// victory.appendChild(node);
// var element = document.getElementById("div1");
// element.appendChild(victory);

var newHeader = document.createElement("h1");
newHeader.id = 'victory';
var text = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(text);
var element = document.getElementById("div1");
element.appendChild(newHeader);


