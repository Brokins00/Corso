let mese = new Date().getMonth();
let meseCorrente;

if (mese === 0) {
    meseCorrente = "Gennaio";
} else if (mese === 1) {
    meseCorrente = "Febbraio";
} else if (mese === 2) {
    meseCorrente = "Marzo";
} else if (mese === 3) {
    meseCorrente = "Aprile";
} else if (mese === 4) {
    meseCorrente = "Maggio";
} else if (mese === 5) {
    meseCorrente = "Giugno";
} else if (mese === 6) {
    meseCorrente = "Luglio";
} else if (mese === 7) {
    meseCorrente = "Agosto";
} else if (mese === 8) {
    meseCorrente = "Settembre";
} else if (mese === 9) {
    meseCorrente = "Ottobre";
} else if (mese === 10) {
    meseCorrente = "Novembre";
} else if (mese === 11) {
    meseCorrente = "Dicembre";
}

switch (
    mese // più veloce
) {
    case 0:
        meseCorrente = "Gennaio";
        break;
    case 1:
        meseCorrente = "Febbraio";
        break;
    case 2:
        meseCorrente = "Marzo";
        break;
    case 3:
        meseCorrente = "Aprile";
        break;
    case 4:
        meseCorrente = "Maggio";
        break;
    case 5:
        meseCorrente = "Giugno";
        break;
    case 6:
        meseCorrente = "Luglio";
        break;
    case 7:
        meseCorrente = "Agosto";
        break;
    case 8:
        meseCorrente = "Settembre";
        break;
    case 9:
        meseCorrente = "Ottobre";
        break;
    case 10:
        meseCorrente = "Novembre";
        break;
    case 11:
        meseCorrente = "Dicembre";
        break;
    default:
        meseCorrente = "Sconosciuto";
        break;
}

document.getElementById("mese").innerHTML += meseCorrente; // Con l'operatore += si concatena il testo inserito da Javascript al testo già presente in HTML

let x = 9;
let y = 12;
let z = 23;
let sequenza = document.getElementById("sequenza");

switch (true) {
    case x > y && y > z:
        sequenza.innerHTML = x + ", " + y + ", " + z;
        break;
    case x > z && z > y:
        sequenza.innerHTML = x + ", " + z + ", " + y;
        break;
    case y > x && x > z:
        sequenza.innerHTML = y + ", " + x + ", " + z;
        break;
    case y > z && z > x:
        sequenza.innerHTML = y + ", " + z + ", " + x;
        break;
    case z > x && x > y:
        sequenza.innerHTML = z + ", " + x + ", " + y;
        break;
    case z > y && y > x:
        sequenza.innerHTML = z + ", " + y + ", " + x;
        break;
    default:
        sequenza.innerHTML = "Sconosciuto";
        break;
}