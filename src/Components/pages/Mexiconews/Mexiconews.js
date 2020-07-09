/*import React from 'react'
import Header from '../../Header/Header'
    import React,{useEffect,useState} from 'react'
import Header from '../../Header/Header'
import axios from "axios"
//import Plantilla from `../plantilla/Plantilla.js`
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
<Header/>
      <h1> NOTICIAS DE MÉXICO</h1>
      {news.map((todo)=>{
       return(<h3>{todo.title}</h3>)
      })}
  </div>
)
}

export default Mexiconews
