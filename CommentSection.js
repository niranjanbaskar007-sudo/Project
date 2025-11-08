import React, { useState, useEffect } from "react";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    setComments(savedComments);
  }, [postId]);

  // Save comments to localStorage
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
