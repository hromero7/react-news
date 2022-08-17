import React from "react";
import "./style.css";

const CategoryHeader = (props) => {

    return (
        <div className="category-header">
            <div className="background"></div>
            <h1 className="category">{props.category !== "COVID"? props.category : "COVID-19"}</h1>
        </div>
    )
}

export default CategoryHeader;