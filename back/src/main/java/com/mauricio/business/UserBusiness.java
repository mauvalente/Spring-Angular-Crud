package com.mauricio.business;

import java.util.List;
import java.util.Date;
import java.util.Optional;

import com.mauricio.model.User;
import com.mauricio.repository.UserRepository;

import org.springframework.stereotype.Repository;
import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor // lombok adiciona todos as propriedades no construtor
public class UserBusiness {
    private final UserRepository userRepository;

    public List<User> list() {
        return userRepository.findAll();
    }

    public User create(User user) {

        user.setEnabled(true);
        user.setRegisterDate( new Date() );

        return userRepository.save(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public void delete(Long id) {
        Optional<User> user = this.findById(id);
        if (user.isPresent() )
            userRepository.delete( user.get() );
    }
}