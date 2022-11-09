import React from 'react';

const CommentsCards = ({email, text, post, comment}) => {
    return (
        <div>
            <div key={post} className="comments-container">
                <div className="comments-card">
                    <div className="comments-title">
                        <span>Post {post} /</span>
                        <span> Comment {comment}</span>
                    </div>

                    <div>
                        <span>Comment by:</span>
                        <span>{email}</span>                        
                    </div>
                    <div>
                        <span>Comment Content:</span>
                        <span>{text}</span>
                    </div>


                </div>
                


            </div>
            
        </div>
    );
};

export default CommentsCards;