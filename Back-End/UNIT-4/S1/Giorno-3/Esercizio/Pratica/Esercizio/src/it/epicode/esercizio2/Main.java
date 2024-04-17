package it.epicode.esercizio2;

public class Main {
    public static void main(String[] args) {
        Sim sim = new Sim("3407564875");
        sim.aggiungiChiamata(new Chiamata(2, "3589786254"));
        sim.aggiungiChiamata(new Chiamata(7, "3648259761"));
        sim.aggiungiChiamata(new Chiamata(5, "3491537642"));
        sim.aggiungiCredito(10.5);
        sim.stampaDati();
    }
}
