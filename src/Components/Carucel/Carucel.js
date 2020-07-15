import React, {useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
function Caroucel() {
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

    return (
        <div>
            {array.map((noticias)=>{
                return
            
            <div>
            
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
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
      src="holder.js/800x400?text=Second slide&bg=282c34"
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
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    )
}

export default Caroucel

