import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Inicio from '../../Inicio/Inicio'
import {Link} from "react-router-dom"
function Home() {
    const[news, getNews]=useState([])
    const url =`http://newsapi.org/v2/top-headlines?country=us&apiKey=dfb4be6513f44f54aae2a7b47999a581`
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
var array=news.slice(0,6)
const[news2, getNews2]=useState([])
const url2 =`http://newsapi.org/v2/top-headlines?country=il&apiKey=dfb4be6513f44f54aae2a7b47999a581`
useEffect(()=>{
axios.get(url2)
.then((res)=>{
console.log(res.data)
var todo=res.data
getNews2(todo.articles)
})
.catch((err)=>{
console.log(err)
});
},[])
var array2=news2.slice(0,6)
    return (
        <div>
           <Header/>
            
            <div className="container">
                <h2 className="card-header">TOP NEWS USA</h2>
            {array.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
             imagen={noticias.urlToImage}/>
            })}
            <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Usanews">IR A TODO NOTICIAS</Link>
            </div>
             </div>

             <div className="container">
                <h2 className="card-header">TOP NEWS israel</h2>
            {array2.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
             imagen={noticias.urlToImage}/>
            })}
            <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Israelnews">IR A TODO NOTICIAS</Link>
            </div>
             </div>
            <Footer/>
        </div>
    )
    }

export default Home
