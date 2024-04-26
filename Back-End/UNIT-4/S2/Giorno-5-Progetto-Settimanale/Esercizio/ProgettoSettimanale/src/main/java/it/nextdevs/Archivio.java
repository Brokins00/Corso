package it.nextdevs;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class Archivio {
    private List<Prodotto> catalogo = new ArrayList<>();

    public void aggiungiProdotto(Prodotto prodotto) {
        if (!catalogo.stream().anyMatch(prodottoP -> prodottoP.getIsbn().equals(prodotto.getIsbn()))) {
            catalogo.add(prodotto);
        } else {
            System.out.println("ISBN duplicato: "+prodotto.getIsbn());
        }
    }

    public void rimuoviProdotto(String isbn) {
        catalogo.removeIf(prodotto -> prodotto.getIsbn().equals(isbn));
    }

    public Prodotto ricercaPerISBN(String isbn) {
        return catalogo.stream()
                .filter(prodotto -> prodotto.getIsbn().equals(isbn))
                .findFirst()
                .orElse(null);
    }

    public List<Prodotto> ricercaPerAnnoPubblicazione(LocalDate anno) {
        return catalogo.stream().filter(prodotto -> prodotto.getAnnoPubblicazione().getYear() == anno.getYear())
                .collect(Collectors.toList());
    }

    public List<Prodotto> ricercaPerAutore(String autore) {
        return catalogo.stream()
                .filter(prodotto -> prodotto instanceof Libro)
                .map(prodotto -> (Libro) prodotto)
                .filter(libro -> libro.getAutore().equals(autore))
                .collect(Collectors.toList());
    }

    public void salvaSuDisco(String nomeFile) throws IOException {
        String data = catalogo.stream()
                .map(prodotto -> {
                    if (prodotto instanceof Libro) {
                        return prodotto.libro((Libro) prodotto);
                    } else if (prodotto instanceof Rivista) {
                        return prodotto.rivista((Rivista) prodotto);
                    }
                    return null;
                })
                .filter(Objects::nonNull)
                .collect(Collectors.joining(System.lineSeparator()));
        FileUtils.writeStringToFile(new File(nomeFile), data, "UTF-8");
    }

    public List<Prodotto> caricaDaDisco(String nomeFile) throws IOException {
        List<String> lines = FileUtils.readLines(new File(nomeFile), "UTF-8");
        return lines.stream()
                .map(line -> {
                    String[] parts = line.split(",");
                    if (parts.length == 6) {
                        String isbn = parts[0];
                        String titolo = parts[1];
                        LocalDate annoPubblicazione = LocalDate.parse(parts[2]); // Assuming the date is in ISO format
                        int numPagine = Integer.parseInt(parts[3]);
                        String autore = parts[4];
                        String genere = parts[5];
                        return new Libro(isbn, titolo, annoPubblicazione, numPagine, autore, genere);
                    } else if (parts.length == 5) {
                        String isbn = parts[0];
                        String titolo = parts[1];
                        LocalDate annoPubblicazione = LocalDate.parse(parts[2]); // Assuming the date is in ISO format
                        int numPagine = Integer.parseInt(parts[3]);
                        String periodicita = parts[4];
                        if (periodicita != null) {
                            return new Rivista(isbn, titolo, annoPubblicazione, numPagine,
                                    Periodicita.fromString(periodicita));
                        }
                    }
                    return null;
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
    }
}
