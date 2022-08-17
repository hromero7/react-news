import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import NewsAPI from "../../utils/NewsAPI";
import CategoryHeader from "../../components/CategoryHeader";
import TopStoryCard from "../../components/TopStoryCard";
import "./category.css";

const Category = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [firstArticle, setFirstArticle] = useState([]);
    useEffect(() => {
        if (category === "politics" || category === "covid") {
            NewsAPI.getSearchQuery(category)
            .then(res => {
                setFirstArticle(res.data.articles[0]);
                res.data.articles.shift();
                setArticles(res.data.articles);
        });
        }
        else 
        NewsAPI.getCategoryNews(category)
        .then(res => {
            setFirstArticle(res.data.articles[0]);
            res.data.articles.shift();
            setArticles(res.data.articles);
        })
    }, [category]);

    return (
        <div className="category-container">
            <CategoryHeader category={category.toUpperCase()} />

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

export default Category;