package it.nextdevs.gestionePrenotazioni.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Entity
@Data
@Table(name = "utenti")
public class Utente {
    @Id
    private String userName;
    private String nomeCompleto;
    private String email;
    @OneToMany(mappedBy = "utente", fetch = FetchType.EAGER)
    private List<Prenotazione> prenotazioni;

    @Override
    public String toString() {
        return "Utente{" +
                "userName='" + userName + '\'' +
                ", nomeCompleto='" + nomeCompleto + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
