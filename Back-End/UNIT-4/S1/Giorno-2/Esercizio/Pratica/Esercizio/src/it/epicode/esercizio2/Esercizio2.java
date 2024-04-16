package it.epicode.esercizio2;

import java.util.Scanner;

public class Esercizio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digita un numero intero");
        int num = scanner.nextInt();
        System.out.println(controllaNumero(num));

        scanner.close();
        System.out.println("Applicazione chiusa");
    }

    public static String controllaNumero(int num) {
        return switch (num) {
            case 0 -> "zero";
            case 1 -> "uno";
            case 2 -> "due";
            case 3 -> "tre";
            default -> "Errore, il numero non è compreso tra 0 e 3";
        };
    }
}
