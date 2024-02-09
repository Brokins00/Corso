/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('***ESERCIZIO A***')
let sum = 10+20;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('--------------------')
console.log('***ESERCIZIO B***')
let random = Math.floor(Math.random() * 21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('--------------------')
console.log('***ESERCIZIO C***')
let me = {
    name: 'Fabio',
    surname: 'Brogi',
    age: 24
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('--------------------')
console.log('***ESERCIZIO D***')
delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('--------------------')
console.log('***ESERCIZIO E***')
me.skills = ["html", "css", "javascript"];
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('--------------------')
console.log('***ESERCIZIO F***')
me.skills.push("lua")
console.log(me)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('--------------------')
console.log('***ESERCIZIO G***')
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('--------------------')
console.log('***ESERCIZIO 1***')

const dice = () => {
    return Math.floor(Math.random() * 6) + 1
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('--------------------')
console.log('***ESERCIZIO 2***')

const whoIsBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log(whoIsBigger(10, 20))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('--------------------')
console.log('***ESERCIZIO 3***')

const splitMe = (stringa) => {
    const array = stringa.split(" ");
    for (i=0; i < array.length; i++) {
        let array2 = array[i].split('')
        array2[0] = array2[0].toUpperCase();
        array[i] = array2.join('')
    }
    return array
}

console.log(splitMe('Epicode è una scuola online'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('--------------------')
console.log('***ESERCIZIO 4***')

const deleteOne = (stringa = "", booleano) => {
    let stringaNew = ""
    if (booleano) {
        stringaNew = stringa.split("")
        stringaNew.shift()
        stringaNew = stringaNew.join("")
        
    } else {
        stringaNew = stringa.split("");
        stringaNew.pop();
        stringaNew = stringaNew.join("");
    }
    return stringaNew
}

console.log(deleteOne('stringa', false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('--------------------')
console.log('***ESERCIZIO 5***')

const onlyLetters = (stringa) => {
    const numeroRegex = /\d+/g;
    if (numeroRegex.test(stringa)) {
        stringa = stringa.replace(numeroRegex, '')
    }
    return stringa
}

console.log(onlyLetters("Ho 1 gatto, 1 pappagallo e 1 tartaruga"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('--------------------')
console.log('***ESERCIZIO 6***')

const isThisAnEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true
    } else {
        return false
    }
}

console.log(isThisAnEmail('test@test.io'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('--------------------')
console.log('***ESERCIZIO 7***')

const whatDayIsIt = () => {
    const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    const oggi = new Date();
    const indiceGiorno = oggi.getDay();
    return giorni[indiceGiorno];
}

console.log(`Oggi è: ${whatDayIsIt()}`);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('--------------------')
console.log('***ESERCIZIO 8***')

const rollTheDices = (num) => {
    const oggetto = {
        sum: 0,
        values: [],
    }
    for (let i = 0; i < num; i++) {
        let numeroEstratto = dice();
        oggetto.values.push(numeroEstratto)
        oggetto.sum += numeroEstratto
    }
    return oggetto
}

console.log(rollTheDices(10))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('--------------------')
console.log('***ESERCIZIO 9***')

const howManyDays = (data) => {
    const nuovaData = new Date(data).getTime();
    const oggi = new Date().getTime();
    const differenza = oggi - nuovaData
    const giorniDifferenza = Math.floor(differenza / (1000 * 60 * 60 * 24))
    return giorniDifferenza
}

console.log(`Dall'inizio del corso sono passati: ${howManyDays("2024-01-22")} giorni`)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('--------------------')
console.log('***ESERCIZIO 10***')

const isTodayMyBirthday = (compleanno) => {
    const dataCompleanno = new Date(compleanno);
    const oggi = new Date();
    const compleannoQuestAnno = new Date(oggi.getFullYear(), dataCompleanno.getMonth(), dataCompleanno.getDate())

    return oggi.toDateString() === compleannoQuestAnno.toDateString();
}

console.log(`Oggi è il mio compleanno? ${isTodayMyBirthday("2000-02-07")}`)

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
    {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },

    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('--------------------')
console.log('***ESERCIZIO 11***')

const deleteProp = (oggetto, stringa) => {
    if (oggetto[stringa]) {
        delete oggetto[stringa]
    }
    return oggetto
}

console.log(deleteProp(me, ""))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('--------------------')
console.log('***ESERCIZIO 12***')

const newestMovie = () => {
    let piuRecente = 1800;
    let oggettoFilm;
    for (let i=0; i < movies.length; i++) {
        let anno = parseInt(movies[i].Year)
        if (anno > piuRecente) {
            piuRecente = anno
            oggettoFilm = movies[i]
        }
    }
    return oggettoFilm
}

console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('--------------------')
console.log('***ESERCIZIO 13***')

const countMovies = () => {
    let count = 0;
    for (let i=0; i < movies.length; i++) {
        if (movies[i].Type === "movie") {
            count++
        }
    }
    return count
}

console.log(`Nella lista sono presenti ${countMovies()} film`)

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('--------------------')
console.log('***ESERCIZIO 14***')

const onlyTheYears = () => {
    let arrayAnni = [];
    movies.forEach((element) => {
        if (element.Year) {
            arrayAnni.push(element.Year)
        }
    })
    return arrayAnni
}

console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('--------------------')
console.log('***ESERCIZIO 15***')

const onlyInLastMillennium = () => {
    const questoMillennio = []
    for (let i=0; i < movies.length; i++) {
        if (parseInt(movies[i].Year) > 2000) {
            questoMillennio.push(movies[i])
        }
    }
    return questoMillennio
}

console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('--------------------')
console.log('***ESERCIZIO 16***')

const sumAllTheYears = () => {
    let somma = 0;
    for (let i = 0; i < movies.length; i++) {
        somma += parseInt(movies[i].Year)
    }
    return somma
}

console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('--------------------')
console.log('***ESERCIZIO 17***')

const searchByTitle = (ricerca) => {
    const risultati = movies.filter(film => film.Title.toLowerCase().includes(ricerca.toLowerCase()));
    return risultati;
}

console.log(searchByTitle('av'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('--------------------')
console.log('***ESERCIZIO 18***')

const searchAndDivide = (ricerca) => {
    const oggetto = {
        match: [],
        unmatch: []
    }

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Title.toLowerCase().includes(ricerca.toLowerCase())) {
            oggetto.match.push(movies[i])
        } else {
            oggetto.unmatch.push(movies[i])
        }
    }

    return oggetto
}

console.log(searchAndDivide('av'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('--------------------')
console.log('***ESERCIZIO 19***')

const removeIndex = (num) => {
    const copia = [...movies]
    copia.splice(num, 1);
    return copia
}

console.log(removeIndex(5))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('--------------------')
console.log('***ESERCIZIO 20***')

const selectId = () => {
    const container = document.getElementById('container')
    console.log(container.innerText)
}

selectId();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('--------------------')
console.log('***ESERCIZIO 21***')

const selectTag = (tag) => {
    const td = document.getElementsByTagName(tag)
    return td
}

console.log(selectTag('td'));

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('--------------------')
console.log('***ESERCIZIO 22***')
console.log('Controlla console')

const stampa = () => {
    const td = selectTag('td');
    for (let i = 0; i < td.length; i++) {
        console.log(td[i].innerText)
    }
}

stampa();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('--------------------')
console.log('***ESERCIZIO 23***')
console.log('Controlla l\'HTML')

const coloreBackgroundLink = (colore) => {
    const links = document.querySelectorAll('a');
    for (let i=0; i < links.length; i++) {
        links[i].style.backgroundColor = colore;
    }
}

coloreBackgroundLink('red')

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('--------------------')
console.log('***ESERCIZIO 24***')
console.log('Controlla l\'HTML')

const aggiungiElementoLi = () => {
    const myList = document.getElementById("myList");
    const li = document.createElement('li');
    li.innerText = 'Testo Nuovo';
    myList.appendChild(li);
}

aggiungiElementoLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('--------------------')
console.log('***ESERCIZIO 25***')
console.log('Controlla l\'HTML')

const svuotaLista = () => {
    const lista = document.getElementById('myList');
    lista.innerHTML = '';
}
svuotaLista()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('--------------------')
console.log('***ESERCIZIO 26***')
console.log('Controlla l\'HTML')

const aggiungiClasse = () => {
    const tr = document.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        tr[i].classList.add('test')
    }
}

aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('--------------------')
console.log('***ESERCIZIO 27***')

const halfTree = (num) => {
    let asterisco = ""
    for (let i = 0; i < num; i++) {
        asterisco += "*"
        console.log(asterisco)
    }
}

halfTree(10)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('--------------------')
console.log('***ESERCIZIO 28***')

const tree = (num) => {
    for (let i = 0; i < num; i++) {
        const spazi = " ".repeat(num - (i+1))
        let asterischi = ""
        if (i == 0) {
            asterischi = "*".repeat(1 * (i+1))
        } else {
            asterischi = "*".repeat(2 * i + 1)
        }
        console.log(spazi+asterischi)
    }
}

tree(10)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('--------------------')
console.log('***ESERCIZIO 29***')

const isItPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}

console.log(`E' un numero primo? ${isItPrime(293)}`)