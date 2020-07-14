import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
//import Footer from '../../Footer/Footer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Inicio from '../../Inicio/Inicio'
function Home() {
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
            <h2>ESTE ES MI HOME</h2>   
            <div className="row">
            {news.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
            header="top news israel"
             />
             
  
            })
            }
               </div> 
        </div>
    )
    }

export default Home
