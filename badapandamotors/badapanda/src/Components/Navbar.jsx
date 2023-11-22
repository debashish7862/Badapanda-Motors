import React from 'react'
import logo from './1.png';
import './navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="logo" width="300" height="200"/> 
    </a>
    <span className='slogan'>WE TAKE CARE OF YOUR WHEEL....</span>
    
    <div className='d-flex justify-content-end'>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-1 mb-lg-0">
        <li class="nav-item ">
          <Link to ='/' class="nav-link  ms-5" aria-current="page">HOME</Link>
        </li>
        <li class="nav-item ms-3">
          <Link to='/aboutUS' class="nav-link" >ABOUT US</Link>
        </li>
        <li class="nav-item">
          <Link to ='/stories' class="nav-link ms-3" href="#">STORIES</Link>
        </li>
        <li class="nav-item">
          <Link to='/support' class="nav-link ms-3">SUPPORT</Link>
        </li>
       <li class="nav-item ms-3 ">
          <Link to='/login' class="nav-link" >LOGIN</Link>
        </li>
        
      </ul>
     
    </div>
    </div>
  </div>
</nav>
    
  )
}
