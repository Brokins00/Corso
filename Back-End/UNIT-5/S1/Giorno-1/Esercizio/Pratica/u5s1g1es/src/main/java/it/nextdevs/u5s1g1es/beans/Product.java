package it.nextdevs.u5s1g1es.beans;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Product {
    private int calories;
    private double price;

    public Product(int calories, double price) {
        this.calories = calories;
        this.price = price;
    }

    public Product() {
    }
}
