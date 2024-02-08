const oggi = new Date();
const annoAttuale = oggi.getFullYear();
const meseAttuale = oggi.getMonth();
const giornoAttuale = oggi.getDate();
const ultimoGiornoData = new Date(annoAttuale, meseAttuale + 1, 0)
const ultimoGiornoMese = ultimoGiornoData.getDate()
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const calendarioTabella = document.getElementById('calendario');
const listaEventi = document.getElementById('listaEventi')
const eventiGiorno = []

const cercaEventiGiorno = (giorno) => {
    const eventi = eventiGiorno[giorno]
    const nessunRisultato = document.getElementById('nessun-risultato')
    listaEventi.innerHTML = '';
    if (eventi && eventi.length > 0) {
        nessunRisultato.style.display = 'none'
        for (let i=0; i < eventi.length; i++) {
            const li = document.createElement('li')
            li.innerText = `${eventi[i].orario} - ${eventi[i].evento}`
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


const formaCalendario = () => {
    for (let i = 0; i < ultimoGiornoMese; i++) {
        // eventiGiorno[i] = [{orario: "12:20", evento: "Test evento 1"}]
        eventiGiorno[i] = [];
        const div = document.createElement('div');
        div.classList.add('giorno')
        const span = document.createElement('span')
        span.setAttribute('id', `giorno-${i}`)
        span.setAttribute('data-giorno', i+1)
        if (giornoAttuale == (i+1)) {
            span.classList.add('oggi')
            span.innerHTML = `${i+1}<br>OGGI`
        } else {
            span.innerText = i+1
        }
        div.addEventListener('click', function(e) {
            cercaEventiGiorno(i)
            nuovaSelezione(i)
        })
        div.appendChild(span)
        calendarioTabella.appendChild(div)
    }
}

window.addEventListener('load', function() {
    iniziaCalendario();
    formaCalendario();
})