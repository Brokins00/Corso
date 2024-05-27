package it.nextdevs.gestioneDispositivi.controller;

import it.nextdevs.gestioneDispositivi.dto.DipendenteDto;
import it.nextdevs.gestioneDispositivi.dto.DipendenteLoginDto;
import it.nextdevs.gestioneDispositivi.exception.ParametriErratiException;
import it.nextdevs.gestioneDispositivi.service.AuthService;
import it.nextdevs.gestioneDispositivi.service.DipendenteService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private DipendenteService dipendenteService;

    @PostMapping("/auth/register")
    public String register(@RequestBody @Validated DipendenteDto dipendenteDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new ParametriErratiException(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage).
                    reduce("", (s, s2) -> s+s2));
        }

        return dipendenteService.saveDipendente(dipendenteDto);
    }

    @PostMapping("/auth/login")
    public String login(@RequestBody @Validated DipendenteLoginDto dipendenteLoginDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new ParametriErratiException(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage).
                    reduce("", (s, s2) -> s+s2));
        }

        return authService.authenticateUserAndCreateToken(dipendenteLoginDto);
    }
}
