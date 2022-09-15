import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import TopStoryCard from "../../components/TopStoryCard";
import NewsAPI from "../../utils/NewsAPI";
import "./home.css";

const Home = () => {

    const [articles, setArticles] = useState([]);
    const [firstArticle, setFirstArticle] = useState([]);


    useEffect(() => {
        NewsAPI.getTrending()
        .then(res => {
            setFirstArticle(res.data.articles[0]);
            res.data.articles.shift();
            setArticles(res.data.articles);
        })
    }, []);


    return (
        <div className="home-container">
            
            <h1 className="home-header">TRENDING</h1>
            <TopStoryCard data={firstArticle} />
            <div className="article">
            {
            articles.map((article, i) => {
               return (
                <Card key={i} data={article}/>
               ) 
            })
            }
            </div>
        </div>
        
    )
}

export default Home;

