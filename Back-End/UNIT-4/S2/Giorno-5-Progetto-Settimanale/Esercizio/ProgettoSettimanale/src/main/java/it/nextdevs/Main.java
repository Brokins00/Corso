package it.nextdevs;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Archivio archivio = new Archivio();

        archivio.aggiungiProdotto(new Libro("8831003380", "Harry Potter", LocalDate.of(1997, 1,
                1), 304, "J. K. Rowling", "Fantasy"));
        archivio.aggiungiProdotto(new Rivista("977038156000", "TV Sorrisi e Canzoni", LocalDate.of(2024,
                4, 1), 50, Periodicita.SETTIMANALE));

        System.out.println("----------------------");
        System.out.println("Ricerca per ISBN: "+archivio.ricercaPerISBN("8831003380"));

        List<Prodotto> prodottiAnno2024 = archivio.ricercaPerAnnoPubblicazione(LocalDate.of(2000, 1,
                1));
        System.out.println("----------------------");
        System.out.println("Prodotti 2024:");
        prodottiAnno2024.forEach(System.out::println);

        System.out.println("----------------------");
        List<Prodotto> ricercaPerAutore = archivio.ricercaPerAutore("J. K. Rowling");
        System.out.println("Libri di J. K. Rowling");
        ricercaPerAutore.forEach(System.out::println);
        System.out.println("----------------------");
        try {
            archivio.salvaSuDisco("archivio.txt");
        } catch (IOException e) {
            System.out.println("Errore nel salvataggio del file");
        }
        System.out.println("----------------------");
        try {
            List<Prodotto> archivioCaricato = archivio.caricaDaDisco("archivio.txt");
            System.out.println("Archivio caricato da disco:");
            archivioCaricato.forEach(System.out::println);
        } catch (IOException e) {
            System.out.println("Errore nel caricamento del file");
        }
    }
}
