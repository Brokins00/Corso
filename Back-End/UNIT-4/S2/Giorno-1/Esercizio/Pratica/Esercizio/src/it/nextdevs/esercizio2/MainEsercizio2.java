package it.nextdevs.esercizio2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class MainEsercizio2 {
    private static final Logger logger = LoggerFactory.getLogger("MainEsercizio2");
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            logger.info("Inserisci il numero di km percorsi:");
            //System.out.println("Inserisci il numero di km percorsi:");
            double kmPercorsi = scanner.nextDouble();

            if (kmPercorsi < 0) {
                throw new Exception("I km percorsi devono essere positivi o uguali a 0");
            }

            logger.info("Inserisci i litri di carburante consumati:");
            //System.out.println("Inserisci i litri di carburante consumati:");
            double litriConsumati = scanner.nextDouble();

            if (litriConsumati == 0) {
                throw new ArithmeticException("Divisione per zero: i litri consumati non possono essere zero.");
            } else if (litriConsumati < 0) {
                throw new Exception("I litri consumati devono essere positivi");
            }

            double kmPerLitro = kmPercorsi / litriConsumati;
            logger.info("Il numero di km/litro percorsi è: " + kmPerLitro);
            //System.out.println("Il numero di km/litro percorsi è: " + kmPerLitro);
        } catch (ArithmeticException e) {
            logger.error("Errore: " + e.getMessage());
            //System.out.println("Errore: " + e.getMessage());
        } catch (Exception e) {
            logger.error("Si è verificato un errore: " + e.getMessage());
            //System.out.println("Si è verificato un errore: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}
