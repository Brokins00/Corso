package it.nextdevs.u5s2g4es.service;

import com.cloudinary.Cloudinary;
import it.nextdevs.u5s2g4es.dto.BlogPostDto;
import it.nextdevs.u5s2g4es.exception.BlogAuthorNonTrovatoException;
import it.nextdevs.u5s2g4es.model.BlogAuthor;
import it.nextdevs.u5s2g4es.model.BlogPost;
import it.nextdevs.u5s2g4es.repository.BlogAuthorRepository;
import it.nextdevs.u5s2g4es.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class BlogPostService {
    @Autowired
    private BlogPostRepository blogPostRepository;
    @Autowired
    private BlogAuthorRepository blogAuthorRepository;
    @Autowired
    private Cloudinary cloudinary;

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

    public String patchCoverPost(Integer id, MultipartFile cover) throws IOException {
        Optional<BlogPost> blogPostOptional = getPostById(id);

        if (blogPostOptional.isPresent()) {
            String url = (String) cloudinary.uploader().upload(cover.getBytes(), Collections.emptyMap()).get("url");
            BlogPost blogPost = blogPostOptional.get();
            blogPost.setCover(url);
            blogPostRepository.save(blogPost);
            return "Post con id "+id+" aggiornato correttamente con la cover inviata";
        } else {
            throw new RuntimeException("Post con id "+id+" non trovato");
        }
    }
}
