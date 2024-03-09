# Amazon Clone
## Introduzione
Questa app è sviluppata per permettere la visione dei prodotti salvati su un'API, poterne modificare il contenuto e aggiungere dei nuovi prodotti.

## Strutturazione
### Variabili globali
Le variabili in comune con tutte e 3 le pagine sono state inserite in assets/data/config.json, richiamando i dati al caricamento delle varie pagine tramite una fetch.

### Funzione di debug
All'inizio del progetto, ho creato una funzione di debug chiamata appunto debug che mi è servita a caricare un oggetto default nell'API. Per richiamarla, sono semplicemente andato nella console del browser e ho digitato:
```javascript
debug()
```
