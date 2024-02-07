const form = document.getElementById('form');
const btnSubmit = document.getElementById('submit');
const task = document.getElementById('task');
const risultati = document.getElementById('risultati');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

let items = []

window.addEventListener('load', init())
function init() {
    if (localStorage.getItem('tasks')) {
        let newTask = localStorage.getItem('tasks').split(',')
        for (let i=0; i < newTask.length; i++) {
            popolaArray(newTask[i])
            items.push(newTask[i])
        }
    }
}

function creaElemento(tipo, classe, stile, attributo, innerHTML) {
    const item = document.createElement(tipo);
    if (classe) {
        item.classList += classe;
    }
    if (stile && stile.length > 0) {
        stile.forEach(element => {
            item.style[element.tipo] = element.valore;
        })
    }
    if (attributo && attributo.length > 0) {
        attributo.forEach(element => {
            item.setAttribute(element.tipo, element.valore)
        });
    }
    if (innerHTML) {
        item.innerHTML = innerHTML
    }
    return item
}

function popolaArray(valore) {
    const item = creaElemento('div', 'risultato');
    const i = creaElemento('i', 'fa-regular fa-square')
    const i2 = creaElemento('i', 'fa-regular fa-square-check', [{tipo: "display", valore: 'none'}])
    const p = creaElemento('p', null, null, [], `&nbsp;${valore}`)
    i.addEventListener('click', (e) => {
        e.preventDefault();
        i.style.display = 'none';
        i2.style.display = 'inline';
        p.style.textDecoration = 'line-through';
    })
    i2.addEventListener('click', (e) => {
        e.preventDefault();
        i2.style.display = 'none';
        i.style.display = 'inline';
        p.style.textDecoration = 'none'
    })
    const button = creaElemento('button', null, null, [{tipo: 'type', valore: 'button'}])
    const i3 = creaElemento('i', 'fa-solid fa-trash')
    button.appendChild(i3);
    button.addEventListener('click', function(e2) {
        e2.preventDefault();
        let indice = items.indexOf(valore)
        if (indice !== -1) {
            items.splice(indice, 1)
            localStorage.setItem('tasks', items)
        }
        item.remove();
    })
    item.append(i, i2, p, button);
    risultati.appendChild(item);
}

btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        popup.innerText = 'Per favore compila tutti i campi obbligatori.';
        return
    }

    let valore = task.value;

    const trovato = items.indexOf(valore)
    if (trovato !== -1) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        popup.innerText = 'Hai già scritto questo nella task list.';
        return
    }
    popolaArray(valore)
    items.push(valore);
    localStorage.setItem('tasks', items)
    form.reset()
})

overlay.addEventListener('click', function(e) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
})