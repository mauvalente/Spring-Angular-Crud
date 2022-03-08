package com.mauricio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Entity;

import java.util.Date;

import lombok.Data;

@Data
@Entity
// @Table("usuarios") for example... inform table name
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 70, nullable = false)
    private String username;

    @Column(length = 20, nullable = false)
    private String password;

    @Column(name = "is_enabled")
    private boolean isEnabled;

    @Column(name = "register_date")
    private Date registerDate;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String surname;

    @Column(length = 100, nullable = false)
    private String email;

    @Column(length = 30)
    private String phone;
}