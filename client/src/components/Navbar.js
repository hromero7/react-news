import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto">
                <Link to="/">
                    <a className="nav-link active" aria-current="page" href="#">TRENDING</a>
                </Link>
                <Link to="/us">
                    <a className="nav-link" href="#">US NEWS</a>
                </Link>
                <Link to="/politics">
                    <a className="nav-link" href="#">POLITICS</a>
                </Link>
                <Link to="/sports">
                    <a className="nav-link" href="#">SPORTS</a>
                </Link>
                <Link to="entertainment">
                    <a className="nav-link" href="#">ENTERTAINMENT</a>
                </Link>
                <Link to="/business">
                    <a className="nav-link" href="#">BUSINESS</a>
                </Link>
                <Link to="/technology">
                    <a className="nav-link" href="#">TECH</a>
                </Link>
                <Link to="/health">
                    <a className="nav-link" href="#">HEALTH</a>
                </Link>
                <Link to="/science">
                    <a className="nav-link" href="#">SCIENCE</a>
                </Link>
                
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;