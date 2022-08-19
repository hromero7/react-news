import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [hideSearchBar, setHideSearchBar] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleSearch = () => {
        setHideSearchBar(!hideSearchBar);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = (e) => {
        // e.preventDefault();
        console.log(searchTerm)
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
                    <a className="nav-link active" aria-current="page" href="#">TRENDING</a>
                </Link>
                <Link to="/covid">
                    <a className="nav-link" href="#">COVID-19</a>
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
                    <a className="nav-search" onClick={toggleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                
              </div>
            </div>
          </div>
        </nav>
        
        <div className={hideSearchBar? "hidden" : "search-container"}>
                <form className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="SEARCH" aria-label="Search bar" aria-describedby="button-addon2" onChange={handleChange}/>
                    <Link to={`/search/${searchTerm.trim()}`}>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    </Link>                
                </form>
            
        </div>
    </div>
    )
}

export default NavBar;