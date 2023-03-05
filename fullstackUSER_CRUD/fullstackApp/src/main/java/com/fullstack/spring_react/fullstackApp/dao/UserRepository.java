package com.fullstack.spring_react.fullstackApp.dao;

import com.fullstack.spring_react.fullstackApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
