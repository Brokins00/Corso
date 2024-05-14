package it.nextdevs.u5s1g2.beans;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Drink extends Product {
    private String name;

    public Drink(String name, double price, int calories) {
        super(calories, price);
        this.name = name;
    }

    public Drink() {
    }

    @Override
    public String toString() {
        return "Drink{" +
                "name='" + name + '\'' +
                '}';
    }
}
