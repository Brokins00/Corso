package it.nextdevs.u5s1g1es.beans;

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
}
