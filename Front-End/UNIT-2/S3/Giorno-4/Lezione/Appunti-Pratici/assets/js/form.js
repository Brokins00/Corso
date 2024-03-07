const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const btnSubmit = document.getElementById('submit');
const form = document.getElementById('form');
const errore = document.getElementById('errore');
const vuoto = document.getElementById('vuoto');
const elenco = document.getElementById('elenco');
const dataURL = 'http://localhost:3000/elenco';
let lista = [];

window.addEventListener('load', init)

btnSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        errore.innerText = 'Devi compilare tutti i campi!'
        return
    }
    errore.innerText = ''
    try {
        const data = {
            nome: nome.value,
            cognome: cognome.value
        }
        const response = await fetch(dataURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        errore.innerText = 'Non è stato possibile aggiungere il record!'
        console.log(error)
    }
})

const deleteItem = async (id) => {
    errore.innerText = ''
    try {
        const response = await fetch(`${dataURL}/${id}`, {
            method: 'delete'
        })
    } catch (error) {
        errore.innerText = 'Non è stato possibile eliminare il record!'
        console.log(error)
    }
}

const printData = () => {
    errore.innerText = '';
    lista.forEach((element) => {
        const li = document.createElement('li');
        const btnElimina = document.createElement('button');
        btnElimina.classList.add('btn', 'btn-danger', 'nero');
        btnElimina.innerText = `X`;
        btnElimina.addEventListener('click', function(e) {
            e.preventDefault();
            deleteItem(element.id);
        });
        li.innerHTML = `${element.nome} ${element.cognome}&nbsp;&nbsp;`;
        li.appendChild(btnElimina);
        elenco.appendChild(li);
    })
}

const controlloLista = async () => {
    try {
        const response = await fetch(dataURL);
        const json = await response.json();
        lista = json;
        if (lista.length > 0) {
            printData();
        } else {
            errore.innerText = 'Nessun elemento presente'
        }
    } catch (error) {
        console.log(error);
        // location.href = '404.html';
    }
}

function init() {
    controlloLista()
}