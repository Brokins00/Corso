let votoEsame = 17;
let nome = "Mario";

document.getElementById("persona").innerHTML =
    nome + " ha preso " + votoEsame + " all'esame";

if (
    (nome === "Mario" && votoEsame < 18) ||
    (nome !== "Mario" && votoEsame >= 18)
) {
    document.getElementById("permesso").innerHTML = nome + " può entrare";
} else {
    document.getElementById("permesso").innerHTML = nome + " non può entrare";
}

const prodotti = [
    {
        nomeProd: 'monitor 24"',
        qty: 15,
        price: 120,
    },
    {
        nomeProd: 'monitor 27"',
        qty: 9,
        price: 200,
    },
    {
        nomeProd: 'monitor 17"',
        qty: 20,
        price: 90,
    }
]

let valutazione;

if (prodotti[0].price < 100) {
    valutazione = "economico";
} else if (prodotti[0].price < 150) {
    valutazione = "giusto";
} else {
    valutazione = "caro";
}

document.getElementById("prodotto1").innerHTML =
    "Il prodotto " +
    prodotti[0].nomeProd +
    ", giacenza pezzi " +
    prodotti[0].qty +
    " ha un prezzo " +
    valutazione;

if (prodotti[1].price < 100) {
    valutazione = "economico";
} else if (prodotti[1].price < 150) {
    valutazione = "giusto";
} else {
    valutazione = "caro";
}

document.getElementById("prodotto2").innerHTML =
    "Il prodotto " +
    prodotti[1].nomeProd +
    ", giacenza pezzi " +
    prodotti[1].qty +
    " ha un prezzo " +
    valutazione;

if (prodotti[2].price < 100) {
    valutazione = "economico";
} else if (prodotti[2].price < 150) {
    valutazione = "giusto";
} else {
    valutazione = "caro";
}

document.getElementById("prodotto3").innerHTML =
    "Il prodotto " +
    prodotti[2].nomeProd +
    ", giacenza pezzi " +
    prodotti[2].qty +
    " ha un prezzo " +
    valutazione;
