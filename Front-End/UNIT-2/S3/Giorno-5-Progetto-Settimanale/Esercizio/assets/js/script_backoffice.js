let authorization;
let apiURL;
let products = []

const formAdd = document.querySelector('#addProduct form');
const addProd = document.querySelector('#addProduct')
const nameAdd = document.querySelector('#addProduct #name')
const brandAdd = document.querySelector('#addProduct #brand')
const priceAdd = document.querySelector('#addProduct #price')
const urlImgAdd = document.querySelector('#addProduct #urlImage')
const descAdd = document.querySelector('#addProduct #description')
const saveAdd = document.querySelector('#addProduct #save');

const formEdit = document.querySelector('#editProduct form');
const editProduct = document.querySelector('#editProduct')
const nameEdit = document.querySelector('#editProduct #name')
const brandEdit = document.querySelector('#editProduct #brand')
const priceEdit = document.querySelector('#editProduct #price')
const urlImgEdit = document.querySelector('#editProduct #urlImage')
const descEdit = document.querySelector('#editProduct #description')
const saveEdit = document.querySelector('#editProduct #save');
const deleteEdit = document.querySelector('#editProduct #delete')

const alertCustom = document.getElementById('alertCustom')

window.addEventListener('load', init)

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

  const reset = () => {
    formAdd.reset();
    formEdit.reset();
  }

saveAdd.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!formAdd.checkValidity()) {
        appendAlert('Devi compilare tutti i campi obbligatori', 'danger')
        return;
    }
    try {
        const name = nameAdd.value;
        const brand = brandAdd.value;
        const price = parseInt(priceAdd.value);
        const urlImg = urlImgAdd.value;
        const desc = descAdd.value;
        const product = {
            name: name,
            brand: brand,
            price: price,
            imageUrl: urlImg,
            description: desc
        }
        let exist = false;
        products.forEach((element) => {
            if (element.name === product.name) {
                exist = true
            }
        })
        if (exist) {
            reset()
            appendAlert('Esiste già un oggetto con lo stesso nome', 'warning')
            return;
        }
        let image = new Image();
        image.src = urlImg;
        image.onload = async function() {
            const request = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Authorization": authorization,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            if (request.ok) {
                window.location.href = 'index.html';
            } else {
                reset();
                appendAlert('Non è stato possibile caricare il prodotto', 'danger')
                console.log('errore', request.status)
            }
        }
        image.onerror = function() {
            appendAlert('URL non esistente, inserire un URL valido', 'danger')
        }
    } catch (error) {
        console.log(error)
    }
})

saveEdit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!formEdit.checkValidity()) {
        appendAlert('Devi compilare tutti i campi obbligatori', 'danger')
        return;
    }
    try {
        const name = nameEdit.value;
        const brand = brandEdit.value;
        const price = parseInt(priceEdit.value);
        const urlImg = urlImgEdit.value;
        const desc = descEdit.value;
        const product = {
            name: name,
            brand: brand,
            price: price,
            imageUrl: urlImg,
            description: desc
        }
        // let exist = false;
        // products.forEach((element) => {
        //     if (element.name === product.name) {
        //         exist = true
        //     }
        // })
        // if (exist) {
        //     appendAlert('Esiste già un oggetto con lo stesso nome', 'warning')
        //     return;
        // }
        let image = new Image();
        image.src = urlImg;
        image.onload = async function() {
            const request = await fetch(apiURL+deleteEdit.getAttribute('data-id'), {
                method: "PUT",
                headers: {
                    "Authorization": authorization,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            if (request.ok) {
                window.location.href = 'index.html?status=success_edit';
            } else {
                appendAlert('Non è stato possibile modificare il prodotto', 'warning')
                console.log('errore', request.status)
            }
        }
        image.onerror = function() {
            appendAlert('URL non esistente, inserire un URL valido', 'danger')
        }
    } catch (error) {
        console.log(error)
    }
})

deleteEdit.addEventListener('click', async function(e) {
    e.preventDefault();
    let conferma = confirm('Sei sicuro di voler eliminare questo prodotto?')
    if (conferma) {
        let conferma2 = confirm('Sei sicuro sicuro? L\'azione è irreversibile')
        if (conferma2) {
            let conferma3 = confirm('Dopo questa conferma non si torna indietro, è l\'ultima possibilità per non eliminare il prodotto')
            if (conferma3) {
                try {
                    const request = await fetch(apiURL+this.getAttribute('data-id'), {
                        method: "DELETE",
                        headers: {
                            "Authorization": authorization
                        }
                    })
                    if (request.ok) {
                        caricamento.classList.remove('d-none')
                        setTimeout(() => {
                            window.location.href = 'index.html?status=success_delete';
                        }, 2000)
                    } else {
                        appendAlert('Non è stato possibile eliminare il prodotto', 'danger')
                        console.log('errore', request.status)
                    }
                } catch (error) {
                    console.log(error)
                }
                return
            }
        }
    }
    
})

const addProduct = () => {
    if (!editProduct.classList.contains('d-none')) {
        editProduct.classList.add('d-none')
    }
    if (addProd.classList.contains('d-none')) {
        addProd.classList.remove('d-none')
    }
    caricamento.classList.add('d-none')
}

const editProd = (id) => {
    if (editProduct.classList.contains('d-none')) {
        editProduct.classList.remove('d-none')
    }
    if (!addProd.classList.contains('d-none')) {
        addProd.classList.add('d-none')
    }
    let product;
    products.forEach((element) => {
        if (element._id == id) {
            product = element
        }
    })
    if (product) {
        caricamento.classList.add('d-none')
        nameEdit.value = product.name
        brandEdit.value = product.brand;
        priceEdit.value = product.price;
        urlImgEdit.value = product.imageUrl;
        descEdit.value = product.description;
        deleteEdit.setAttribute('data-id', id)
    }
}

const searchFetch = async () => {
    try {
        const request = await fetch(apiURL, {
            headers: {
                "Authorization": authorization
            }
        })
        const response = await request.json();
        if (response.length > 0) {
            products = response;
        }
    } catch (error) {
        console.log(error)
    }
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
    let id = params.get('id')
    if (id) {
        editProd(id)
    } else {
        addProduct()
    }
}