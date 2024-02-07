/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("***ESERCIZIO 1***");

const concatenazione = (stringa1 = "", stringa2 = "") => {
    let parte1 = stringa1.split("");
    let parte2 = stringa2.split("");
    parte1 = parte1.slice(0, 2).join("").toUpperCase();
    parte2 = parte2.slice(parte2.length - 3).join("").toUpperCase();
    console.log(`${parte1}${parte2}`);
};

concatenazione("concatena", "stringa");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("--------------------");
console.log("***ESERCIZIO 2***");

const tornaArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 101));
    }
    return array;
};

console.log(tornaArray());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log("--------------------");
console.log("***ESERCIZIO 3***");

const ricavaPari = () => {
    const arrayNumeri = tornaArray();
    console.log(`L'array di numeri è composto da: ${arrayNumeri}`);
    const arrayPari = arrayNumeri.filter((element) => {
        return element % 2 === 0;
    });
    return arrayPari;
};
console.log(ricavaPari());

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("--------------------");
console.log("***ESERCIZIO 4***");

const sommaArray = () => {
    const arrayNumeri = tornaArray();
    console.log(`L'array di numeri è composto da: ${arrayNumeri}`);
    let somma = 0;
    arrayNumeri.forEach((element) => {
        somma += element;
    });
    return somma;
};

console.log(sommaArray());

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("--------------------");
console.log("***ESERCIZIO 5***");

const sommaArray2 = () => {
    const arrayNumeri = tornaArray();
    console.log(`L'array di numeri è composto da: ${arrayNumeri}`);
    const somma = arrayNumeri.reduce((totale, valore) => totale + valore, 0);
    return somma;
};

console.log(sommaArray2());

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("--------------------");
console.log("***ESERCIZIO 6***");

const arrayNuova = (array, n) => {
    console.log(`L'array di numeri è composto da: ${array}`);
    console.log(`Il numero da incrementare è: ${n}`);
    const nuovoArray = array.map((element) => {
        return element + n;
    });
    return nuovoArray;
};

console.log(arrayNuova(tornaArray(), 5));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("--------------------");
console.log("***ESERCIZIO 7***");

const arrayStringa = ["EPICODE", "is", "great"];

const arrayLunghezze = (array) => {
    const nuovoArray = array.map((element) => {
        return element.length;
    });
    return nuovoArray;
};
console.log(arrayLunghezze(arrayStringa));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("--------------------");
console.log("***ESERCIZIO 8***");

const arrayDispari = () => {
    const array = [];
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
};

console.log(arrayDispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("--------------------");
console.log("***ESERCIZIO 9***");

const piuVecchio = () => {
    let annoVecchio = 2024;
    let film = "";
    movies.forEach((element) => {
        if (element.Year < annoVecchio) {
            annoVecchio = element.Year;
            film = element.Title;
        }
    });
    return film;
};

console.log(`Il Film più vecchio è: ${piuVecchio()}`);

/* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("--------------------");
console.log("***ESERCIZIO 10***");

const quantiFilm = () => {
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Type === "movie") {
            count += 1;
        }
    }
    return count;
};

console.log(`Nella collezione ci sono ${quantiFilm()} film`);

/* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("--------------------");
console.log("***ESERCIZIO 11***");

const arrayTitoli = () => {
    const titoli = movies.map((element) => {
        return element.Title;
    });
    return titoli;
};
console.log(`Nella collezione ci sono i seguenti film: ${arrayTitoli()}`);

/* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("--------------------");
console.log("***ESERCIZIO 12***");

const filmAnnoCorrente = () => {
    const annoCorrente = movies.filter((element) => {
        return element.Year >= 2000;
    });
    return annoCorrente;
};

console.log(filmAnnoCorrente());

/* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */
console.log("--------------------");
console.log("***ESERCIZIO 13***");

const sommaAnni = () => {
    const somma = movies.reduce(
        (totale, valore) => totale + parseInt(valore.Year),
        0
    );
    return somma;
};

console.log(`La somma degli anni dei film è: ${sommaAnni()}`);

/* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */

console.log("--------------------");
console.log("***ESERCIZIO 14***");

// const cercaFilm = (imdbID) => {
//     const find = movies.find((element) => element.imdbID === imdbID);
//     console.log(find);
// };

// cercaFilm("tt4154796");

const select = document.getElementById("seleziona_film");

movies.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value", element.imdbID);
    option.innerText = element.Title;
    select.appendChild(option);
});

const bottone = document.getElementById("scegli");
bottone.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("locandina").innerHTML = "";
    const filmScelto = movies.find(
        (element) => element.imdbID === select.value
    );
    document.getElementById("titolo").innerText = filmScelto.Title;
    document.getElementById("anno").innerText = filmScelto.Year;
    const img = document.createElement("img");
    img.style.width = "300px";
    img.alt = filmScelto.Title;
    img.src = filmScelto.Poster;
    document.getElementById("locandina").appendChild(img);
});

/* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */

console.log("--------------------");
console.log("***ESERCIZIO 15***");

const cercaFilmDaAnno = (anno) => {
    const find = movies.findIndex((element) => parseInt(element.Year) === anno);
    if (find !== -1) {
        console.log(
            `Il film uscito nell\'anno ${anno} è: ${movies[find].Title}`
        );
    } else {
        console.log("Nessun risultato trovato");
    }
};

cercaFilmDaAnno(2000);
