package it.nextdevs.u5s1g4es.beans;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Menu {
    private List<Pizza> pizzas;
    private List<Topping> toppings;
    private List<Drink> drinks;

    public void printMenu() {
        System.out.println("Pizzas - Calories - Price");
        for (Pizza pizza : this.getPizzas()) {
            StringBuilder name = new StringBuilder(pizza.getName() + " (");
            int index = 0;
            for (Topping topping : pizza.getToppings()) {
                if (index < (pizza.getToppings().size() - 1)) {
                    name.append(topping.getName()).append(", ");
                } else {
                    name.append(topping.getName());
                }
                index++;
            }
            name.append(")");
            System.out.println(name + " | "+pizza.getCalories() + " | " + pizza.getPrice());
        }
        System.out.println();
        System.out.println("Toppings - Calories - Price");
        for (Topping topping : this.getToppings()) {
            System.out.println(topping.getName()+" | "+topping.getCalories()+" | "+topping.getPrice());
        }
        System.out.println();
        System.out.println("Drinks - Calories - Price");
        for (Drink drink : this.getDrinks()) {
            System.out.println(drink.getName()+" | "+drink.getCalories()+" | "+drink.getPrice());
        }
    }
}
