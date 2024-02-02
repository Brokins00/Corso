/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
  Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('--------------------')
console.log('ESERCIZIO 1')
const pets = ['dog', 'cat', 'hamster', 'redfish']

const stampa = () => {
  for (let i=0; i < pets.length; i++) {
    console.log(pets[i])
  }
}

stampa();

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('--------------------')
console.log('ESERCIZIO 2')

const ordina = () => {
  pets.sort();
  console.log(pets)
}

ordina();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('--------------------')
console.log('ESERCIZIO 3')

const inverti = () => {
  pets.reverse();
  console.log(pets)
}

inverti();

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('--------------------')
console.log('ESERCIZIO 4')

const sposta = () => {
  let primo = pets.shift();
  pets.push(primo);
  console.log(pets)
}

sposta();

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log('--------------------')
console.log('ESERCIZIO 5')
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const randomStringa = (numeroCaratteri) => {
  let lettere = ["A", 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let stringa = "";
  for (i=0; i < numeroCaratteri; i++) {
    let random = Math.floor(Math.random() * lettere.length);
    stringa += lettere[random]
  }
  return stringa
}

const randomNumero = (numeroCaratteri) => {
  let numero = "";
  for (i=0; i < numeroCaratteri; i++) {
    let random = Math.floor(Math.random() * 10);
    numero += random
  }
  return numero
}

const randomPlate = () => {
  return randomStringa(2) + randomNumero(3) + randomStringa(2);
}

const addArray = () => {
  for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = randomPlate();
  }
  console.log(cars)
}

addArray();

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('--------------------')
console.log('ESERCIZIO 6')

const ultimaPos = () => {
  let nuovoOggetto = {
    brand: 'Fiat',
    model: '500L',
    color: 'gray',
    licensePlate: randomPlate(),
    trims: ['life', 'active'],
  }
  cars.push(nuovoOggetto);
  console.log(cars);
}

const rimuoviUltimo = () => {
  for (let i=0; i < cars.length; i++) {
    cars[i].trims.pop();
  }
  console.log(cars)
}

ultimaPos();
rimuoviUltimo();

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
console.log('--------------------')
console.log('ESERCIZIO 7')
const prendiPrimo = () => {
  for (let i=0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0])
  }
  console.log(justTrims)
}

prendiPrimo();

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('--------------------')
console.log('ESERCIZIO 8')

const colore = () => {
  for (let i=0; i < cars.length; i++) {
    if (cars[i].color.toLowerCase().startsWith("b")) {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
}

colore();

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log('--------------------')
console.log('ESERCIZIO 9')
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

const arrayNumerico = () => {
  let index = 0;
  while (index < numericArray.length) {
    console.log(numericArray[index]);
    if (numericArray[index] === 32) break;
    index++
  }
}

arrayNumerico();

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log('--------------------')
console.log('ESERCIZIO 10')
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const posizioneAlfabeto = (lettera) => {
  let lettere = ["A", 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let risultato = 0;
  lettera = lettera.toUpperCase()
  switch (lettera) {
    default:
      risultato = lettere.indexOf(lettera) + 1;
      break
  }
  return risultato
}

const alfabeto = () => {
  let arrayNumerico = []
  for (let i=0; i < charactersArray.length; i++) {
    let lettera = charactersArray[i];
    let posizione = posizioneAlfabeto(lettera);
    arrayNumerico.push(posizione);
    console.log('La lettera '+lettera+' si trova alla posizione '+posizione+' dell\'alfabeto')
  }
  return arrayNumerico
}

console.log(alfabeto())