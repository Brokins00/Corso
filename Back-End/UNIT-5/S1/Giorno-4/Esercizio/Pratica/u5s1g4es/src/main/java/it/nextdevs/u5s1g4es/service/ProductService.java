package it.nextdevs.u5s1g4es.service;

import it.nextdevs.u5s1g4es.beans.Product;
import it.nextdevs.u5s1g4es.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public void inserisciProdotto(Product prodotto) {
        productRepository.save(prodotto);
    }

    public Product getProduct(int id) {
        return productRepository.findById(id).get();
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public void cancellaProdotto(int id) {
        productRepository.deleteById(id);
    }

    public List<Product> getProdottiByNome(String nome) {
        return productRepository.findByName(nome);
    }

    public List<Product> getProdottiByPartialNome(String nome) {
        return productRepository.findByNameLike(nome);
    }
}
