# SASS (Syntactically Awesome Style Sheet)

## Introduzione
### Significato
SASS è un pre-processo per CSS, estende le possibilità di CSS facilitando e velocizzando lo sviluppo dei fogli di stile

### Caratteristiche
- Linguaggio sintatticamente completo
- Compatibile con CSS3
- Ogni modifica del file SASS corrisponderà ad una modifica massiva di CSS
- I file SASS non sono direttamente letti dal browser ma devono essere iterpretati per poi generare il file CSS.

### Sintassi
- Sintassi Rientrata (.sass)
- Sintassi Sassy CSS (stessa formattazione simile ai CSS, .scss)

#### Sintassi Rientrata
```scss
$colore-primario: #fdfdfd;
h1 {
    color: $colore-primario;
}
```

#### Sintassi sass:
```sass
h1
    color: $colore-primario
```

### Installazione
Per usare SASS abbiamo bisogno di:
- Browser
- Editor di codice
- Node e NPM
- Riga di comando

### Uso della riga di comando
CLI (Command Line Interface)

***Per eseguire il comando sass, bisogna essere amministratori della macchina, se non lo si è, eseguire in un terminale amministratore***
```bash
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

Passaggi:
- Installare Node.js
- Controllare nel prompt la versione: node -v
- Installare nel progetto npm: npm init
- Installazione del pacchetto per SASS:
    - npm i sass -g
- Installazione del pacchetto va fatta nella cartella del progetto
- Utilizzo: sass nomecartella/file.scss nomecartella/file.css