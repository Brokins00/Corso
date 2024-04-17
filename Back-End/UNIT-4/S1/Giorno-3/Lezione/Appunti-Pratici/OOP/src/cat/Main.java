package cat;

public class Main {
    public static void main(String[] args) {
        Cat thor = new Cat("Thor", 3, "Russian Blue", "Brown");
        Cat rambo = new Cat("Rambo", 4, "Maine Coon", "Brown");

        thor.sleep();

        rambo.play();
    }
}
