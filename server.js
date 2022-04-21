const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API Routes 
const newsRouter = require("./routes/newsAPI");

app.use("/news", newsRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });