import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState(null)

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        console.log(response)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById()
    }, [])

    return (
        <div>
            {post.body}
            <h1>Post's page {params.id}</h1>
        </div>
    );
};

export default PostIdPage;