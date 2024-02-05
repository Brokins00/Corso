// WHILE

let contaWhile = 1;

while (contaWhile <= 10) {
    document.getElementById("while").innerHTML += "<li>" + contaWhile + "</li>";
    contaWhile++;
}

// DO-WHILE

do {
    document.getElementById("doWhile").innerHTML +=
        "<li>" + contaWhile + "</li>";
    contaWhile++;
} while (contaWhile <= 10);

// Se la condizione NON è verificata da subito, il while non comincia il ciclo, mentre il do-while esegue comunque almeno una iterazione

// FOR

// Creazione di un elenco di numeri

for (let i = 1; i <= 10; i++) {
    document.getElementById("for").innerHTML += "<li>" + i + "</li>";
}

//Iterazione di un array semplice

const studenti = [
    "Pavlo",
    "Vito",
    "Alessio",
    "Anna Maria",
    "Clarissa",
    "Matteo",
    "Gabriele",
];

for (let i = 0; i < studenti.length; i++) {
    document.getElementById("elenco").innerHTML +=
        "<li>" + studenti[i] + "</li>";
}

// Iterazione di un array di oggetti

const utenti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 25,
        email: "mario@rossi.com",
    },
    {
        nome: "Aldo",
        cognome: "Bianchi",
        eta: 23,
        email: "aldo@bianchi.com",
    },
    {
        nome: "Maria",
        cognome: "Verdi",
        eta: 20,
        email: "maria@verdi.com",
    },
    {
        nome: "Giovanna",
        cognome: "Neri",
        eta: 32,
        email: "giovanna@neri.com",
    },
    {
        nome: "Nicola",
        cognome: "Gialli",
        eta: 28,
        email: "nicola@gialli.com",
    },
];

for (let i = 0; i < utenti.length; i++) {
    document.getElementById("elencoOggetti").innerHTML +=
        "<li>" +
        utenti[i].nome +
        " " +
        utenti[i].cognome +
        " ha " +
        utenti[i].eta +
        " anni e la mail è " +
        utenti[i].email +
        ".</li>";
}

// Creazione di una somma di elementi numerici
const numeri = [1, 8, 65, 23, 54, 12];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i]; // somma = somma + numeri[i]
    document.getElementById("somma").innerText = somma;
    if (somma >= 50) {
        document.getElementById("somma").innerHTML = " valore superiore a 50";
        break;
    }
}
