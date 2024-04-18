package it.epicode.esercizio1;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Dipendente> dipendenti = new ArrayList<Dipendente>();
        Dipendente dipendente1 = new Dipendente("IT001", 1200.0, Dipartimento.VENDITE);
        dipendenti.add(dipendente1);
        Dipendente dipendente2 = new Dipendente("IT002", 1300.0, Dipartimento.PRODUZIONE);
        dipendenti.add(dipendente2);
        Dipendente dipendente3 = new Dipendente("IT003", 2000.0, Dipartimento.AMMINISTRAZIONE);
        dipendenti.add(dipendente3);

        for (Dipendente dipendente:dipendenti) {
            System.out.println("Dipendente "+dipendente.getMatricola());
        }
    }
}
