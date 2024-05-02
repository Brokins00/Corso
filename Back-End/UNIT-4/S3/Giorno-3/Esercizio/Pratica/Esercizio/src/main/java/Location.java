import javax.persistence.*;

@Entity
@Table(name="locations")
public class Location {
    @Id
    @GeneratedValue
    private Integer id;
    private String nome;
    private String citta;

    public Location(String nome, String citta) {
        this.nome = nome;
        this.citta = citta;
    }

    public Location() {

    }

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCitta() {
        return citta;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }
}
