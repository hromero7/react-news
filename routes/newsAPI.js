const router = require("express").Router();
const axios = require("axios");

//trending/home page route
router.get("/trending", (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`)
    .then(response => {
        res.json(response.data);
    })
    
});

//politics route
router.get("/politics", (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=${process.env.NEWS_API}`)
    .then(response => {
        res.json(response.data)
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
        console.log(err.response.data.error)
    })
})


module.exports = router;