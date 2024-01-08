import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Aboutus from "./Routes/Aboutus";
import Members from "./Routes/Members";
import Recruit from "./Routes/Recruit";

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
