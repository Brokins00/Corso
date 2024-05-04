package nextdevs.dao;

import nextdevs.entity.Rivista;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import java.util.List;

public class RivistaDAO {
    private EntityManager em;

    public RivistaDAO(EntityManager em) {
        this.em = em;
    }

    public void save(Rivista rivista) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.persist(rivista);
        et.commit();
    }

    public Rivista getByIsbn(String isbn) {
        return em.find(Rivista.class, isbn);
    }

    public void update(Rivista rivista) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.merge(rivista);
        et.commit();
    }

    public List<Rivista> findAll() {
        return em.createQuery("SELECT r FROM Rivista r", Rivista.class).getResultList();
    }

    public void delete(Rivista rivista) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.remove(rivista);
        et.commit();
    }
}
