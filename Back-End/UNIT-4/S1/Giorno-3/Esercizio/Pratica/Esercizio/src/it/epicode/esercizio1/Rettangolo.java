package it.epicode.esercizio1;

public class Rettangolo {
    private double altezza;
    private double larghezza;

    public Rettangolo(double altezza, double larghezza) {
        this.altezza = altezza;
        this.larghezza = larghezza;
    }

    private double calcolaPerimetro() {
        return (altezza + larghezza) * 2;
    }

    private double calcolaArea() {
        return altezza * larghezza;
    }

    public static void stampaRettangolo(Rettangolo rettangolo) {
        System.out.println("Perimetro: "+rettangolo.calcolaPerimetro());
        System.out.println("Area: "+rettangolo.calcolaArea());
    }

    public static void stampaDueRettangoli(Rettangolo rettangolo1, Rettangolo rettangolo2) {
        System.out.println("Primo rettangolo:");
        stampaRettangolo(rettangolo1);
        System.out.println("Secondo rettangolo:");
        stampaRettangolo(rettangolo2);
        double sommaAree = rettangolo1.calcolaArea() + rettangolo2.calcolaArea();
        double sommaPerimetri = rettangolo1.calcolaPerimetro() + rettangolo2.calcolaPerimetro();
        System.out.println("Somma delle aree: "+sommaAree);
        System.out.println("Somma dei perimetri: "+sommaPerimetri);
    }
}
