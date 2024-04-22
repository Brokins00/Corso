package it.nextdevs.esercizio3;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ContoOnLine extends ContoCorrente {
    private static final Logger logger = LoggerFactory.getLogger("Banca");
    double maxPrelievo;

    public ContoOnLine(String titolare, double saldo, double maxP) {
        super(titolare, saldo);
        this.maxPrelievo = maxP;
    }

    public void stampaSaldo() {
//        System.out.println("Titolare: "+this.titolare+" - Saldo: "+this.saldo+" - Num movimenti: "+this.nMovimenti+
//                " - Massimo movimenti: "+this.maxMovimenti+" - Massimo prelievi possibile: "+this.maxPrelievo);
        logger.info("Titolare: "+this.titolare+" - Saldo: "+this.saldo+" - Num movimenti: "+this.nMovimenti+
                " - Massimo movimenti: "+this.maxMovimenti+" - Massimo prelievi possibile: "+this.maxPrelievo);
    }

    public void preleva(double x) throws BancaException {
        if (x <= this.maxPrelievo){
            super.preleva(x);
        } else {
            throw new BancaException("L'importo indicato ha superato il limite di prelievo");
        }
    }
}
