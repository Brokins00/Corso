package it.nextdevs.gestionePrenotazioni.repository;

import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import it.nextdevs.gestionePrenotazioni.entity.Prenotazione;
import it.nextdevs.gestionePrenotazioni.entity.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Integer> {
    List<Prenotazione> findByPostazioneAndData(Postazione postazione, LocalDate data);
    List<Prenotazione> findByUtenteAndData(Utente utente, LocalDate data);
}
