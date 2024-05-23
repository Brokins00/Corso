package it.nextdevs.u5s2g4es.service;

import com.cloudinary.Cloudinary;
import it.nextdevs.u5s2g4es.dto.BlogAuthorDto;
import it.nextdevs.u5s2g4es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g4es.model.BlogAuthor;
import it.nextdevs.u5s2g4es.repository.BlogAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;

@Service
public class BlogAuthorService {
    @Autowired
    private BlogAuthorRepository blogAuthorRepository;
    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private JavaMailSenderImpl javaMailSender;

    public Page<BlogAuthor> getAllAuthors(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return blogAuthorRepository.findAll(pageable);
    }

    public Optional<BlogAuthor> getAuthorById(Integer id) {
        return blogAuthorRepository.findById(id);
    }

    public String saveAuthor(BlogAuthorDto blogAuthor) {
        BlogAuthor author = new BlogAuthor();
        author.setAvatar(blogAuthor.getAvatar());
        author.setEmail(blogAuthor.getEmail());
        author.setNome(blogAuthor.getNome());
        author.setCognome(blogAuthor.getCognome());
        author.setDataDiNascita(blogAuthor.getDataDiNascita());
        blogAuthorRepository.save(author);
        sendMail(author.getEmail());
        return "Autore creato con questo id: "+ author.getId();
    }

    public BlogAuthor updateAuthor(Integer id, BlogAuthorDto blogAuthor) {
        Optional<BlogAuthor> authorOpt = getAuthorById(id);

        if (authorOpt.isPresent()) {
            BlogAuthor author = authorOpt.get();
            author.setNome(blogAuthor.getNome());
            author.setCognome(blogAuthor.getCognome());
            author.setEmail(blogAuthor.getEmail());
            author.setAvatar("https://ui-avatars.com/api/?name="+blogAuthor.getNome()+"+"+blogAuthor.getCognome());
            author.setDataDiNascita(blogAuthor.getDataDiNascita());
            return blogAuthorRepository.save(author);
        } else {
            throw new BlogAuthorNonTrovatoException("Autore con id "+id+" non trovato");
        }
    }

    public String deleteAuthor(Integer id) {
        Optional<BlogAuthor> authorOpt = getAuthorById(id);

        if (authorOpt.isPresent()) {
            blogAuthorRepository.delete(authorOpt.get());
            return "Autore con id "+id+" cancellata con successo";
        } else {
            throw new BlogAuthorNonTrovatoException("Autore con id "+id+" non trovato");
        }
    }

    public String patchAvatarAuthor(Integer id, MultipartFile avatar) throws IOException {
        Optional<BlogAuthor> authorOpt = getAuthorById(id);

        if (authorOpt.isPresent()) {
            String url = (String) cloudinary.uploader().upload(avatar.getBytes(), Collections.emptyMap()).get("url");
            BlogAuthor blogAuthor = authorOpt.get();
            blogAuthor.setAvatar(url);
            blogAuthorRepository.save(blogAuthor);
            return "Autore con id "+id+" aggiornato correttamente con l'avatar inviato";
        } else {
            throw new RuntimeException("Post con id "+id+" non trovato");
        }
    }

    private void sendMail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Registrazione Servizio rest");
        message.setText("Registrazione al servizio rest avvenuta con successo");

        javaMailSender.send(message);
    }
}
