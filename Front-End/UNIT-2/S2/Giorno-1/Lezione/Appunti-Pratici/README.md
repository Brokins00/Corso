# Bootstrap

![StaticIcon](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)

## Inizializzazione
CSS:
- Inizializza prima del tuo CSS nell'head

JavaScript:
- Inizializza prima del tuo JavaScript nel body
```html
<html>
    <head>
        ...
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        ...
        <link href="assets/css/style.css" rel="stylesheet">
    </head>
    <body>
        ...
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>
```

## Testi e Box
### Testo / Colori
- .text-muted
- .text-primary
- .text-success
- .text-info
- .text-warning
- .text-danger
- .text-secondary
- .text-dark
- .text-body
- .text-white

Per i link stessa cosa dei testi, ma cambia il prefisso che sarà **.link-***
- .link-primary
- .link-success
- .link-info
- .link-warning
- .link-danger
- .link-secondary
- .link-dark
- .link-light
### Testo / Colori di sfondo
Per lo sfondo si usa la classe **.bg**
- .bg-primary
- .bg-success
- .bg-info
- .bg-warning
- .bg-danger
- .bg-secondary
- .bg-dark
- .bg-light
### Testi / Font
Il font-size predefinito è 16px e la font-family è Helvetica, Arial, sans-serif

Per mettere le dimensioni dei titoli senza usare i tag h1-h6, si può usare le classi da .h1 a .h6

Una cosa simile ai titoli è la classe display che mette in risalto il contenuto senza il grassetto e con un un font-size maggiore degli h. Da .display-1 a .display-6

I tag semantici seguenti esistono anche in classe bootstrap:
- del -> .del
- u -> .u
- small -> .small
- strong -> .strong
- em -> .em

### Testi / Allineamenti del testo
Bootstrap 4:
- .text-justify
- .test-left
- .text-center
- .text-right

Boostrap 5:
- .text-start
- .text-center
- .text-end

Per allineamento verticale:
- .align-baseline
- .align-top
- .align-middle
- .align-bottom
- .align-text-bottom

### Box / Proprietà Display
- .d-block
- .d-inline
- .d-inline-block

### Box / Margin e Padding
- m: margin
- p: padding

Sintassi:
- (proprietà)(lati)-(dimensioni) per xs
- (proprietà)(lati)-(breakpoint)-(dimensione) per sm, md, lg e xl

Breakpoint: punti in cui il contenuto del sito web può adattarsi in base al dispositivo

Lati: questo parametro permette di aggiungere la spaziatura nel contenuto ad un lato specifico
- t -> top
- b -> bottom
- l -> left
- r -> right
- x -> left e right
- y -> top e bottom
- blank -> tutti i lati

Dimensione: questo parametro permette di aggiungere una quantità specifica di spaziatura
- 0 -> 0px
- 1 -> 4px
- 2 -> 8px
- 3 -> 16px
- 4 -> 24px
- 5 -> 48px
- auto -> margine automatico

### Box / Background Color
Stessa cosa dei testi

### Box / Shadow e Overflow
- .shadow-none
- .shadow-sm
- .shadow
- .shadow-lg

- .overflow-auto
- .overflow-hidden
- .overflow-visible
- .overflow-scroll

### Box / Position
- .position-static
- .position-relative
- .position-absolute
- .position-fixed
- .position-sticky
- .fixed-top
- .fixed-bottom
- .sticky-top

{proprietà}-{posizione}

Proprietà:
- top
- bottom
- start
- end

Posizione:
- 0 -> 0%
- 50 -> 50%
- 100 -> 100%

## Grid System
- Le righe devono stare dentro una classe .container
- Le righe servono per creare gruppi orizzontali di colonne
- Il contenuto dovrebbe essere posizionato all'interno delle colonne e solo le colonne possono essere i figli diretti delle righe
- Le colonne creano spazi vuoti tra il contenuto delle colonne tramite il padding