package it.nextdevs.u5s2g3es.dto;

import it.nextdevs.u5s2g3es.model.BlogAuthor;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class BlogPostDto {
    private String categoria;
    private String cover;
    private String contenuto;
    private Integer tempoDiLettura;
    private Integer authorId;

    public BlogPostDto(String categoria, String contenuto, Integer tempoDiLettura, Integer authorId) {
        this.categoria = categoria;
        this.contenuto = contenuto;
        this.tempoDiLettura = tempoDiLettura;
        this.cover = "https://picsum.photos/200/300";
        this.authorId = authorId;
    }
}
