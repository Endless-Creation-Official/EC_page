import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Members from './components/Members/Members';
import Recruit from './components/Recruit/Recruit';
import Apply from './components/Apply/Apply';
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