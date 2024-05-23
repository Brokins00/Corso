package it.nextdevs.u5s2g4es.controller;

import it.nextdevs.u5s2g4es.dto.BlogPostDto;
import it.nextdevs.u5s2g4es.model.BlogPost;
import it.nextdevs.u5s2g4es.service.BlogPostService;
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
public class BlogPostController {
    @Autowired
    private BlogPostService blogPostService;

    @GetMapping("/blogPosts")
    public Page<BlogPost> getAllPosts(@RequestParam(defaultValue = "0") int page,
                                      @RequestParam(defaultValue = "15") int size,
                                      @RequestParam(defaultValue = "id") String sortBy) {
        return blogPostService.getAllPosts(page, size, sortBy);
    }

    @GetMapping("/blogPosts/{id}")
    public BlogPost getPostById(@PathVariable Integer id) {
        Optional<BlogPost> postOpt = blogPostService.getPostById(id);

        if (postOpt.isPresent()) {
            return postOpt.get();
        } else {
            throw new RuntimeException("Post con id "+id+" non trovato");
        }
    }

    @PostMapping("/blogPosts")
    public String savePost(@RequestBody @Validated BlogPostDto blogPost, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new RuntimeException(bindingResult.getAllErrors().stream().
                    map(DefaultMessageSourceResolvable::getDefaultMessage).reduce("", ((s, s2) -> s+s2)));
        }
        return blogPostService.savePost(blogPost);
    }

    @PutMapping("/blogPosts/{id}")
    public BlogPost updatePost(@PathVariable Integer id, @RequestBody @Validated BlogPostDto blogPost, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new RuntimeException(bindingResult.getAllErrors().stream().
                    map(DefaultMessageSourceResolvable::getDefaultMessage).reduce("", ((s, s2) -> s+s2)));
        }
        return blogPostService.updatePost(id, blogPost);
    }

    @DeleteMapping("/blogPosts/{id}")
    public String deletePost(@PathVariable Integer id) {
        return blogPostService.deletePost(id);
    }

    @PatchMapping("/blogPosts/{id}")
    public String patchCoverPost(@RequestBody MultipartFile foto, @PathVariable Integer id) throws IOException {
        return blogPostService.patchCoverPost(id, foto);
    }
}
