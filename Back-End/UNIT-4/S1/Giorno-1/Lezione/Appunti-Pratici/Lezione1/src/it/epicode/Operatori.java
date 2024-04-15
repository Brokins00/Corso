package it.epicode;

import java.util.Scanner;

public class Operatori {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserisci un numero");
        int x = scanner.nextInt();
        System.out.println("Inserisci un altro numero");
        int y = scanner.nextInt();

        System.out.println("La somma è: "+(x+y));
    }
}
