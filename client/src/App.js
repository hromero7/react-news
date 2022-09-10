import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Article from "./pages/Article/Article";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/Search/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/article/:title" element={<Article />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
