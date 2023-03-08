package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NBA;
import com.example.demo.repository.ApiRepository;
import com.example.demo.service.ApiService;

@RestController
@CrossOrigin
public class ApiController {
	@Autowired
	ApiRepository serviceRepository;
	@Autowired
	ApiService service;
	@GetMapping("/getvalues")
	List<NBA>getList(){
		return serviceRepository.findAll();
		
	}
	@PostMapping("/post")
	public NBA create(@RequestBody NBA mod) {
		return serviceRepository.save(mod);
	}
	@GetMapping("/getvalues/{id}")
	public Optional<NBA>getbyid(@PathVariable int id){
	return service.getPlayer(id);
	}
	@DeleteMapping("/del/{id}")
	public String delete( @PathVariable int id) {
		return service.deleteDetails(id);
	}
	@PutMapping("/put/{id}")
	public String update(@PathVariable int id,@RequestBody NBA mod) {
		return service.updateDetails1(id,mod);
	}
	

}
