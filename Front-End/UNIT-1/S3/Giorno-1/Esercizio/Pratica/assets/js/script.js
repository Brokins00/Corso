/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const titolo = document.querySelector('h1');
const changeTitle = function () {
    titolo.innerText = "EPICODE FS0124-A";
};
changeTitle();

/* ESERCIZIO 2
            Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
         */

const addClassToTitle = function () {
    // titolo.className = 'myHeading';
    // titolo.setAttribute('class', 'myHeading')
    titolo.classList.add('myHeading')
};
addClassToTitle()

/* ESERCIZIO 3
            Scrivi una funzione che cambi il testo dei p figli di un div
           */

const changePcontent = function () {
    const selettore = document.querySelectorAll('div p')
    for (let i=0; i < selettore.length; i++) {
        selettore[i].innerText = 'Ho cambiato tutti i p figli di div';
    }
};
changePcontent();

/* ESERCIZIO 4
            Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
           */

const changeUrls = function () {
    // const links = document.querySelectorAll('a');
    // for (let i=0; i < links.length; i++) {
    //     const footer = links[i].closest('footer');
    //     if (!footer) {
    //         links[i].href = 'https://www.google.com/'
    //     }
    // }
    const links = document.querySelectorAll('a:not(footer a)');
    for (let i=0; i < links.length; i++) {
        links[i].href = 'https://www.google.com/'
    }
};

changeUrls();

/* ESERCIZIO 5
            Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
         */

const addToTheSecond = function () {
    // document.getElementById('secondList').innerHTML += '<li>Testo aggiunto</li>';
    const li = document.createElement('li');
    li.innerText = 'Testo aggiunto';
    document.getElementById('secondList').appendChild(li);
};
addToTheSecond()

/* ESERCIZIO 6
            Scrivi una funzione che aggiunga un paragrafo al primo div
         */

const addParagraph = function () {
    const p = document.createElement('p');
    p.innerText = 'Questo è un paragrafo';
    // document.getElementsByTagName('div')[0].appendChild(p);
    // document.querySelector('div').appendChild(p);
    // document.querySelector('div').innerHTML += '<p>Questo è un paragrafo</p>';
    document.querySelectorAll('div')[0].appendChild(p);
};

addParagraph()

/* ESERCIZIO 7
            Scrivi una funzione che faccia scomparire la prima lista non ordinata
         */

const hideFirstUl = function () {
    document.getElementById('firstList').setAttribute('style', 'display: none')
    // document.getElementById('firstList').style.display = 'none';
    // document.getElementById('firstList').innerHTML = '';
    // document.getElementById('firstList').remove();
};
// hideFirstUl()

/* ESERCIZIO 8 
    Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    const ul = document.querySelectorAll('ul')
    for (let i=0; i < ul.length; i++) {
        ul[i].setAttribute('style', 'background-color: green')
        // ul[i].style.backgroundColor = 'green';
    }
};

paintItGreen()

/* ESERCIZIO 9
            Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
           */

const makeItClickable = function () {
    // const h1 = document.getElementsByTagName('h1')[0]
    // h1.addEventListener('click', function(e) {
    // titolo.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     titolo.textContent = titolo.textContent.slice(0, -1)
    // })
    titolo.style.cursor = 'pointer';
    titolo.addEventListener('click', function() {
        let scritta = titolo.innerText.split("");
        scritta.pop();
        scritta = scritta.join("");
        titolo.innerText = scritta
    })
};

makeItClickable()

/* ESERCIZIO 10
            Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
           */

const revealFooterLink = function () {
    const footer = document.querySelector('footer')
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', function(e) {
        e.preventDefault();
        let linkFooter = document.querySelector('footer a');
        alert(linkFooter.getAttribute('href'))
    })
};

revealFooterLink()

/* ESERCIZIO 11
            Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
            La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
         */

const generateTable = function () {
    const div = document.getElementById('tableArea');
    const prodotti = [
        {
            immagine: 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg',
            nomeprodotto: 'Prodotto 1',
            quantity: 15,
            prezzo: 10
        },
        {
            immagine: 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg',
            nomeprodotto: 'Prodotto 2',
            quantity: 25,
            prezzo: 20
        },
        {
            immagine: 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg',
            nomeprodotto: 'Prodotto 3',
            quantity: 35,
            prezzo: 30
        },
        {
            immagine: 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg',
            nomeprodotto: 'Prodotto 4',
            quantity: 45,
            prezzo: 40
        },
        {
            immagine: 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg',
            nomeprodotto: 'Prodotto 5',
            quantity: 55,
            prezzo: 50
        },
    ]
    const table = document.createElement('table')
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')
    const header = ["Immagine", "Nome prodotto", "Quantità", "prezzo"]
    for (let i=0; i < header.length; i++) {
        const th = document.createElement('th')
        th.innerText = header[i]
        headerRow.appendChild(th);
    };
    thead.appendChild(headerRow)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    for (let i = 0; i < prodotti.length; i++) {
        const row = document.createElement('tr');

        const immagineCell = document.createElement('td');
        const immagine = document.createElement('img');
        immagine.src = prodotti[i].immagine;
        immagine.alt = prodotti[i].nomeprodotto;
        immagine.style.width = "300px";
        immagine.style.height = "300px";
        immagineCell.appendChild(immagine)
        row.appendChild(immagineCell)

        const nomeCell = document.createElement('td');
        nomeCell.innerText = prodotti[i].nomeprodotto;
        row.appendChild(nomeCell)

        const quantitaCell = document.createElement('td');
        quantitaCell.innerText = prodotti[i].quantity;
        row.appendChild(quantitaCell)

        const prezzoCell = document.createElement('td');
        prezzoCell.innerText = prodotti[i].prezzo;
        row.appendChild(prezzoCell);

        tbody.appendChild(row)
    }
    table.appendChild(tbody)

    div.appendChild(table)
};
generateTable();

/* ESERCIZIO 12
            Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
         */

const addRow = function () {
    const tbody = document.querySelector('tbody')
    const row = document.createElement('tr');

    const immagineCell = document.createElement('td');
    const immagine = document.createElement('img');
    immagine.src = 'https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg';
    immagine.alt = 'Prodotto 6';
    immagine.style.width = "300px";
    immagine.style.height = "300px";
    immagineCell.appendChild(immagine)
    row.appendChild(immagineCell)

    const nomeCell = document.createElement('td');
    nomeCell.innerText = 'Prodotto 6';
    row.appendChild(nomeCell)

    const quantitaCell = document.createElement('td');
    quantitaCell.innerText = 65;
    row.appendChild(quantitaCell)

    const prezzoCell = document.createElement('td');
    prezzoCell.innerText = 60;
    row.appendChild(prezzoCell);

    tbody.appendChild(row)
};

addRow();

/* ESERCIZIO 14
           Crea una funzione che nasconda le immagini della tabella quando eseguita
         */

const hideAllImages = function () {
    const img = document.querySelectorAll('tbody img')
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
    }
};

hideAllImages()

/* EXTRA ESERCIZIO 15
           Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
         */
const colori = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'gray', 'black', 'white']

const changeColorWithRandom = function () {
    const h2 = document.getElementById('changeMyColor');
    h2.style.cursor = 'pointer'
    h2.addEventListener('click', function(e) {
        e.preventDefault();
        let random = Math.floor(Math.random() * colori.length)
        h2.style.color = colori[random]
    })
};
changeColorWithRandom()