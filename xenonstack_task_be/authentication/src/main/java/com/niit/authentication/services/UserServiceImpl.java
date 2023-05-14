package com.niit.authentication.services;

import com.niit.authentication.domain.ContactUs;
import com.niit.authentication.domain.User;
import com.niit.authentication.exceptions.UserAlreadyExistsException;
import com.niit.authentication.exceptions.UserNotFoundException;
import com.niit.authentication.repository.ContactUsRepository;
import com.niit.authentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{


    private UserRepository userRepository;

    private ContactUsRepository contactUsRepository ;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        if (userRepository.findById(user.getEmail()).isPresent()){
            throw  new UserAlreadyExistsException();
        }
        return userRepository.save(user);
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException {
       User user = userRepository.findByEmailAndPassword(email,password);
        System.out.println(email + password);
       if(user == null){
           throw  new UserNotFoundException();
       }
        return user;
    }
    @Override
    public ContactUs addContactUs(ContactUs contactUs){
        return contactUsRepository.save(contactUs);
    }


}
