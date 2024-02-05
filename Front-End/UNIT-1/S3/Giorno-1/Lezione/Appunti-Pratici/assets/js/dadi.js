// Gioco dei Dadi:
// Crea un programma che simuli il lancio di due dadi. Se la somma dei due dadi è pari, stampa un messaggio che indica la vittoria del giocatore, altrimenti stampa un messaggio che indica la sconfitta.
const risultatoDiv = document.getElementById("risultato");

document.addEventListener("load", init());

function init() {
    lancioDadi();
}

function SommaEVerifica(val1, val2) {
    let somma = val1 + val2;
    const risultatoSomma = document.getElementById("somma");
    risultatoSomma.innerText += somma;
    return (val1 + val2) % 2 === 0;
}

function lancioDado() {
    return Math.floor(Math.random() * 6 + 1);
}

function risultato(somma) {
    const risultatoVitPers = document.createElement("h4");
    if (somma) {
        risultatoVitPers.setAttribute("id", "vittoria");
        risultatoVitPers.innerText = "Il giocatore ha vinto";
    } else {
        risultatoVitPers.setAttribute("id", "sconfitta");
        risultatoVitPers.innerText = "Il giocatore ha perso";
    }
    risultatoDiv.appendChild(risultatoVitPers);
}

function lancioDadi() {
    let dado1 = lancioDado();
    let dado2 = lancioDado();
    document.getElementById("lancio1").innerText += dado1;
    document.getElementById("lancio2").innerText += dado2;
    let somma = SommaEVerifica(dado1, dado2);
    risultato(somma);
}
