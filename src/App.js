import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Recruit from './components/Recruit/Recruit';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<Aboutus />}></Route>
        <Route path='/Recruit' element={<Recruit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
