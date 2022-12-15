import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, removePost}) => {

    if (posts.length === 0) {
        return (<h1 style={{textAlign: 'center'}}>Posts not found :(</h1>)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="posts">
                <TransitionGroup className={"posts__wrapper"}>
                    {
                        posts.map((post, index) => (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem removePost={removePost} post={post} number={index + 1}/>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>

            </div>
        </div>
    );
};

export default PostList;