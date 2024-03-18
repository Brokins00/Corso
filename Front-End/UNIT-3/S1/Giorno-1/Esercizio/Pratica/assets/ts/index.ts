interface Smartphone {
	credito: number;
	numeroChiamate: number;
}

class User implements Smartphone {
	nome: (string | undefined);
	cognome: (string|undefined);
	credito: number = 0;
	numeroChiamate: number = 0;
	protected costoChiamata: number = 0.2;
	constructor(_nome: (string | undefined), _cognome: (string | undefined)) {
		this.nome = _nome;
		this.cognome = _cognome;
	}
	ricarica(ricarica: number): void {
		this.credito += ricarica;
	}
	chiamata(minuti: number): void {
		this.numeroChiamate += minuti;
		this.credito =
			Math.round((this.credito - minuti * this.costoChiamata) * 100) /
			100;
	}
	chiama404(): number {
		return this.credito;
	}
	getNumeroChiamata(): number {
		return this.numeroChiamate;
	}
	azzeraChiamate(): void {
		this.numeroChiamate = 0;
	}
	getNumMinutiMax(): number {
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

window.addEventListener('load', init)

function init() {
    let nome: string | number | null = prompt(
		'Nome',
		''
	);
	if (nome == null || nome == '') {
		nome = "Non definito";
	}

    let cognome: string | number | null = prompt(
		'Cognome',
		''
	);
	if (cognome == null || cognome == '') {
		cognome = "Non definito";
	}

    Io.nome = nome;
    Io.cognome = cognome;
    alert(`Benvenuto ${Io.nome} ${Io.cognome}, ecco il tuo telefono.`)
}

const input = document.getElementById('numero') as HTMLInputElement;
const uno = document.getElementById('uno') as HTMLButtonElement;
const due = document.getElementById('due') as HTMLButtonElement;
const tre = document.getElementById('tre') as HTMLButtonElement;
const quattro = document.getElementById('quattro') as HTMLButtonElement;
const cinque = document.getElementById('cinque') as HTMLButtonElement;
const sei = document.getElementById('sei') as HTMLButtonElement;
const sette = document.getElementById('sette') as HTMLButtonElement;
const otto = document.getElementById('otto') as HTMLButtonElement;
const nove = document.getElementById('nove') as HTMLButtonElement;
const zero = document.getElementById('zero') as HTMLButtonElement;
const cancella = document.getElementById('cancella') as HTMLButtonElement;
const chiama = document.getElementById('chiama') as HTMLButtonElement;
const riattacca = document.getElementById('riattacca') as HTMLButtonElement;
const tempoChiamata = document.getElementById(
	'tempoChiamata'
) as HTMLDivElement;
const credito = document.getElementById('credito') as HTMLSpanElement;
const minuti = document.getElementById('minuti') as HTMLSpanElement;
const ricarica = document.getElementById('ricarica') as HTMLButtonElement;

minuti.innerText = Io.getNumeroChiamata().toString();
credito.innerText = Io.chiama404().toString();

function toggleDnone() {
	if (input.value.length > 0) {
		cancella.classList.toggle('d-none', false);
	} else {
		cancella.classList.toggle('d-none', true);
	}
}

uno.addEventListener('click', function (e: MouseEvent) {
	input.value += '1';
	toggleDnone();
});
due.addEventListener('click', function (e: MouseEvent) {
	input.value += '2';
	toggleDnone();
});
tre.addEventListener('click', function (e: MouseEvent) {
	input.value += '3';
	toggleDnone();
});
quattro.addEventListener('click', function (e: MouseEvent) {
	input.value += '4';
	toggleDnone();
});
cinque.addEventListener('click', function (e: MouseEvent) {
	input.value += '5';
	toggleDnone();
});
sei.addEventListener('click', function (e: MouseEvent) {
	input.value += '6';
	toggleDnone();
});
sette.addEventListener('click', function (e: MouseEvent) {
	input.value += '7';
	toggleDnone();
});
otto.addEventListener('click', function (e: MouseEvent) {
	input.value += '8';
	toggleDnone();
});
nove.addEventListener('click', function (e: MouseEvent) {
	input.value += '9';
	toggleDnone();
});
zero.addEventListener('click', function (e: MouseEvent) {
	input.value += '0';
	toggleDnone();
});
cancella.addEventListener('click', function (e: MouseEvent) {
	let array = input.value.split('');
	array.pop();
	input.value = array.join('');
	toggleDnone();
});

function disabilitaPulsantiera(bool: boolean) {
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

let interval: number;
let count = 0;
let countMax = Io.getNumMinutiMax() * 60;

function fromSecondToTime(seconds: number): string {
	let minuti = Math.floor(seconds / 60);
	let secondi: number | string = seconds - minuti * 60;
	if (secondi < 10) {
		secondi = '0' + secondi;
	}
	return `${minuti}:${secondi}`;
}

chiama.addEventListener('click', function (e: MouseEvent) {
	if (input.value == '404') {
		input.value = '';
		alert('Il tuo credito residuo è: '+Io.chiama404())
	} else {
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
		} else {
			alert('Numero non valido');
			input.value = '';
		}
	}
});

riattacca.addEventListener('click', function (e: MouseEvent) {
	Io.chiamata(Math.floor(count / 60) + 1);
	clearInterval(interval);
	disabilitaPulsantiera(false);
	count = 0;
	tempoChiamata.innerText = '';
	input.value = '';
	minuti.innerText = Io.getNumeroChiamata().toString();
	credito.innerText = Io.chiama404().toString();
});

ricarica.addEventListener('click', function (e: MouseEvent) {
	let number: string | number | null = prompt(
		'Quanto vuoi ricaricare?',
		'10'
	);
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
