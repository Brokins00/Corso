package ecommerce;

import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Articolo articolo1 = new Articolo("itlibro", "Il signore degli anelli", 10, 50);
        Articolo articolo2 = new Articolo("itdisco", "Michael Jackson", 50, 1);

        Cliente cliente = new Cliente("itAlexandru", "Ionut Alexandru Ifrim",
                "alexandruifrim@gmail.com", new Date());

        Carrello carrello = new Carrello(cliente);
        if (carrello.aggiungiArticolo(articolo1)) {
            System.out.println("Articolo aggiunto con successo");
        } else {
            System.out.println("Errore nell'aggiunta dell'articolo");
        }
        if (carrello.aggiungiArticolo(articolo1)) {
            System.out.println("Articolo aggiunto con successo");
        } else {
            System.out.println("Errore nell'aggiunta dell'articolo");
        }
        if (carrello.aggiungiArticolo(articolo1)) {
            System.out.println("Articolo aggiunto con successo");
        } else {
            System.out.println("Errore nell'aggiunta dell'articolo");
        }
        if (carrello.aggiungiArticolo(articolo2)) {
            System.out.println("Articolo aggiunto con successo");
        } else {
            System.out.println("Errore nell'aggiunta dell'articolo");
        }
        if (carrello.aggiungiArticolo(articolo2)) {
            System.out.println("Articolo aggiunto con successo");
        } else {
            System.out.println("Errore nell'aggiunta dell'articolo");
        }

        carrello.controllaCarrello();
    }
}
