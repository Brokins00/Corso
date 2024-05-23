package it.nextdevs.u5s2g4es.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BlogPostDto {
    @NotNull(message = "La categoria non può essere null")
    @Size(min = 1, max = 30)
    private String categoria;
    private String cover;
    private String contenuto;
    @NotBlank
    private Integer tempoDiLettura;
    @NotNull
    private Integer authorId;

    public BlogPostDto(String categoria, String contenuto, Integer tempoDiLettura, Integer authorId) {
        this.categoria = categoria;
        this.contenuto = contenuto;
        this.tempoDiLettura = tempoDiLettura;
        this.cover = "https://picsum.photos/200/300";
        this.authorId = authorId;
    }
}
