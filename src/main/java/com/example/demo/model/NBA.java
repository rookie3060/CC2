package com.example.demo.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@CrossOrigin
public class NBA {
@Id
private int id;
private String Playername;
private String Inthedebate;
private int Rating;
private String UltimateGOAT;
public NBA(int id, String playername, String inthedebate, int rating, String ultimateGOAT) {
	super();
	this.id = id;
	Playername = playername;
	Inthedebate = inthedebate;
	Rating = rating;
	UltimateGOAT = ultimateGOAT;
}
public NBA() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getPlayername() {
	return Playername;
}
public void setPlayername(String playername) {
	Playername = playername;
}
public String getInthedebate() {
	return Inthedebate;
}
public void setInthedebate(String inthedebate) {
	Inthedebate = inthedebate;
}
public int getRating() {
	return Rating;
}
public void setRating(int rating) {
	Rating = rating;
}
public String getUltimateGOAT() {
	return UltimateGOAT;
}
public void setUltimateGOAT(String ultimateGOAT) {
	UltimateGOAT = ultimateGOAT;
}


}
