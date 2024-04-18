package it.epicode.esercizio3;

public class Main {
    public static void main(String[] args) {
        Dipendente dipendente1 = new DipendenteFullTime("IT001", 2000.00, Dipartimento.PRODUZIONE);
        Dipendente dipendente2 = new DipendentePartTime("IT002", 10.00, Dipartimento.AMMINISTRAZIONE,
                20);
        Dipendente dipendente3 = new Dirigente("IT003", 3000.00, Dipartimento.VENDITE, 1000.00);
        Volontario volontario1 = new Volontario("Mario Rossi", 25, "Esperienza nel volontariato presso associazioni ambientaliste");

        // Creazione dell'array di lavoratori
        DipendenteI[] lavoratori = { dipendente1, dipendente2, dipendente3, volontario1 };

        // Chiamata al metodo checkin per ogni lavoratore
        for (DipendenteI lavoratore : lavoratori) {
            lavoratore.checkIn();
        }
    }
}
