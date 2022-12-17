import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => props.removePost(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;