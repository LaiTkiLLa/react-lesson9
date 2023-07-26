import React from 'react';
import './App.css';
import {Main} from "./pages/main.page";
import {Route, Routes} from "react-router";
import {NewPost} from "./pages/new-post.page";
import {Post} from "./components/post.component";

function App() {



    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Main />}>Main</Route>
                    <Route path="/posts/new" element={<NewPost />}>New post</Route>
                    <Route path="/posts/:postId" element={<Post />}>Post</Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
