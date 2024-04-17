package it.epicode.esercizio1;

public class Main {
    public static void main(String[] args) {
        Rettangolo rettangolo1 = new Rettangolo(5, 10);
        Rettangolo rettangolo2 = new Rettangolo(3, 7);

        System.out.println("Rettangolo 1:");
        Rettangolo.stampaRettangolo(rettangolo1);
        System.out.println();

        System.out.println("Rettangolo 2:");
        Rettangolo.stampaRettangolo(rettangolo2);
        System.out.println();

        System.out.println("Risultati dei due rettangoli:");
        Rettangolo.stampaDueRettangoli(rettangolo1, rettangolo2);
    }
}
