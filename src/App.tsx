//import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { RegistrationPage } from './components/pages/Registration';
import { PostsPage } from './components/pages/Posts/Posts';
import { PostPage } from './components/pages/Post/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="posts" element={<PostsPage />} />
          <Route path="/posts/:postID" element={<PostPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
