package com.mauricio.controller;

import java.util.List;

import com.mauricio.model.User;
import com.mauricio.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor // lombok adiciona todos as propriedades no construtor
public class UserController {

    private final UserRepository userRepository;
    
    @GetMapping
    // or @RequestMapping(method = RequestMethod.GET)
    public List<User> list() {
        return userRepository.findAll();
    }
}