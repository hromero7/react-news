import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import NewsAPI from "../../utils/NewsAPI";

const Category = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        NewsAPI.getCategoryNews(category)
        .then(res => {
            setArticles(res.data.articles);
        })
    }, [category]);

    const getNews = () => {
        NewsAPI.getCategoryNews(category)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <h1 className="title">{category.toUpperCase()}</h1>
            {
            articles.map((article, i) => {
               return (
                <Card key={i} data={article}/>
               ) 
            })
            }
            <button onClick={getNews}>click me</button>
        </div>
    )
}

export default Category;