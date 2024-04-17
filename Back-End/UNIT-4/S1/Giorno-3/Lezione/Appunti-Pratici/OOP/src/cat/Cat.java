package cat;

public class Cat {
    /*
    * Variabili di istanza
    */
    private String name;
    private int age;
    private String color;
    private String breed;

    /*
    * Constructor default del compilatore
    */
    public Cat(String name, int age, String breed, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.breed = breed;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return this.color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBreed() {
        return this.breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    /*
    * Metodi di istanza
    */
    public void sleep() {
        System.out.println("Dormendo");
    }

    public void play() {
        System.out.println("Giocando");
    }

    public void feed() {
        System.out.println("Mangiando");
    }
}
