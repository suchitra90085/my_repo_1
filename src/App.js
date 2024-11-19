import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



