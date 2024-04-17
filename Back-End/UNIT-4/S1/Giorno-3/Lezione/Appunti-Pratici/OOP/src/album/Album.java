package album;

public class Album {
    public String name;
    public String artist;
    public double price;
    public int numberOfCopies;

    public void sellCopies(){
        if (this.numberOfCopies > 0) {
            this.numberOfCopies--;
            System.out.println("Un album è stato venduto!");
        } else {
            System.out.println("Nessun album disponibile!");
        }
    }

    public void orderCopies(int num) {
        this.numberOfCopies += num;
    }
}
