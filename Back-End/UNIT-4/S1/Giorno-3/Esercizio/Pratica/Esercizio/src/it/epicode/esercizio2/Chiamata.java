package it.epicode.esercizio2;

public class Chiamata {
    private int minuti;
    private String numero;

    public Chiamata(int minuti, String numero) {
        this.minuti = minuti;
        this.numero = numero;
    }

    public void setMinuti(int minuti) {
        this.minuti = minuti;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public int getMinuti() {
        return minuti;
    }

    public String getNumero() {
        return numero;
    }
}
