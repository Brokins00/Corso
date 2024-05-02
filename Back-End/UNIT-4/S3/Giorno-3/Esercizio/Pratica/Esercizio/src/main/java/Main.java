import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("u4s3g3");
        EntityManager em = emf.createEntityManager();

        EventoDAO dao = new EventoDAO(em);
        LocationDao locationDao = new LocationDao(em);
        PersonaDao personaDao = new PersonaDao(em);
        PartecipazioneDao partecipazioneDao = new PartecipazioneDao(em);

        Evento e1 = new Evento();
        e1.setTitolo("Pigiama Party");
        e1.setDescrizione("Pigiama Party");
        e1.setDataEvento(LocalDate.of(2024, 5, 1));
        e1.setTipoEvento(TipoEvento.PRIVATO);
        e1.setNumeroMassimoPartecipanti(10);

        dao.save(e1);

        Location location = new Location();
        location.setNome("Colosseo");
        location.setCitta("Roma");
        locationDao.save(location);

        e1.setLocation(location);
        dao.save(e1);

        Persona p1 = new Persona();
        p1.setNome("Dario");
        p1.setCognome("Del Giudice");
        p1.setEmail("dadegi@epicode.it");
        p1.setSesso(Sesso.M);
        personaDao.save(p1);

        Persona p2 = new Persona();
        p2.setNome("Pippo");
        p2.setCognome("Pluto");
        p2.setEmail("pippopluto@epicode.it");
        p2.setSesso(Sesso.F);
        personaDao.save(p2);

        Partecipazione partecipazione = new Partecipazione();
        partecipazione.setEvento(e1);
        partecipazione.setPersona(p1);
        partecipazione.setStato(Stato.DA_CONFERMARE);

        partecipazioneDao.save(partecipazione);
    }
}
