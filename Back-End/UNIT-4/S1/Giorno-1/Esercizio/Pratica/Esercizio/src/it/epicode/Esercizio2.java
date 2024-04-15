package it.epicode;

import java.util.Scanner;

public class Esercizio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Quante stringhe vuoi concatenare?");
        int numStringhe = scanner.nextInt();
        String[] array = new String[numStringhe];
        scanner.nextLine();
        for (int i = 0; i < numStringhe; i++) {
            array[i] = scanner.nextLine();
        }
        StringBuilder concatenata = new StringBuilder();
        StringBuilder inversa = new StringBuilder();
        for (int i=0; i < numStringhe; i++) {
            concatenata.append(array[i]).append(" ");
        }
        for (int i=numStringhe-1; i >= 0; i--) {
            inversa.append(array[i]).append(" ");
        }
        System.out.println("Concatenata: "+concatenata);
        System.out.println("Inversa: "+inversa);
    }
}
