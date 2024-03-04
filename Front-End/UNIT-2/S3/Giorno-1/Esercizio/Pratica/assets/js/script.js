class User {
	constructor(_firstName, _lastName, _age, _location) {
		this.firstName = _firstName;
		this.lastName = _lastName;
		this.age = _age;
		this.location = _location;
	}
	confronto = function (utente) {
		if (this.age > utente.age) {
			return `${this.firstName} è più vecchio di ${utente.firstName}`;
		} else if (this.age < utente.age) {
			return `${this.firstName} è più giovane di ${utente.firstName}`;
		} else {
			return `${this.firstName} ha la stessa età di ${utente.firstName}`;
		}
	};
}

const Pavlo = new User('Pavlo', 'Pastushenko', 19, 'Venezia');
const Antonio = new User('Antonio', 'Copetti', 28, 'Napoli');
const Enrico = new User('Enrico', 'Cirotto', 23, 'Sassari');
const Fabio = new User('Fabio', 'Brogi', 24, 'Pistoia');

console.log(Pavlo.confronto(Antonio));
console.log(Pavlo.confronto(Enrico));
console.log(Pavlo.confronto(Fabio));

console.log(Antonio.confronto(Pavlo));
console.log(Antonio.confronto(Enrico));
console.log(Antonio.confronto(Fabio));

console.log(Enrico.confronto(Pavlo));
console.log(Enrico.confronto(Antonio));
console.log(Enrico.confronto(Fabio));

console.log(Fabio.confronto(Pavlo));
console.log(Fabio.confronto(Antonio));
console.log(Fabio.confronto(Enrico));

// Esercizio 2
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    controlloPadrone = function(_pet2) {
        if (this.ownerName == _pet2.ownerName) {
            return true
        }
        return false
    }
}

const Pets = [];

const inserisci = document.getElementById('inserisci')
const form = document.getElementById('form')
inserisci.addEventListener('click', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        return
    }
    const petName = document.getElementById('petName')
    const ownerName = document.getElementById('ownerName')
    const species = document.getElementById('species')
    const breed = document.getElementById('breed')
    const animal = new Pet(petName.value, ownerName.value, species.value, breed.value)
    Pets.push(animal)
    generaLista()
    petName.value = '';
    ownerName.value = '';
    species.value = '';
    breed.value = '';
})

const generaLista = () => {
    const tabella = document.getElementById('tabella')
    tabella.innerHTML = '';
    Pets.forEach((element) => {
        const row = document.createElement('div');
        row.classList.add('row')
        const colPetName = document.createElement('div');
        colPetName.classList.add('col-3', 'text-center', "border", "border-1")
        colPetName.innerText = element.petName
        const colOwnerName = document.createElement('div');
        colOwnerName.classList.add('col-3', 'text-center', "border", "border-1")
        colOwnerName.innerText = element.ownerName
        const colSpecies = document.createElement('div');
        colSpecies.classList.add('col-3', 'text-center', "border", "border-1")
        colSpecies.innerText = element.species
        const colBreed = document.createElement('div');
        colBreed.classList.add('col-3', 'text-center', "border", "border-1")
        colBreed.innerText = element.breed
        row.append(colPetName, colOwnerName, colSpecies, colBreed)
        tabella.appendChild(row)
    })
}