import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

 
    return (
       
        <nav className="navbar navbar-light p-4" style={{background:"#c70039"}}>
          <Link to={'/'} className="navbar-brand text-white font-weight-bold ml-4" >
            DeepBiology
          </Link>
 
        </nav>
    )
}