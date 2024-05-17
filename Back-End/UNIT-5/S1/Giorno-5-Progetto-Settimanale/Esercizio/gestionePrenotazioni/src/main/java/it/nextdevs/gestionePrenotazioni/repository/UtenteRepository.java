package it.nextdevs.gestionePrenotazioni.repository;

import it.nextdevs.gestionePrenotazioni.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UtenteRepository extends JpaRepository<Utente, Integer> {
    public Utente findByUserName(String userName);
}
