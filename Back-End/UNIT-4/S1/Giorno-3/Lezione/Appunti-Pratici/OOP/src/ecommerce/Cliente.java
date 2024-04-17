package ecommerce;

import java.util.Date;

public class Cliente {
    private String codice;
    private String nomeCognome;
    private String email;
    private Date iscrizione;

    public String getNomeCognome() {
        return nomeCognome;
    }

    public Cliente(String codice, String nomeCognome, String email, Date iscrizione) {
        this.codice = codice;
        this.nomeCognome = nomeCognome;
        this.email = email;
        this.iscrizione = iscrizione;
    }
}
