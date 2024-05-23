package it.nextdevs.u5s2g4es.repository;

import it.nextdevs.u5s2g4es.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Integer> {
}
