package it.epicode.esercizio3;

public class Volontario implements DipendenteI {
    private String nome;
    private int eta;
    private String CV;

    public Volontario(String nome, int eta, String CV) {
        this.nome = nome;
        this.eta = eta;
        this.CV = CV;
    }

    @Override
    public void checkIn() {
        System.out.println("Il volontario "+this.nome+" è entrato in servizio");
    }
}
