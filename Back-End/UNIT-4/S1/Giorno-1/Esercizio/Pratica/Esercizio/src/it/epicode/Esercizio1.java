package it.epicode;

import java.util.Arrays;
import java.util.Scanner;

public class Esercizio1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digita il primo numero da moltiplicare:");
        int num1 = scanner.nextInt();
        System.out.println("Digita il secondo numero da moltiplicare:");
        int num2 = scanner.nextInt();
        int risultato = moltiplica(num1, num2);
        System.out.println("Risultato: "+risultato);
        //
        scanner.nextLine();
        //
        System.out.println("Scrivi una stringa:");
        String stringa = scanner.nextLine();
        System.out.println("Scrivi un numero intero:");
        int num3 = scanner.nextInt();
        String risultato2 = concatena(stringa, num3);
        System.out.println("Risultato: "+risultato2);
        //
        System.out.println("Di quante stringhe deve essere l'array?");
        int num4 = scanner.nextInt();
        String[] arrayStringato = new String[num4];
        scanner.nextLine();
        for (int i = 0; i < num4; i++) {
            System.out.println("Cosa ci sarà scritto all'indice "+i+"?");
            arrayStringato[i] = scanner.nextLine();
        }
        System.out.println("Quale stringa vuoi aggiungere infine?");
        String nuovaStringa = scanner.nextLine();
        String[] nuovoArray = inserisciInArray(arrayStringato, nuovaStringa);
        System.out.println(Arrays.toString(nuovoArray));
    }
    
    public static int moltiplica(int num1, int num2) {
        return num1 * num2;
    }

    public static String concatena(String stringa, int num) {
        return stringa+num;
    }

    public static String[] inserisciInArray(String[] array, String stringa) {
        String[] arrayNew = new String[array.length+1];
        if (array.length >= 2) {
            for (int i = 0; i < array.length+1; i++) {
                if (i < 2) {
                    arrayNew[i] = array[i];
                } else if (i == 2) {
                    arrayNew[i] = stringa;
                } else {
                    arrayNew[i] = array[i-1];
                }
            }
        } else {
            for (int i = 0; i < array.length+1; i++) {
                if (i < array.length) {
                    arrayNew[i] = array[i];
                } else {
                    arrayNew[i] = stringa;
                }
            }
        }
        return arrayNew;
    }
}
