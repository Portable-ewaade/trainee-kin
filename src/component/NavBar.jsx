import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-color pt-3">
      <div className="container-fluid">
      <a class="navbar-brand fs-4 fw-medium" href="https://www.kinplusgroup.com/kinplus">KINPLUS TECHNOLOGIES</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto fw-normal fs-nav px-5">
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/kinplus" className="nav-link text-light">HOME</a>
            </li>
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/about" className="nav-link text-light">ABOUT</a>
            </li>
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/training" className="nav-link text-light">TRAINING</a>
            </li>
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/contact" className="nav-link text-light">CONTACT</a>
            </li>
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/interns" className="nav-link text-light">INTERNSHIP</a>
            </li>
            <li className="nav-item m-2 ">
              <a href="https://www.kinplusgroup.com/it-siwes" className="nav-link text-light">IT / SIWES</a>
            </li>
            
          </ul>
        </div>
      </div>
  </nav>
  )
}

export default NavBar