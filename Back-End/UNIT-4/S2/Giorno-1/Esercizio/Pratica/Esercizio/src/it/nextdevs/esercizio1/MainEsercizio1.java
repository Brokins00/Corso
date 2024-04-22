package it.nextdevs.esercizio1;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class MainEsercizio1 {
    static Logger logger = LoggerFactory.getLogger("MainEsercizio1");
    public static void main(String[] args) {
        int[] array = new int[5];
        Random random = new Random();
        for (int i=0; i < array.length; i++) {
            int number;
            boolean estratto = false;
            do {
                number = random.nextInt(1, 11);
                estratto = false;
                for (int j=0; j < i; j++) {
                    if (array[j] == number) {
                        estratto = true;
//                        System.out.println("Numero "+number+" già presente");
                        logger.error("Numero "+number+" già presente");
                        break;
                    }
                }
            } while (estratto);
            array[i] = number;
            logger.info("Numero selezionato: "+number);
//            System.out.println("Numero selezionato: "+number);
        }
        logger.info("Risultato: "+ Arrays.toString(array));
        //System.out.println("Risultato: "+ Arrays.toString(array));
        Scanner scanner = new Scanner(System.in);
        int scelta = 0;
        programma:
        do {
            boolean continua = true;
            do {
                logger.info("Seleziona uno slot da 1 a 5 (0 per uscire dal programma)");
//                System.out.println("Seleziona uno slot da 1 a 5 (0 per uscire dal programma)");
                try {
                    scelta = scanner.nextInt();
                    if (!continua) {
                        continua = true;
                    }
                } catch (Exception e) {
                    //System.out.println("Devi inserire un numero intero");
                    logger.error("Devi inserire un numero intero");
                    continua = false;
                    continue;
                }
                if (scelta > array.length || scelta < 0) {
                    logger.error("Devi inserire un numero positivo e che sia tra 1 e 5");
                    //System.out.println("Devi inserire un numero positivo e che sia tra 1 e 5");
                    continua = false;
                } else if (scelta == 0) {
                    logger.error("Hai scelto di terminare il programma!");
                    //System.out.println("Hai scelto di terminare il programma!");
                    break programma;
                }
            } while (!continua);
            int nuovoNumero = 0;
            do {
                logger.info("Digita il nuovo valore da assegnare a questo slot");
                //System.out.println("Digita il nuovo valore da assegnare a questo slot");
                try {
                    nuovoNumero = scanner.nextInt();
                    if (!continua) {
                        continua = true;
                    }
                } catch (Exception e) {
                    logger.error("Devi inserire un numero intero");
                    //System.out.println("Devi inserire un numero intero");
                    continua = false;
                }
                if (nuovoNumero == 0) {
                    logger.info("Hai scelto di terminare il programma!");
                    //System.out.println("Hai scelto di terminare il programma!");
                    break programma;
                } else if (nuovoNumero < 0) {
                    logger.error("Devi inserire un numero positivo");
                    //System.out.println("Devi inserire un numero positivo");
                    continua = false;
                }
            } while (!continua);
            array[scelta-1] = nuovoNumero;
            logger.info("Nuovo array: "+Arrays.toString(array));
            //System.out.println("Nuovo array: "+Arrays.toString(array));
        } while (scelta != 0);
    }
}
