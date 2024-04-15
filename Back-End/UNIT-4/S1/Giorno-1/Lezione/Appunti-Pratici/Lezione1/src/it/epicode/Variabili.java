package it.epicode;

public class Variabili {
    public static void main(String[] args) {
        int x; /*dichiarazione di variabile*/

        x = 4; // assegnazione variabile
        x=6; // riassegnazione variabile

        boolean b = true; //dichiarazione ed assegnazione

        char c = 'd'; //solo con apici singoli

        double d = 3.3; //possiamo mettere anche intero, lui automaticamente lo trasformerà con la virgola

        String s = "benvenuti in epicode"; //le stringhe devono essere messe tra doppi apici

        String fraseConcatenata = s+x+4;

        System.out.println(fraseConcatenata);
        final int y = 3; // variabile non più modificabile
    }
}
