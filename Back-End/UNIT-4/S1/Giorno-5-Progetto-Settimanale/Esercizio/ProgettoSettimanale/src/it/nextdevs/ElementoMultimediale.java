package it.nextdevs;

public abstract class ElementoMultimediale {
    private String titolo;
    private int durata;
    private int volume;

    public ElementoMultimediale(String titolo) {
        this.titolo = titolo;
    }

    public ElementoMultimediale(String titolo, int durata, int volume) {
        this.titolo = titolo;
        this.durata = durata;
        this.volume = volume;
    }

    public String getTitolo() {
        return this.titolo;
    }

    public int getDurata() {
        return this.durata;
    }

    public int getVolume() {
        return this.volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    protected void show() {

    }
}
