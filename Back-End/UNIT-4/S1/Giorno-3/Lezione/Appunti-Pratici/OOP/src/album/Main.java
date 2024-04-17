package album;

public class Main {
    public static void main(String[] args) {
        StockKeeper johnDoe = new StockKeeper("John Doe");
        johnDoe.manageAlbum(new Album(), "Slippery When Wet", "Bon Jovi", 1000.00, 50);
    }
}
