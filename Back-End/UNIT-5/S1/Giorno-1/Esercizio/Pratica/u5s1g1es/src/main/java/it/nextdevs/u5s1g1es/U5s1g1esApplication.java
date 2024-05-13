package it.nextdevs.u5s1g1es;

import it.nextdevs.u5s1g1es.appConfig.AppConfig;
import it.nextdevs.u5s1g1es.beans.Drink;
import it.nextdevs.u5s1g1es.beans.Menu;
import it.nextdevs.u5s1g1es.beans.Pizza;
import it.nextdevs.u5s1g1es.beans.Topping;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class U5s1g1esApplication {

	public static void main(String[] args) {
		SpringApplication.run(U5s1g1esApplication.class, args);
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		Menu menu = context.getBean(Menu.class);
		System.out.println("Pizzas - Calories - Price");
		for (Pizza pizza : menu.getPizzas()) {
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
		for (Topping topping : menu.getToppings()) {
			System.out.println(topping.getName()+" | "+topping.getCalories()+" | "+topping.getPrice());
		}
		System.out.println();
		System.out.println("Drinks - Calories - Price");
		for (Drink drink : menu.getDrinks()) {
			System.out.println(drink.getName()+" | "+drink.getCalories()+" | "+drink.getPrice());
		}
	}

}
