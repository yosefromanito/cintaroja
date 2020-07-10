import React,{useEffect, useState} from 'react'
import Header from '../../Header/Header'
import axios from 'axios'
import Plantilla from '../plantilla/Plantilla'
import './Israelnews.css'
function Israelnews() {
    const[news, getNews]=useState([])
        const url =`http://newsapi.org/v2/top-headlines?country=il&apiKey=dfb4be6513f44f54aae2a7b47999a581`
        useEffect(()=>{
        axios.get(url)
    .then((res)=>{
        console.log(res.data)
        var todo=res.data
        getNews(todo.articles)
    })
    .catch((err)=>{
        console.log(err)
    });
    },[])
    return (
        <div>
<Header/>
            <h1>NOTICIAS DE ISRAEL</h1>
        </div>
    )
}

export default Israelnews
