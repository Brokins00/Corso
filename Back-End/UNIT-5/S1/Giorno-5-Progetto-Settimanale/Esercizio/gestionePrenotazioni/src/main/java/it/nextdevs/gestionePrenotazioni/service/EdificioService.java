package it.nextdevs.gestionePrenotazioni.service;

import it.nextdevs.gestionePrenotazioni.entity.Edificio;
import it.nextdevs.gestionePrenotazioni.repository.EdificioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EdificioService {
    @Autowired
    private EdificioRepository edificioRepository;

    public void inserisciEdificio(Edificio edificio) {
        edificioRepository.save(edificio);
    }

    public Edificio getEdificioById(Integer id) {
        return edificioRepository.findById(id).orElseThrow();
    }
}
