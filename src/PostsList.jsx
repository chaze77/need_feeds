import React, { useState } from "react";
import PostCards from "./PostCards";
import axios from "axios";
import CommentsCards from "./CommentsCards";

const PostsList = ({ post }) => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((res) => {
        setComments(res.data);
        // console.log(res);
      });
  };

  console.log(comments);

  return (
    <div className="list">
   
           <PostCards
        userId={post.userId}
        id={post.id}
        title={post.title}
        getComments={getComments}
        />

        {
            comments.map(comment=> 
                <CommentsCards 
                email={comment.email}
                text={comment.body}
                post={comment.postId}
                comment={comment.id}
                />)
        }
      
    </div>
  );
};

export default PostsList;
