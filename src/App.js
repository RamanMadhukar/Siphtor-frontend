import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration/Registration';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/registration" exact element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
