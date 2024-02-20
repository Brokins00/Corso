# Responsive & Position

![Static Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)

## Media Queries

### Ordine CSS

L'ordine da tenere in considerazione è il seguente per non avere problemi di sovrapposizione:

-   min-width in ordine crescente
-   max-width in ordine decrescente

### Come funzionano min-width e max-width

**min-width** prende in considerazione dal valore indicato fino al massimo dello schermo se non esiste un altro breakpoint min-width

**max-width** prende in considerazione dalla risoluzione schermo più piccola fino al valore indicato se non esiste un altro breakpoint max-width

### Si può usare width?

Si, si usa solo in casi eccezionali per una dimensione fissa

## Positioning

### Float

-   float: none | Default
-   float: left | Si posiziona a sinistra e tutto quello che sta dopo va a circondare a destra e sotto il blocco interessato
-   float: right | Si posiziona a destra e tutto quello che sta dopo va a circondare a sinistra e sotto il blocco interessato

### Clear

Viene usato sugli elementi successivi al float e va ad indicare che non si devono adattare al float ma devono stare sotto (quindi avremo il float a sinistra o a destra e il blocco con il clear sotto)

-   clear: left
-   clear: right
-   clear: both (prende entrambi)

### Position

Static, relative e absolute determinano le posizioni degli elementi **RISPETTO AL DOCUMENTO, NON ALLA FINESTRA**

#### Static

E' la posizione default di ogni browser

#### Relative

Posizionamento relativo (in pixel) rispetto agli **elementi circostanti**; in presenza di elementi static **NON modifica** la posizione degli elementi circostanti. All'interno di un box absolute, il posizionamento diventa relativo rispetto al **PADRE** e agli elementi circostanti.

#### Absolute

Posizionamento assoluto (in pixel) rispetto al contenitore **PADRE**; in assegna di elementi parent (o con elementi parent non posizionati), il posizionamento è assoluto rispetto a **BODY**. All'interno di **BOX RELATIVE** il posizionamento diventa assoluto rispetto **AL CONTENITORE PADRE**.

**NON BLOCCA** gli elementi sullo schermo, **MODIFICA GLI ELEMENTI SOTTOSTANTI** permettendo le sovrapposizioni.

#### Fixed

Posizionamento fisso rispetto alla finestra, non conta dove viene messa nell'html, rimane nella posizione fixed con i parametri (top, left, right, bottom) che abbiamo inserito in css. E' **indipendente** dagli elementi circostanti.

#### Sticky

Posizionamento fisso rispetto alla finestra, **DIPENDENTE** dagli elementi circostanti in base alle coordinate:

-   top: dipendente dagli elementi sottostanti
-   bottom: dipendente dagli elementi soprastanti
    **NON CREA** modifiche di flusso HTML
