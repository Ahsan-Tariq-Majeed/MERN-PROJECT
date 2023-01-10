import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/edulink_logo (2).png";



const Navbar = () => {
  return (
    //my navbar 
    <>
    <nav className="navbar navbar-dark bg-primary">
  
  <NavLink className="navbar-brand" to="www.google.com">
    {/* <img src={logo} alt = "logo"/>  */}
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav" class="navbar-nav mr-auto" style={{float:'right'}}>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>

      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/institute">Institute</NavLink>
      </li> */}

      <li className="nav-item"> 
        <NavLink className="nav-link" class="btn btn-danger navbar-btn" to="/adminlogin">Admin</NavLink>
      </li>

    
    
    </ul>
  
  </div>
</nav>
    </>
  )
}

export default Navbar