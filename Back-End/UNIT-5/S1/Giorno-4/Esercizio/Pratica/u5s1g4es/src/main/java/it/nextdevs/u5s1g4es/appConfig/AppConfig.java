package it.nextdevs.u5s1g4es.appConfig;

import it.nextdevs.u5s1g4es.beans.*;
import it.nextdevs.u5s1g4es.service.ProductService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.ArrayList;
import java.util.List;

@Configuration
@PropertySource("application.properties")
public class AppConfig {
    @Bean(name="pizza_margherita")
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
    @Bean(name="hawaiian_pizza")
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
    @Bean(name="salami_pizza")
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
    @Bean(name="lista_pizze")
    public List<Pizza> listPizza() {
        return new ArrayList<>(List.of(salamiPizza(), hawaiianPizza(), margherita()));
    }
    @Bean(name = "toppings_tomato")
    public Topping tomato() {
        Topping topping = new Topping();
        topping.setName("Tomato");
        topping.setPrice(0.99);
        topping.setCalories(25);
        return topping;
    }
    @Bean(name = "toppings_cheese")
    public Topping cheese() {
        Topping topping = new Topping();
        topping.setName("Cheese");
        topping.setPrice(0.69);
        topping.setCalories(92);
        return topping;
    }
    @Bean(name = "toppings_ham")
    public Topping ham() {
        Topping topping = new Topping();
        topping.setName("Ham");
        topping.setPrice(0.99);
        topping.setCalories(35);
        return topping;
    }
    @Bean(name = "toppings_onions")
    public Topping onions() {
        Topping topping = new Topping();
        topping.setName("Onions");
        topping.setPrice(0.69);
        topping.setCalories(22);
        return topping;
    }
    @Bean(name = "toppings_pineapple")
    public Topping pineapple() {
        Topping topping = new Topping();
        topping.setName("Pineapple");
        topping.setPrice(0.79);
        topping.setCalories(24);
        return topping;
    }
    @Bean(name = "toppings_salami")
    public Topping salami() {
        Topping topping = new Topping();
        topping.setName("Salami");
        topping.setPrice(0.99);
        topping.setCalories(86);
        return topping;
    }
    @Bean(name = "lemonade")
    public Drink lemonade() {
        Drink drink = new Drink();
        drink.setName("Lemonade");
        drink.setCalories(128);
        drink.setPrice(1.29);
        return drink;
    }
    @Bean(name = "water")
    public Drink water() {
        Drink drink = new Drink();
        drink.setName("Water");
        drink.setCalories(0);
        drink.setPrice(1.29);
        return drink;
    }
    @Bean(name = "wine")
    public Drink wine() {
        Drink drink = new Drink();
        drink.setName("Wine");
        drink.setCalories(607);
        drink.setPrice(7.49);
        return drink;
    }
    @Bean(name = "menu")
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
    @Bean("Tavolo1")
    Tavolo getTavolo1(@Value("${coperto.prezzo}") double prezzoCoperto) {
        Tavolo tavolo = new Tavolo();
        tavolo.setNumero(1);
        tavolo.setPosti(5);
        tavolo.setOccupato(false);
        tavolo.setCostoCoperto(prezzoCoperto);
        return tavolo;
    }
}
