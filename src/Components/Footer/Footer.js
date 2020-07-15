import React from 'react'
import './Footer.css'

 function Footer() {
 return (
 
 
 <div className="container" >
     <div className="row">
   <div className="col-md-12">
   <nav className="navbar navbar-expand">
 <ul style={{listStyle:"none"}} className="linea">
 <li className="lista2 nav-item">
 <button className="btn btn-link" to="#">SOBRE NOSOTROS</button>
 </li>
 <li className="lista2 nav-item-active">
 <button className="btn btn-link"to="#">ÉTICA</button>
 </li>
 <li className="lista2 nav-item">
 <button className="btn btn-link"to="#">CONTACTO</button>
 </li>
 <li className="lista2 nav-item">
 <button type className="btn btn-link" to="#">PUBLICIDAD</button>
 </li>
 <li className="lista2 nav-item">
 <button  className="btn btn-link" to="#">POLÍTICA DE PRIVACIDAD</button>
  </li>           
  </ul>
  </nav>
  
  <p>Copyrigth© 2020</p>
  </div>
  </div>
  </div>
      );
    }
  
export default Footer 