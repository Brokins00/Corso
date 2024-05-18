package it.nextdevs.gestionePrenotazioni.service;

import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import it.nextdevs.gestionePrenotazioni.entity.Prenotazione;
import it.nextdevs.gestionePrenotazioni.entity.Utente;
import it.nextdevs.gestionePrenotazioni.enums.TipoPostazione;
import it.nextdevs.gestionePrenotazioni.repository.PostazioneRepository;
import it.nextdevs.gestionePrenotazioni.repository.PrenotazioneRepository;
import it.nextdevs.gestionePrenotazioni.repository.UtenteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PrenotazioneService {
    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private PostazioneRepository postazioneRepository;

    @Autowired
    private UtenteRepository utenteRepository;

    public List<Postazione> ricercaPostazioni(TipoPostazione tipo, String citta) {
        return postazioneRepository.findByTipoPostazioneAndEdificio_Citta(tipo, citta);
    }

    @Transactional
    public Prenotazione prenotaPostazione(String userName, Integer postazioneId, LocalDate data) throws Exception {
        Utente utente = utenteRepository.findByUserName(userName);
        if (utente == null) {
            throw new Exception("Utente non trovato");
        }
        Postazione postazione = postazioneRepository.findById(postazioneId).orElseThrow(() -> new RuntimeException("Postazione non trovata"));

        List<Prenotazione> prenotazioniUtente = prenotazioneRepository.findByUtenteAndData(utente, data);
        if (!prenotazioniUtente.isEmpty()) {
            throw new Exception("L'utente ha già una prenotazione per questa data");
        }

        List<Prenotazione> prenotazioniPostazione = prenotazioneRepository.findByPostazioneAndData(postazione, data);
        if (!prenotazioniPostazione.isEmpty()) {
            if (prenotazioniPostazione.size() + 1 > postazione.getNumeroMax()) {
                throw new Exception("La postazione è occupato in quella data");
            }
        }

        Prenotazione prenotazione = new Prenotazione();
        prenotazione.setUtente(utente);
        prenotazione.setPostazione(postazione);
        prenotazione.setData(data);

        return prenotazioneRepository.save(prenotazione);
    }
}
