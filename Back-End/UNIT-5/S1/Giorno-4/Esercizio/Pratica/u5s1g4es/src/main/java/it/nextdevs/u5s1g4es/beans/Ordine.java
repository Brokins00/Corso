package it.nextdevs.u5s1g4es.beans;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
@Data
public class Ordine {
    private int numeroOrdine;
    private String status;
    private int posti;
    private LocalDateTime orarioOrdine;
    private List<Product> prodotti;
    private Tavolo tavolo;

    public Ordine() {
        this.prodotti = new ArrayList<>();
    }

    public double calcolaTotale(double prezzoCoperto) {
        double totale = prodotti.stream().mapToDouble(Product::getPrice).sum();
        totale += posti * prezzoCoperto;
        return totale;
    }

    public void addProdotto(Product prodotto) {
        prodotti.add(prodotto);
    }

    public void print() {
        System.out.println("id ordine--> " + this.numeroOrdine);
        System.out.println("stato--> " + this.status);
        System.out.println("numero coperti--> " + this.posti);
        System.out.println("ora acquisizione--> " + this.orarioOrdine);
        System.out.println("numero tavolo--> " + this.tavolo.getNumero());
        System.out.println("Lista: ");
        this.prodotti.forEach(System.out::println);
        System.out.println("totale--> " + this.calcolaTotale(this.tavolo.getCostoCoperto()));

    }
}
