# Animation CSS

## Transform 2D

### Translate

Il translate accetta due parametri, il primo relativo all'asse X, il secondo relativo all'asse Y e si sposta su gli assi indicati di suo padre. Accetta anche le percentuali, che in questo caso spostano gli assi della percentuale delle dimensioni dell'elemento stesso.

```css
transform: translate(100px, 100px);
transform: translate(-50%, -50%);
```

### TranslateX e TranslateY

Uguale al Translate, ma con un solo parametro. TranslateX solo orizontalmente, TranslateY solo verticalmente.

```css
transform: tralsateX(100px);
transform: tralsateY(100px);
```

### Rotate

Si usa per ruotare un elemento sul proprio asse: si utilizza con un solo parametro in gradi (deg)

```css
transform: rotate(45deg);
```

### Scale

Modifica le dimensioni dell'elemento e del suo contenuto, si usa numeri interi. Con i numeri negativi funziona lo stesso ma si capovolge.

```css
transform: scale(2);
```

### Skew

Distorce l'elemento nella direzione data in gradi, si muove se positivo in senso antiorario, altrimenti con negativi in senso orario. Distorce su entrambi gli assi

```css
transform: skew(45deg);
```

### SkewX e SkewY

Uguale allo Skew, solamente distorce l'asse indicata

```css
transform: skewX(45deg);
transform: skewY(45deg);
```

### Transform Origin

Modifica il punto di origine della trasformazione

```css
transform-origin: 100px 100px;
```

## Transitions

### Transition Property

Quale proprietà far animare

### Transition Duration

Quanto dura la transizione

### Transition Timing Function

Velocità di movimento della transizione.

Di default: ease

Proprietà:

-   ease
-   ease-in
-   ease-out
-   ease-in-out

### Transition Delay

Eventuale ritardo di avvio (s/ms). Se lo usi ad esempio relativo ad un hover, se passi con il mouse e il tempo che resti sopra è inferiore al delay, la transizione non ha effetto

### Transition

Sintassi abbreviata, si possono fare trasformazioni multiple aggiungendo la virgola ( **,** )

Ordine: transition: [property] [duration] [timing-function] [delay]

#### Esempi

```css
div {
    width: 200px;
    height: 200px;
    background-color: red;
    /* transition-property: width;
    transition-duration: 2.5s;
    transition-timing-function: ease;
    transition-delay: 1s; */
    transition: width 2.5s ease-in-out 1s, background-color 2.5s ease-in-out 1s;
}

div:hover {
    width: 400px;
    background-color: blue;
}
```

## Animation
### Animation Name
Chiama il nome del keyframes dell'animazione
### Animation Duration
Durata dell'animazione
### Animation Timing Function
Velocità di movimento dell'animazione
### Animation Delay
Eventuale ritardo di avvio (s/ms)
### Animation Iteration Count
Numero di ripetizioni
### Animation Direction
Svolgimento in avanti o contrario

Opzioni:
- normal (default)
- reverse
- alternate
- alternate-reverse
### Animation Fill Mode
Stili applicati ad inizio o fine animazione
### Animation
Sintassi breve, per modificare più di una proprietà si dichiara tutto nel keyframes dentro le parentesi graffe ( **{}** )

Ordine: animation: [name*] [duration*] [timing-function] [delay] [iteration-count] [direction] [fill-mode]

*Obbligatori

#### Esempi
```css
div {
    width: 200px;
    height: 200px;
    background-color: red;
    /* animation-name: larghezza;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-iteration-count: 2;
    animation-direction: alternate-reverse;
    animation-fill-mode: both; */
    animation: larghezza 3s linear 1s 2 alternate-reverse both;
}

@keyframes larghezza {
    from {width:200px}
    25% {width: 250px}
    50% {width: 300px}
    75% {width: 350px}
    to {width: 400px}
}
```