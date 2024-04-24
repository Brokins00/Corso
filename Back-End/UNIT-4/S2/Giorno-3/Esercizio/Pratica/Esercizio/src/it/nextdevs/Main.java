package it.nextdevs;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Product> prodotti = new ArrayList<>();

        Product prodotto1 = new Product(1L, "Epicode The School", "Books", 4900.0);
        Product prodotto2 = new Product(2L, "Dark Night", "Books", 20.0);
        Product prodotto3 = new Product(3L, "One Piece", "Books", 110.0);

        Product prodotto4 = new Product(4L, "Pannolini", "Baby", 4.99);
        Product prodotto5 = new Product(5L, "Biberon", "Baby", 2.99);
        Product prodotto6 = new Product(6L, "Giocattolo", "Baby", 9.99);

        Product prodotto7 = new Product(7L, "Maglietta Boy", "Boys", 9.99);
        Product prodotto8 = new Product(8L, "Petardi", "Boys", 4.99);
        Product prodotto9 = new Product(9L, "Nerf", "Boys", 14.99);

        prodotti.add(prodotto1);
        prodotti.add(prodotto2);
        prodotti.add(prodotto3);
        prodotti.add(prodotto4);
        prodotti.add(prodotto5);
        prodotti.add(prodotto6);
        prodotti.add(prodotto7);
        prodotti.add(prodotto8);
        prodotti.add(prodotto9);

        // Esercizio 1
        List<Product> libriCostosi = prodotti.stream()
                .filter(product -> product.getCategory().equals("Books"))
                .filter(product -> product.getPrice() > 100)
                .toList();
        libriCostosi.forEach(prodotto -> {
            System.out.println("ID: "+prodotto.getId());
            System.out.println("Nome: "+prodotto.getName());
            System.out.println("Categoria: "+prodotto.getCategory());
            System.out.println("Prezzo: "+prodotto.getPrice());
            System.out.println("-------------------------");
        });

        // Esercizio 2
        Customer utente1 = new Customer(1L, "Francesco Naccari", 1);
        Customer utente2 = new Customer(2L, "Alexandru Ionut Ifrim", 1);
        Customer utente3 = new Customer(3L, "Enrico Cirotto", 1);
        Customer utente4 = new Customer(4L, "Antonio Copetti", 2);
        Order ordine1 = new Order(1L, "ordinato", LocalDate.now(), LocalDate.now().plusDays(3), new ArrayList<Product>(), utente1);
        ordine1.addProduct(prodotto2);
        ordine1.addProduct(prodotto6);
        ordine1.addProduct(prodotto7);
        ordine1.addProduct(prodotto1);
        Order ordine2 = new Order(2L, "ordinato", LocalDate.now(), LocalDate.now().plusDays(3), new ArrayList<Product>(), utente4);
        ordine2.addProduct(prodotto3);
        ordine2.addProduct(prodotto6);
        ordine2.addProduct(prodotto9);
        ordine2.addProduct(prodotto4);
        Order ordine3 = new Order(3L, "ordinato", LocalDate.now(), LocalDate.now().plusDays(3), new ArrayList<Product>(), utente3);
        ordine3.addProduct(prodotto1);
        ordine3.addProduct(prodotto7);
        ordine3.addProduct(prodotto8);
        ordine3.addProduct(prodotto3);
        Order ordine4 = new Order(4L, "ordinato", LocalDate.now(), LocalDate.now().plusDays(3), new ArrayList<Product>(), utente2);
        ordine4.addProduct(prodotto5);
        ordine4.addProduct(prodotto1);
        ordine4.addProduct(prodotto8);
        ordine4.addProduct(prodotto9);

        List<Order> ordini = Order.getOrders();
        List<Order> ordiniBaby = ordini.stream()
                .filter(order -> {
                    List<Product> prodottiBaby = order.getProducts().stream()
                            .filter(product -> product.getCategory()
                                .equals("Baby"))
                            .toList();
                    return !prodottiBaby.isEmpty();
                }).toList();
        ordiniBaby.forEach(order -> {
            System.out.println("ID: "+order.getId());
            System.out.println("Status: "+order.getStatus());
            System.out.println("Data Ordine: "+order.getOrderDate());
            System.out.println("Data Consegna: "+order.getDeliveryDate());
            Integer articoli = order.getProducts().size();
            System.out.println("Articoli: "+articoli);
            System.out.println("Cliente ID: "+order.getCustomer().getId());
            System.out.println("Nome Cliente: "+order.getCustomer().getName());
            System.out.println("Tier: "+order.getCustomer().getTier());
            System.out.println("----------------------------");
        });

        System.out.println("--------------------------");
        System.out.println("Esercizio 3");
        System.out.println("--------------------------");

        List<Product> boysProd = prodotti.stream()
                .filter(product -> product.getCategory().equals("Boys"))
                .peek(product -> product.setPrice(product.getPrice()*0.9))
                .toList();
        boysProd.forEach(prodotto -> {
            System.out.println("ID: "+prodotto.getId());
            System.out.println("Nome: "+prodotto.getName());
            System.out.println("Categoria: "+prodotto.getCategory());
            System.out.println("Prezzo Scontato: "+(Math.round(prodotto.getPrice()*100.0) / 100.0));
            System.out.println("-------------------------");
        });

        System.out.println("----------------------");
        System.out.println("Esercizio 4");
        System.out.println("----------------------");

        List<Order> ordTier2 = ordini.stream()
                .filter(order -> order.getCustomer().getTier() == 2)
                .filter(order -> {
                    LocalDate inizio = LocalDate.of(2024, 2, 1);
                    LocalDate fine = LocalDate.of(2024, 5, 1);
                    return order.getOrderDate().isAfter(inizio) && order.getOrderDate().isBefore(fine);
                })
                .toList();
        List<Product> prodOrdTier2 = new ArrayList<>();
        ordTier2.forEach(order -> {
            prodOrdTier2.addAll(order.getProducts());
        });
        prodOrdTier2.forEach(prodotto -> {
            System.out.println("ID: "+prodotto.getId());
            System.out.println("Nome: "+prodotto.getName());
            System.out.println("Categoria: "+prodotto.getCategory());
            System.out.println("Prezzo: "+prodotto.getPrice());
            System.out.println("-------------------------");
        });
    }
}
