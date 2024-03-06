const showPage = (page) => {
    document.getElementById('pagina').innerHTML = page
}

let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', 'include.html');
    request.onload = function() {
        if (request.status == 200) {
            resolve(request.response);
        } else {
            reject(`<h3>Errore ${request.status}</h3>`)
        }
    }
    request.send();
})

promise.then(
    function(value) {
        showPage(value);
    },
    function(error) {
        showPage(error);
    }
)