import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newsLogo from "../../components/assets/newslogo.jpeg";
import Video from "../../components/Video";
import Moment from "react-moment";
import "./article.css"

const Article = () => {
    
    const location = useLocation();
    const { title, author, content, description, image, source, date, url } = location.state || "";
    let navigate = useNavigate();

    useEffect(() => {
        if (title === undefined) {
            navigate("/404");
        }
        window.scrollTo(0, 0)
      }, []);
    // console.log(location.state)
    return (
        <article className="article-main">
                <h1 className="article-title">{title}</h1>
                <div className="author-container">
                    <h2 className="article-author">{author? `By: ${author}` : source}</h2>
                    <Moment local format="MM/DD/YY hh:mm A" style={{display: "grid", justifyContent: "left"}}>{date}</Moment>
                    {/* <Moment local format="hh:mm A" style={{display: "grid", justifyContent: "left"}}>{date}</Moment> */}
                    {/* <p className="article-date">{date}</p> */}
                    
                </div>
                
                <img src={image? image : newsLogo} className="article-image" alt="article-image"/>
                <p className="article-description text-muted"> {description? description : ""} </p>
                <p className="article-content">{content? content : source === "YouTube"? <Video url={url} /> : ""}</p>
                
                <a href={url} className="article-url" target="_blank" rel="noopener noreferrer">
                    { source === "YouTube"? "Watch on YouTube" : "Continue Reading"}
                </a>
        </article>
        
    )
}

export default Article;