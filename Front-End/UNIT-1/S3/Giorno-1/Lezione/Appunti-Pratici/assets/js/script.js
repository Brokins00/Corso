let test = document.getElementById('test'); // Traversing
// let test = document.querySelector('#test'); // Di fatto è la stessa cosa scritta sopra
test.innerHTML = '<h1>DOM Traversing & DOM Manipulation</h1>'; // Manipulation

let contenitori = document.getElementsByTagName('div');
console.log(contenitori.length)

document.getElementById('secondo').className = 'box'

// document.getElementById('terzo').setAttribute('style', 'color: green;')
document.querySelector('#secondo h4').setAttribute('style', 'color: black;')

let box1 = document.querySelector('#secondo')

console.log(box1)

// PER SELEZIONARE UN SOLO ELEMENTO HTML:
// document.getElementById SE L'ELEMENTO HA UN ID
// document.querySelector PER SELEZIONARE IN BASE A UN SELETTORE COMBINATO CSS

// PER SELEZIONARE GRUPPI DI ELEMENTI HTML:
// document.querySelectorAll