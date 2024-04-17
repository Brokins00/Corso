package ecommerce;

public class Articolo {
    private String codice;
    private String descrizione;
    private double prezzo;
    private int quantita;

    public Articolo(String codice, String descrizione, double prezzo, int quantita) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.quantita = quantita;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }
}
