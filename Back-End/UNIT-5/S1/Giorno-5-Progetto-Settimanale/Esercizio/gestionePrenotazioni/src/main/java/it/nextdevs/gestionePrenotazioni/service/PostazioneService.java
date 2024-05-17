package it.nextdevs.gestionePrenotazioni.service;

import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import it.nextdevs.gestionePrenotazioni.entity.Prenotazione;
import it.nextdevs.gestionePrenotazioni.entity.Utente;
import it.nextdevs.gestionePrenotazioni.repository.PostazioneRepository;
import it.nextdevs.gestionePrenotazioni.repository.PrenotazioneRepository;
import it.nextdevs.gestionePrenotazioni.repository.UtenteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PostazioneService {
    @Autowired
    private PostazioneRepository postazioneRepository;
    @Autowired
    private UtenteRepository utenteRepository;
    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public void inserisciPostazione(Postazione postazione) {
        postazioneRepository.save(postazione);
    }

    public Postazione getPostazioneById(Integer id) {
        return postazioneRepository.findById(id).orElseThrow();
    }
}
