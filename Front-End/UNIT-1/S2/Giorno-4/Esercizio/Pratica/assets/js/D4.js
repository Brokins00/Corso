/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
// function area(l1, l2) {
//     return l1 * l2;
// }

area = (l1, l2) => {
    return l1 * l2
}
    
console.log("L'area del rettangolo è: "+area(11, 12)+" m^2");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
// function crazySum(numero1, numero2) {
//     if (numero1 === numero2) {
//         return (numero1 + numero2) * 3
//     } 
//     return (numero1 + numero2)
// }

crazySum = (numero1, numero2) => {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3
    } 
    return (numero1 + numero2)
}

console.log(crazySum(10, 10));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
// function crazyDiff(numero1) {
//     let risultato = Math.abs(numero1 - 19)
//     if (numero1 > 19) risultato *= 3;
//     return risultato
// }

crazyDiff = (numero1) => {
    let risultato = Math.abs(numero1 - 19)
    if (numero1 > 19) risultato *= 3;
    return risultato
}

console.log(crazyDiff(20))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

// function boundary(nInt) {
//     if ((nInt >= 20 && nInt <= 100) || nInt === 400) {
//         return true
//     }
//     return false
// }

boundary = (nInt) => {
    if ((nInt >= 20 && nInt <= 100) || nInt === 400) {
        return true
    }
    return false
}

console.log(boundary(400));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// function epify(stringa) {
//     let nuovaStringa = "EPICODE E' ONLINE";
//     if (nuovaStringa.indexOf(stringa) === 0) {
//         return nuovaStringa
//     }
//     return stringa + nuovaStringa;
// }

epify = (stringa = " ") => {
    if (stringa.indexOf("EPICODE") === 0) {
        return nuovaStringa
    }
    return "EPICODE" + stringa
}

console.log(epify("LA SCUOLA EPICODE E' ONLINE"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
// function check3and7(numero) {
//     if ((numero % 3 === 0) || (numero % 7 === 0)) {
//         return 'E\' un multiplo di 3 o 7'
//     }
//     return 'Non è un multiplo di 3 o 7';
// }

check3and7 = (numero) => {
    if ((numero % 3 === 0) || (numero % 7 === 0)) {
        return 'E\' un multiplo di 3 o 7'
    }
    return 'Non è un multiplo di 3 o 7';
}

console.log(check3and7(9))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa = "") {
    let nuovaStringa = stringa.split("");
    let nuovaStringa2 = "";
    for (let i=nuovaStringa.length - 1; 0 <= i; i--) {
        nuovaStringa2 += nuovaStringa[i];
    }
    return nuovaStringa2
}

console.log(reverseString('EPICODE'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
upperFirst = (stringa = "") => {
    stringa = stringa.split("");
    let nuovaStringa = "";
    let maiuscolo = false;
    for (let i = 0; i < stringa.length; i++) {
        if (maiuscolo) {
            if (stringa[i] == " ") {
                maiuscolo = false
            }
        } else {
            stringa[i] = stringa[i].toUpperCase();
            maiuscolo = true;
        }
        nuovaStringa += stringa[i]
    }
    return nuovaStringa
}

console.log(upperFirst("epicode è una scuola online"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

cutString = (stringa) => {
    stringa = stringa.split("");
    let newStringa = "";
    stringa.pop();
    stringa.shift();
    for (let i=0; i < stringa.length; i++) {
        newStringa += stringa[i];
    }
    return newStringa
}

console.log(cutString('Stringa da rimuovere ultima parola'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

giveMeRandom = (n) => {
    let array = [];
    for (let i=0; i < n; i++) {
        let random = Math.floor(Math.random() * 10)
        array.push(random);
    }
    return array
}

console.log(giveMeRandom(10));

/* SCRIVI QUI LA TUA RISPOSTA */
