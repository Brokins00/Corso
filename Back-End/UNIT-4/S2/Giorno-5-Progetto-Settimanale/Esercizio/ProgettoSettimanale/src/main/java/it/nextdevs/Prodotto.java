package it.nextdevs;

import java.time.LocalDate;

public class Prodotto {
    private String isbn;
    private String titolo;
    private LocalDate annoPubblicazione;
    private Integer numPagine;

    public Prodotto(String isbn, String titolo, LocalDate annoPubblicazione, Integer numPagine) {
        this.isbn = isbn;
        this.titolo = titolo;
        this.annoPubblicazione = annoPubblicazione;
        this.numPagine = numPagine;
    }

    public String getIsbn() {
        return this.isbn;
    }

    public LocalDate getAnnoPubblicazione() {
        return this.annoPubblicazione;
    }

    @Override
    public String toString() {
        return "Prodotto{" +
                "isbn='" + isbn + '\'' +
                ", titolo='" + titolo + '\'' +
                ", annoPubblicazione=" + annoPubblicazione +
                ", numPagine=" + numPagine +
                '}';
    }

    public String libro(Libro book) {
        return isbn +
                "," + titolo +
                "," + annoPubblicazione +
                "," + numPagine +
                "," + book.getAutore() +
                "," + book.getGenere();
    }

    public String rivista(Rivista news) {
        return isbn +
                "," + titolo +
                "," + annoPubblicazione +
                "," + numPagine +
                "," + news.getPeriodicita();
    }
}
