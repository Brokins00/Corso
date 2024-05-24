package it.nextdevs.gestioneDispositivi.service;

import it.nextdevs.gestioneDispositivi.dto.DispositivoDto;
import it.nextdevs.gestioneDispositivi.enums.StatoDispositivo;
import it.nextdevs.gestioneDispositivi.exception.DipendenteNonTrovatoException;
import it.nextdevs.gestioneDispositivi.exception.DispositivoNonTrovatoException;
import it.nextdevs.gestioneDispositivi.model.Dipendente;
import it.nextdevs.gestioneDispositivi.model.Dispositivo;
import it.nextdevs.gestioneDispositivi.repository.DipendenteRepository;
import it.nextdevs.gestioneDispositivi.repository.DispositivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DispositivoService {
    @Autowired
    private DispositivoRepository dispositivoRepository;
    @Autowired
    private DipendenteRepository dipendenteRepository;

    public Page<Dispositivo> getAllDispositivi(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return dispositivoRepository.findAll(pageable);
    }

    public Optional<Dispositivo> getDispositivoById(Integer id) {
        return dispositivoRepository.findById(id);
    }

    public String saveDispositivo(DispositivoDto dispositivoDto) {
        Dispositivo dispositivo = new Dispositivo();
        dispositivo.setModello(dispositivoDto.getModello());
        dispositivo.setTipoDispositivo(dispositivoDto.getTipoDispositivo());
        dispositivo.setStatoDispositivo(dispositivoDto.getStatoDispositivo());

        dispositivoRepository.save(dispositivo);
        return "Dispositivo create con questo id: "+dispositivo.getId();
    }

    public Dispositivo updateDispositivo(Integer id, DispositivoDto dispositivoDto) {
        Optional<Dispositivo> dispositivoOptional = getDispositivoById(id);

        if (dispositivoOptional.isPresent()) {
            Dispositivo dispositivo = dispositivoOptional.get();
            dispositivo.setStatoDispositivo(dispositivoDto.getStatoDispositivo());
            dispositivo.setTipoDispositivo(dispositivoDto.getTipoDispositivo());
            dispositivo.setModello(dispositivoDto.getModello());

            return dispositivoRepository.save(dispositivo);
        } else {
            throw new DispositivoNonTrovatoException("Dispositivo con id "+id+" non trovato");
        }
    }

    public String deleteDispositivo(Integer id) {
        Optional<Dispositivo> dispositivoOptional = getDispositivoById(id);

        if (dispositivoOptional.isPresent()) {
            dispositivoRepository.delete(dispositivoOptional.get());
            return "Dispositivo con id "+id+" cancellato con successo";
        } else {
            throw new DispositivoNonTrovatoException("Dispositivo con id "+id+" non trovato");
        }
    }

    public String assegnaDispositivo(Integer idDis, Integer idDip) {
        Optional<Dipendente> dipendenteOptional = dipendenteRepository.findById(idDip);
        if (dipendenteOptional.isPresent()) {
            Optional<Dispositivo> dispositivoOptional = getDispositivoById(idDis);
            if (dispositivoOptional.isPresent()) {
                Dispositivo dispositivo = dispositivoOptional.get();
                dispositivo.setDipendente(dipendenteOptional.get());
                dispositivo.setStatoDispositivo(StatoDispositivo.ASSEGNATO);
                dispositivoRepository.save(dispositivo);
                return "Dispositivo con id "+idDis+" assegnato al dipendente con id "+idDip;
            } else {
                throw new DispositivoNonTrovatoException("Dispositivo con id "+idDis+" non trovato");
            }
        } else {
            throw new DipendenteNonTrovatoException("Dipendente con id "+idDip+" non trovato");
        }
    }
}
