import React from "react";
import Card from "../../components/Card";
import NewsAPI from "../../utils/NewsAPI";
import "./home.css";

const Home = () => {

    const getNews = async () => {
        const response = await NewsAPI.getTrending();
        console.log(response);
    }

    return (
        <div className="home-container">
            <p>THIS IS THE HOMEPAGE</p>
            <Card />

            <button onClick={getNews}>click me</button>
        </div>
        
    )
}

export default Home;

