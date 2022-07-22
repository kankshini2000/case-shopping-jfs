package com.shop.user.service;

import java.util.List;

import com.shop.user.Model.User;
import com.shop.user.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
       
	@Autowired
	private UserRepo userRepo;

	// create User
	public User createUser(User user) {
		return userRepo.save(new User(user.getUserName(), user.getFullName(), user.getEmail(), user.getGender(),
				user.getDob(), user.getRole(), user.getMobile_no(),new BCryptPasswordEncoder().encode(user.getPassword()), user.getAddress()));
	}

	// findAll users
	public List<User> getAll() {
		return userRepo.findAll();
	}

	// find user by username
	public User getByUserName(String username) {
		return userRepo.findByUserName(username);
	}

	// find user by name
	public List<User> getByName(String name) {
		return userRepo.findByFullName(name);
	}

	// find user by email
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	// update user
	public User updateUser(User user) {
		User user2 = userRepo.findByUserName(user.getUserName());
		user2.setFullName(user.getFullName());
		user2.setEmail(user.getEmail());
		user2.setGender(user.getGender());
		user2.setDob(user.getDob());
		user2.setRole(user.getRole());
		user2.setMobile_no(user.getMobile_no());
		user2.setPassword(user.getPassword());
		user2.setAddress(user.getAddress());

		return userRepo.save(user2);
	}

	// delete user by username
	public String deleteByUserName(String username) {
		User user = userRepo.findByUserName(username);
		userRepo.delete(user);
		return "username with deleted";
	}

	// delete user by email
	public void deleteByEmail(String email) {
		User user = userRepo.findByEmail(email);
		userRepo.delete(user);
	}

    
}
