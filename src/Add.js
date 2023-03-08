import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './basketball.css'
const Add=()=>{
    const[id,setId]=useState(""); 
	const[playername,setPlayername]=useState("");
    const[inthedebate,setInthedebate]=useState(""); 
	const[rating,setRating]=useState("");
    const[ultimategoat,setUltimateGOAT]=useState("");
    const handleSubmit=()=>{
        const data={
            id:id,
            playername:playername,
            inthedebate:inthedebate,
            rating:rating,
            ultimategoat:ultimategoat
        }
        axios.post("http://localhost:8080/post",data);
    }
    return(
        <div className='hello'>
        <form onSubmit={handleSubmit} action='/home'>
            <center>
            <div className='boxlogin'>
                <div className='box2'>
            <div className='textarea'>
            <label>id :</label>
            <input type="number" min="0" id='id' value={id} onChange={(e)=> setId(e.target.value)} />
            </div>
            <div className='textarea'>
            <label>Playername :</label>
            <input type="name" 
           name='playername' 
            value={playername}  onChange={(e)=> setPlayername(e.target.value)}/>
            </div>
            <div className='textarea'>
            <label>Inthedebate :</label>
            <input type="text" 
            name='inthedebate' value={inthedebate} onChange={(e)=> setInthedebate(e.target.value)} />
            </div>
            <div className='textarea'>
            <label>Rating :</label>
            <input type="number" 
            
            min='0'
            max='100'name='rating' 
            value={rating}  onChange={(e)=> setRating(e.target.value)}/>
            </div>
           
            </div>
            <div className='textarea'>
               <Button type='submit' variant="contained" size="large">ADD</Button>
               
            </div>
            </div>
            </center>
        </form> </div>
    )
}
export default Add;