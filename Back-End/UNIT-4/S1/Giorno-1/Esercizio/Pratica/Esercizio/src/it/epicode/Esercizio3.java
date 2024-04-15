package it.epicode;

import java.util.Scanner;

public class Esercizio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Lato 1 rettangolo");
        double lat1 = scanner.nextDouble();
        System.out.println("Lato 2 rettangolo");
        double lat2 = scanner.nextDouble();
        double perimetro = perimetroRettangolo(lat1, lat2);
        System.out.println("Perimetro Rettangolo: "+perimetro);
        System.out.println("Scegli il numero da controllare");
        int num = scanner.nextInt();
        int pari = pariDispari(num);
        if (pari == 0) {
            System.out.println("Il numero "+num+" è pari. Risultato: "+pari);
        } else {
            System.out.println("Il numero "+num+" è dispari. Risultato: "+pari);
        }
        System.out.println("Lato 1 triangolo");
        double latT1 = scanner.nextDouble();
        System.out.println("Lato 2 triangolo");
        double latT2 = scanner.nextDouble();
        System.out.println("Lato 3 triangolo");
        double latT3 = scanner.nextDouble();
        double areaT = areaTriangolo(latT1, latT2, latT3);
        System.out.println("L'area del triangolo fornito è: "+areaT);
    }

    public static double perimetroRettangolo(double lat1, double lat2) {
        return (lat1+lat2) * 2;
    }

    public static int pariDispari(int num) {
        if (num % 2 == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    public static double areaTriangolo(double base, double lat1, double lat2) {
        double sp = (base+lat1+lat2) / 2;
        return Math.sqrt((sp * (sp - base)*(sp-lat1)*(sp-lat2)));
    }
}
