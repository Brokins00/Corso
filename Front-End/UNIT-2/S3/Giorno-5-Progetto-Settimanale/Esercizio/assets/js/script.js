let authorization = "";
let apiURL = ""

const list = document.getElementById('list')
const listError = document.getElementById('listError')
const caricamento = document.getElementById('caricamento')
const alertCustom = document.getElementById('alertCustom')

let products = []
let exampleProduct = {}

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertCustom.append(wrapper)
  }

const debug = async () => {
    try {
        let can = true;
        products.forEach((element) => {
            if (element.name == exampleProduct.name) {
                can = false
            }
        })
        if (can) {
            const request = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Authorization": authorization,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(exampleProduct)
            })
            if (request.ok) {
                window.location.href = "index.html";
            } else {
                console.log('Errore: '+request.status)
            }
        } else {
            console.log('Prodotto già esistente')
        }
    } catch (error) {
        console.log(error)
    }
}

const generateProducts = () => {
    products.forEach((element) => {
        const col = document.createElement('div')
        col.classList.add('col', 'my-2')
        col.innerHTML = `
        <div class="card">
            <img src="${element.imageUrl}" alt="${element.name}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <a href="back-office.html?id=${element._id}" class="btn btn-warning">Modifica</a>
                <a href="details.html?id=${element._id}" class="btn btn-info">Scopri di più</a>
            </div>
        </div>
        `;
        list.appendChild(col)
    })
}

const searchFetch = async () => {
    try {
        const request = await fetch(apiURL, {
            headers: {
                "Authorization": authorization
            }
        })
        if (request.ok) {
            const response = await request.json();
            caricamento.classList.add('d-none')
            if (response.length > 0) {
                products = response;
                generateProducts()
            } else {
                if (listError.classList.contains('d-none')) {
                    listError.classList.remove('d-none')
                }
                listError.innerText = 'Nessun Prodotto trovato'
            }
        } else {
            console.log('Errore: '+request.status)
            appendAlert('Errore nella ricerca prodotti, contatta l\'amministratore del sito', 'danger')
        }
    } catch (error) {
        console.log(error)
        appendAlert('Errore nella ricerca prodotti, contatta l\'amministratore del sito', 'danger')
    }
}

const getConfig = async () => {
    let config = await fetch('assets/data/config.json')
    config = await config.json();
    authorization = config.token;
    apiURL = config.apiURL;
    exampleProduct = config.exampleProduct;
}

const start = async () => {
    getConfig().then(() => {
        searchFetch()
    })
    let params = new URL(document.location).searchParams;
    let status = params.get('status')
    if (status) {
        switch(status) {
            case "success_edit":
                appendAlert('Prodotto modificato con successo', 'success')
                break;
            case "success_delete":
                appendAlert('Prodotto eliminato con successo', 'success')
                break;
            case "details_failure":
                appendAlert('Caricamento dettagli andato storto', 'danger')
                break;
            default:
                break;
        }
    }
}

const init = () => {
    start()
}

window.addEventListener('load', init)