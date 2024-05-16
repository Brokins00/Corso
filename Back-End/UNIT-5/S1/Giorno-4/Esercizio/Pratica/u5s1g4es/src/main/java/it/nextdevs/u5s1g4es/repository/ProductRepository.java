package it.nextdevs.u5s1g4es.repository;

import it.nextdevs.u5s1g4es.beans.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    public List<Product> findByName(String name);
    public List<Product> findByNameLike(String name);
}
