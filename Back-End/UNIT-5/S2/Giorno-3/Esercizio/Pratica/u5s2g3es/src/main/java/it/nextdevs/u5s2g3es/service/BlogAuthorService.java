package it.nextdevs.u5s2g3es.service;

import it.nextdevs.u5s2g3es.dto.BlogAuthorDto;
import it.nextdevs.u5s2g3es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g3es.model.BlogAuthor;
import it.nextdevs.u5s2g3es.repository.BlogAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogAuthorService {
    @Autowired
    private BlogAuthorRepository blogAuthorRepository;

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
}
