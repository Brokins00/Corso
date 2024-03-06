const readData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        let elenco = data
        console.log(elenco)
    })
}

readData();