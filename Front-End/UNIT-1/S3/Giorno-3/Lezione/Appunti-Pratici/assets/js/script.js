const form = document.getElementById("form");
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telefono = document.getElementById("telefono");
const eta = document.getElementById("eta");
const btnSubmit = document.getElementById("invia");
const errore = document.getElementById('errore');
const divGrazie = document.getElementById('grazie')
let validCognome = false;
let validPassword = false;
let validEmail = false;
let validTelefono = false;

const persona = {
    nome: "",
    cognome: "",
    email: "",
    password: "",
    telefono: "",
    eta: 0,
};

// RegExp di verifica
const regexCognome = /^[a-zA-ZÀ-ÿ' ]+$/ //!Cercato su chat GPT essendo molto specifico su quello che volevo
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //!Cercato su chat GPT essendo molto specifico su quello che volevo
const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&?]).{8,20}$/ //!Cercato su chat GPT essendo molto specifico su quello che volevo

window.addEventListener("load", init()); // Quando la schermata viene caricata, esegue la funzione init()

function verifica() { // Verifica che i campi che abbiamo messo come obbligatori siamo tutti validi, se non è valido anche solo 1, lo disabilita
    if (!validCognome || !validPassword || !validEmail || !validTelefono) {
        btnSubmit.setAttribute("disabled", true);
    } else {
        btnSubmit.removeAttribute("disabled");
    }
}

function init() { // Quando viene chiamato, esegue la funzione verifica()
    verifica()
}

//! IMPORTANTE, se si lascia il focus del campo, deve stampare SEMPRE che non si può lasciare il campo vuoto
cognome.addEventListener("blur", function (e) { // quando viene lasciato il focus dell'elemento cognome, controlla la validità
    valid = false;
    if (cognome.value == "") {
        errore.innerText = 'Il campo cognome è obbligatorio'; // Inserisce in un elemento il testo indicato
    }  else if(!regexCognome.test(cognome.value)) { // controllo tramite regexp
        errore.innerText = 'Il cognome non può contenere caratteri speciali e/o numeri'; // Inserisce in un elemento il testo indicato
    } else {
        errore.innerText = '' // Resetta l'elemento indicato
        validCognome = true; // Rende valida la variabile di controllo
        verifica() // effettua il controllo su tutte le variabili di controllo
    }
});

telefono.addEventListener("blur", function (e) {
    valid = false;
    if (telefono.value == "") {
        errore.innerText = 'Il campo telefono è obbligatorio';
    } else if (isNaN(telefono.value)) { // isNotANumber -> usato per vedere se un valore fornito non è un numero
        errore.innerText = 'Il numero di telefono deve essere composto da soli numeri';
    } else {
        telefono.innerText = ''
        validTelefono = true;
        verifica()
    }
});

email.addEventListener('blur', function(e) {
    valid = false;
    if (email.value == "") {
        errore.innerText = 'Il campo email è obbligatorio';
    } else if(!regexEmail.test(email.value)) {
        errore.innerText = 'Inserisci una email valida';
    } else {
        errore.innerText = ''
        validEmail = true;
        verifica()
    }
})

password.addEventListener('blur', function(e) {
    valid = false;
    if (password.value == "") {
        errore.innerText = 'Il campo password è obbligatorio';
    } else if(!regexPassword.test(password.value)) {
        errore.innerText = 'Inserisci una password tra 8 e 20 caratteri, che contega almeno una lettera maiuscola, almeno una lettera minuscola, almeno un numero e almeno un carattere tra !@#$%&?';
    } else {
        errore.innerText = ''
        validPassword = true;
        verifica()
    }
})

btnSubmit.addEventListener('click', (e) => { // evento che si verifica quando si clicca sul bottone INVIA
    e.preventDefault(); // previene il funzionamento default del bottone
    // Dichiariamo i valori presi dagli input del form
    let nomeForm = nome.value;
    let cognomeForm = cognome.value;
    let emailForm = email.value;
    let passForm = password.value;
    let etaForm = eta.value;
    let telefonoForm = telefono.value;

    // Associamo i valori dichiarati sopra alle corrispondenti variabili all'interno dell'oggetto persona
    persona.nome = nomeForm;
    persona.cognome = cognomeForm;
    persona.email = emailForm;
    persona.password = passForm;
    if (etaForm > 0) {
        persona.eta = etaForm
    }
    persona.telefono = telefonoForm
    
    for (const key in persona) {
        console.log(key)
        document.getElementById(key+'Form').innerText = persona[key]
    }

    form.reset()
})