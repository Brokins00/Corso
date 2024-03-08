let authorization = "";
let apiURL = "";

const img = document.getElementById('img');
const brand = document.getElementById('brand')
const product = document.getElementById('product');
const price = document.getElementById('price');
const description = document.getElementById('description')
const caricamento = document.getElementById('caricamento')

window.addEventListener('load', init)

const searchFetch = async (id) => {
    try {
        const request = await fetch(apiURL+id, {
            headers: {
                "Authorization": authorization
            }
        })
        const response = await request.json();
        caricamento.classList.add('d-none')
        img.src = response.imageUrl;
        img.setAttribute('alt', response.name)
        brand.innerText = response.brand;
        product.innerText = response.name;
        price.innerText = response.price+"€";
        description.innerText = response.description
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
    let params = new URL(document.location).searchParams;
    let id = params.get('id')
    if (id) {
        searchFetch(id)
    } else {
        window.location.href = 'index.html?status=details_failure'
    }
}