const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        console.log(src)
        script.src = src;
        document.head.append(script);
        script.onload = (event) => {
            resolve(script);
        }
        script.onerror = function() {
            script.remove()
            reject(new Error(`Error di caricamento dello script ${src}`));
        }
    })
}

let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/botstrap/5.3.3/js/bootstrap.min.js');

promise.then(
    script => console.log(`Lo script ${script.src} è stato trovato`),
    error => console.log(`Errore: ${error.message}`)
)