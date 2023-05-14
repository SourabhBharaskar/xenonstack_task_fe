package com.niit.userService.UserService.services;

import com.niit.userService.UserService.exception.UserAlreadyExistsException;
import com.niit.userService.UserService.exception.UserNotFoundException;
import com.niit.userService.UserService.models.User;
import com.niit.userService.UserService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;





    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        User savedUser = userRepository.save(user);

        return savedUser;
    }

    @Override
    public User updateUser( User user) throws UserNotFoundException {

        return userRepository.save(user);
    }

    @Override
    public boolean deleteUser(String email) throws UserNotFoundException {
        if (userRepository.findById(email).isEmpty()){
            throw new UserNotFoundException();
        }
        userRepository.deleteById(email);
        return  true;
    }

    @Override
    public User getUserById(String email) {
        return userRepository.findById(email).get();
    }


}
