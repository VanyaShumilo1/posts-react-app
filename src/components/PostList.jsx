import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, removePost}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="posts">
                {
                    posts.map((post, index) => (
                        <PostItem removePost={removePost} key={post.id} post={post} number={index + 1}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PostList;