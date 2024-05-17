package it.nextdevs.gestionePrenotazioni;

import it.nextdevs.gestionePrenotazioni.entity.Edificio;
import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import it.nextdevs.gestionePrenotazioni.entity.Prenotazione;
import it.nextdevs.gestionePrenotazioni.entity.Utente;
import it.nextdevs.gestionePrenotazioni.enums.TipoPostazione;
import it.nextdevs.gestionePrenotazioni.service.EdificioService;
import it.nextdevs.gestionePrenotazioni.service.PostazioneService;
import it.nextdevs.gestionePrenotazioni.service.PrenotazioneService;
import it.nextdevs.gestionePrenotazioni.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@PropertySource("application.properties")
public class Runner implements CommandLineRunner {
    @Autowired
    private EdificioService edificioService;
    @Autowired
    private PostazioneService postazioneService;
    @Autowired
    private UtenteService utenteService;
    @Autowired
    private PrenotazioneService prenotazioneService;
    @Override
    public void run(String... args) throws Exception {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(GestionePrenotazioniApplication.class);
//        Edificio edificio = (Edificio) ctx.getBean("edificio1");
//        edificioService.inserisciEdificio(edificio);
//        try {
//            Edificio edificio1 = edificioService.getEdificioById(1);
//            Postazione postazione1 = new Postazione();
//            postazione1.setEdificio(edificio1);
//            postazione1.setTipoPostazione(TipoPostazione.PRIVATO);
//            postazione1.setMaxOccupanti(1);
//            postazione1.setDescrizione("Postazione n°1");
//            postazioneService.inserisciPostazione(postazione1);
//        } catch (Exception e) {
//            System.err.println(e.getMessage());
//        }
//        try {
//            Edificio edificio1 = edificioService.getEdificioById(1);
//            Postazione postazione2 = new Postazione();
//            postazione2.setEdificio(edificio1);
//            postazione2.setTipoPostazione(TipoPostazione.OPENSPACE);
//            postazione2.setMaxOccupanti(5);
//            postazione2.setDescrizione("Postazione n°2");
//            postazioneService.inserisciPostazione(postazione2);
//        } catch (Exception e) {
//            System.err.println(e.getMessage());
//        }
//        Utente utente1 = new Utente();
//        utente1.setUserName("Brokins00");
//        utente1.setEmail("brokins2000@gmail.com");
//        utente1.setNomeCompleto("Fabio Brogi");
//        utenteService.inserisciUtente(utente1);
        try {
            Prenotazione prenotazione = prenotazioneService.prenotaPostazione("Brokins00", 1, LocalDate.now().plusMonths(1));
            System.out.println(prenotazione);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
}
