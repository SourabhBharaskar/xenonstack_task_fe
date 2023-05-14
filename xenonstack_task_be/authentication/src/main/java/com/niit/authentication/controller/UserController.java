package com.niit.authentication.controller;

import com.niit.authentication.domain.ContactUs;
import com.niit.authentication.domain.User;
import com.niit.authentication.exceptions.UserAlreadyExistsException;
import com.niit.authentication.exceptions.UserNotFoundException;
import com.niit.authentication.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
public class UserController {

    private UserService userService;


    private JavaMailSender javaMailSender;

    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws UserNotFoundException {
        Map<String,String> map=null;
        try{
            User user1=userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());

            return new ResponseEntity<>(user1, HttpStatus.OK);
        }catch (UserNotFoundException e){
            throw new UserNotFoundException();
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>("Try after sometimes", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/contact")
    public ResponseEntity<?> addContactUs(@RequestBody ContactUs contactUs){
        return new ResponseEntity<>(userService.addContactUs(contactUs),HttpStatus.CREATED);
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody User user)throws UserAlreadyExistsException {
        User userCreated=userService.addUser(user);

        return new ResponseEntity<>(userCreated, HttpStatus.CREATED);
    }


}
