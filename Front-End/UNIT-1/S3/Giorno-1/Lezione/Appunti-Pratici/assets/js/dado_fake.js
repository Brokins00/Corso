const risultatoDiv = document.getElementById("risultato");
let vittoria = true

document.addEventListener("load", init());

function init() {
    lancioDadi();
}

function SommaEVerifica(val1, val2) {
    let somma = val1 + val2
    return {[0]: (val1 + val2) % 2 === 0, [1]: somma};
}

function lancioDado() {
    return Math.floor(Math.random() * 6 + 1);
}

function risultato(somma, dado1, dado2) {
    const risultatoVitPers = document.createElement("h4");
    if (somma[0]) {
        // risultatoVitPers.setAttribute("id", "vittoria");
        // risultatoVitPers.innerText = "Il giocatore ha vinto";
        lancioDadi();
    } else {
        vittoria = false
        risultatoVitPers.setAttribute("id", "sconfitta");
        risultatoVitPers.innerText = "Il giocatore ha perso";
        risultatoDiv.appendChild(risultatoVitPers);
        const risultatoSomma = document.getElementById("somma");
        risultatoSomma.innerText += somma[1];
        document.getElementById("lancio1").innerText += dado1;
        document.getElementById("lancio2").innerText += dado2;
    }
}

function lancioDadi() {
    let dado1 = lancioDado();
    let dado2 = lancioDado();
    let somma = SommaEVerifica(dado1, dado2);
    risultato(somma, dado1, dado2);
}