package it.nextdevs.u5s1g4es.beans;

import lombok.Data;

@Data
public class Tavolo {
    private int numero;
    private int posti;
    private boolean occupato;
    private double costoCoperto;

    public void print() {
        System.out.println("numero tavolo--> " + numero);
        System.out.println("numero massimo coperti--> " + posti);
        System.out.println("occupato/libero--> " + (!this.occupato ? "Libero" : "Occupato"));
    }

    @Override
    public String toString() {
        return "Tavolo{" +
                "numero=" + numero +
                ", posti=" + posti +
                ", occupato=" + occupato +
                ", costoCoperto=" + costoCoperto +
                '}';
    }
}
