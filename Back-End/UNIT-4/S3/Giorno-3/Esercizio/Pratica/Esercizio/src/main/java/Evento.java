import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "eventi")
public class Evento {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "eventi_id_table")
    @TableGenerator(name="eventi_id_table", initialValue = 0, allocationSize = 1)
    private Integer id;

    private String titolo;
    @Column(name = "data_evento")
    private LocalDate dataEvento;
    @Column(nullable = false, length = 50)
    private String descrizione;
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_evento")
    private TipoEvento tipoEvento;
    @Column(name = "numero_massimo_partecipanti")
    private Integer numeroMassimoPartecipanti;

    @OneToMany(mappedBy = "evento")
    private List<Partecipazione> partecipazioni;

    @OneToOne
    @JoinColumn(name = "location_id")
    private Location location;

    public Evento(String titolo, LocalDate dataEvento, String descrizione, TipoEvento tipoEvento, Integer numeroMassimoPartecipanti) {
        this.titolo = titolo;
        this.dataEvento = dataEvento;
        this.descrizione = descrizione;
        this.tipoEvento = tipoEvento;
        this.numeroMassimoPartecipanti = numeroMassimoPartecipanti;
        this.partecipazioni = new ArrayList<>();
    }

    public Evento() {

    }

    public Integer getId() {
        return id;
    }

    public String getTitolo() {
        return titolo;
    }

    public List<Partecipazione> getPartecipazioni() {
        return partecipazioni;
    }

    public Location getLocation() {
        return location;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public void setPartecipazioni(List<Partecipazione> partecipazioni) {
        this.partecipazioni = partecipazioni;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public LocalDate getDataEvento() {
        return dataEvento;
    }

    public void setDataEvento(LocalDate dataEvento) {
        this.dataEvento = dataEvento;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public TipoEvento getTipoEvento() {
        return tipoEvento;
    }

    public void setTipoEvento(TipoEvento tipoEvento) {
        this.tipoEvento = tipoEvento;
    }

    public Integer getNumeroMassimoPartecipanti() {
        return numeroMassimoPartecipanti;
    }

    public void setNumeroMassimoPartecipanti(Integer numeroMassimoPartecipanti) {
        this.numeroMassimoPartecipanti = numeroMassimoPartecipanti;
    }

    @Override
    public String toString() {
        return "Evento{" +
                "id=" + id +
                ", dataEvento=" + dataEvento +
                ", descrizione='" + descrizione + '\'' +
                ", tipoEvento=" + tipoEvento +
                ", numeroMassimoPartecipanti=" + numeroMassimoPartecipanti +
                '}';
    }
}
