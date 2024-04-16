package it.epicode.esercizio3;

import java.util.Arrays;
import java.util.Scanner;

public class Esercizio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input;
        do {
            System.out.println("Inserisci una stringa (o digita ':q' per uscire)");
            input = scanner.nextLine();
            if (!input.equals(":q")) {
                String[] splittedString = input.split(",");
                System.out.println("Stringa divisa: "+ Arrays.toString(splittedString));
            }
        } while (!input.equals(":q"));

        scanner.close();
        System.out.println("Applicazione chiusa");
    }
}
