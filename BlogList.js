import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";

const BlogList = () => {
  return (
    <div className="container">
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
