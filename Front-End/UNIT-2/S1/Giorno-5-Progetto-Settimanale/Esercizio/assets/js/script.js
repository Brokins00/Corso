window.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('header')[0]
    const content = document.getElementById('trending')
    const bottone = document.getElementById('bottone')

    const headerHeight = header.offsetHeight;
    const contentTop = content.getBoundingClientRect().top

    if (contentTop <= headerHeight) {
        header.classList.add('scrolled')
        bottone.classList.add('bottone_cambiato')
    } else {
        header.classList.remove('scrolled')
        bottone.classList.remove('bottone_cambiato')
    }
})

const arrayNumerica = (elemento, qtty, array) => {
    let arrayNew = [];
    for (let i=0; i < qtty; i++) {
        let random = Math.floor(Math.random() * elemento.length)
        arrayNew.push(elemento[random])
    }
    return arrayNew
}

window.addEventListener('load', function(e) {
    const elements = document.querySelectorAll('g[stroke-linecap=butt]')
    setInterval(() => {
        let random = Math.floor(Math.random() * elements.length)
        if (elements[random].getAttribute('opacity') === "1") {
            elements[random].setAttribute('opacity', "0")
        } else {
            elements[random].setAttribute('opacity', "1")
        }
    }, 100)
})