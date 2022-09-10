import React from "react";
import "./style.css";

const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <div className="footer">
            <p>ALL CONTENTS &copy; COPYRIGHT {date} REACT NEWS. ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer;