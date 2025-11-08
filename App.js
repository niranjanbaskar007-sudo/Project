import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
