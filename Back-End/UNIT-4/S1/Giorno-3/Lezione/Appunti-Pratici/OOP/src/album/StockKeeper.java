package album;

public class StockKeeper {
    public String name;

    public StockKeeper(String name){
        this.name = name;
    }

    public void manageAlbum(Album album, String name, String artist, double price, int numberOfCopies) {
        album.name = name;
        album.artist = artist;
        album.price = price;
        album.numberOfCopies = numberOfCopies;

        System.out.println("Album gestito da: "+this.name);
        System.out.println("Dettagli Album");
        System.out.println("Album name: "+album.name);
        System.out.println("Artista Album: "+album.artist);
        System.out.println("Prezzo Album: "+album.price);
        System.out.println("Numero di copie Album: "+album.numberOfCopies);
    }
}
