import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import newsLogo from "../../components/assets/newslogo.jpeg";
import Video from "../../components/Video";
import "./article.css"

const Article = () => {
    
    const location = useLocation();
    const { title, author, content, description, image, source, date, url } = location.state;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    // console.log(location.state)
    return (
        <article className="article-main">
            <h1 className="article-title">{title}</h1>
            <div className="author-container">
                <h2 className="article-author">{author? `By: ${author}` : source}</h2>
                <p className="article-date">{date}</p>
            </div>
            
            <img src={image? image : newsLogo} className="article-image" alt="article-image"/>
            <p className="article-description text-muted"> {description? description : ""} </p>
            <p className="article-content">{content? content : <Video url={url} />}</p>
            
            <a href={url} className="article-url" target="_blank" rel="noopener noreferrer">
                { source === "YouTube"? "Watch on YouTube" : "Continue Reading"}
            </a>
        </article>
    )
}

export default Article;