let authorization;
let apiURL;

const img = document.getElementById('img');
const brand = document.getElementById('brand')
const product = document.getElementById('product');
const price = document.getElementById('price');
const description = document.getElementById('description')
const caricamento = document.getElementById('caricamento')

const searchFetch = async (id) => {
    try {
        const request = await fetch(apiURL+id, {
            headers: {
                "Authorization": authorization
            }
        })
        if (request.ok) {
            const response = await request.json();
            caricamento.classList.add('d-none')
            img.src = response.imageUrl;
            img.setAttribute('alt', response.name)
            brand.innerText = response.brand;
            product.innerText = response.name;
            price.innerText = response.price+"€";
            description.innerText = response.description
        } else {
            console.log('Errore: '+request.status)
            window.location.href = 'index.html?status=details_failure'
        }
    } catch (error) {
        console.log(error)
        window.location.href = 'index.html?status=details_failure'
    }
}

const getConfig = async () => {
    let config = await fetch('assets/data/config.json')
    config = await config.json();
    authorization = config.token;
    apiURL = config.apiURL;
}

const start = async () => {
    getConfig().then(() => {
        let params = new URL(document.location).searchParams;
        let id = params.get('id')
        if (id) {
            searchFetch(id)
        } else {
            window.location.href = 'index.html?status=details_failure'
        }
    })
}

const init = () => {
    start()
}

window.addEventListener('load', init)