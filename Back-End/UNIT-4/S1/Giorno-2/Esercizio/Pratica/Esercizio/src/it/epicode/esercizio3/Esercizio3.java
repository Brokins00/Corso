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
            if (!(input.indexOf(":q") == 0)) {
                String[] splittedString = input.split("");
                String splittedString2 = String.join(",", splittedString);
                System.out.println("Stringa divisa: "+ splittedString2);
            }
        } while (!(input.indexOf(":q") == 0));

        scanner.close();
        System.out.println("Applicazione chiusa");
    }
}
