// Spread Operatore => Clona oggetto e permette poi di inserirlo in qualunque posto di un altro oggetto
const oggetto1 = {
    esempio: "Iniziamo Javascript",
    test: true,
}

console.log(oggetto1) // oggetto base

const oggetto2 = {
    ...oggetto1,
    nome: "Mario",
    anni: 23
}

console.log(oggetto2) // oggetto con il clone dell'oggetto1 all'inizio del nuovo oggetto

const oggetto3 = {
    nome:'Giovanni',
    ...oggetto1,
    anni: 32
}

console.log(oggetto3) // oggetto con il clone dell'oggetto1 in mezzo al nuovo oggetto

const oggetto4 = {
    nome:'Elena',
    anni: 45,
    ...oggetto1
}

console.log(oggetto4) // oggetto con il clone dell'oggetto1 alla fine del nuovo oggetto

// Rest Parameter => Si usa quando non si sa quanti parametri abbiamo

function somma(...numeri) { // numeri in questo caso è un array contenente n parametri forniti
    let somma = 0;
    for (let i=0; i < numeri.length; i++) {
        somma += numeri[i]
    }
    return somma
}

console.log(somma(1,2,3,4,5))

// Destrutturazione oggetti
const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25
}

const {nome, eta, cognome} = persona; // l'ordine all'inerno dell'oggetto dopo il const può variare, ma le variabili devono essere le stesse che trovi come key nell'oggetto richiamato dopo l'uguale

console.log(nome)
console.log(eta)
console.log(cognome)

// Destrutturazione array
const telefoni = [123456789, 987654321, 456123789]

const [numero1, numero2, numero3] = telefoni; // l'ordine deve essere quello degli indici dell'array, il nome della variabile può essere qualunque
console.log(numero1, numero2,numero3)

// Template literals => permette la scrittura di testo su più righe
const messagio = `Nome => ${nome}, Cognome => ${cognome},
Eta => ${eta}`; // per inserire delle variabili in un testo, invece di fare la concatenazione con il +, usiamo il backtick (`) e usiamo ${nomevariabile}, il backtick permette anche di renderizzare i da capo.
console.log(messagio)

// Metodi stringhe
const stringa = "Sto imparando Javascript";

console.log(stringa.startsWith('Javascript')); // controlla che il testo messo come argomento è contenuto ALL'INIZIO della stringa
console.log(stringa.endsWith('Javascript')) // controlla che il testo messo come argomento è contenuto ALLA FINE della stringa
console.log(stringa.includes('Javascript')) // controlla che il testo messo come argomento sia contenuto in generale in una parte qualsiasi della stringa

// Metodi array
const animali = ["gatto", "cane", "alce", "struzzo"];
animali.sort() // ordina in ordine alfabetico i valori dentro l'array (CAMBIA L'ARRAY INIZIALE)

let eliminato = animali.pop(); // elimina l'ultimo valore dell'array e se messo in una variabile, la variabile prende il valore dell'elemento che è stato eliminato (in questo caso struzzo)
console.log(`Eliminato dall'array il valore ${eliminato}`)
console.log(`Nuovo array: ${animali}`)

animali.push('leone', 'tigre', 'animale'); // mette in fondo all'array i valori indicati (può avere più di un argomento)
console.log(`Nuovo array: ${animali}`)

let eliminato2 = animali.shift(); // elimina il primo valore dell'array e se messo in una variabile, la variabile prende il valore dell'elemento che è stato eliminato
console.log(`Eliminato dall'array il valore ${eliminato2}`)
console.log(`Nuovo array: ${animali}`)

// Pop e shift vanno ad eliminare definitivamente dall'array il valore, andando a scalare i valori successivi

let lunghezzaArray = animali.unshift("uccello") // inserisce al primo indice dell'array in valore indicato nell'argomento e se messo in una variabile, la variabile prende il valore della lunghezza dell'array
console.log(`L'array ha ${lunghezzaArray} valori all'interno dopo la nuova aggiunta`)
console.log(`Nuovo array: ${animali}`)

let nuovoAnimali = animali.splice(2, 2); // elimina dall'indice indicato nel primo argomento (compreso) fino all'indice indicato nel secondo argomento (indica quanti indici deve prendere), va a modificare l'array iniziale, se inserito in una variabile, la variabile sarà una nuova array contenente i valori eliminati. Tutto ciò che c'è dopo i primi 2 argomenti, sono valori da aggiungere. Se contiene numeri negativi indica che parte dal fondo a contare
console.log(`Il nuovo array contiene gli elementi eliminati: ${nuovoAnimali}`)
console.log(`L'array iniziale diventerà: ${animali}`)

const nuoviAnimali2 = animali.concat("zebra"); // aggiunge alla fine dell'array i vari elementi messi come argomenti e restituisce l'array nuova, non modifica l'array iniziale
console.log(`Il nuovo array contiene: ${nuoviAnimali2}`)
console.log(`L'array iniziale diventerà: ${animali}`)

let nuoviAnimali3 = animali.slice(2, 4); // si usa nelle variabili e la variabile prende il valore di un'array contenente ciò che sta nell'array iniziale tra il primo indice e il secondo indice indicati (primo argomento => inizio indice (incluso), secondo argomento => fine indice (escluso)). NON MODIFICA L'ARRAY INIZIALE
console.log(`Il nuovo array contiene: ${nuoviAnimali3}`)
console.log(`L'array iniziale diventerà: ${animali}`)

// forEach e map sono simili, non vanno a modificare l'array originario

const array = [32, 7, 84, 12];
array.forEach(function(element) { // uguale a ciclo for ma più lento del for, ma semplificato, element si scrive così per convenzione. Se devi leggere un array, conviene usare il ciclo for, il forEach si utilizza solo in casi dove dobbiamo scrivere un codice complesso
    console.log(`L'array contiene: ${element}`)
})

/* 
    Si può scrivere anche:
    array.forEach(element => console.log(`L'array contiene: ${element}`));

    Si può fare anche con (in questo caso più veloce):
    for (let i=0; i < array.length; i++) {
        console.log(`L'array contiene: ${array[i]}`)
    }
*/

const risultati = array.map(function(element) { // uguale a forEach, solamente che, se messo in una variabile, restituisce un array con i vari risultati
    return `L'array contiene: ${element}` // Questo return popola l'array creata dal metodo nella variabile risultati
})
console.log(risultati)

/* 
    Si può scrivere anche:
    const risultati = array.map(element => return `L'array contiene: ${element}`));
*/

const arrayFiltrato = array.filter(function(element) { // simile a map solamente ritorna l'elemento se soddisfa la condizione mezza nel return
    return element > 30
})

console.log(`L'array filtrata contiene: ${arrayFiltrato}`)

/* 
    Si può scrivere anche:
    const arrayFiltrato = array.filter(element => return element > 30));
*/