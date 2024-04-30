import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("u4s3g2_esercizio");
        EntityManager em = emf.createEntityManager();

        EventoDAO dao = new EventoDAO(em);

        Evento e1 = new Evento();
        e1.setDescrizione("Pigiama Party");
        e1.setDataEvento(LocalDate.of(2024, 5, 1));
        e1.setTipoEvento(TipoEvento.PRIVATO);
        e1.setNumeroMassimoPartecipanti(10);

        dao.save(e1);

        Evento e2 = dao.getById(8);
        System.out.println(e2);

        e2.setDescrizione("Pigiama Party Privato");

        dao.save(e2);

        Evento e3 = new Evento();
        e3.setDescrizione("Disco Dance");
        e3.setDataEvento(LocalDate.of(2024, 5, 15));
        e3.setTipoEvento(TipoEvento.PUBBLICO);
        e3.setNumeroMassimoPartecipanti(100);

        dao.save(e3);

        dao.delete(e1);
    }
}
