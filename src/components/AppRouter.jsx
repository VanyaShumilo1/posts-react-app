import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div></div>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" exact={true}  element={<Posts/>}/>
            <Route path="posts/:id" exact={true} W element={<PostIdPage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" exact={true} element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;