package it.nextdevs.u5s2g4es.controller;

import it.nextdevs.u5s2g4es.dto.BlogAuthorDto;
import it.nextdevs.u5s2g4es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g4es.model.BlogAuthor;
import it.nextdevs.u5s2g4es.service.BlogAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.data.domain.Page;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public String saveAuthor(@RequestBody @Validated BlogAuthorDto blogAuthor, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new RuntimeException(bindingResult.getAllErrors().stream().
                    map(DefaultMessageSourceResolvable::getDefaultMessage).reduce("", ((s, s2) -> s+s2)));
        }
        return blogAuthorService.saveAuthor(blogAuthor);
    }

    @PutMapping("/authors/{id}")
    public BlogAuthor updateAuthor(@PathVariable Integer id, @RequestBody @Validated BlogAuthorDto blogAuthor, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new RuntimeException(bindingResult.getAllErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage).reduce("", ((s, s2)-> s+s2)));
        }
        return blogAuthorService.updateAuthor(id, blogAuthor);
    }

    @DeleteMapping("/authors/{id}")
    public String deleteAuthor(@PathVariable Integer id) {
        return blogAuthorService.deleteAuthor(id);
    }

    @PatchMapping("/authors/{id}")
    public String patchAvatarAutore(@RequestBody MultipartFile foto, @PathVariable Integer id) throws IOException {
        return blogAuthorService.patchAvatarAuthor(id, foto);
    }
}
