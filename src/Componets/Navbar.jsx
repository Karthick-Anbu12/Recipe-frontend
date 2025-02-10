import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import context from './Context'

function Navbar() {
  const { isLoggedIn } = useContext(context)
  return (

    <div className='mb-4'>
      <div className='fluid'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div class="container-fluid d-flex ">
            <Link class="navbar-brand " to='/'>Recipe Book</Link>
            <div class=" navbar-light " id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 inline">
                <li class="nav-item ">
                  <Link class="nav-link active " to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to='/createrecipe'>Save Recipe</Link>
                </li>
                {!isLoggedIn&&<li class="nav-item">
                  <Link class="nav-link active" to="/Login">Login</Link>
                </li>}
                {isLoggedIn && <li class="nav-item">
                  <Logout />
                </li>
                }
                {
                  !isLoggedIn && <li class="nav-item">
                    <Link class="nav-link active" to='/Registrationfrom'>Register</Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
