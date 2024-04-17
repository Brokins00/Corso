package it.epicode.esercizio3;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("IT0001", "Fabio Brogi", "brokins2000@gmail.com",
                "17/04/2024");
        Carrello carrello = new Carrello(cliente);

        Articolo articolo1 = new Articolo("AT001", "Abbonamento Netflix 1 Mese", 12.99, 5);
        Articolo articolo2 = new Articolo("AT002", "Abbonamento Dazn 1 Mese", 39.99, 2);

        carrello.aggiungiArticolo(articolo1);
        carrello.aggiungiArticolo(articolo2);

        carrello.mostraCarrello();
    }
}
