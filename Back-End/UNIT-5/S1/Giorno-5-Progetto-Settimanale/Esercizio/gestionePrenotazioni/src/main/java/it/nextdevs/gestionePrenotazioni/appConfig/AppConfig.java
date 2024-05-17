package it.nextdevs.gestionePrenotazioni.appConfig;

import it.nextdevs.gestionePrenotazioni.entity.Edificio;
import it.nextdevs.gestionePrenotazioni.entity.Postazione;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class AppConfig {
    @Bean(name = "edificio1")
    @Scope("prototype")
    public Edificio edificio() {
        Edificio edificio = new Edificio();
        edificio.setCitta("Roma");
        edificio.setIndirizzo("Via Ponzio Pilato");
        edificio.setNome("Epicode");
        return edificio;
    }
}
