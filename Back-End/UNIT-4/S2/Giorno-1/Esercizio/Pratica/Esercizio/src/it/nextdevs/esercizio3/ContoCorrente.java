package it.nextdevs.esercizio3;

public class ContoCorrente {
    String titolare;
    int nMovimenti;
    final int maxMovimenti = 50;
    double saldo;

    public ContoCorrente(String titolare, double saldo) {
        this.titolare = titolare;
        this.saldo = saldo;
        this.nMovimenti = 0;
    }

    public void preleva(double x) throws BancaException {
        double saldoTemp = this.saldo;
        if (this.nMovimenti < this.maxMovimenti) {
            saldoTemp -= x;
        } else {
            saldoTemp -= (x-0.50);
        }
        if (saldoTemp < 0) {
            throw new BancaException("Saldo negativo non consentito");
        }
        this.saldo = saldoTemp;
        nMovimenti++;
    }

    public double restituisciSaldo(){
        return this.saldo;
    }
}
