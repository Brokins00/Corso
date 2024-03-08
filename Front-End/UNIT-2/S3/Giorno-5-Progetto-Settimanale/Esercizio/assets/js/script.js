let authorization = "";
let apiURL = ""

const list = document.getElementById('list')
const listError = document.getElementById('listError')
const caricamento = document.getElementById('caricamento')

let products = []

const firstProduct = {
    "name": "Alienware X17 R2",
    "brand": "Dell",
    "imageUrl": "https://i.dell.com/sites/csimages/Product_Imagery/all/fp-aw-laptops-hero-a-1920x1440-v2.png",
    "price": 2700,
    "description": "Display da 17,3 pollici; FHD (1920 x 1080) a 165Hz 3ms o 360Hz 1ms; 4K (3840x 2160) a 120Hz 4ms\nCPU: Intel i7-12700H o i9-12900HK\nGPU: fino a Nvidia GeForce RTX 3080 Ti\nMemoria: fino a 64 GB DDR5, 4800 MHz\nMemoria: 512GB-4TB M.2, PCIe NVMe a stato solido"
}

window.addEventListener('load', init)

const debug = async () => {
    try {
        let can = true;
        products.forEach((element) => {
            if (element.name == firstProduct.name) {
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
                body: JSON.stringify(firstProduct)
            })
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
    } catch (error) {
        console.log(error)
    }
}

const alertCustom = document.getElementById('alertCustom')

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

function init() {
    start()
}

async function start() {
    let config = await fetch('assets/data/config.json')
    config = await config.json();
    authorization = config.token;
    apiURL = config.apiURL;
    await searchFetch()
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