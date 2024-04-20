package it.epicode;

public abstract class ElementoMultimediale {
    private String title;
    private int duration;
    private int volume;

    public ElementoMultimediale(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

    public int getDuration() {
        return this.duration;
    }

    public int getVolume() {
        return this.volume;
    }

    public void play() {

    }

    public void show() {

    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public ElementoMultimediale(String title, int duration, int volume) {
        this.title = title;
        this.duration = duration;
        this.volume = volume;
    }
}
