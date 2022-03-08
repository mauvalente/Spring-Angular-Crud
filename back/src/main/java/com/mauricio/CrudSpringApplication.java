package com.mauricio;

import com.mauricio.model.User;
import com.mauricio.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(UserRepository userRepository) {
		return args -> {
			userRepository.deleteAll();

			User user = new User();
			user.setName("Mauricio");
			user.setSurname("Valente");
			user.setUsername("mauricio");
			user.setPassword("teste123");
			user.setEmail("mau.valente@gmail.com");

			userRepository.save(user);
		};
	}
}
