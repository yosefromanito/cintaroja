import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" to ="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" to ="/Israelnews">ISRAEL NEWS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">MEXICO NEWS</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">USA NEWS</a>
          </li>
        </ul>
       
      </div>

        </div>
    )
}

export default Header
