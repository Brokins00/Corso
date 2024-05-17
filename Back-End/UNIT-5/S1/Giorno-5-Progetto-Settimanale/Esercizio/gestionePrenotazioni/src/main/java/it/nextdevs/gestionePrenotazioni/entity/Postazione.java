package it.nextdevs.gestionePrenotazioni.entity;

import it.nextdevs.gestionePrenotazioni.enums.TipoPostazione;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "postazioni")
public class Postazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String descrizione;
    @Enumerated(EnumType.STRING)
    private TipoPostazione tipoPostazione;
    private Integer maxOccupanti;
    @ManyToOne
    @JoinColumn(name = "edificio_id")
    private Edificio edificio;

    @Override
    public String toString() {
        return "Postazione{" +
                "id=" + id +
                ", descrizione='" + descrizione + '\'' +
                ", tipoPostazione=" + tipoPostazione +
                ", maxOccupanti=" + maxOccupanti +
                '}';
    }
}
