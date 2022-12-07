import React from 'react';
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogArea from '../Components/Blogs/BlogArea';
const Blogs = lazy(() => import('../Components/Blogs/index'))

const MainRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Blogs />} path="/" />
                    <Route element={<BlogArea/>} path="/blog_area"/>
                </Routes>
            </Router>
        </div>
    );
};

export default MainRoutes;