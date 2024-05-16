package it.nextdevs.u5s1g4es.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@ToString(callSuper = true)
public class Topping extends Product {
    private String name;
    private double price;
    @ManyToOne()
    @JoinColumn(name = "pizza_id")
    private Pizza pizza;

    public Topping(String name, double price, int calories) {
        super(calories, price);
        this.name = name;
    }

    public Topping() {
    }
}
