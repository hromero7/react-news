import axios from "axios";


export default {
    getTrending: () => {
        return axios.get(`http://localhost:3001/news/trending`);
    },
    getCategoryNews: (category) => {
        return axios.get(`http://localhost:3001/news/category/${category}`);
    },
    getSearchQuery: (query) => {
        return axios.get(`http://localhost:3001/news/search/${query}`);
    }
}