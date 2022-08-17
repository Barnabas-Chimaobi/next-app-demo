import React from 'react'
import Head from 'next/head'
const Navbar = () => {
  return (
    <Head>
    <header className="row">
      <nav className="navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand" href="#">
          <img
            src={"../../ilaro-logo.jpeg"}
            style={{ height: 50, width: 50, padding: 5, marginLeft: 30 }}
            className="rounded"
          />
          
        </a>
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#">
                  Applicant
                </a>
              </li>
              <div className="dropdown">
                <li className="nav-item ">
                  <a className="nav-link dropdown-toggle text-white" href="#">
                    Returning Student
                  </a>
                  <div className="dropdown-menu">
                    <a href="" className="dropdown-item">
                      ..
                    </a>
                    <a href="" className="dropdown-item">
                      ..
                    </a>
                  </div>
                </li>
              </div>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle text-white" href="#">
                  Graduate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Complaints
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  User Guide
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header></Head>
  )
}

export {Navbar}
