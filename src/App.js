import React from 'react';
import './App.css';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Members from './pages/members';
import Recruit from './pages/recruit';
import Apply from './pages/apply';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Aboutus' element={<Aboutus />}></Route>
        <Route path='/Members' element={<Members />}></Route>
        <Route path='/Recruit' element={<Recruit />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
      </Routes>
    </Router>
  );
}

export default App;