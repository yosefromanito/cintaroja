import React from 'react'
import {Link} from "react-router-dom"
import './Header.css'

function Header() {
    return (
        <div className='menu'>
           <div className="header " >           
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link className="nav-link"  data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true" to ="/" >HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="tab"  role="tab" aria-controls="profile" aria-selected="false" to ="/Israelnews">ISRAEL NEWS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  data-toggle="tab"  role="tab" aria-controls="contact" aria-selected="false" to ="/Mexiconews">MEXICO NEWS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  data-toggle="tab"  role="tab" aria-controls="contact" aria-selected="false" to ="/Usanews">USA NEWS</Link>
          </li>
        </ul>     
      </div>
        </div>
    )
}

export default Header
