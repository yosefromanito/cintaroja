import React,{useEffect, useState} from 'react'
import Header from '../../Header/Header'
import axios from 'axios'
function Israelnews() {
    
    const url = 'http://newsapi.org/v2/top-headlines?country=il&apiKey=dfb4be6513f44f54aae2a7b47999a581'
     axios.get(url)
     
  
        axios.get(url)
        .then((response)=>{
    let todo = response.data
   console.log(todo)
        })
        .catch((err)=>{
    alert(err);
        });
      Israelnews()
    return (
        <div>
<Header/>
            <h1>ESTAS SON LAS NOTICIAS DE ISRAEL</h1>
        </div>
    )
}

export default Israelnews
