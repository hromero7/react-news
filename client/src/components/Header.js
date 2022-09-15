import React from "react";
import logo from "../logo.svg";
import reactLogo from "./assets/ReactNewsLogo.png";
import RLogo from "./assets/RLogo.jpeg";
import "./style.css";

const Header = () => {

    return (
        
        <div className="header-container">
            <img src={RLogo} className="header-img" alt="logo"/>
            <div className="header-body">
                <h1 className="header-title">REACT NEWS</h1>
                <p className="header-subtitle">REPORTING TO YOU</p>
            </div>
        </div>
    )
}

export default Header;