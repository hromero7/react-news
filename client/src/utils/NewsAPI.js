import axios from "axios";


export default {
    getTrending: () => {
        return axios.get(`/news/trending`);
    },
    getCategoryNews: (category) => {
        return axios.get(`/news/category/${category}`);
    },
    getSearchQuery: (query) => {
        return axios.get(`/news/search/${query}`);
    }
}