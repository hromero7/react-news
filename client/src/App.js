import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
