import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import CommentSection from "./CommentSection";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found!</h2>;

  return (
    <div className="container">
      <Link to="/">← Back to Blog List</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default BlogPost;
