import React from 'react';
import './App.css';
<<<<<<< HEAD
import Home from './components/Home/Home';
import Recruit from './components/Recruit/Recruit';

=======
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Members from './pages/members';
import Recruit from './pages/recruit';
import Apply from './pages/apply';
>>>>>>> 42110e6d88da118e98a843862ae54dec32382ae5
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
<<<<<<< HEAD
        <Route path='/About' element={<Aboutus />}></Route>
        <Route path='/Recruit' element={<Recruit />}></Route>
=======
        <Route path='/Aboutus' element={<Aboutus />}></Route>
        <Route path='/Members' element={<Members />}></Route>
        <Route path='/Recruit' element={<Recruit />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
>>>>>>> 42110e6d88da118e98a843862ae54dec32382ae5
      </Routes>
    </Router>
  );
}

export default App;