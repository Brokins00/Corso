package it.nextdevs.u5s2g3es.service;

import it.nextdevs.u5s2g3es.dto.BlogPostDto;
import it.nextdevs.u5s2g3es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g3es.model.BlogAuthor;
import it.nextdevs.u5s2g3es.model.BlogPost;
import it.nextdevs.u5s2g3es.repository.BlogAuthorRepository;
import it.nextdevs.u5s2g3es.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BlogPostService {
    @Autowired
    private BlogPostRepository blogPostRepository;
    @Autowired
    private BlogAuthorRepository blogAuthorRepository;

    public Page<BlogPost> getAllPosts(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return blogPostRepository.findAll(pageable);
    }

    public Optional<BlogPost> getPostById(Integer id) {
        return blogPostRepository.findById(id);
    }

    public String savePost(BlogPostDto blogPost) {
        BlogPost post = new BlogPost();
        post.setCategoria(blogPost.getCategoria());
        post.setCover(blogPost.getCover());
        post.setContenuto(blogPost.getContenuto());
        post.setTempoDiLettura(blogPost.getTempoDiLettura());

        Optional<BlogAuthor> authorOpt = blogAuthorRepository.findById(blogPost.getAuthorId());

        if (authorOpt.isPresent()) {
            BlogAuthor blogAuthor = authorOpt.get();
            post.setBlogAuthor(blogAuthor);
            blogPostRepository.save(post);
            return "Post creato con questo id: "+post.getId();
        } else {
            throw new BlogAuthorNonTrovatoException("Autore con id "+blogPost.getAuthorId()+" non trovato");
        }
    }

    public BlogPost updatePost(Integer id, BlogPostDto blogPost) {
        Optional<BlogPost> postOpt = getPostById(id);

        if (postOpt.isPresent()) {
            BlogPost post = postOpt.get();
            post.setCategoria(blogPost.getCategoria());
            post.setContenuto(blogPost.getContenuto());
            post.setTempoDiLettura(blogPost.getTempoDiLettura());

            Optional<BlogAuthor> authorOpt = blogAuthorRepository.findById(blogPost.getAuthorId());

            if (authorOpt.isPresent()) {
                BlogAuthor blogAuthor = authorOpt.get();
                post.setBlogAuthor(blogAuthor);
                blogPostRepository.save(post);
                return post;
            } else {
                throw new BlogAuthorNonTrovatoException("Autore con id "+blogPost.getAuthorId()+" non trovato");
            }
        } else {
            throw new RuntimeException("Post con id "+id+" non trovato");
        }
    }

    public String deletePost(Integer id) {
        Optional<BlogPost> postOpt = getPostById(id);

        if (postOpt.isPresent()) {
            blogPostRepository.delete(postOpt.get());
            return "Post con id "+id+" cancellato con successo";
        } else {
            throw new RuntimeException("Post con id "+id+" non trovato");
        }
    }
}
