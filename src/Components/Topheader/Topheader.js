import React from 'react'
import './Topheader.css'
import Gn from './Gn.png'
function Topheader() {
    return (
        <div className="container">
        <div className="estilos">
          <img src={Gn}></img>
            <h1 className="parrafo">Global News</h1>
        </div>
        </div>
    )
}

export default Topheader
