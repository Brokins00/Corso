// Dichiarazione e definizione di un array
const studenti = ["Sabrina", "Antonio", "Leonardo", "Giancarlo", "Felice"];

// Un array può anche essere definito inizialmente vuoto, metodologia frequente quando l'array sarà popolato da una base dati
const nuovoArray = [];

// Stampa array (a video e in console)
console.log(studenti);

// Per stampare un INTERO array a video non è necessaria la destrutturazione
document.getElementById("array").innerHTML = studenti;

// E' ovviamente possibile anche destrutturare
document.getElementById("valore1").innerHTML = studenti[0];
document.getElementById("valore2").innerHTML = studenti[1];
document.getElementById("valore3").innerHTML = studenti[2];
document.getElementById("valore4").innerHTML = studenti[3];
document.getElementById("valore5").innerHTML = studenti[4];

// Modifica e stampa dell'Array
studenti[1] = "Elias";
studenti[3] = "Massimiliano";
document.getElementById("valore1a").innerHTML = studenti[0];
document.getElementById("valore2a").innerHTML = studenti[1];
document.getElementById("valore3a").innerHTML = studenti[2];
document.getElementById("valore4a").innerHTML = studenti[3];
document.getElementById("valore5a").innerHTML = studenti[4];

// Ordinamento array - Il metodo sort() ordina i valori presenti un array MODIFICANDO l'array originario
studenti.sort();

document.getElementById("valore1b").innerHTML = studenti[0];
document.getElementById("valore2b").innerHTML = studenti[1];
document.getElementById("valore3b").innerHTML = studenti[2];
document.getElementById("valore4b").innerHTML = studenti[3];
document.getElementById("valore5b").innerHTML = studenti[4];

console.log(studenti);
