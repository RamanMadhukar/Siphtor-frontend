import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import LandingPage from './Pages/LandingPage/LandingPage';
import Signup from './Pages/Signup/Signup';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Home from './Pages/Home/Home';
import Detailed from './Pages/Detailed/Detailed';
import SocialPage from './Pages/SocialPage/SocialPage';
import BookmarkPage from './Pages/BookmarkPage/BookmarkPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import FollowersPage from './Pages/FollowersPage/FollowersPage';
import FollowingPage from './Pages/FollowingPage/FollowingPage';
import MyPost from './Pages/MyPost/MyPost';
import Setting from './Pages/Setting/Setting';
import Analytics from './Pages/Analytics/Analytics';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signin" exact element={<Signup />} />
          <Route path="/forget-password" exact element={<ForgotPassword />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/detailed" exact element={<Detailed />} />
          <Route path="/socialPage" exact element={<SocialPage />} />
          <Route path="/bookmarkPage" exact element={<BookmarkPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route path="/followersPage" exact element={<FollowersPage />} />
          <Route path="/followingPage" exact element={<FollowingPage />} />
          <Route path="/myPost" exact element={<MyPost />} />
          <Route path="/setting" exact element={<Setting />} />
          <Route path="/analytics" exact element={<Analytics />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
