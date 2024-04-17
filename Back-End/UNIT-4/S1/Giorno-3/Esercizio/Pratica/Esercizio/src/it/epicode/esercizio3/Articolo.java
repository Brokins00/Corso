package it.epicode.esercizio3;

public class Articolo {
    private String codice;
    private String descrizione;
    private double prezzo;
    private int pezzi;

    public Articolo(String codice, String descrizione, double prezzo, int pezzi){
        this.codice = codice;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.pezzi = pezzi;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public int getPezzi() {
        return pezzi;
    }

    public void setPezzi(int pezzi) {
        this.pezzi = pezzi;
    }
}
