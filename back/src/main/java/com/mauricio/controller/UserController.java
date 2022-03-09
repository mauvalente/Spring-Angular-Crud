package com.mauricio.controller;

import java.util.List;
import java.util.Optional;

import com.mauricio.model.User;
import com.mauricio.repository.UserRepository;
import com.mauricio.business.UserBusiness;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor // lombok adiciona todos as propriedades no construtor
public class UserController {

    private final UserBusiness userBusiness;
    
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4201")
    // or @RequestMapping(method = RequestMethod.GET)
    public List<User> list() {
        return userBusiness.list();
    }

    @GetMapping(value = "{id}")
    @CrossOrigin(origins = "http://localhost:4201")
    // or @RequestMapping(method = RequestMethod.GET)
    public Optional<User> findById(@PathVariable("id") Long id) {
        return userBusiness.findById(id);
    }


    @PostMapping
    @CrossOrigin(origins = "http://localhost:4201")
    public User create(@RequestBody User user) 
    {
        return userBusiness.create(user);
    }

    @PutMapping
    @CrossOrigin(origins = "http://localhost:4201")
    public User update(@RequestBody User user)
    {
        return userBusiness.update(user);
    }

    @DeleteMapping
    @CrossOrigin(origins = "http://localhost:4201")
    public void delete(@RequestBody Long id)
    {
        userBusiness.delete(id);
    }
}