const tombola = document.getElementById("tombola");
const estratto = document.getElementById("estratto");
let tombolaArray = [];

const creaTombola = () => {
    for (let i = 0; i < 90; i++) {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = i + 1;
        div.setAttribute("id", `numero-${i}`);
        div.classList.add("cella");
        div.appendChild(span);
        tombola.appendChild(div);
        tombolaArray.push(false);
    }
};

const generaNumero = () => {
    let numero = Math.floor(Math.random() * tombolaArray.length) + 1;
    let indice = numero - 1;
    if (!tombolaArray[indice]) {
        tombolaArray[indice] = true;
        const cella = document.getElementById(`numero-${indice}`);
        cella.classList.add("uscito");
        estratto.innerText = `Il numero estratto è: ${numero}`;
    } else {
        let finita = tombolaArray.every((element) => element === true);
        if (!finita) {
            generaNumero();
        } else {
            estratto.innerText = `FINITA`;
        }
    }
};

const resettaTombola = () => {
    tombolaArray = [];
    tombola.innerHTML = "";
    estratto.innerText = "";
    creaTombola();
};

const gestioneBottone = () => {
    const bottone = document.getElementById("button");
    bottone.addEventListener("click", function (e) {
        e.preventDefault();
        generaNumero();
    });
    const bottone2 = document.getElementById("ripristina");
    bottone2.addEventListener("click", function (e) {
        e.preventDefault();
        resettaTombola();
    });
};

window.addEventListener("load", function () {
    creaTombola();
    gestioneBottone();
});
