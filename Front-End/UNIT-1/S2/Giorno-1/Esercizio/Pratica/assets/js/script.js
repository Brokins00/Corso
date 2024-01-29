/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("--------------------");
console.log("ESERCIZIO 1");
console.log(
    "Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino"
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById("string").innerHTML =
    'I datatype "string" sono tutto ciò che trovi tra apici (singoli o doppi), la stringa può contenere simboli, numeri e caratteri. Es: <code>"Hello World 2024!"</code>';
document.getElementById("number").innerHTML =
    'I datatype "number" sono tutti i numeri con i quali puoi costruire operazioni matematiche. Possono essere interi o decimali. Es: <code>29</code> oppure <code>3.22</code>';
document.getElementById("boolean").innerHTML =
    'I datatype "boolean" sono <code>true</code> e <code>false</code>. Corrispondono all\'italiano Vero e Falso. Si usano come risultati di una condizione';
document.getElementById("null").innerHTML =
    'I datatype "null" si utilizzano quando vogliamo rappresentare qualcosa che non ha un valore';
document.getElementById("undefined").innerHTML =
    'I datatype "undefined" vengono fuori quando si è dichiarata una variabile ma non gli abbiamo dato un valore';
console.log(
    'I datatype "string" sono tutto ciò che trovi tra apici (singoli o doppi), la stringa può contenere simboli, numeri e caratteri. Es: "Hello World 2024!"'
);
console.log(
    'I datatype "number" sono tutti i numeri con i quali puoi costruire operazioni matematiche. Possono essere interi o decimali. Es: 29 oppure 3.22'
);
console.log(
    'I datatype "boolean" sono true e false. Corrispondono all\'italiano Vero e Falso. Si usano come risultati di una condizione'
);
console.log(
    'I datatype "null" si utilizzano quando vogliamo rappresentare qualcosa che non ha un valore'
);
console.log(
    'I datatype "undefined" vengono fuori quando si è dichiarata una variabile ma non gli abbiamo dato un valore'
);
console.log("--------------------");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
console.log("ESERCIZIO 2");
console.log(
    'Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Fabio";
document.getElementById("myName").innerHTML =
    'const myName = "' + myName + '";';
console.log("Risultato della stringa: " + myName);
console.log("--------------------");

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log("ESERCIZIO 3");
console.log(
    "Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;
console.log("Risultato della somma: " + somma);
document.getElementById("somma").innerHTML =
    "let numero1 = " +
    numero1 +
    ";<br>let numero2 = " +
    numero2 +
    ";<br>let somma = numero1 + numero2;<br>console.log(somma)";
document.getElementById("somma_risultato").innerHTML = somma;
console.log("--------------------");

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
console.log("ESERCIZIO 4");
console.log('Crea una variabile di nome "x" e assegna ad essa il numero 12');
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
document.getElementById("variabile_x").innerHTML = "let x = 12;";

console.log('Risultato variabile "x": ' + x);
console.log("--------------------");

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
console.log("ESERCIZIO 5");
console.log(
    'Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.'
);
console.log(
    "Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById("myNameCognome").innerHTML = 'myName = "Brogi"';
// myName = "Brogi";
// console.log(myName);
console.log("--------------------");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log("ESERCIZIO 6");
console.log(
    'Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione_x = 4 - x;
document.getElementById("sottrazione_x").innerHTML = "let sottrazione_x = 4 - x;";
document.getElementById("sottrazione_x_risultato").innerHTML = sottrazione_x;
console.log("Risultato sottrazione 4 - x: " + sottrazione_x);
console.log("--------------------");

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
console.log("ESERCIZIO 7");
console.log(
    'Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).'
);
console.log(
    "Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa)."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let risultato = name1 !== name2 ? "Si" : "No";
document.getElementById("john").innerHTML =
    'let name1 = "john"<br>let name2 = "John"<br>let risultato = name1 !== name2 ? "Si" : "No";<br>console.log("Sono diversi? Risposta: "+risultato);';
document.getElementById("risultato_john").innerHTML =
    "Sono diversi? Risposta: " + risultato;

console.log("Sono diversi? Risposta: " + risultato);
console.log("--------------------");
console.log(
    "EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!)."
);
console.log("");
let risultato_due = name1.toLowerCase() === name2.toLowerCase() ? "Si" : "No";
document.getElementById("risultato_john2").innerHTML =
    "Sono identici ora? Risposta: " + risultato_due;
console.log("Sono identici ora? Risposta: " + risultato_due);
console.log("--------------------");

const logo = document.getElementById('logo_epicode');
logo.addEventListener('click', function() {
    window.open('http://www.epicode.com/it/');
});