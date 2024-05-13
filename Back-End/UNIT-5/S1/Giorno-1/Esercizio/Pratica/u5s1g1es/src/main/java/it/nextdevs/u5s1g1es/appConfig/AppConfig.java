package it.nextdevs.u5s1g1es.appConfig;

import it.nextdevs.u5s1g1es.beans.Drink;
import it.nextdevs.u5s1g1es.beans.Menu;
import it.nextdevs.u5s1g1es.beans.Pizza;
import it.nextdevs.u5s1g1es.beans.Topping;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppConfig {
    @Bean
    public Pizza margherita() {
        Pizza pizza = new Pizza();
        pizza.setName("Margherita");
        pizza.setPrice(4.99);
        pizza.setCalories(1104);
        pizza.setToppings(new ArrayList<>(List.of(
                new Topping("Tomato", 0.99, 25),
                new Topping("Cheese", 0.69, 92)
        )));
        return pizza;
    }
    @Bean
    public Pizza hawaiianPizza() {
        Pizza pizza = new Pizza();
        pizza.setName("Hawaiian Pizza");
        pizza.setPrice(6.49);
        pizza.setCalories(1024);
        pizza.setToppings(new ArrayList<>(List.of(
                new Topping("Tomato", 0.99, 25),
                new Topping("Cheese", 0.69, 92),
                new Topping("Ham", 0.99, 35),
                new Topping("Pineapple", 0.79, 24)
        )));
        return pizza;
    }
    @Bean
    public Pizza salamiPizza() {
        Pizza pizza = new Pizza();
        pizza.setName("Salami Pizza");
        pizza.setPrice(5.99);
        pizza.setCalories(1160);
        pizza.setToppings(new ArrayList<>(List.of(
                new Topping("Tomato", 0.99, 25),
                new Topping("Cheese", 0.69, 92),
                new Topping("Salami", 0.99, 86)
        )));
        return pizza;
    }
    @Bean
    public Topping tomato() {
        Topping topping = new Topping();
        topping.setName("Tomato");
        topping.setPrice(0.99);
        topping.setCalories(25);
        return topping;
    }
    @Bean
    public Topping cheese() {
        Topping topping = new Topping();
        topping.setName("Cheese");
        topping.setPrice(0.69);
        topping.setCalories(92);
        return topping;
    }
    @Bean
    public Topping ham() {
        Topping topping = new Topping();
        topping.setName("Ham");
        topping.setPrice(0.99);
        topping.setCalories(35);
        return topping;
    }
    @Bean
    public Topping onions() {
        Topping topping = new Topping();
        topping.setName("Onions");
        topping.setPrice(0.69);
        topping.setCalories(22);
        return topping;
    }
    @Bean
    public Topping pineapple() {
        Topping topping = new Topping();
        topping.setName("Pineapple");
        topping.setPrice(0.79);
        topping.setCalories(24);
        return topping;
    }
    @Bean
    public Topping salami() {
        Topping topping = new Topping();
        topping.setName("Salami");
        topping.setPrice(0.99);
        topping.setCalories(86);
        return topping;
    }
    @Bean
    public Drink lemonade() {
        Drink drink = new Drink();
        drink.setName("Lemonade");
        drink.setCalories(128);
        drink.setPrice(1.29);
        return drink;
    }
    @Bean
    public Drink water() {
        Drink drink = new Drink();
        drink.setName("Water");
        drink.setCalories(0);
        drink.setPrice(1.29);
        return drink;
    }
    @Bean
    public Drink wine() {
        Drink drink = new Drink();
        drink.setName("Wine");
        drink.setCalories(607);
        drink.setPrice(7.49);
        return drink;
    }
    @Bean
    public Menu menu() {
        Menu menu = new Menu();
        menu.setPizzas(List.of(
                margherita(),
                hawaiianPizza(),
                salamiPizza()
        ));
        menu.setToppings(List.of(
                tomato(),
                cheese(),
                ham(),
                onions(),
                pineapple(),
                salami()
        ));
        menu.setDrinks(List.of(
                lemonade(),
                water(),
                wine()
        ));
        return menu;
    }
}
