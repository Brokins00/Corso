package it.nextdevs.u5s1g4es;

import it.nextdevs.u5s1g4es.beans.*;
import it.nextdevs.u5s1g4es.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MenuInizializzazione implements CommandLineRunner {
    @Autowired
    private ProductService productService;

    @Override
    public void run(String... args) throws Exception {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(U5s1g4esApplication.class);
        try {
            Menu m = (Menu) ctx.getBean("menu");
            m.printMenu();

            Tavolo t1 = (Tavolo) ctx.getBean("Tavolo1");

            Ordine o1 = new Ordine();
            o1.setPosti(4);
            o1.setTavolo(t1);
            o1.addProdotto(ctx.getBean("pizza_margherita", Pizza.class));
            o1.addProdotto(ctx.getBean("hawaiian_pizza", Pizza.class));
            o1.addProdotto(ctx.getBean("salami_pizza", Pizza.class));
            o1.addProdotto(ctx.getBean("lemonade", Drink.class));
            o1.addProdotto(ctx.getBean("lemonade", Drink.class));
            o1.addProdotto(ctx.getBean("wine", Drink.class));

            System.out.println("DETTAGLI TAVOLO 1");
            o1.print();
            System.out.println("CONTO TAVOLO 1");
            System.out.println(o1.calcolaTotale(o1.getTavolo().getCostoCoperto()));
//            List<Pizza> pizze = (List<Pizza>) ctx.getBean("lista_pizze");
//            pizze.forEach(pizza -> {
//                productService.inserisciProdotto(pizza);
//            });
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        } finally {
             ctx.close();
        }
    }
}
