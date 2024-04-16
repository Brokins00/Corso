package it.epicode.esercizio4;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class Esercizio4 {
    public static void main(String[] args) throws InterruptedException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserisci il tempo del countdown");
        int input = scanner.nextInt();
        for (int i = input; i >= 0; i--){
            TimeUnit.SECONDS.sleep(1);
            System.out.println("Countdown: "+i);
        }
    }
}
