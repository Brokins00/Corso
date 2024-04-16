package it.epicode.esercizio1;

import java.util.Scanner;

public class Esercizio1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Scrivi una frase");
        String stringa = scanner.nextLine();
        boolean pari = stringaPariDispari(stringa);
        System.out.println("La frase fornita ha un numero di caratteri "+(pari ? "pari" : "dispari")+" perché contiene "+stringa.length()+" caratteri");
        System.out.println("Scrivi l'anno per controllare se è bisestile");
        int anno = scanner.nextInt();
        boolean bisestile = annoBisestile(anno);
        if (bisestile) {
            System.out.println("L'anno fornito "+anno+" è bisestile");
        } else {
            System.out.println("L'anno fornito "+anno+" NON è bisestile");
        }
        scanner.close();
        System.out.println("Applicazione chiusa");
    }

    public static boolean stringaPariDispari(String stringa) {
        return stringa.length()%2 == 0;
    }

    public static boolean annoBisestile(int anno) {
        if (anno%4 == 0) {
            return true;
        } else if (anno%100 == 0) {
            return anno % 400 == 0;
        }
        return false;
    }
}
