package it.nextdevs;

public class Audio extends ElementoMultimediale implements Riproducibile {
    public Audio(String titolo, int durata, int volume) {
        super(titolo, durata, volume);
    }

    public void play() {
        for (int i = 0; i < this.getDurata(); i++) {
            String volume = "!".repeat(Math.max(0, this.getVolume()));
            System.out.println(this.getTitolo()+" "+ volume);
        }
    }

    public void alzaVolume() {
        if (this.getVolume() < 10) {
            this.setVolume(this.getVolume() + 1);
        }
    }

    public void abbassaVolume() {
        if (this.getVolume() > 0) {
            this.setVolume(this.getVolume() - 1);
        }
    }
}
