package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.NBA;

public interface ApiRepository extends JpaRepository<NBA,Integer> {

}
