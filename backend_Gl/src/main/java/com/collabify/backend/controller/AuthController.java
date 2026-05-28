package com.collabify.backend.controller;

import com.collabify.backend.model.User;
import com.collabify.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {

        this.userRepository = userRepository;

    }

    @PostMapping("/register")
    public User register(
            @RequestBody User user
    ) {

        return userRepository.save(user);

    }

    @PostMapping("/login")
    public String login(
            @RequestBody User user
    ) {

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail()
                );

        if (
                existingUser != null &&
                existingUser.getPassword()
                        .equals(user.getPassword())
        ) {

            return "Login Success";

        }

        return "Invalid Credentials";

    }

}