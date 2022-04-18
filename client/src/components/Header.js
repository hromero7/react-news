import React from "react";
import logo from "../logo.svg";
const Header = () => {

    return (
        <div className="card mb-3">
            <img src={logo} className="card-img-top" alt="..." style={{width:"200px", margin: "auto"}}/>
        <div className="card-body">
            <h1 className="card-title">REACT NEWS</h1>
            <p className="card-text">REPORTING TO YOU</p>
        </div>
        </div>
    )
}

export default Header;