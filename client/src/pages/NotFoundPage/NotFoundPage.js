import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="error-page">
            <h1>404</h1>
            <p>PAGE NOT FOUND</p>
            <button className="btn btn-dark" onClick={handleClick}>GO TO HOMEPAGE</button>
        </div>
    )
}

export default NotFoundPage;