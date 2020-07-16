import React from 'react'
import './Topheader.css'
import Gn from './images.png'
function Topheader() {
    return (
        <div >
        <div className="estilos">
          <img className='imagen' src={Gn}></img>
            <h1 className="parrafo">Global News</h1>
        </div>
        </div>
    )
}

export default Topheader
