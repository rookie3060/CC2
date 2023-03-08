package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.NBA;
import com.example.demo.repository.ApiRepository;

@Service
public class ApiService {
	@Autowired
	ApiRepository repository;
	public Optional<NBA>getPlayer(int id){
		return repository.findById(id);
	}
	public String updateDetails(NBA mod) {
		repository.save(mod);
		return "Rankings updated";
	}
	public String deleteDetails(int id) {
		if(repository.existsById(id)) {
		repository.deleteById(id);
	    return "Id deleted";
		}
		else
		{
			return "Id not exists";
		}
	}
	public String updateDetails1(int id,NBA mod) {
		if(repository.existsById(id)) {
		repository.save(mod);
		return "updated";
		}
		else {
			return "id not found";
		}
	}

}
