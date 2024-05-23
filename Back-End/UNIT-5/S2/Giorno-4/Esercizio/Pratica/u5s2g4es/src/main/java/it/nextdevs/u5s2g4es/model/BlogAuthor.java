package it.nextdevs.u5s2g4es.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class BlogAuthor {
    @Id
    @GeneratedValue
    private Integer id;
    private String nome;
    private String cognome;
    private String email;
    private String dataDiNascita;
    private String avatar;
    @OneToMany(mappedBy = "blogAuthor")
    private List<BlogPost> blogPosts;
}
