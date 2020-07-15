import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Inicio from '../../Inicio/Inicio'
import {Link} from "react-router-dom"
import Topheader from '../../Topheader/Topheader'
import Carousel from 'react-bootstrap/Carousel'
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
var array=news.slice(0,6)


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
   var array2=news2.slice(0,6)

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
    var array3=news3.slice(0,6)
   


return (
        <div>
           <Topheader/>         
           <Header/>
            
<div>
    {array.map((noticias)=>{
        return<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={noticias.urlToImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={noticias.urlToImage}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={noticias.urlToImage}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    })}
</div>

            
            <div className="container">
                <h2 className="card-header">TOP NEWS USA</h2>
            {array.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
             imagen={noticias.urlToImage}/>
            })}
            <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Usanews">IR A TODO NOTICIAS USA</Link>
            </div>
             </div>

             <div className="container">
                <h2 className="card-header">TOP NEWS ISRAEL</h2>
            {array2.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
             imagen={noticias.urlToImage}/>
            })}
            <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Israelnews">IR A TODO NOTICIAS ISRAEL</Link>
            </div>
             </div>

             <div className="container">
                <h2 className="card-header">TOP NEWS MEXICO</h2>
            {array3.map((noticias)=>{ 
             return <Inicio 
             title={noticias.title}
             source={noticias.source.name}
             imagen={noticias.urlToImage}/>
            })}
            <div className="btn btn-link btn-lg btn-block" >
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" to ="/Mexiconews">IR A TODO NOTICIAS MEXICO</Link>
            </div>
             </div>
            <Footer/>
        </div>
    )
    }

export default Home
