package it.nextdevs.gestionePrenotazioni.repository;

import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import it.nextdevs.gestionePrenotazioni.enums.TipoPostazione;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostazioneRepository extends JpaRepository<Postazione, Integer> {
    List<Postazione> findByTipoPostazioneAndEdificio_Citta(TipoPostazione tipo, String citta);
}
