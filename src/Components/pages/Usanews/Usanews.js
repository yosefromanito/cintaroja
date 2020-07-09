import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
import Plantilla from '../plantilla/Plantilla'
import axios from 'axios'
function Usanews() {
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
return (
  <div>
<Header/>
      <h1 style={{textAlign:'center'}}>TOP NEWS USA</h1>
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
  </div>
)
}

export default Usanews
