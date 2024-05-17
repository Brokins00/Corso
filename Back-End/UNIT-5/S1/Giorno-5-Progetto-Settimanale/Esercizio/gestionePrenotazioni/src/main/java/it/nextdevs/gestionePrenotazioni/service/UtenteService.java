package it.nextdevs.gestionePrenotazioni.service;

import it.nextdevs.gestionePrenotazioni.entity.Utente;
import it.nextdevs.gestionePrenotazioni.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtenteService {
    @Autowired
    private UtenteRepository utenteRepository;

    public void inserisciUtente(Utente utente) {
        utenteRepository.save(utente);
    }

    public Utente getUtenteByUserName(String userName) {
        return utenteRepository.findByUserName(userName);
    }
}
