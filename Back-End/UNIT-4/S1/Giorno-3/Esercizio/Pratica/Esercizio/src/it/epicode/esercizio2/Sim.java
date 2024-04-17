package it.epicode.esercizio2;

import java.util.ArrayList;

public class Sim {
    private String numero;
    private double credito;
    private ArrayList<Chiamata> ultimeChiamate;

    public Sim(String numero) {
        this.numero = numero;
        this.credito = 0;
        this.ultimeChiamate = new ArrayList<>();
    }

    public void aggiungiChiamata(Chiamata chiamata) {
        ultimeChiamate.add(chiamata);
        if (ultimeChiamate.size() > 5) {
            ultimeChiamate.removeFirst();
        }
    }

    public void aggiungiCredito(double credito) {
        this.credito += credito;
    }

    public void stampaDati() {
        System.out.println("Numero: "+this.numero);
        System.out.println("Credito: "+this.credito + " euro");
        System.out.println("Ultime 5 chiamate effettuate:");
        for (Chiamata chiamata:ultimeChiamate) {
            System.out.println("------------------------");
            System.out.println("Numero chiamato: "+chiamata.getNumero());
            System.out.println("Durata: "+chiamata.getMinuti()+" minuti");
            System.out.println("------------------------");
        }
    }
}
