import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mb-4'>
      <div className='fluid'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div class="container-fluid d-flex ">
            <Link class="navbar-brand " to='/'>Recipe Book</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <Link class="nav-link active " to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/createrecipe'>Create</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/Registrationfrom'>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
