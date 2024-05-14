package it.nextdevs.u5s1g2.beans;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Topping extends Product {
    private String name;
    private double price;

    public Topping(String name, double price, int calories) {
        super(calories, price);
        this.name = name;
    }

    public Topping() {
    }

    @Override
    public String toString() {
        return "Topping{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
