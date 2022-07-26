//import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

// import { Button } from './components/atoms/Button';
// import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
// import { ColorService } from './services/ColorService';
//import { Input } from './components/atoms/Input';
import { RegistrationPage } from './components/pages/Registration';
import { PostsPage } from './components/pages/Posts/Posts';
//import { Header } from './components/molecules/Header/Header';
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
