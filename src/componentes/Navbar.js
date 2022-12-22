import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to='/inicio' >Inicio</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to='/ubicacion'>Ubicacion</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to='/quienessomos'>Quienes somos?</link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/contacto" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto
          </a>
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" to='/informacion'>Informacion</link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar
