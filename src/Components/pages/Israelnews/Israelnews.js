import React,{useEffect, useState} from 'react'
import Header from '../../Header/Header'
import axios from 'axios'
function Israelnews() {
    
    const[news, getNews]=useState([])
        const url =`http://newsapi.org/v2/top-headlines?country=il&apiKey=dfb4be6513f44f54aae2a7b47999a581`
        useEffect(()=>{
        axios.get(url)
    .then((res)=>{
    
        console.log(res.Json)
        var todo=res.Json
        getNews(todo)
    })
    .catch((err)=>{
        console.log(err)
    });
        },[])
    return (
        <div>
<Header/>
            <h1>ESTAS SON LAS NOTICIAS DE ISRAEL</h1>
        </div>
    )
}

export default Israelnews
