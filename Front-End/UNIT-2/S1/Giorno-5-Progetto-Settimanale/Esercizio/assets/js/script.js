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
    // const svgElement = document.getElementById('svgM');
    // const gElementsWithOpacityZero = svgElement.querySelectorAll('g > g[opacity="1"]');

    // let array = arrayNumerica(gElementsWithOpacityZero, 50)
    // let arrayInvisibile = []
    // let arrayRiempita = true;

    // setInterval(() => {
    //     if (array.length > 0 && arrayRiempita) {
    //         array[0].style.opacity = 0;
    //         arrayInvisibile.push(array.shift());
    //         if (array.length == 0) {
    //             arrayRiempita = false;
    //         }
    //     } else {
    //         arrayInvisibile[0].style.opacity = 1;
    //         array.push(arrayInvisibile.shift());
    //         if (array.length == 50) {
    //             array = arrayNumerica(gElementsWithOpacityZero, 50)
    //             arrayRiempita = true;
    //         }
    //     }
    // }, 100)
    const elements = document.querySelectorAll('g[stroke-linecap=butt]')
    setInterval(() => {
        let random = Math.floor(Math.random() * elements.length)
        if (elements[random].getAttribute('opacity') === "1") {
            elements[random].setAttribute('opacity', "0")
        } else {
            elements[random].setAttribute('opacity', "1")
        }
    }, 40)
})