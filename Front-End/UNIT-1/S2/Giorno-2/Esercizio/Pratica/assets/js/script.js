/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("--------------------");
console.log("ESERCIZIO 1");
console.log(
    "Scrivi un algoritmo per trovare il più grande tra due numeri interi."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 23;
let numero2 = 10;

if (numero1 > numero2) {
    console.log(numero1 + " è il più grande tra " + numero1 + " e " + numero2);
} else {
    console.log(numero2 + " è il più grande tra " + numero1 + " e " + numero2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("--------------------");
console.log("ESERCIZIO 2");
console.log(
    'Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroInt = 10;
if (numeroInt !== 5) {
    console.log("Il numero fornito " + numeroInt + " non è uguale a 5");
} else {
    console.log("Il numero fornito " + numeroInt + " è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("--------------------");
console.log("ESERCIZIO 3");
console.log(
    'Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l\'operatore modulo)'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numDiv = 60;
let resto = numDiv % 5;

if (resto === 0) {
    console.log("Il numero " + numDiv + " è divisibile per 5");
} else {
    console.log("Il numero " + numDiv + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("--------------------");
console.log("ESERCIZIO 4");
console.log(
    "Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8"
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 9;
let num2 = 8;
if (num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8) {
    console.log(
        "Dati i numeri " +
            num1 +
            " e " +
            num2 +
            ", uno dei due oppure la loro addizione/sottrazione è uguale a 8"
    );
} else {
    console.log(
        "Dati i numeri " +
            num1 +
            " e " +
            num2 +
            ", uno dei due oppure la loro addizione/sottrazione NON è uguale a 8"
    );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("--------------------");
console.log("ESERCIZIO 5");
console.log(
    'Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell\'utente in una variabile "totalShoppingCart".'
);
console.log(
    "C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10)."
);
console.log(
    "Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 0;
let variabile = "Aggiunto ";
let spedizione = 10;
let carrello = [
    {
        nome: "Vestito di carnevale",
        qty: 2,
        prezzo: 10, //8
    },
    {
        nome: "Elettrodomestico",
        qty: 1,
        prezzo: 30, //26
    },
    {
        nome: "Merendine",
        qty: 5,
        prezzo: 1, //0.8
    },
];
if (carrello[0].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[0].qty + " " + carrello[0].nome + " al carrello"
);
totalShoppingCart += carrello[0].prezzo * carrello[0].qty;
if (carrello[1].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[1].qty + " " + carrello[1].nome + " al carrello"
);
totalShoppingCart += carrello[1].prezzo * carrello[1].qty;
if (carrello[2].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[2].qty + " " + carrello[2].nome + " al carrello"
);
totalShoppingCart += carrello[2].prezzo * carrello[2].qty;
if (totalShoppingCart > 50) {
    spedizione = 0;
}
console.log("Sub-Totale: " + totalShoppingCart + " €");
console.log("Spedizione: " + spedizione + " €");
console.log("Totale: " + (totalShoppingCart + spedizione) + " €");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("--------------------");
console.log("ESERCIZIO 6");
console.log(
    "Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto."
);
console.log(
    "Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale"
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let sconto = 0.8;
carrello[0].prezzo *= sconto;
carrello[1].prezzo *= sconto;
carrello[2].prezzo *= sconto;

totalShoppingCart = 0;
spedizione = 10;

if (carrello[0].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[0].qty + " " + carrello[0].nome + " al carrello"
);
totalShoppingCart += carrello[0].prezzo * carrello[0].qty;
if (carrello[1].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[1].qty + " " + carrello[1].nome + " al carrello"
);
totalShoppingCart += carrello[1].prezzo * carrello[1].qty;
if (carrello[2].qty > 1) {
    variabile = "Aggiunti ";
} else {
    variabile = "Aggiunto ";
}
console.log(
    variabile + carrello[2].qty + " " + carrello[2].nome + " al carrello"
);
totalShoppingCart += carrello[2].prezzo * carrello[2].qty;
if (totalShoppingCart > 50) {
    spedizione = 0;
}
console.log("Sub-Totale: " + totalShoppingCart + " €");
console.log("Spedizione: " + spedizione + " €");
console.log("Totale: " + (totalShoppingCart + spedizione) + " €");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("--------------------");
console.log("ESERCIZIO 7");
console.log(
    "Crea tre variabili, e assegna un valore numerico a ciascuna di esse."
);
console.log(
    "Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso."
);
console.log("Alla fine mostra il risultato in console.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 20;
let var2 = 10;
let var3 = 30;

let primo;
let secondo;
let terzo;

if (var1 >= var2 && var1 >= var3) {
    primo = var1;
    if (var2 >= var3) {
        secondo = var2;
        terzo = var3;
    } else {
        secondo = var3;
        terzo = var2;
    }
} else if (var2 >= var1 && var2 >= var3) {
    primo = var2;
    if (var1 >= var3) {
        secondo = var1;
        terzo = var3;
    } else {
        secondo = var3;
        terzo = var1;
    }
} else {
    primo = var3;
    if (var1 >= var2) {
        secondo = var1;
        terzo = var2;
    } else {
        secondo = var2;
        terzo = var1;
    }
}

console.log(
    "Dati i numeri nel seguente ordine: " + var1 + ", " + var2 + ", " + var3
);
console.log(
    "Sono riordinati nel seguente modo: " +
        primo +
        ", " +
        secondo +
        ", " +
        terzo
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("--------------------");
console.log("ESERCIZIO 8");
console.log(
    'Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numType = 10;

if (typeof numType == "number") {
    console.log("Il dato fornito è un numero");
} else {
    console.log("Il dato fornito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("--------------------");
console.log("ESERCIZIO 9");
console.log(
    "Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)"
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let numParDisp = 22;
let restoParDisp = numParDisp % 2;
if (restoParDisp == 0) {
    console.log("Il numero fornito " + numParDisp + " è PARI");
} else {
    console.log("Il numero fornito " + numParDisp + " è DISPARI");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log("--------------------");
console.log("ESERCIZIO 10");
console.log(
    "Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("--------------------");
console.log("ESERCIZIO 11");
console.log(
    'Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".'
);
console.log("");

const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
console.log("--------------------");
console.log("ESERCIZIO 12");
console.log(
    'Lavorando sempre sull\'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".'
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);
/* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
console.log("--------------------");
console.log("ESERCIZIO 13");
console.log(
    "Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà \"skills\"."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
console.log("--------------------");
console.log("ESERCIZIO 14");
console.log(
    "Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;
console.log(array);

/* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
console.log("--------------------");
console.log("ESERCIZIO 15");
console.log(
    "Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100."
);
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
array[array.length - 1] = 100;
console.log(array);
console.log("--------------------");
