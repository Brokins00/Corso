package it.nextdevs.u5s2g3es.controller;

import it.nextdevs.u5s2g3es.dto.BlogAuthorDto;
import it.nextdevs.u5s2g3es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g3es.model.BlogAuthor;
import it.nextdevs.u5s2g3es.service.BlogAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BlogAuthorController {
    @Autowired
    private BlogAuthorService blogAuthorService;

    @GetMapping("/authors")
    public Page<BlogAuthor> getAllAuthors(@RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "15") int size,
                                          @RequestParam(defaultValue = "id") String sortBy) {
        return blogAuthorService.getAllAuthors(page, size, sortBy);
    }

    @GetMapping("/authors/{id}")
    public BlogAuthor getAuthorById(@PathVariable Integer id) {
        Optional<BlogAuthor> authorOpt = blogAuthorService.getAuthorById(id);

        if (authorOpt.isPresent()) {
            return authorOpt.get();
        } else {
            throw new BlogAuthorNonTrovatoException("Autore con id "+id+" non trovato");
        }
    }

    @PostMapping("/authors")
    public String saveAuthor(@RequestBody BlogAuthorDto blogAuthor) {
        return blogAuthorService.saveAuthor(blogAuthor);
    }

    @PutMapping("/authors/{id}")
    public BlogAuthor updateAuthor(@PathVariable Integer id, @RequestBody BlogAuthorDto blogAuthor) {
        return blogAuthorService.updateAuthor(id, blogAuthor);
    }

    @DeleteMapping("/authors/{id}")
    public String deleteAuthor(@PathVariable Integer id) {
        return blogAuthorService.deleteAuthor(id);
    }
}
