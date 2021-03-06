
import Header from '../../Header/Header'
import React,{useEffect,useState} from 'react'
import Footer from '../../Footer/Footer'
import axios from "axios"
import Plantilla from '../plantilla/Plantilla.js'
import Topheader from '../../Topheader/Topheader'
function Mexiconews() {
    
 const[news, getNews]=useState([])
  const url =`http://newsapi.org/v2/top-headlines?country=mx&apiKey=dfb4be6513f44f54aae2a7b47999a581`
  
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
<Topheader/> 
<Header/>
      <h1 style={{textAlign:'center'}}> NOTICIAS DE MÉXICO</h1>
      <div className="row">
      {news.map((noticias)=>{
       return<Plantilla 
       titulo={noticias.title}
       contexto={noticias.description}
       referencia={noticias.source.name}
       imagen={noticias.urlToImage}
       url={noticias.url}
       />
      }
       )}
       <Footer/>
  </div>
  </div>
)
}

export default Mexiconews
