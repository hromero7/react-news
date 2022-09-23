import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto">
                <Link to="/">
                    <a className="nav-link active" aria-current="page" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">TRENDING</span>
                    </a>
                </Link>
                <Link to="/covid">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">COVID-19</span>
                    </a>
                </Link>
                <Link to="/politics">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">POLITICS</span>
                    </a>
                </Link>
                <Link to="/sports">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">SPORTS</span>
                    </a>
                </Link>
                <Link to="entertainment">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">ENTERTAINMENT</span>
                    </a>
                </Link>
                <Link to="/business">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">BUSINESS</span>
                    </a>
                </Link>
                <Link to="/technology">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">TECH</span>
                    </a>
                </Link>
                <Link to="/health">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">HEALTH</span>
                    </a>
                </Link>
                <Link to="/science">
                    <a className="nav-link" href="#">
                        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">SCIENCE</span>
                    </a>
                </Link>
                    <a className="nav-search" data-bs-toggle="collapse" data-bs-target="#searchBarToggle" 
                    aria-controls="searchBarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                
              </div>
            </div>
          </div>
        </nav>
        
        <div className="search-container collapse" id="searchBarToggle">
                <form className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="SEARCH" aria-label="Search bar" aria-describedby="button-addon2" onChange={handleChange}/>
                    <Link to={searchTerm? `/search/${searchTerm.trim()}` : `#`}>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    </Link>                
                </form>
            
        </div>
    </div>
    )
}

export default NavBar;