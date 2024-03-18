"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoChiamata = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(ricarica) {
        this.credito += ricarica;
    }
    chiamata(minuti) {
        this.numeroChiamate += minuti;
        this.credito =
            Math.round((this.credito - minuti * this.costoChiamata) * 100) /
                100;
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    getNumMinutiMax() {
        let minuti = this.credito / this.costoChiamata;
        return minuti;
    }
}
const Io = new User(undefined, undefined);
// console.log('Utente creato: '+Io.nome+' '+Io.cognome)
// console.log('Credito iniziale: '+Io.chiama404())
// console.log('Minuti iniziali consumati: '+Io.getNumeroChiamata())
// Io.ricarica(10);
// console.log('Ricarica di 10 euro effettuata')
// console.log('Nuovo saldo: '+Io.chiama404())
// Io.chiamata(3);
// console.log('Chiamata effettuata. Minuti consumati: '+Io.getNumeroChiamata())
// console.log('Nuovo credito: '+Io.chiama404());
window.addEventListener('load', init);
function init() {
    let nome = prompt('Nome', '');
    if (nome == null || nome == '') {
        nome = "Non definito";
    }
    let cognome = prompt('Cognome', '');
    if (cognome == null || cognome == '') {
        cognome = "Non definito";
    }
    Io.nome = nome;
    Io.cognome = cognome;
    alert(`Benvenuto ${Io.nome} ${Io.cognome}, ecco il tuo telefono.`);
}
const input = document.getElementById('numero');
const uno = document.getElementById('uno');
const due = document.getElementById('due');
const tre = document.getElementById('tre');
const quattro = document.getElementById('quattro');
const cinque = document.getElementById('cinque');
const sei = document.getElementById('sei');
const sette = document.getElementById('sette');
const otto = document.getElementById('otto');
const nove = document.getElementById('nove');
const zero = document.getElementById('zero');
const cancella = document.getElementById('cancella');
const chiama = document.getElementById('chiama');
const riattacca = document.getElementById('riattacca');
const tempoChiamata = document.getElementById('tempoChiamata');
const credito = document.getElementById('credito');
const minuti = document.getElementById('minuti');
const ricarica = document.getElementById('ricarica');
minuti.innerText = Io.getNumeroChiamata().toString();
credito.innerText = Io.chiama404().toString();
function toggleDnone() {
    if (input.value.length > 0) {
        cancella.classList.toggle('d-none', false);
    }
    else {
        cancella.classList.toggle('d-none', true);
    }
}
uno.addEventListener('click', function (e) {
    input.value += '1';
    toggleDnone();
});
due.addEventListener('click', function (e) {
    input.value += '2';
    toggleDnone();
});
tre.addEventListener('click', function (e) {
    input.value += '3';
    toggleDnone();
});
quattro.addEventListener('click', function (e) {
    input.value += '4';
    toggleDnone();
});
cinque.addEventListener('click', function (e) {
    input.value += '5';
    toggleDnone();
});
sei.addEventListener('click', function (e) {
    input.value += '6';
    toggleDnone();
});
sette.addEventListener('click', function (e) {
    input.value += '7';
    toggleDnone();
});
otto.addEventListener('click', function (e) {
    input.value += '8';
    toggleDnone();
});
nove.addEventListener('click', function (e) {
    input.value += '9';
    toggleDnone();
});
zero.addEventListener('click', function (e) {
    input.value += '0';
    toggleDnone();
});
cancella.addEventListener('click', function (e) {
    let array = input.value.split('');
    array.pop();
    input.value = array.join('');
    toggleDnone();
});
function disabilitaPulsantiera(bool) {
    uno.disabled = bool;
    due.disabled = bool;
    tre.disabled = bool;
    quattro.disabled = bool;
    cinque.disabled = bool;
    sei.disabled = bool;
    sette.disabled = bool;
    otto.disabled = bool;
    nove.disabled = bool;
    zero.disabled = bool;
    cancella.disabled = bool;
    tempoChiamata.classList.toggle('d-none', !bool);
    riattacca.classList.toggle('d-none', !bool);
    chiama.classList.toggle('d-none', bool);
}
let interval;
let count = 0;
let countMax = Io.getNumMinutiMax() * 60;
function fromSecondToTime(seconds) {
    let minuti = Math.floor(seconds / 60);
    let secondi = seconds - minuti * 60;
    if (secondi < 10) {
        secondi = '0' + secondi;
    }
    return `${minuti}:${secondi}`;
}
chiama.addEventListener('click', function (e) {
    if (input.value == '404') {
        input.value = '';
        alert('Il tuo credito residuo è: ' + Io.chiama404());
    }
    else {
        if (input.value.length <= 11 && input.value.length >= 9) {
            countMax = Io.getNumMinutiMax() * 60;
            if (countMax == 0) {
                alert('Non hai credito');
                return;
            }
            disabilitaPulsantiera(true);
            interval = setInterval(function () {
                count++;
                tempoChiamata.innerText = fromSecondToTime(count);
                if (count >= countMax) {
                    Io.chiamata(Math.floor(count / 60) + 1);
                    clearInterval(interval);
                    disabilitaPulsantiera(false);
                    count = 0;
                    tempoChiamata.innerText = '';
                    input.value = '';
                    minuti.innerText = Io.getNumeroChiamata().toString();
                    credito.innerText = Io.chiama404().toString();
                }
            }, 1000);
        }
        else {
            alert('Numero non valido');
            input.value = '';
        }
    }
});
riattacca.addEventListener('click', function (e) {
    Io.chiamata(Math.floor(count / 60) + 1);
    clearInterval(interval);
    disabilitaPulsantiera(false);
    count = 0;
    tempoChiamata.innerText = '';
    input.value = '';
    minuti.innerText = Io.getNumeroChiamata().toString();
    credito.innerText = Io.chiama404().toString();
});
ricarica.addEventListener('click', function (e) {
    let number = prompt('Quanto vuoi ricaricare?', '10');
    if (number == null || number == '') {
        number = 0;
    }
    if (typeof number == 'string') {
        number = parseInt(number);
    }
    if (number > 0) {
        Io.ricarica(number);
        credito.innerText = Io.chiama404().toString();
    }
});
