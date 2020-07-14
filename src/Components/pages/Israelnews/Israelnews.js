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
<<<<<<< HEAD

     
            <h1 style={{textAlign:'center'}}>TOP NEWS ISRAEL</h1>
           <div className="row">
            {news.map((noticias)=>{
             return <Plantilla 
             titulo={noticias.title}
             contexto={noticias.description}
             referencia={noticias.source.name}
             imagen={noticias.urlToImage}
             url={noticias.url}
             />
             
  
            })
            }
               </div> 
=======
            <h1>NOTICIAS DE ISRAEL</h1>
>>>>>>> 8f06ae52a04164a52e43eac4694634fc3482bb93
        </div>
    )
}

export default Israelnews
