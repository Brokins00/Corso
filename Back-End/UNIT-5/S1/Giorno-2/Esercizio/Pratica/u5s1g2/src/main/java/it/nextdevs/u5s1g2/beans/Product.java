package it.nextdevs.u5s1g2.beans;

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

    @Override
    public String toString() {
        return "Product{" +
                "calories=" + calories +
                ", price=" + price +
                '}';
    }
}
