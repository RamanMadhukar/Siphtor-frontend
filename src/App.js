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
          {/* <Route path="/socialPage" exact element={<Sidebar />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
