package it.nextdevs.gestioneDispositivi.service;

import it.nextdevs.gestioneDispositivi.dto.DipendenteLoginDto;
import it.nextdevs.gestioneDispositivi.exception.NonAutorizzatoException;
import it.nextdevs.gestioneDispositivi.model.Dipendente;
import it.nextdevs.gestioneDispositivi.security.JwtTool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private DipendenteService dipendenteService;
    @Autowired
    private JwtTool jwtTool;

    public String authenticateUserAndCreateToken(DipendenteLoginDto dipendenteLoginDto) {
        Dipendente dipendente = dipendenteService.getDipendenteByEmail(dipendenteLoginDto.getEmail());
        if (dipendente.getPassword().equals(dipendenteLoginDto.getPassword())) {
            return jwtTool.createToken(dipendente);
        } else {
            throw new NonAutorizzatoException("Errore nell'autorizzazione, prova a fare di nuovo il login");
        }
    }
}
