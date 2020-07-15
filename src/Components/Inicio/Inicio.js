import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Inicio.css'
function Inicio(props) {
    
    return (
        <div className="col-md-12">
            <div className="card">
               
            <div clasName="card-body">
            <a href={props.url}><img className="card-img-rigth" src={props.imagen} alt="Card image cap" style={{height:'50px'}}/></a>
              <h5>{props.title}</h5>
             
            </div>
            </div>
            
        </div>
    )
}

export default Inicio
