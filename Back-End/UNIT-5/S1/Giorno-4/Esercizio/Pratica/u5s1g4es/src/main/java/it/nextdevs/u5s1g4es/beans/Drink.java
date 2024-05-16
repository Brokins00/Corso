package it.nextdevs.u5s1g4es.beans;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@ToString(callSuper = true)
public class Drink extends Product {
    private String name;

    public Drink(String name, double price, int calories) {
        super(calories, price);
        this.name = name;
    }

    public Drink() {
    }
}
