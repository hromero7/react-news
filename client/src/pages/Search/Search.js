import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import NewsAPI from "../../utils/NewsAPI";
import CategoryHeader from "../../components/CategoryHeader";
import TopStoryCard from "../../components/TopStoryCard";

const SearchPage = () => {

    const { query } = useParams();
    const [articles, setArticles] = useState([]);
    const [firstArticle, setFirstArticle] = useState([]);
    useEffect(() => {
        query.toLowerCase().trim();
        NewsAPI.getSearchQuery(query)
            .then(res => {
                setFirstArticle(res.data.articles[0]);
                res.data.articles.shift();
                setArticles(res.data.articles);
            });
    }, [query]);
    
    return (
        <div className="category-container">
            <CategoryHeader category={query.toUpperCase()} />
            {firstArticle.length > 0? 
        <div> 
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
            : "no result found"}
        </div>
    );
}

export default SearchPage;