const router = require("express").Router();
const axios = require("axios");

//trending/home page route
router.get("/trending", (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`)
    .then(response => {
        res.json(response.data);
    })
    
});

//search route
router.get("/search/:query", (req, res) => {
    const { query } = req.params;
    
    axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${process.env.NEWS_API}`)
    .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        console.log(err.response);
    }) 
});

//category route 
router.get("/category/:category", (req, res) => {
    const { category } = req.params
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API}`)
    .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        console.log(err.response)
    })
})


module.exports = router;