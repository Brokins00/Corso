const oggi = new Date();
const annoAttuale = oggi.getFullYear();
const meseAttuale = oggi.getMonth();
const giornoAttuale = oggi.getDate();
const ultimoGiornoData = new Date(annoAttuale, meseAttuale + 1, 0)
const ultimoGiornoMese = ultimoGiornoData.getDate()
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const calendarioTabella = document.getElementById('calendario');
const listaEventi = document.getElementById('listaEventi');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
let eventiGiorno = []

const cercaEventiGiorno = (giorno) => {
    const eventi = eventiGiorno[giorno]
    const nessunRisultato = document.getElementById('nessun-risultato')
    listaEventi.innerHTML = '';
    if (eventi && eventi.length > 0) {
        nessunRisultato.style.display = 'none'
        for (let i=0; i < eventi.length; i++) {
            const li = document.createElement('li')
            li.innerText = eventi[i]
            listaEventi.appendChild(li)
        }
    } else {
        nessunRisultato.style.display = 'block'
    }
}

const iniziaCalendario = () => {
    const titoloCalendario = document.getElementById('meseCorrente')
    titoloCalendario.innerText = mesi[meseAttuale];
}

const nuovaSelezione = (i) => {
    const ultimoSelezionato = document.querySelector('.selected')
    ultimoSelezionato.classList.remove('selected')
    const div = document.getElementById(`giorno-${i}`)
    div.classList.add('selected');
    cercaEventiGiorno(i)
    document.getElementById('nuovoGiornoEvento').innerText = `${(i+1)} ${mesi[meseAttuale]} ${annoAttuale}`
    document.getElementById('nuovoGiornoEvento').setAttribute('data-giorno', i)
}

const formaCalendario = () => {
    for (let i = 0; i < ultimoGiornoMese; i++) {
        // eventiGiorno[i] = [{orario: "12:20", evento: "Test evento 1"}]
        eventiGiorno[i] = [];
        const div = document.createElement('div');
        div.classList.add('giorno')
        const span = document.createElement('span')
        div.setAttribute('id', `giorno-${i}`)
        div.setAttribute('data-giorno', i+1)
        if (giornoAttuale == (i+1)) {
            div.classList.add('oggi', 'selected')
            span.innerHTML = `${i+1}<br>OGGI`
        } else {
            span.innerText = i+1
        }
        div.addEventListener('click', function(e) {
            nuovaSelezione(i)
        })
        div.appendChild(span)
        calendarioTabella.appendChild(div)
    }
}

const inizializzaForm = () => {
    const form = document.getElementById('formEvento');
    const salva = document.getElementById('salva');
    const nuovoOrarioEvento = document.getElementById('nuovoOrarioEvento')
    const nuovoNomeEvento = document.getElementById('nuovoNomeEvento')
    const nuovoGiornoEvento = document.getElementById('nuovoGiornoEvento')
    salva.addEventListener('click', function(e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            popup.style.display = 'block';
            overlay.style.display = 'block';
            popup.innerText = 'Per favore compila tutti i campi obbligatori.';
            return
        }
        const giorno = nuovoGiornoEvento.getAttribute('data-giorno')
        console.log(giorno)
        eventiGiorno[giorno].push(`${nuovoOrarioEvento.value} - ${nuovoNomeEvento.value}`)
        // localStorage.setItem('eventi', eventiGiorno)
        cercaEventiGiorno(giorno)
        form.reset()
        nuovoGiornoEvento.innerText = 'Clicca su un giorno'
    })
}

const prendiCache = () => {
    // let item = localStorage.getItem('eventi')
    // if (item !== "null") {
    //     console.log(item)
    //     item = item.split(',')
    //     eventiGiorno = item
    // }
}

window.addEventListener('load', function() {
    iniziaCalendario();
    formaCalendario();
    prendiCache();
    inizializzaForm();
})

overlay.addEventListener('click', function(e) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
})