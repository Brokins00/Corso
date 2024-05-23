package it.nextdevs.u5s2g4es.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class BlogPost {
    @Id
    @GeneratedValue
    private Integer id;
    private String categoria;
    private String cover;
    private String contenuto;
    private Integer tempoDiLettura;
    @ManyToOne
    @JoinColumn(name = "author_id")
    @JsonIgnore
    private BlogAuthor blogAuthor;
}
