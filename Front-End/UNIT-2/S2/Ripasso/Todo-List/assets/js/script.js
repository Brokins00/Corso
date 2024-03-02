const todo = document.getElementById('todo')
const itemList = document.getElementById('itemList')
const oggettiLista = []

const createElement = (tipo, classList, attributi) => {
    const elemento = document.createElement(tipo)
    if (classList) {
        if (typeof classList == "object") {
            for (let i=0; i < classList.length; i++) {
                elemento.classList.add(classList[i])
            }
        } else if (typeof classList == "string") {
            elemento.classList.add(classList)
        }
    }
    if (attributi) {
        for (const [key, value] of Object.entries(attributi)) {
            switch (key) {
                case 'type':
                    elemento.type = value
                    break;
                case 'value':
                    elemento.value = value
                    break
                case 'id':
                    elemento.id = value
                    break
                case 'for':
                    elemento.setAttribute('for', value)
                    break
                case 'innerText':
                    elemento.innerText = value
                    break
            }
        }
    }
    return elemento
}

const aggiungiLista = (valore="") => {
    const id = oggettiLista.length + 1;
    oggettiLista.push(id);
    // const row = document.createElement('div')
    // row.classList.add('row')
    const row = createElement('div', 'row')
    // Colonna da 9 colonne
    // const col9 = document.createElement('div')
    // col9.classList.add('col-9', 'gx-2', 'd-flex', 'align-items-center')
    const col9 = createElement('div', ['col-9', 'gx-2', 'd-flex', 'align-items-center'])
    // Creazione form
    // const form = document.createElement('div')
    // form.classList.add('form-check')
    const form = createElement('div', 'form-check')
    // const input = document.createElement('input')
    // input.classList.add('form-check-input', 'border-secondary', 'bg-transparent', 'shadow-none')
    // input.type = 'checkbox'
    // input.value = ''
    // input.id = `item-${id}`
    const input = createElement('input',
        ['form-check-input', 'border-secondary', 'bg-transparent', 'shadow-none'],
        {
            type: 'checkbox',
            value: '',
            id: `item-${id}`
        }
    )
    // const label = document.createElement('label')
    // label.classList.add('form-check-label')
    // label.setAttribute('for', `item-${id}`)
    // label.innerText = valore;
    const label = createElement('label', 'form-check-label', {for: `item-${id}`, innerText: valore})
    input.addEventListener('change', function(){
        if (this.checked) {
            label.classList.add('text-decoration-line-through')
        } else {
            label.classList.remove('text-decoration-line-through')
        }
    })
    form.append(input, label)
    col9.appendChild(form)
    // Colonna da 3 colonne
    // const col3 = document.createElement('div')
    // col3.classList.add('col-3', 'gx-2')
    const col3 = createElement('div', ['col-3', 'gx-2'])
    // const button = document.createElement('button')
    // button.type = 'button'
    // button.classList.add('btn', 'btn-outline-danger', 'float-end')
    const button = createElement('button', ['btn', 'btn-outline-danger', 'float-end'], {type: 'button'})
    // const icon = document.createElement('i')
    // icon.classList.add('bi', 'bi-trash')
    const icon = createElement('i', ['bi', 'bi-trash'])
    button.appendChild(icon)
    button.addEventListener('click', function(e) {
        e.preventDefault();
        row.remove()
    })
    col3.appendChild(button)
    row.append(col9, col3)
    itemList.appendChild(row)
}

const resettaValore = () => {
    todo.value = '';
}

const gestisciBottone = () => {
    const bottone = document.getElementById('aggiungi')
    bottone.addEventListener('click', function(e) {
        e.preventDefault();
        let valore = todo.value
        if (valore.trim() !== '') {
            aggiungiLista(valore)
        }
        resettaValore()
    })
}

const init = () => {
    gestisciBottone()
}

window.addEventListener('load', init)