import React, {useEffect} from "react";
import newsLogo from "./assets/newslogo.jpeg";
import { Link } from "react-router-dom";

const Card = (props) => {
console.log(props.data);
    return (
        <article className="story">
            <Link to={`/article/${props.data.title}`} state={{
                title: props.data.title,
                author: props.data.author? props.data.author : "",
                content: props.data.content? props.data.content : "",
                description: props.data.description? props.data.description : "",
                image: props.data.urlToImage? props.data.urlToImage : newsLogo,
                source: props.data.source? props.data.source.name : "",
                url: props.data.url,
                date: props.data.publishedAt
            }}>
                <img src={props.data.urlToImage? props.data.urlToImage : newsLogo} className="article-img" alt="article-image"/>
            </Link>
           <Link to={`/article/${props.data.title}`} state={{
               title: props.data.title,
               author: props.data.author? props.data.author : "",
               content: props.data.content? props.data.content : "",
               description: props.data.description? props.data.description : "",
               image: props.data.urlToImage? props.data.urlToImage : newsLogo,
               source: props.data.source? props.data.source.name : "",
               url: props.data.url,
               date: props.data.publishedAt
           }}>
                <h1 className="title">{props.data.title}</h1>
           </Link>
            
            {/* <p className="author">{props.data.author? "By: " + props.data.author : ""}</p> */}
            <p className="source">{props.data.source? props.data.source.name : ""}</p>
            <p className="time">{props.data.publishedAt}</p>
           
        </article>
        
    )
}

export default Card;