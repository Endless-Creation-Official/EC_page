import React from 'react';
import './App.css';
import Home from './Routes/Home/Home';
import Aboutus from './Routes/Aboutus/Aboutus';
import Recruit from './Routes/Recruit/Recruit';

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
