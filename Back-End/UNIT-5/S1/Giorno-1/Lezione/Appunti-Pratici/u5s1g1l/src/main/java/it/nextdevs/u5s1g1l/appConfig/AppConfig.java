package it.nextdevs.u5s1g1l.appConfig;

import it.nextdevs.u5s1g1l.bean.Studente;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public Studente getStudente() {
        Studente studente = new Studente();
        studente.setNome("Fabio");
        studente.setCognome("Brogi");
        studente.setIndirizzo("Via chi se la cerca, 25");
        return studente;
    }
}
