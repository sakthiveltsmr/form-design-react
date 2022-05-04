import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Internlogin from "./component/internlogin/Internlogin";
function App() {
  return (
    <div className="container ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Internlogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
