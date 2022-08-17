import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import TopStoryCard from "../../components/TopStoryCard";
import NewsAPI from "../../utils/NewsAPI";
import "./home.css";

const Home = () => {

    const [articles, setArticles] = useState([]);
    const [firstArticle, setFirstArticle] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        NewsAPI.getTrending()
        .then(res => {
            setFirstArticle(res.data.articles[0]);
            res.data.articles.shift();
            setArticles(res.data.articles);
        })
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchTerm)
    }

    return (
        <div className="home-container">
            {/* <form className="input-group mb-3" onSubmit={handleSearch}>
                <input type="text" className="form-control" placeholder="SEARCH" aria-label="Search bar" aria-describedby="button-addon2" onChange={handleChange}/>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form> */}
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

