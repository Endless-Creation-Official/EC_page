import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Aboutus from "./Routes/Aboutus/Aboutus";
import Members from "./Routes/Members/Members";
import Recruit from "./Routes/Recruit/Recruit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Members" element={<Members />} />
        <Route paht="/Recruit" element={<Recruit />} />
      </Routes>
    </Router> 
  );
}

export default App;
