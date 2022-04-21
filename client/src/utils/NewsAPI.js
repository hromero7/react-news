import axios from "axios";


export default {
    getTrending: () => {
        return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`);
    },
    getCategoryNews: (category) => {
        return axios.get(`http://localhost:3001/news/category/${category}`);
    }
}