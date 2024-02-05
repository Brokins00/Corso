let test = document.getElementById('test'); // Traversing
// let test = document.querySelector('#test'); // Di fatto è la stessa cosa scritta sopra
let corpoPagina = document.querySelectorAll('body')[0];
test.innerHTML = '<h1>DOM Traversing & DOM Manipulation</h1>'; // Manipulation

let contenitori = document.getElementsByTagName('div');
console.log(contenitori.length)

document.getElementById('secondo').className = 'box'

// document.getElementById('terzo').setAttribute('style', 'color: green;')
document.querySelector('#secondo h4').setAttribute('style', 'color: black;')

// let box1 = document.querySelector('#secondo')
// console.log(box1)

let boxes = document.querySelectorAll('.box')
console.log(boxes)

document.querySelector('#terzo p').style.fontWeight = 'bold';

const newDiv = document.createElement('div');
newDiv.innerText = "Sono un nuovo div creato da Javascript";
newDiv.style.backgroundColor = 'red';
newDiv.style.fontWeight = 'bold';
newDiv.style.color = 'white';
corpoPagina.appendChild(newDiv);

const link = document.createElement('a');
link.setAttribute('href', 'https://www.google.it/')
link.setAttribute('target', '_blank');
link.innerText = 'Link a Google';
test.appendChild(link)

// PER SELEZIONARE UN SOLO ELEMENTO HTML:
// document.getElementById SE L'ELEMENTO HA UN ID
// document.querySelector PER SELEZIONARE IN BASE A UN SELETTORE COMBINATO CSS

// PER SELEZIONARE GRUPPI DI ELEMENTI HTML:
// document.querySelectorAll