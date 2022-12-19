import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        // console.log(response)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        // console.log(response)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])


    return (
        <div>
            <h1>Post's page {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }

            <h2>Comments</h2>

            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comment =>
                            <div key={comment.email} style={{marginTop: 15}}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>
            }

        </div>
    );
};

export default PostIdPage;