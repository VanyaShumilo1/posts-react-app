import React, {useState} from 'react';
import MyInput from "./UI/inputs/MyInput";
import MyButton from "./UI/buttons/MyButton";

const PostForm = ({createPost}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            ...post
        }

        createPost(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder={"Title"}/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder={"Body"}/>
            <MyButton onClick={addNewPost}> Add </MyButton>
        </form>
    );
};

export default PostForm;