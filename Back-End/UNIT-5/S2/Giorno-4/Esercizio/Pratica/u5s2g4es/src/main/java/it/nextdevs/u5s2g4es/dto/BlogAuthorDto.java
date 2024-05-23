package it.nextdevs.u5s2g4es.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BlogAuthorDto {
    @NotBlank
    @Size(max = 30, min = 1)
    private String nome;
    @NotBlank
    @Size(max = 30, min = 1)
    private String cognome;
    @Email
    @NotNull
    private String email;
    @NotBlank
    @Size(min = 6, max=10)
    private String dataDiNascita;
    private String avatar;

    public BlogAuthorDto(String nome, String cognome, String email, String dataDiNascita) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.dataDiNascita = dataDiNascita;
        this.avatar = "https://ui-avatars.com/api/?name="+this.nome+"+"+this.cognome;
    }
}
