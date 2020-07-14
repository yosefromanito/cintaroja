import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Inicio.css'
function Inicio(props) {
    
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
    <p>{props.header}</p></div>
            <div clasName="card-body">
              <h5>{props.title}</h5>
              <h5>{props.title}</h5>
              <h5>{props.title}</h5>
              <h5>{props.title}</h5>
              <h5>{props.title}</h5>
            </div>
            </div>
            
        </div>
    )
}

export default Inicio
