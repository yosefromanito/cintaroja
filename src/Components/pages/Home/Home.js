import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Inicio from '../../Inicio/Inicio'
import {Link} from "react-router-dom"
import Topheader from '../../Topheader/Topheader'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
function Home() {
   
  //ESTA ES LA PRIMERA API
   
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
var array=news.slice(0,10)


//ESTA ES LA SEGUNDA API

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
   var array2=news2.slice(0,10)

//ESTE ES LA TERCERA API


const[news3, getNews3]=useState([])
const url3 =`http://newsapi.org/v2/top-headlines?country=mx&apiKey=dfb4be6513f44f54aae2a7b47999a581`
   useEffect(()=>{
     axios.get(url3)
.then((res)=>{
    console.log(res.data)
    var todo=res.data
      getNews3(todo.articles)
    })
.catch((err)=>{
    console.log(err)
   });
    },[])
    var array3=news3.slice(0,10)
   


return (
        <div>
           <Topheader/>         
           <Header/>
            
<div >
   <h2 style={{textAlign:'center'}}>Resumen noticias USA</h2>
        <div className="slider1">
        <Carousel>
          {array.map((noticias)=>{          
          return(
        <Carousel.Item>
          <a href={noticias.url}>
          <img
            className="w-100"
            src={noticias.urlToImage}
            alt="First slide"
          />
          </a>
          <Carousel.Caption>
            <h3>{noticias.title}</h3>
          <p>{noticias.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      })}
      </Carousel>
      </div>
      <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Usanews">IR A TODO NOTICIAS USA</Link>
            </div>
</div>

<div >
   <h2 style={{textAlign:'center'}}>Resumen noticias ISRAEL</h2>
        <div className="slider1">
        <Carousel>
          {array2.map((noticias2)=>{          
          return(
        <Carousel.Item>
           <a href={noticias2.url}>
          <img
            className="w-100"
            src={noticias2.urlToImage}
            alt="First slide"
            
           
          />
          </a>
          <Carousel.Caption>
            <h3>{noticias2.title}</h3>
          <p>{noticias2.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      })}
      </Carousel>
      </div>
      <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Israelnews">IR A TODO NOTICIAS ISRAEL</Link>
            </div>
</div>   

 
            <div >
   <h2 style={{textAlign:'center'}}>Resumen noticias MEXICO</h2>
        <div className="slider1">
        <Carousel>
          {array3.map((noticias)=>{          
          return(
        <Carousel.Item>
           <a href={noticias.url}>
             <img
            className="w-100"
            src={noticias.urlToImage}
            alt="First slide"
          /></a>
          <Carousel.Caption>
            <h3>{noticias.title}</h3>
          <p>{noticias.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      })}
      </Carousel>
      </div>
      <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Mexiconews">IR A TODO NOTICIAS MEXICO</Link>
            </div>
</div>      

             
           
             

            
            
             
            <Footer/>
        </div>
    )
    }

export default Home
