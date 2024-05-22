package it.nextdevs.u5s2g3es.repository;

import it.nextdevs.u5s2g3es.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Integer> {
}
