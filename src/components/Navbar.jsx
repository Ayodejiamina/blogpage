import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href=""><img src='images/blogger4.avif' style={{width:"50px",height:"50px"}}/><span style={{color:"aqua"}}>AminBlog</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    {/* <li className="nav-item">
                    <Link to="/blog_details" className="nav-link" >Blog</Link>
                    </li> */}
                    <li className="nav-item">
                    <Link to="/register" className="nav-link" >Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link" >Login</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search"/>
                    <button className="btn btn-primary" type="button"><i className='fas fa-search'></i></button>
                </form>
            </div>
        </div>
    </nav>
  </div>
  )
}

export default Navbar