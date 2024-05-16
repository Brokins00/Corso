package it.nextdevs.u5s1g4es.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@ToString(callSuper = true)
public class Pizza extends Product {
    private String name;
    private double price;
    @OneToMany(mappedBy = "pizza")
    private List<Topping> toppings;

    public Pizza(String name, double price, int calories, List<Topping> toppings) {
        super(calories, price);
        this.name = name;
        this.toppings = toppings;
    }

    public Pizza() {
    }
}
