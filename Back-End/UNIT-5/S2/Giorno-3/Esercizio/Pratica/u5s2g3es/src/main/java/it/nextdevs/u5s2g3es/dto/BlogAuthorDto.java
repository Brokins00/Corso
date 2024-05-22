package it.nextdevs.u5s2g3es.dto;

import lombok.Data;

@Data
public class BlogAuthorDto {
    private String nome;
    private String cognome;
    private String email;
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
