package it.nextdevs.u5s1g4es.beans;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Product {
    @Id
    @GeneratedValue
    private int id;
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
