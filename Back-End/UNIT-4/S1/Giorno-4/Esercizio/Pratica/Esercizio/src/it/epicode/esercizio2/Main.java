package it.epicode.esercizio2;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Dipendente dipendente1 = new DipendenteFullTime("IT001", 2000.00, Dipartimento.PRODUZIONE);
        Dipendente dipendente2 = new DipendentePartTime("IT002", 10.00, Dipartimento.AMMINISTRAZIONE, 20);
        Dipendente dipendente3 = new Dirigente("IT003", 3000.00, Dipartimento.VENDITE, 1000.00);

        Dipendente[] dipendenti = { dipendente1, dipendente2, dipendente3 };

        for (Dipendente dipendente : dipendenti) {
            System.out.println("Dipendente "+dipendente.getMatricola()+" - stipendio "+dipendente.calculateSalary()+" " +
                    "euro");
        }
    }
}
