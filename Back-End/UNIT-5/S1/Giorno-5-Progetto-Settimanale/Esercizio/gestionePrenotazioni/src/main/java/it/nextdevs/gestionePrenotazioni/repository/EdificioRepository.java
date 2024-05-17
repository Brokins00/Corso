package it.nextdevs.gestionePrenotazioni.repository;

import it.nextdevs.gestionePrenotazioni.entity.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdificioRepository extends JpaRepository<Edificio, Integer> {
}
