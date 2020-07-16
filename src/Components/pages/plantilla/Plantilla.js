import React from 'react'
import './Plantilla.css'
function Plantilla(props) {
    return (
        <div className="col-md-4">
          <div className="">
             <div className="plantilla card-deck">
        <div className="card">
          <a href={props.url}><img className="card-img-top" src={props.imagen} alt="Card image cap" /></a>
          <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.contexto}</p>
            <p className="card-text"><small className="text-muted">{props.referencia}</small></p>
        <a href={props.url} className='links'>IR A NOTICIA</a>
          </div>
        </div>
      </div>
      </div>
        </div>
    )
}

export default Plantilla
