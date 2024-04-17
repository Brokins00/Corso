package it.epicode.esercizio3;

public class Cliente {
    private String codice;
    private String nomeCognome;
    private String email;
    private String iscrizione;

    public Cliente(String codice, String nomeCognome, String email, String iscrizione) {
        this.codice = codice;
        this.nomeCognome = nomeCognome;
        this.email = email;
        this.iscrizione = iscrizione;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getNomeCognome() {
        return nomeCognome;
    }

    public void setNomeCognome(String nomeCognome) {
        this.nomeCognome = nomeCognome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIscrizione() {
        return iscrizione;
    }
}
