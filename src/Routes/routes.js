import React from 'react';
import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const BlogArea = lazy(() => import('../Components/Blogs/BlogArea'));
const PopularBlogs = lazy(() => import('../Components/Blogs/PopularBlogs'));
const Chat = lazy(() => import('../Components/Chat/DisplayChat'))
const Blogs = lazy(() => import('../Components/Blogs/index'))

const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Blogs />} path="/" />
                    <Route element={<BlogArea />} path="/blog_area" />
                    <Route element={<PopularBlogs />} path='/popular_blogs' />
                    <Route element={<Chat />} path='/chat' />
                </Routes>
            </Router>
        </div>
    );
};

export default MainRoutes;