import React from "react";


const PostCards = ({ userId, id, title, getComments }) => {
    
  

  return (
    <div className="scroller">
      <div className="container">       
     
        <div key={id} className="user-card">
          <div className="card-titles">
            <span className="user-title">User {userId} / </span>
            <span className="post-title">Post {id}</span>
          </div>

          <div className="post-titles">
            <span className="user-title"> Post Title:</span>{" "}
            <span> {title}</span>
          </div>
          <div className="post-titles">
            <span className="user-title"> Post Content:</span>{" "}
            <span> {title}</span>
          </div>

          <button className="btn" onClick={getComments}>Comments</button>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
